import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { ItemPickerType } from '../six-item-picker/types';
import {
  createTimeString,
  getCurrentTime,
  isValidTimeString,
  parseTimeString,
  Time,
  TimeFormat,
  TimeProperties,
} from '../../utils/time.util';
import { debounce, DEFAULT_DEBOUNCE_FAST, DEFAULT_DEBOUNCE_INSANELY_FAST } from '../../utils/execution-control';
import { SixItemPickerChangePayload } from '../six-item-picker/six-item-picker';
import { EventListeners } from '../../utils/event-listeners';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { adjustPopupForHoisting, movePopup } from '../../utils/popup';

export interface SixTimepickerChange {
  value?: Time;
  valueAsString: string;
  changedProperty?: string;
}

interface SixTimeUnitPickerParams {
  min?: number;
  max?: number;
  items?: string[];
  type?: ItemPickerType;
  class?: string;
  paddingLength?: number;
  propertyName: TimeProperties;
}

const MIN_POPUP_HEIGHT = 145;

/**
 * @since 2.0.0
 * @status experimental
 *
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
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
  private eventListeners = new EventListeners();
  private popup?: HTMLElement;
  private wrapper?: HTMLElement;
  private inputElement?: HTMLSixInputElement;

  @Element() host!: HTMLSixTimepickerElement;

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
  @Prop() format: TimeFormat = 'HH:mm:ss';

  /**
   * Define the separator to be shown between the time unit pickers.
   * Please be aware that this property will modify the displayed separator only.
   * The separator for a timestring is always expected to be a colon (eg. '13:52:20')
   * */
  @Prop() separator = ':';

  /**
   * The value of the timepicker provided as a string. The string mast match the provided format (or default format)
   */
  @Prop({ mutable: true }) value = '';

  /** Indicates whether the timepicker dropdown is open on startup. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Indicates whether the timepicker should be shown as an inline (always open) component */
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
   * If `true`, no sizing attributes are applied.
   */
  @Prop() disableSizing = false;

  /**
   * The enforced placement of the dropdown panel.
   */
  @Prop() placement?: 'top' | 'bottom';

  /** Timepicker size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /**
   * The placeholder defines what text to be shown on the input element
   */
  @Prop() placeholder?: string;

  /** The input's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText: string | string[] = '';

  /** The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1 */
  @Prop() errorTextCount?: number;

  /** The input's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

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
  @Prop() defaultTime?: string;

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
  @Event({ eventName: 'six-timepicker-change' }) sixChange!: EventEmitter<SixTimepickerChange>;

  /**
   * Emitted when the timepicker's value changes, but debounced
   */
  @Event({ eventName: 'six-timepicker-change-debounced' }) sixChangeDebounced!: EventEmitter<SixTimepickerChange>;

  /**
   * Emitted when the clear button is activated.
   */
  @Event({ eventName: 'six-timepicker-clear' }) sixClear!: EventEmitter<EmptyPayload>;

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

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    this.updateValue();
  }

  /** Sets focus on the datepickers input. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.inputElement?.setFocus(options);
  }

  /*
   * Internally the six-timepicker uses a standardized representation of time, so we don't have a mess,
   * when switching between formats
   */
  @State() private popupValue: Time = {};

  connectedCallback() {
    this.eventListeners.forward('six-timepicker-change', 'change', this.host);
  }

  componentWillLoad() {
    this.updateValue();

    if (this.inline) {
      this.open = true;
    }

    if (this.open) {
      this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
    }
  }

  componentDidLoad() {
    if (this.inputElement == null) return;
    const inputElement = this.inputElement;

    // emit debounced change event
    this.eventListeners.add(
      this.host,
      'six-timepicker-change',
      debounce((event: Event) => this.sixChangeDebounced.emit((event as CustomEvent).detail), this.debounce)
    );

    // update value and popup value based on input-element value
    this.eventListeners.add(
      inputElement,
      'six-input-input',
      debounce((event: Event) => {
        event.stopPropagation();

        // emit empty event if time string is invalid
        if (!isValidTimeString(inputElement.value, this.format)) {
          this.value = inputElement.value;
          this.sixChange.emit({
            value: {},
            valueAsString: '',
          });
          return;
        }

        // update value and popup value, and emit the new value
        this.value = inputElement.value;
        this.popupValue = parseTimeString(inputElement.value, this.format);
        this.sixChange.emit({
          value: this.popupValue,
          valueAsString: createTimeString(this.popupValue, this.format),
        });
      }, this.debounce)
    );
  }

  componentDidRender() {
    adjustPopupForHoisting(
      this.hoist,
      this.popup,
      this.inputElement,
      this.wrapper,
      MIN_POPUP_HEIGHT,
      (isUp) => (this.isDropDownContentUp = isUp)
    );
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }
  private updateValue() {
    // normalize value
    if (typeof this.value !== 'string' || !isValidTimeString(this.value, this.format)) {
      this.value = '';
    }

    // update popup value
    if (this.value === '') {
      if (this.defaultTime == null) {
        this.popupValue = getCurrentTime(this.is24HourClock());
      } else {
        this.popupValue = parseTimeString(this.defaultTime, this.format);
      }
    } else {
      this.popupValue = parseTimeString(this.value, this.format);
    }
  }

  private calcIsPopupContentUp() {
    if (this.inputElement == null || this.wrapper == null) {
      return;
    }

    const inputBoundingRect = this.inputElement.getBoundingClientRect();
    const wrapperBoundingRect = this.wrapper.getBoundingClientRect();
    const minPopupHeight = Math.max(wrapperBoundingRect.height, MIN_POPUP_HEIGHT);

    const moreSpaceInTop = inputBoundingRect.y > window.innerHeight / 2;
    this.isPopupContentUp = moreSpaceInTop && window.innerHeight < inputBoundingRect.bottom + minPopupHeight;
  }

  private moveOpenHoistedPopup() {
    movePopup(this.hoist, this.open, this.popup, this.inputElement, this.wrapper, MIN_POPUP_HEIGHT);
  }

  private handlePickerChange = (event: CustomEvent<SixItemPickerChangePayload>, property: TimeProperties) => {
    // stop propagation, since the timepicker should not expose the events of the underlying item-picker
    event.stopPropagation();
    if (this.popupValue == null) {
      return;
    }

    // update the internal state
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.popupValue[property] = event.detail;

    const timeString = createTimeString(this.popupValue, this.format);

    // update the input value
    this.value = timeString;

    // emit change event
    this.sixChange.emit({
      changedProperty: property,
      value: this.popupValue,
      valueAsString: timeString,
    });
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={this.popupValue[params.propertyName]}
        items={params.items}
        type={params.type || ItemPickerType.NUMBER}
        padding-length={params.paddingLength}
        onSix-item-picker-change={(event) => this.handlePickerChange(event, params.propertyName)}
      ></six-item-picker>
    );
  }

  private getHour24Picker() {
    if (!this.is24HourClock()) {
      return;
    }
    return this.getSixTimeUnitPicker({ min: 0, max: 23, propertyName: 'hours' });
  }

  private is24HourClock() {
    return this.format.includes('HH');
  }

  private getHour12Picker() {
    if (!this.is12HourClock()) {
      return;
    }
    return this.getSixTimeUnitPicker({ min: 0, max: 11, propertyName: 'hours' });
  }

  private is12HourClock() {
    return this.format.includes('hh');
  }

  private getAmPmPicker() {
    if (!this.is12HourClock()) {
      return;
    }
    const items = ['AM', 'PM'];
    return this.getSixTimeUnitPicker({
      items,
      type: ItemPickerType.CUSTOM,
      propertyName: 'period',
    });
  }

  private getMinutePicker() {
    if (!this.format.includes('mm')) {
      return;
    }

    return this.getSixTimeUnitPicker({ min: 0, max: 59, propertyName: 'minutes' });
  }

  private getSecondsPicker() {
    if (!this.format.includes('ss')) {
      return;
    }

    return this.getSixTimeUnitPicker({ min: 0, max: 59, propertyName: 'seconds' });
  }

  private getMillisecondsPicker() {
    if (!this.format.includes('ms')) {
      return;
    }

    return this.getSixTimeUnitPicker({
      min: 0,
      max: 999,
      class: 'timepicker__item--wide',
      paddingLength: 3,
      propertyName: 'milliseconds',
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

  private handleDocumentMouseDown = (event: Event) => {
    // Close when clicking outside the containing element
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.host)) {
      this.closePopup();
      return;
    }
  };

  private handleClearClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.value = '';
    this.sixClear.emit();
    this.sixChange.emit({
      value: {},
      valueAsString: '',
    });
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

  render() {
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
          errorTextCount={this.errorTextCount}
          errorText={this.errorText}
          invalid={this.invalid}
          size={this.size}
          name={this.name}
          label={this.label}
          required={this.required}
          class={{
            'input--empty': this.value === '',
            'input--hide': this.inline,
          }}
        >
          {this.renderCustomIcon()}
          {this.renderClearable()}
          {hasSlot(this.host, 'label') ? (
            <span slot="label">
              <slot name="label" />
            </span>
          ) : null}
          {hasSlot(this.host, 'error-text') ? (
            <span slot="error-text">
              <slot name="error-text" />
            </span>
          ) : null}
        </six-input>
        {this.open && (
          <div
            ref={(el) => (this.popup = el)}
            part="popup"
            class={{
              timepicker__popup: true,
              timepicker__popup__sizing: !this.disableSizing,
              'timepicker__popup--is-up': this.placement == null ? this.placement === 'top' : this.isPopupContentUp,
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
