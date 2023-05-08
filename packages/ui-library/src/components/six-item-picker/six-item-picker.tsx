import { Component, Element, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { ItemPickerPaddingDirection, ItemPickerType } from './types';
import { debounce, DEFAULT_DEBOUNCE_FAST, DEFAULT_DEBOUNCE_INSANELY_FAST } from '../../utils/execution-control';
import { EventListeners } from '../../utils/event-listeners';

type StringItemIndex = { [key: string]: number };

interface Alphabet {
  alphabet: string[];
  letterIndexes: StringItemIndex;
}

const A_CHARCODE = 65;
const NUMBER_OF_LETTERS = 26;

const CAPITAL_ALPHABET: Alphabet = (() => {
  const alphabetCodes = Array.from(Array(NUMBER_OF_LETTERS)).map((_, i) => i + A_CHARCODE);
  const letterIndexes = {};
  const alphabet = alphabetCodes.map((charCode, index) => {
    const character = String.fromCharCode(charCode);
    letterIndexes[character] = index;
    return character;
  });
  return { alphabet, letterIndexes };
})();

const LOWERCASE_ALPHABET: Alphabet = (() => {
  const alphabet = [];
  const letterIndexes = {};

  for (let i = 0; i < CAPITAL_ALPHABET.alphabet.length; i++) {
    const lowercaseCharacter = CAPITAL_ALPHABET.alphabet[i].toLowerCase();
    letterIndexes[lowercaseCharacter] = alphabet.length;
    alphabet.push(lowercaseCharacter);
  }

  return { alphabet, letterIndexes };
})();

const ALPHABET: Alphabet = (() => {
  const alphabet = [];
  const letterIndexes = {};

  for (let i = 0; i < CAPITAL_ALPHABET.alphabet.length; i++) {
    const capitalCharacter = CAPITAL_ALPHABET.alphabet[i];
    letterIndexes[capitalCharacter] = alphabet.length;
    alphabet.push(capitalCharacter);

    const lowerCharacter = LOWERCASE_ALPHABET.alphabet[i];
    letterIndexes[lowerCharacter] = alphabet.length;
    alphabet.push(lowerCharacter);
  }

  return { alphabet, letterIndexes };
})();

const createItemIndexes = (arr: string[]): StringItemIndex => {
  const itemIndexes = {};

  for (let i = 0; i < arr?.length; i++) {
    itemIndexes[arr[i]] = i;
  }

  return itemIndexes;
};

const TAG = `[SIX-ITEM-PICKER]`;

const subtract = (a: number, b: number) => a - b;
const add = (a: number, b: number) => a + b;

export type SixItemPickerChangePayload = number | string;

const DEBOUNCE_ITEM_PICKER_LISTENER = 'debounced-item-picker';

/**
 * @since 2.0.0
 * @status experimental
 * @part container - The whole component container
 * @part up - The up button
 * @part content - The content area
 * @part down - The down button
 *
 */
@Component({
  tag: 'six-item-picker',
  styleUrl: 'six-item-picker.scss',
  shadow: true,
})
export class SixItemPicker {
  private readonly eventListeners = new EventListeners();

  @Element() host: HTMLSixItemPickerElement;

  /** The item picker's value attribute. */
  @Prop({ mutable: true, reflect: true }) value: number | string = '';

  /** The type of items you want to rotate through. */
  @Prop() type: ItemPickerType = ItemPickerType.NUMBER;

  /** The minimum value allowed to pick. */
  @Prop({ reflect: true, mutable: true }) min: number | string;

  /** The maximum value allowed to pick. */
  @Prop({ reflect: true, mutable: true }) max: number | string;

  /** Define whether the picker should to a roundtrip i.e. start at max when reaching min and vice versa. */
  @Prop({ reflect: true }) roundtrip = true;

  /** Defines how many steps should be taken when navigating */
  @Prop({ reflect: true }) step: number = 1;

  /** Defines a custom list of items you can iterate through */
  @Prop() items: string[];

  /** Defines whether the items should be padded */
  @Prop() padded = false;

  /** Defines the length of the padded area */
  @Prop() paddingLength = 2;

  /** Defines the character used for padding */
  @Prop() paddingChar = '0';

  /** Defines whether the padding should be before or after the value. You can either use 'before' or 'after'. By default
   * before is selected */
  @Prop() paddingDirection: ItemPickerPaddingDirection = ItemPickerPaddingDirection.BEFORE;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger faster switching between items.
   */
  @Prop() timeout = DEFAULT_DEBOUNCE_FAST;

  /**
   * Set the amount of time, in milliseconds, to wait between switching to next item when mouse button is held pressed.
   */
  @Prop() interval = DEFAULT_DEBOUNCE_INSANELY_FAST;

  /**
   * Emitted when the item picker's value changes
   */
  @Event({ eventName: 'six-item-picker-change' }) sixChange: EventEmitter<SixItemPickerChangePayload>;

  /**
   * Emitted when the item picker's value changes, but debounced
   */
  @Event({ eventName: 'six-item-picker-change-debounced' })
  sixChangeDebounced: EventEmitter<SixItemPickerChangePayload>;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `six-item-picker-change-debounced` event.
   * If you want your change debounce event to not trigger when keeping the nav button pressed before, make sure debounce
   * is a bit bigger than timeout, otherwise keeping the button pressed will trigger the event twice: once you click
   * (and keep pressed) and once you release
   */
  @Prop() debounce = DEFAULT_DEBOUNCE_FAST;

  @Watch('value')
  handleValueChange() {
    this.setup();
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.eventListeners.removeByIdentifier(DEBOUNCE_ITEM_PICKER_LISTENER);
    this.eventListeners.add(
      this.host,
      'six-item-picker-change',
      debounce(this.handleSixItemPickerChangeDebounced, this.debounce),
      DEBOUNCE_ITEM_PICKER_LISTENER,
    );
  }

  @Watch('items')
  handleSetChange() {
    this.setup();
    this.min = this._items[0];
    this.max = this.getLastStringItem();
  }

  @State() _items: string[] = [];
  @State() _itemIndexes: StringItemIndex;

  // used for fast increasing when keeping the mouse button held down
  _timeoutNext: ReturnType<typeof setTimeout>;
  _intervalNext: ReturnType<typeof setInterval>;

  _timeoutPrev: ReturnType<typeof setTimeout>;
  _intervalPrev: ReturnType<typeof setInterval>;

  componentWillLoad() {
    this.setup();
  }

  componentDidLoad() {
    this.eventListeners.add(
      this.host,
      'six-item-picker-change',
      debounce(this.handleSixItemPickerChangeDebounced, this.debounce),
      DEBOUNCE_ITEM_PICKER_LISTENER,
    );
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  handleSixItemPickerChangeDebounced = () => {
    this.sixChangeDebounced.emit(this.value);
  };

  private setup() {
    if (this.isNumber()) {
      this.setupNumberItems();
    } else {
      this.setUpStringItems();
    }
  }

  private setupNumberItems() {
    if (this.isInvalidNumber()) {
      console.warn(`${TAG} Expected number but value is not a number: "${this.value}"`);
      console.info(`${TAG} Will set value to either minimum or if not provided to zero.`);
      this.value = this.min ?? 0;
    }
  }

  private setUpStringItems() {
    this._items = this.getItems();

    if (!this._items) {
      console.warn(`${TAG}: abort setup because no items were found.`);
      return;
    }

    this._itemIndexes = this.getItemIndexes();
    const itemsMissValue = this._items.find((i) => String(i) === String(this.value)) === undefined;
    if (itemsMissValue) {
      console.warn(`${TAG} Expected item from item set but value was not found in set: "${this.value}"`);
      console.info(`${TAG} Will set value to either minimum or if not provided to "${this._items[0]}".`);
      this.value = this._items[0];
    }

    if (this.min === undefined) {
      if (!this.roundtrip) {
        console.warn(`${TAG} Expected a min value`);
        console.info(`${TAG} Will set min value to ${this._items[0]}`);
      }
      this.min = this._items[0];
    }

    if (this.max === undefined) {
      const maxItem = this.getLastStringItem();
      if (!this.roundtrip) {
        console.warn(`${TAG} Expected a min value if roundtrip is enabled`);
        console.info(`${TAG} Will set min value to ${maxItem}`);
      }
      this.max = maxItem;
    }
  }

  private getLastStringItem() {
    return this._items[this._items.length - 1];
  }

  private getItems() {
    return {
      [ItemPickerType.LETTER]: ALPHABET.alphabet,
      [ItemPickerType.CAPITAL_LETTER]: CAPITAL_ALPHABET.alphabet,
      [ItemPickerType.LOWER_LETTER]: LOWERCASE_ALPHABET.alphabet,
      [ItemPickerType.CUSTOM]: this.items,
    }[this.type];
  }

  private getItemIndexes() {
    if (this.type === ItemPickerType.CUSTOM) {
      return createItemIndexes(this.items);
    }

    return {
      [ItemPickerType.LETTER]: ALPHABET.letterIndexes,
      [ItemPickerType.CAPITAL_LETTER]: CAPITAL_ALPHABET.letterIndexes,
      [ItemPickerType.LOWER_LETTER]: LOWERCASE_ALPHABET.letterIndexes,
    }[this.type];
  }

  private previousItem() {
    if (this.isNumber()) {
      this.previousNumber();
    } else {
      this.previousStringItem();
    }

    this.sixChange.emit(this.value);
  }

  private previousNumber() {
    this.changeValue({
      isNextItemAllowed: () => !this.isPreviousNumberDisabled(),
      getNextItem: () => Number(this.value) - this.step,
      getRoundtripItem: () => Number(this.max),
      isRoundtripPossible: () => this.max === undefined && this.roundtrip,
    });
  }

  private previousStringItem() {
    const value = this.value as string;
    const minLetter = this.min as string;

    this.changeValue({
      isNextItemAllowed: () =>
        minLetter === undefined || this.getStringItemIndex(value) > this.getStringItemIndex(minLetter),
      getNextItem: () => this.getNextItemByOperation(subtract),
      getRoundtripItem: () => this.max,
      isRoundtripPossible: () => this.max === undefined && this.roundtrip,
    });
  }

  private nextItem() {
    if (this.isNumber()) {
      this.nextNumber();
    } else {
      this.nextStringItem();
    }

    this.sixChange.emit(this.value);
  }

  private nextNumber() {
    this.changeValue({
      isNextItemAllowed: () => !this.isNextNumberDisabled(),
      getNextItem: () => Number(this.value) + this.step,
      getRoundtripItem: () => Number(this.min),
      isRoundtripPossible: () => this.min === undefined && this.roundtrip,
    });
  }

  private getStringItemIndex(char: string): number {
    return this._itemIndexes[char];
  }

  private nextStringItem() {
    const value = this.value as string;
    const maxLetter = this.max as string;

    this.changeValue({
      isNextItemAllowed: () =>
        maxLetter === undefined || this.getStringItemIndex(value) < this.getStringItemIndex(maxLetter),
      getNextItem: () => this.getNextItemByOperation(add),
      getRoundtripItem: () => this.min,
      isRoundtripPossible: () => this.min === undefined && this.roundtrip,
    });
  }

  private getNextItemByOperation(operation: (a: number, b: number) => number) {
    const value = this.value as string;
    const nextIndexCandidate = operation(this.getStringItemIndex(value), this.step);
    const numberOfItems = this._items.length;
    const nextIndex = ((nextIndexCandidate % numberOfItems) + numberOfItems) % numberOfItems;
    return this._items[nextIndex];
  }

  private changeValue(params: {
    getNextItem: () => any;
    isNextItemAllowed: () => boolean;
    getRoundtripItem: () => number | string;
    isRoundtripPossible: () => boolean;
  }) {
    if (params.isNextItemAllowed()) {
      this.value = params.getNextItem();
      return;
    }

    if (params.isRoundtripPossible()) {
      console.error(
        `${TAG} Item picker is expected to perform a roundtrip, but either max or min value is missing so a roundtrip is not possible`,
      );
      return;
    }

    if (this.roundtrip) {
      this.value = params.getRoundtripItem();
      return;
    }

    console.warn(
      `${TAG} Roundtrip is not allowed, but was still triggered, please report this issue to the developer of six-item-picker`,
    );
  }

  private isNumber() {
    return this.type === ItemPickerType.NUMBER;
  }

  private isInvalidNumber() {
    return this.value === '' || !!isNaN(this.value as number);
  }

  private isNextDisabled() {
    if (this.roundtrip) {
      return false;
    }

    if (this.isNumber()) {
      return this.isNextNumberDisabled();
    } else {
      if (!this._itemIndexes) {
        return true;
      }

      return this._itemIndexes[String(this.value)] + this.step > this._itemIndexes[String(this.max)];
    }
  }

  private isNextNumberDisabled() {
    return Number(this.value) + this.step > (this.max ?? Infinity);
  }

  private isPrevDisabled() {
    if (this.roundtrip) {
      return false;
    }

    if (this.isNumber()) {
      return this.isPreviousNumberDisabled();
    } else {
      if (!this._itemIndexes) {
        return true;
      }

      return this._itemIndexes[String(this.value)] - this.step < this._itemIndexes[String(this.min)];
    }
  }

  private isPreviousNumberDisabled() {
    return Number(this.value) - this.step < (this.min ?? -Infinity);
  }

  private onMouseDownNext() {
    if (this.isNextDisabled()) {
      return;
    }

    this.nextItem();

    this._timeoutNext = setTimeout(() => {
      this._intervalNext = setInterval(() => {
        this.nextItem();
      }, this.interval);
    }, this.timeout);
  }

  private onMouseUpNext() {
    clearTimeout(this._timeoutNext);
    clearInterval(this._intervalNext);
  }

  private onMouseDownPrev() {
    if (this.isPrevDisabled()) {
      return;
    }

    this.previousItem();

    this._timeoutPrev = setTimeout(() => {
      this._intervalPrev = setInterval(() => {
        this.previousItem();
      }, this.interval);
    }, this.timeout);
  }

  private onMouseUpPrev() {
    clearTimeout(this._timeoutPrev);
    clearInterval(this._intervalPrev);
  }

  private getFormattedValue() {
    if (this.value === undefined || this.value === null) {
      return this.value;
    }

    if (!this.padded) {
      return this.value;
    }

    if (this.paddingDirection === ItemPickerPaddingDirection.BEFORE) {
      return String(this.value).padStart(this.paddingLength, this.paddingChar);
    } else if (this.paddingDirection === ItemPickerPaddingDirection.AFTER) {
      return String(this.value).padEnd(this.paddingLength, this.paddingChar);
    }

    return this.value;
  }

  render() {
    return (
      <div part="container" class="item_picker__container">
        <div
          part="up"
          class={{
            item_picker__btn: true,
            'item_picker__btn--disabled': this.isNextDisabled(),
          }}
          onMouseDown={() => this.onMouseDownNext()}
          onMouseUp={() => this.onMouseUpNext()}
        >
          <six-icon size="large">expand_less</six-icon>
        </div>
        <div part="content" class="item_picker__content">
          {this.getFormattedValue()}
        </div>
        <div
          part="down"
          class={{
            item_picker__btn: true,
            'item_picker__btn--disabled': this.isPrevDisabled(),
          }}
          onMouseDown={() => this.onMouseDownPrev()}
          onMouseUp={() => this.onMouseUpPrev()}
        >
          <six-icon size="large">expand_more</six-icon>
        </div>
      </div>
    );
  }
}
