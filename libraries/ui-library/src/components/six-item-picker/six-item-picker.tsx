import { Component, Element, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { ItemPickerPaddingDirection, ItemPickerType } from './types';
import { debounce, DEFAULT_DEBOUNCE_FAST, DEFAULT_DEBOUNCE_INSANELY_FAST } from '../../utils/execution-control';
import { EventListeners } from '../../utils/event-listeners';
import { TimePeriod } from '../../utils/time.util';

interface Alphabet {
  alphabet: string[];
  letterIndexes: Record<string, number>;
}

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const upperAndLowercaseLetters = [...uppercaseLetters].flatMap((c) => [c, c.toLowerCase()]);
const ALPHABET: Alphabet = {
  alphabet: upperAndLowercaseLetters,
  letterIndexes: Object.fromEntries(upperAndLowercaseLetters.map((c, i) => [c, i])),
};
const CAPITAL_ALPHABET: Alphabet = {
  alphabet: [...uppercaseLetters].flatMap((c) => [c]),
  letterIndexes: Object.fromEntries([...uppercaseLetters].map((c, i) => [c, i])),
};
const LOWERCASE_ALPHABET: Alphabet = {
  alphabet: [...uppercaseLetters.toLowerCase()].flatMap((c) => [c]),
  letterIndexes: Object.fromEntries([...uppercaseLetters.toLowerCase()].map((c, i) => [c, i])),
};

const createItemIndexes = (arr: string[]): Record<string, number> => {
  return Object.fromEntries([...arr].map((c, i) => [c, i]));
};

const TAG = `[SIX-ITEM-PICKER]`;

const subtract = (a: number, b: number) => a - b;
const add = (a: number, b: number) => a + b;

export type SixItemPickerChangePayload = number | string | boolean | TimePeriod;

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

  @Element() host!: HTMLSixItemPickerElement;

  /** The item picker's value attribute. */
  @Prop({ mutable: true, reflect: true }) value: number | string = '';

  /** The type of items you want to rotate through. */
  @Prop() type: ItemPickerType = ItemPickerType.NUMBER;

  /** The minimum value allowed to pick. */
  @Prop({ reflect: true, mutable: true }) min?: number | string;

  /** The maximum value allowed to pick. */
  @Prop({ reflect: true, mutable: true }) max?: number | string;

  /** Define whether the picker should to a roundtrip i.e. start at max when reaching min and vice versa. */
  @Prop({ reflect: true }) roundtrip = true;

  /** Defines how many steps should be taken when navigating */
  @Prop({ reflect: true }) step = 1;

  /** Defines a custom list of items you can iterate through */
  @Prop() items?: string[];

  /** Defines whether the items should be padded */
  @Prop() padded = false;

  /** Defines the length of the padded area */
  @Prop() paddingLength = 2;

  /** Defines the character used for padding */
  @Prop() paddingChar = '0';

  /** Defines whether the padding should be before or after the value. You can either use 'before' or 'after'. By default,
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
  @Event({ eventName: 'six-item-picker-change' }) sixChange!: EventEmitter<SixItemPickerChangePayload>;

  /**
   * Emitted when the item picker's value changes, but debounced
   */
  @Event({ eventName: 'six-item-picker-change-debounced' })
  sixChangeDebounced!: EventEmitter<SixItemPickerChangePayload>;

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
      DEBOUNCE_ITEM_PICKER_LISTENER
    );
  }

  @Watch('items')
  handleSetChange() {
    this.setup();
    this.min = this._items[0];
    this.max = this.getLastStringItem();
  }

  @State() _items: string[] = [];
  @State() _itemIndexes: Record<string, number> = {};

  // used for fast increasing when keeping the mouse button held down
  private _timeoutNext!: ReturnType<typeof setTimeout>;
  private _intervalNext!: ReturnType<typeof setInterval>;

  private _timeoutPrev!: ReturnType<typeof setTimeout>;
  private _intervalPrev!: ReturnType<typeof setInterval>;

  componentWillLoad() {
    this.setup();
  }

  componentDidLoad() {
    this.eventListeners.add(
      this.host,
      'six-item-picker-change',
      debounce(this.handleSixItemPickerChangeDebounced, this.debounce),
      DEBOUNCE_ITEM_PICKER_LISTENER
    );
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  private handleSixItemPickerChangeDebounced = () => {
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
    this._items = this.getStringItems();
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

  private getStringItems(): string[] {
    switch (this.type) {
      case ItemPickerType.NUMBER:
        console.warn(`${TAG}: unexpected type ${this.type}`);
        return [];
      case ItemPickerType.LETTER:
        return ALPHABET.alphabet;
      case ItemPickerType.CAPITAL_LETTER:
        return CAPITAL_ALPHABET.alphabet;
      case ItemPickerType.LOWER_LETTER:
        return LOWERCASE_ALPHABET.alphabet;
      case ItemPickerType.CUSTOM:
        if (this.items == null || this.items.length === 0) {
          console.warn(`${TAG}: no items defined for type ${this.type}`);
          return [];
        }
        return this.items;
    }
  }

  private getItemIndexes(): Record<string, number> {
    switch (this.type) {
      case ItemPickerType.NUMBER:
        console.warn(`${TAG}: unexpected type ${this.type}`);
        return {};
      case ItemPickerType.LETTER:
        return ALPHABET.letterIndexes;
      case ItemPickerType.CAPITAL_LETTER:
        return CAPITAL_ALPHABET.letterIndexes;
      case ItemPickerType.LOWER_LETTER:
        return LOWERCASE_ALPHABET.letterIndexes;
      case ItemPickerType.CUSTOM:
        return createItemIndexes(this._items);
    }
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
    const value = String(this.value);
    const minLetter = String(this.min);

    this.changeValue({
      isNextItemAllowed: () =>
        minLetter === undefined || this.getStringItemIndex(value) > this.getStringItemIndex(minLetter),
      getNextItem: () => this.getNextItemByOperation(subtract),
      getRoundtripItem: () => String(this.max),
      isRoundtripPossible: () => this.max == null && this.roundtrip,
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
    const value = String(this.value);
    const maxLetter = String(this.max);

    this.changeValue({
      isNextItemAllowed: () =>
        maxLetter === undefined || this.getStringItemIndex(value) < this.getStringItemIndex(maxLetter),
      getNextItem: () => this.getNextItemByOperation(add),
      getRoundtripItem: () => String(this.min),
      isRoundtripPossible: () => this.min === undefined && this.roundtrip,
    });
  }

  private getNextItemByOperation(operation: (a: number, b: number) => number, increment: number = this.step) {
    const value = String(this.value);
    const nextIndexCandidate = operation(this.getStringItemIndex(value), increment);
    const numberOfItems = this._items.length;
    const nextIndex = ((nextIndexCandidate % numberOfItems) + numberOfItems) % numberOfItems;
    return this._items[nextIndex];
  }

  private changeValue(params: {
    getNextItem: () => number | string;
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
        `${TAG} Item picker is expected to perform a roundtrip, but either max or min value is missing so a roundtrip is not possible`
      );
      return;
    }

    if (this.roundtrip) {
      this.value = params.getRoundtripItem();
      return;
    }

    console.warn(
      `${TAG} Roundtrip is not allowed, but was still triggered, please report this issue to the developer of six-item-picker`
    );
  }

  private isNumber() {
    return this.type === ItemPickerType.NUMBER;
  }

  private isInvalidNumber() {
    return this.value === '' || isNaN(this.value as number);
  }

  private isNextDisabled() {
    if (this.roundtrip) {
      return false;
    }

    if (this.isNumber()) {
      return this.isNextNumberDisabled();
    } else {
      return this._itemIndexes[String(this.value)] + this.step > this._itemIndexes[String(this.max)];
    }
  }

  private isNextNumberDisabled() {
    return Number(this.value) + this.step > Number(this.max ?? Infinity);
  }

  private isPrevDisabled() {
    if (this.roundtrip) {
      return false;
    }

    if (this.isNumber()) {
      return this.isPreviousNumberDisabled();
    } else {
      return this._itemIndexes[String(this.value)] - this.step < this._itemIndexes[String(this.min)];
    }
  }

  private isPreviousNumberDisabled() {
    return Number(this.value) - this.step < Number(this.min ?? -Infinity);
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

  private handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (event.target === this.upButton) {
        this.nextItem();
      } else if (event.target === this.downButton) {
        this.previousItem();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.nextItem();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.previousItem();
    } else if (event.key === 'PageUp') {
      event.preventDefault();
      this.pageUp();
    } else if (event.key === 'PageDown') {
      event.preventDefault();
      this.pageDown();
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.goToMin();
    } else if (event.key === 'End') {
      event.preventDefault();
      this.goToMax();
    }
  }

  private pageUp() {
    if (this.isNumber()) {
      this.changeValue({
        isNextItemAllowed: () => !this.isNextNumberDisabled(),
        getNextItem: () => Number(this.value) + 5 * this.step,
        getRoundtripItem: () => Number(this.min),
        isRoundtripPossible: () => this.min === undefined && this.roundtrip,
      });
    } else {
      const value = String(this.value);
      const minLetter = String(this.min);

      this.changeValue({
        isNextItemAllowed: () =>
          minLetter === undefined || this.getStringItemIndex(value) > this.getStringItemIndex(minLetter),
        getNextItem: () => this.getNextItemByOperation(add, 5),
        getRoundtripItem: () => String(this.min),
        isRoundtripPossible: () => this.min === undefined && this.roundtrip,
      });
    }
  }

  private pageDown() {
    if (this.isNumber()) {
      this.changeValue({
        isNextItemAllowed: () => !this.isPreviousNumberDisabled(),
        getNextItem: () => Number(this.value) - 5 * this.step,
        getRoundtripItem: () => Number(this.max),
        isRoundtripPossible: () => this.max === undefined && this.roundtrip,
      });
    } else {
      const value = String(this.value);
      const maxLetter = String(this.max);

      this.changeValue({
        isNextItemAllowed: () =>
          maxLetter === undefined || this.getStringItemIndex(value) < this.getStringItemIndex(maxLetter),
        getNextItem: () => this.getNextItemByOperation(subtract, 5),
        getRoundtripItem: () => String(this.max),
        isRoundtripPossible: () => this.max == null && this.roundtrip,
      });
    }
  }

  private goToMin() {
    if (this.isNumber()) {
      this.value = this.min ?? 0;
    } else {
      this.value = this._items[0];
    }

    this.sixChange.emit(this.value);
  }

  private goToMax() {
    if (this.isNumber()) {
      this.value = this.max ?? Infinity;
    } else {
      this.value = this.getLastStringItem();
    }

    this.sixChange.emit(this.value);
  }

  private upButton!: HTMLDivElement;
  private downButton!: HTMLDivElement;

  render() {
    return (
      <div
        part="container"
        class="item_picker__container"
        onKeyDown={(event) => this.handleKeyPress(event)}
        tabindex="0"
      >
        <div
          ref={(el) => (this.upButton = el as HTMLDivElement)}
          part="up"
          class={{
            item_picker__btn: true,
            'item_picker__btn--disabled': this.isNextDisabled(),
          }}
          onMouseDown={() => this.onMouseDownNext()}
          onMouseUp={() => this.onMouseUpNext()}
          tabindex="-1"
        >
          <six-icon size="large">expand_less</six-icon>
        </div>
        <div part="content" class="item_picker__content">
          {this.getFormattedValue()}
        </div>
        <div
          ref={(el) => (this.downButton = el as HTMLDivElement)}
          part="down"
          class={{
            item_picker__btn: true,
            'item_picker__btn--disabled': this.isPrevDisabled(),
          }}
          onMouseDown={() => this.onMouseDownPrev()}
          onMouseUp={() => this.onMouseUpPrev()}
          tabindex="-1"
        >
          <six-icon size="large">expand_more</six-icon>
        </div>
      </div>
    );
  }
}
