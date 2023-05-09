import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { ItemPickerType } from '../six-item-picker/types';
import { SixTimeFormat } from './six-time-format';
import { SixTime, SixTimePropertyName, TIME_FORMAT_CHAR } from './six-timepicker.types';
import {
  createTimeString,
  getCurrentTime,
  isValidTimeString,
  parseTimeString,
  TIME_FORMAT_SEPARATOR,
} from '../../utils/time.util';
import { debounce, DEFAULT_DEBOUNCE_FAST, DEFAULT_DEBOUNCE_INSANELY_FAST } from '../../utils/execution-control';
import { SixItemPickerChangePayload } from '../six-item-picker/six-item-picker';
import { EventListeners } from '../../utils/event-listeners';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { isNil } from '../../utils/type-check';

interface SixTimepickerBasePayload {
  value: SixTime;
  valueAsString: string;
}

export interface SixTimepickerChange extends SixTimepickerBasePayload {
  changedProperty?: string;
}

export interface SixTimepickerInput extends SixTimepickerBasePayload {}

export interface SixTimepickerBlur extends SixTimepickerBasePayload {}

interface SixTimeUnitPickerParams {
  min?: number;
  max?: number;
  items?: string[];
  type?: ItemPickerType;
  class?: string;
  paddingLength?: number;
  propertyName: string;
}

const TAG = `[SIX-TIMEPICKER]`;
const DEBOUNCE_TIMEPICKER_LISTENER = 'debounced-timepicker';
const MIN_POPUP_HEIGHT = 145;

/**
 * @since 2.0.0
 * @status experimental
 *
 * @part input - The input field
 * @part container - The container of whole component
 * @part popup - The popup of the timepicker component
 *
 */
@Component({
  tag: 'six-timepicker',
  styleUrl: 'six-timepicker.scss',
  shadow: true,
})
export class SixTimepicker {
  private readonly eventListeners = new EventListeners();

  private popup: HTMLElement;

  private wrapper: HTMLElement;

  private inputElement: HTMLSixInputElement;

  @Element() host: HTMLSixTimepickerElement;

  /**
   * Define the time format. Valid formats are:
   *
   * HH:mm:ss
   * hh:mm:ss:aa
   * HH:mm:ss:ms
   * hh:mm:ss:ms:aa
   * HH:mm
   * hh:mm:aa
   * HH
   * hh:aa
   * mm
   * ss
   * ms
   *
   * where HH is the 24 hour format
   * and hh is the 12 hour format
   *
   * Please notice that when using the 12-hour-clock (hh)
   * you always need a period indicator (aa). So the time can be parsed as either am or pm
   * */
  @Prop() format: SixTimeFormat = SixTimeFormat.HHmmss;

  /**
   * Define the separator to be shown between the time unit pickers.
   * Please be aware that this property will modify the displayed separator only.
   * The separator for a timestring is always expected to be a colon (eg. '13:52:20')
   * */
  @Prop() separator = TIME_FORMAT_SEPARATOR;

  /**
   * The value of the timepicker provided as a string. The string mast match the provided format (or default format)
   */
  @Prop({ mutable: true }) value?: string | null;

  /** Indicates whether or not the timepicker dropdown is open on startup. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Indicates whether or not the timepicker should be shown as an inline (always open) component */
  @Prop({ reflect: true }) inline = false;

  /**
   * If `true` the user can only select a time via the timepicker but not directly edit the input field.
   */
  @Prop() readonly = false;

  /**
   * If `true` the component is disabled.
   */
  @Prop() disabled = false;

  /**
   * The enforced placement of the dropdown panel.
   */
  @Prop() placement: 'top' | 'bottom';

  /** Timepicker size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to make the input a required field. */
  @Prop({ reflect: true }) required: boolean;

  /**
   * The placeholder defines what text to be shown on the input element
   */
  @Prop() placeholder?: string | null;

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** The input's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** The input's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The input's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  /** Set the position of the icon */
  @Prop() iconPosition: 'left' | 'right' = 'left';

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @Prop() hoist = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger faster switching between timeunits (e.g. hours).
   */
  @Prop() timeout = DEFAULT_DEBOUNCE_FAST;

  /**
   * Set the amount of time, in milliseconds, to wait between switching to next timeunit (e.g. next hour) when mouse button is held pressed.
   */
  @Prop() interval = DEFAULT_DEBOUNCE_INSANELY_FAST;

  /**
   * The defaultTime defines the default setting for the timepicker when you open the popup. Default time must match the provided format.
   */
  @Prop() defaultTime?: string | null;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `six-timepicker-change-debounced` event.
   * If you want your change debounce event to not trigger when keeping the nav button pressed before, make sure debounce
   * is a bit bigger than timeout, otherwise keeping the button pressed will trigger the event twice: once you click
   * (and keep pressed) and once you release
   */
  @Prop() debounce = DEFAULT_DEBOUNCE_FAST;

  /**
   * Emitted when the timepicker's value changes
   */
  @Event({ eventName: 'six-timepicker-change' }) sixChange: EventEmitter<SixTimepickerChange>;

  /**
   * Emitted when the timepicker's value changes, but debounced
   */
  @Event({ eventName: 'six-timepicker-change-debounced' })
  sixChangeDebounced: EventEmitter<SixTimepickerChange>;

  /**
   * Emitted when the clear button is activated.
   */
  @Event({ eventName: 'six-timepicker-clear' }) sixClear: EventEmitter<EmptyPayload>;

  @State() isPopupContentUp = false;

  @State() isDropDownContentUp = false;

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.calcIsPopupContentUp();
    this.moveOpenHoistedPopup();
  }

  @Listen('scroll', { target: 'window' })
  async scrollHandler() {
    this.calcIsPopupContentUp();
    this.moveOpenHoistedPopup();
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.eventListeners.removeByIdentifier(DEBOUNCE_TIMEPICKER_LISTENER);
    this.eventListeners.add(
      this.host,
      'six-timepicker-change',
      debounce(this.handleSixTimepickerChangeDebounced, this.debounce),
      DEBOUNCE_TIMEPICKER_LISTENER
    );
  }

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged(newValue: string) {
    if (this.value !== newValue) {
      this.value = newValue;
    }
    this.setupInternalTime();
    this.sixChange.emit({
      value: this.internalValue,
      valueAsString: createTimeString(this.internalValue, this.format),
    });
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.inputElement.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    return this.inputElement.checkValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    await this.inputElement.setCustomValidity(message);
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.internalValue = this.defaultValue;
    this.inputElement.value = createTimeString(this.internalValue, this.format);
    await this.inputElement.reset();
  }

  /*
   * Internally the six-timepicker uses a standardized representation of time, so we don't have a mess,
   * when switching between formats
   */
  @State()
  private internalValue: SixTime;

  private defaultValue: SixTime = null;

  componentWillLoad() {
    this.setupInternalTime();

    if (this.inline) {
      this.open = true;
    }

    if (this.open) {
      this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
    }
  }

  componentDidLoad() {
    this.eventListeners.add(
      this.host,
      'six-timepicker-change',
      debounce(this.handleSixTimepickerChangeDebounced, this.debounce),
      DEBOUNCE_TIMEPICKER_LISTENER
    );
    this.eventListeners.add(this.inputElement, 'six-input-input', debounce(this.handleInputChange, this.debounce));
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  private handleInputChange = (event: Event) => {
    event.stopPropagation();
    const inputValue = this.inputElement.value;

    if (!isValidTimeString(inputValue, this.format)) {
      this.sixChange.emit({
        value: {},
        valueAsString: '',
      });
      return;
    }

    this.internalValue = parseTimeString(inputValue, this.format);
    this.sixChange.emit({
      value: this.internalValue,
      valueAsString: createTimeString(this.internalValue, this.format),
    });
  };

  private calcIsPopupContentUp() {
    if (!this.inputElement || !this.wrapper) {
      return;
    }

    const inputBoundingRect = this.inputElement.getBoundingClientRect();
    const wrapperBoundingRect = this.wrapper.getBoundingClientRect();
    const minPopupHeight = Math.max(wrapperBoundingRect.height, MIN_POPUP_HEIGHT);

    const moreSpaceInTop = inputBoundingRect.y > window.innerHeight / 2;
    this.isPopupContentUp = moreSpaceInTop && window.innerHeight < inputBoundingRect.bottom + minPopupHeight;
  }

  /*
   * The position of the hoisted timepicker needs to be correctly calculated since the position changes to fixed.
   * Thus if the user scrolls or adjusts the screen size we need to recalculate the timepicker position.
   */
  private moveOpenHoistedPopup() {
    if (!this.hoist || !this.open) {
      return;
    }

    const popupBoundingClientRect = this.popup.getBoundingClientRect();
    const popupHeight = popupBoundingClientRect.height;
    const inputBoundingClientRect = this.inputElement.getBoundingClientRect();
    const inputTop = inputBoundingClientRect.top;
    const inputHeight = inputBoundingClientRect.height;

    this.calcIsPopupContentUp();

    if (this.isPopupContentUp) {
      this.popup.style.top = `${inputTop - popupHeight}px`;
    } else {
      this.popup.style.top = `${inputTop + inputHeight}px`;
    }
  }

  private handleSixTimepickerChangeDebounced = ({ detail }) => {
    this.sixChangeDebounced.emit(detail);
  };

  private handleChange = (event: CustomEvent<SixItemPickerChangePayload>, property: string) => {
    // stop propagation, since the timepicker should not expose the events of the underlying item-picker
    event.stopPropagation();

    // update the internal state
    this.internalValue[property] = event.detail;

    const timeString = createTimeString(this.internalValue, this.format);

    // fire timepicker's own event
    this.sixChange.emit({
      changedProperty: property,
      value: this.internalValue,
      valueAsString: timeString,
    });

    // update the input value
    this.value = timeString;
  };

  private getSixTimeUnitPicker(params: SixTimeUnitPickerParams) {
    return (
      <six-item-picker
        class={params.class}
        timeout={this.timeout}
        interval={this.interval}
        padded
        min={params.min}
        max={params.max}
        value={this.internalValue[params.propertyName]}
        items={params.items}
        type={params.type || ItemPickerType.NUMBER}
        padding-length={params.paddingLength}
        onSix-item-picker-change={(event) => this.handleChange(event, params.propertyName)}
      ></six-item-picker>
    );
  }

  private setupInternalTime() {
    if (this.is12HourClock() && !this.format.includes(TIME_FORMAT_CHAR.PERIOD)) {
      console.error(
        `${TAG} You provided a 12-hour-clock format but are missing the period (am or pm) in the time-format-string!`
      );
    }

    if (this.value === null || this.value === undefined) {
      this.internalValue = isNil(this.defaultTime)
        ? getCurrentTime(this.is24HourClock())
        : parseTimeString(this.defaultTime, this.format);
    } else {
      this.internalValue = parseTimeString(this.value, this.format);
    }

    this.defaultValue = this.internalValue;
  }

  private getHour24Picker() {
    if (!this.is24HourClock()) {
      return;
    }

    return this.getSixTimeUnitPicker({ min: 0, max: 23, propertyName: SixTimePropertyName.HOURS });
  }

  private is24HourClock() {
    return this.format.includes(TIME_FORMAT_CHAR.HOUR_24);
  }

  private getHour12Picker() {
    if (!this.is12HourClock()) {
      return;
    }

    return this.getSixTimeUnitPicker({ min: 0, max: 11, propertyName: SixTimePropertyName.HOURS });
  }

  private is12HourClock() {
    return this.format.includes(TIME_FORMAT_CHAR.HOUR_12);
  }

  private getAmPmPicker() {
    if (!this.is12HourClock()) {
      return;
    }

    const items = ['AM', 'PM'];
    return this.getSixTimeUnitPicker({
      items,
      type: ItemPickerType.CUSTOM,
      propertyName: SixTimePropertyName.PERIOD,
    });
  }

  private getMinutePicker() {
    if (!this.format.includes(TIME_FORMAT_CHAR.MINUTE)) {
      return;
    }

    return this.getSixTimeUnitPicker({ min: 0, max: 59, propertyName: SixTimePropertyName.MINUTES });
  }

  private getSecondsPicker() {
    if (!this.format.includes(TIME_FORMAT_CHAR.SECOND)) {
      return;
    }

    return this.getSixTimeUnitPicker({ min: 0, max: 59, propertyName: SixTimePropertyName.SECONDS });
  }

  private getMillisecondsPicker() {
    if (!this.format.includes(TIME_FORMAT_CHAR.MILLISECOND)) {
      return;
    }

    return this.getSixTimeUnitPicker({
      min: 0,
      max: 999,
      class: 'timepicker__item--wide',
      paddingLength: 3,
      propertyName: SixTimePropertyName.MILLISECONDS,
    });
  }

  private getSeparator() {
    return (
      <div class="timepicker__separator">
        <span>{this.separator}</span>
      </div>
    );
  }

  private getContent() {
    const elementsInOrder = [
      this.getHour24Picker(),
      this.getHour12Picker(),
      this.getMinutePicker(),
      this.getSecondsPicker(),
      this.getMillisecondsPicker(),
    ];

    const visibleElements = elementsInOrder.filter((el) => el !== undefined);

    return visibleElements.map((el, idx) => {
      if (idx === visibleElements.length - 1) {
        return [el];
      }

      return [el, this.getSeparator()];
    });
  }

  private openPopup() {
    if (!this.open && !this.disabled) {
      this.open = true;
      this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
    }
  }

  private closePopup() {
    if (this.inline) {
      return;
    }

    this.open = false;
    this.eventListeners.remove(document, 'mousedown', this.handleDocumentMouseDown);
  }

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the containing element
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.host)) {
      this.closePopup();
      return;
    }
  };

  private handleClearClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.value = undefined;
    this.sixClear.emit();
  };

  private renderClearable() {
    return (
      this.clearable && (
        <button
          slot="suffix"
          class={{
            timepicker_clear: true,
            'timepicker_clear--right': this.iconPosition === 'left',
            'timepicker_clear--left': this.iconPosition === 'right',
          }}
          type="button"
          onClick={this.handleClearClick}
          tabindex="-1"
        >
          <six-icon size="small">clear</six-icon>
        </button>
      )
    );
  }

  private renderCustomIcon() {
    const icon = hasSlot(this.host, 'custom-icon') ? (
      <slot name="custom-icon"></slot>
    ) : (
      <six-icon size={this.size === 'large' ? 'medium' : this.size}>watch_later</six-icon>
    );

    return (
      <span
        slot="prefix"
        part="icon"
        class={{
          prefix: true,
          'prefix--right': this.iconPosition === 'right',
        }}
      >
        {icon}
      </span>
    );
  }

  private calcIsDropDownContentUp() {
    if (!this.inputElement || !this.wrapper) {
      return;
    }

    const inputBoundingRect = this.inputElement.getBoundingClientRect();
    const wrapperBoundingRect = this.wrapper.getBoundingClientRect();
    const minPopupHeight = Math.max(wrapperBoundingRect.height, MIN_POPUP_HEIGHT);

    const moreSpaceInTop = inputBoundingRect.y > window.innerHeight / 2;
    this.isDropDownContentUp = moreSpaceInTop && window.innerHeight < inputBoundingRect.bottom + minPopupHeight;
  }

  /*
   * If the popup is hoisted we popup is hoisted its position will change to fix to not be clipped of by a containing container.
   * To render the popup correctly we render it normally, and then assign this screenposition to the fixed popup
   */
  private adjustPopupForHoisting() {
    if (!this.hoist) {
      return;
    }

    // execute after dropdown has been rendered to make sure the popup reference is correctly set
    setTimeout(() => {
      if (!this.popup) {
        return;
      }

      // take a snapshot of normally rendered popup
      const popupBoundingClientRect = this.popup.getBoundingClientRect();

      // apply screen position to fixed popup
      this.popup.style.position = 'fixed';
      ['top', 'left', 'width', 'height'].forEach((property) => {
        this.popup.style[property] = `${popupBoundingClientRect[property]}px`;
      });

      const inputBoundingClientRect = this.inputElement.getBoundingClientRect();
      const inputTop = inputBoundingClientRect.top;
      const popupTop = popupBoundingClientRect.top;

      this.calcIsDropDownContentUp();
      // check screen position to check whether the popup should be moved above or below the trigger element
      if (this.isDropDownContentUp && inputTop < popupTop) {
        //  move popup above input field if timepicker is at bottom of screen
        this.popup.style.top = `${popupTop - popupBoundingClientRect.height - inputBoundingClientRect.height}px`;
      }
    }, 0);
  }

  render() {
    this.adjustPopupForHoisting();

    return (
      <div part="container" ref={(el) => (this.wrapper = el)} class="timepicker__container">
        <six-input
          ref={(el) => (this.inputElement = el)}
          part="input"
          onClick={() => this.openPopup()}
          value={this.value}
          placeholder={this.placeholder}
          readonly={this.readonly}
          disabled={this.disabled}
          size={this.size}
          name={this.name}
          label={this.label}
          required={this.required}
          error-text={this.errorText}
          error-on-blur={this.errorOnBlur}
          class={{
            'input--empty': !this.value,
            'input--hide': this.inline,
          }}
        >
          {this.renderCustomIcon()}
          {this.renderClearable()}
          {hasSlot(this.host, 'error-text') ? (
            <span slot="error-text">
              <slot name="error-text" />
            </span>
          ) : null}
          {hasSlot(this.host, 'label') ? (
            <span slot="label">
              <slot name="label" />
            </span>
          ) : null}
        </six-input>
        {this.open && (
          <div
            ref={(el) => (this.popup = el)}
            part="popup"
            class={{
              timepicker__popup: true,
              'timepicker__popup--is-up': this.placement ? this.placement === 'top' : this.isPopupContentUp,
              'timepicker__popup--is-inline': this.inline,
            }}
          >
            {...this.getContent()}
            {this.getAmPmPicker()}
          </div>
        )}
      </div>
    );
  }
}
