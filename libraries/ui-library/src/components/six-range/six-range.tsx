import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';
import FormControl from '../../functional-components/form-control/form-control';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot label - The input's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the input. Alternatively, you can use the help-text prop.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 *
 * @part base - The component's base wrapper.
 * @part input - The native range input.
 * @part tooltip - The range tooltip.
 */
@Component({
  tag: 'six-range',
  styleUrl: 'six-range.scss',
  shadow: true,
})
export class SixRange {
  inputId = `input-${++id}`;
  labelId = `input-label-${id}`;
  helpTextId = `input-help-text-${id}`;
  errorTextId = `input-error-text-${id}`;
  resizeObserver: ResizeObserver;

  output: HTMLElement;
  input: HTMLInputElement;
  customErrorText = '';
  customValidation = false;

  readonly eventListeners = new EventListeners();

  @Element() host: HTMLSixRangeElement;

  @State() hasFocus = false;
  @State() hasHelpTextSlot = false;
  @State() hasLabelSlot = false;
  @State() hasErrorTextSlot = false;
  @State() hasTooltip = false;

  /** The input's name attribute. */
  @Prop() name = '';

  /** The input's value attribute. */
  @Prop({ mutable: true }) value: number;

  /** Set to true to make the input a required field. */
  @Prop({ reflect: true }) required: boolean;

  /** The range's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The range's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** The input's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** Set to true to disable the input. */
  @Prop() disabled = false;

  /**
   * This will be true when the control is in an invalid state. Validity in range inputs is determined by the message
   * provided by the `setCustomValidity` method.
   */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  /** The input's min attribute. */
  @Prop() min = 0;

  /** The input's max attribute. */
  @Prop() max = 100;

  /** The input's step attribute. */
  @Prop() step = 1;

  /** The preferred placedment of the tooltip. */
  @Prop() tooltip: 'top' | 'bottom' | 'none' = 'top';

  /** A function used to format the tooltip's value. */
  @Prop() tooltipFormatter = (value: number) => value.toString();

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** Emitted when the control's value changes. */
  @Event({ eventName: 'six-range-change' }) sixChange: EventEmitter<EmptyPayload>;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-range-blur' }) sixBlur: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-range-focus' }) sixFocus: EventEmitter<EmptyPayload>;

  /** default value the slider will be reverted to when reset is executed */
  private defaultValue = 0;

  @Watch('label')
  @Watch('errorText')
  @Watch('helpText')
  handleLabelChange() {
    this.handleSlotChange();
  }

  @Watch('value')
  handleValueChange() {
    if (this.input) {
      this.input.value = this.value as any;
      this.calculateColorRunnableTrack();
    }
    // In rare cases, the watcher may be called before render so we need to make sure the input exists
    this.invalid = this.input ? !this.input.checkValidity() : false;
  }

  connectedCallback() {
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);

    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    if (this.value === undefined || this.value === null) this.value = this.min;
    if (this.value < this.min) this.value = this.min;
    if (this.value > this.max) this.value = this.max;
    this.defaultValue = this.value;

    this.handleSlotChange();
  }

  componentDidLoad() {
    this.syncTooltip();
    this.calculateColorRunnableTrack();
    this.resizeObserver = new ResizeObserver(() => this.syncTooltip());
    this.eventListeners.add(this.input, 'invalid', (event) => {
      if (this.customValidation || (!this.hasErrorTextSlot && !this.errorText && !this.customErrorText)) {
        this.customErrorText = this.input.validationMessage;
      }
      event.preventDefault();
    });
  }

  disconnectedCallback() {
    this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  /** Sets focus on the input. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the input. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    this.customErrorText = '';
    this.customValidation = message !== '';
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.value = this.defaultValue;
    this.customErrorText = '';
    this.customValidation = false;
    this.input.setCustomValidity('');
    this.invalid = false;
  }

  handleInput() {
    this.value = Number(this.input.value);
    this.sixChange.emit();

    requestAnimationFrame(() => this.syncTooltip());
    requestAnimationFrame(() => this.calculateColorRunnableTrack());
  }

  handleBlur() {
    this.hasFocus = false;
    this.hasTooltip = false;
    this.sixBlur.emit();
    this.resizeObserver.unobserve(this.input);
  }

  handleFocus() {
    this.hasFocus = true;
    this.hasTooltip = true;
    this.sixFocus.emit();
    this.resizeObserver.observe(this.input);
  }

  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
    this.hasLabelSlot = hasSlot(this.host, 'label');
  }

  handleTouchStart() {
    this.setFocus();
  }

  displayError() {
    return this.invalid && (!this.errorOnBlur || !this.hasFocus);
  }

  syncTooltip() {
    if (this.tooltip !== 'none') {
      const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
      const inputWidth = this.input.offsetWidth;
      const tooltipWidth = this.output.offsetWidth;
      const thumbSize = getComputedStyle(this.input).getPropertyValue('--thumb-size');
      const x = `calc(${inputWidth * percent}px - calc(calc(${percent} * ${thumbSize}) - calc(${thumbSize} / 2)))`;
      this.output.style.transform = `translateX(${x})`;
      this.output.style.marginLeft = `-${tooltipWidth / 2}px`;
    }
  }

  /**
   * For Firefox this functionality is not needed because it is supported by standard CSS.
   */
  calculateColorRunnableTrack() {
    if (!this.isFirefox()) {
      const value = parseInt(this.input.value, 10);
      const min = parseInt(this.input.min, 10);
      const max = parseInt(this.input.max, 10);
      const percent = Math.ceil(((value - min) / (max - min)) * 100);
      this.input.style.background =
        '-webkit-linear-gradient(left, var(--track-color) 0%, var(--track-color) ' +
        percent +
        '%, var(--six-color-web-rock-300) ' +
        percent +
        '%)';
    }
  }

  isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }

  render() {
    return (
      <FormControl
        inputId={this.inputId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={this.hasLabelSlot}
        helpTextId={this.helpTextId}
        helpText={this.helpText}
        hasHelpTextSlot={this.hasHelpTextSlot}
        size="medium"
        errorTextId={this.errorTextId}
        errorText={this.customErrorText ? this.customErrorText : this.errorText}
        hasErrorTextSlot={this.hasErrorTextSlot}
        disabled={this.disabled}
        required={this.required}
        displayError={this.displayError()}
      >
        <div
          part="base"
          class={{
            range: true,

            // States
            'range--disabled': this.disabled,
            'range--focused': this.hasFocus,
            'range--tooltip-visible': this.hasTooltip,
            'range--tooltip-top': this.tooltip === 'top',
            'range--tooltip-bottom': this.tooltip === 'bottom',
          }}
          onTouchStart={this.handleTouchStart}
        >
          <input
            part="input"
            ref={(el) => (this.input = el)}
            type="range"
            class="range__control"
            name={this.name}
            disabled={this.disabled}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {this.tooltip !== 'none' && (
            <output part="tooltip" ref={(el) => (this.output = el)} class="range__tooltip">
              {this.tooltipFormatter(this.value)}
            </output>
          )}
        </div>
      </FormControl>
    );
  }
}
