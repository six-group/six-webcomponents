import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { Events } from '../../utils/events';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The radio's label.
 *
 * @part base - The component's base wrapper.
 * @part control - The radio control.
 * @part checked-icon - The container the wraps the checked icon.
 * @part label - The radio label.
 */

@Component({
  tag: 'six-radio',
  styleUrl: 'six-radio.scss',
  shadow: true,
})
export class SixRadio {
  inputId = `radio-${++id}`;
  labelId = `radio-label-${id}`;
  input: HTMLInputElement;

  @Element() host: HTMLSixRadioElement;

  @State() hasFocus = false;

  /** The radio's name attribute. */
  @Prop() name: string;

  /** The radio's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the radio. */
  @Prop() disabled = false;

  /** Set to true to draw the radio in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * This will be true when the control is in an invalid state. Validity in range inputs is determined by the message
   * provided by the `setCustomValidity` method.
   */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  @Prop() type = 'radio';

  @Watch('checked')
  handleCheckedChange() {
    if (this.checked) {
      console.log(`handleCheckedChange ${this.value}`);
      this.getSiblingRadios().map((radio) => (radio.checked = false));
      this.host.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true }));
      this.host.dispatchEvent(new InputEvent('change', { bubbles: true, cancelable: true }));
    }
    if (this.input) {
      this.input.checked = this.checked;
      this.sixChange.emit();
    }
  }

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-radio-blur' }) sixBlur: EventEmitter<EmptyPayload>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'six-radio-change' }) sixChange: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-radio-focus' }) sixFocus: EventEmitter<EmptyPayload>;

  /** default state whether the radio button should be checked or not when resetting */
  private defaultState = false;

  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  componentWillLoad() {
    this.defaultState = this.checked;
  }

  /** Sets focus on the radio. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the radio. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.input.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    return this.input.validity.valid;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.checked = this.defaultState;
    this.input.setCustomValidity('');
    this.invalid = false;
  }

  getAllRadios() {
    const form = this.host.closest('six-form, form') || document.body;

    if (!this.name) return [];

    return [...form.querySelectorAll('six-radio')].filter(
      (radio: HTMLSixRadioElement) => radio.name === this.name
    ) as HTMLSixRadioElement[];
  }

  getSiblingRadios() {
    return this.getAllRadios().filter((radio) => radio !== this.host) as HTMLSixRadioElement[];
  }

  handleClick() {
    this.checked = this.input.checked;
  }

  handleBlur() {
    this.hasFocus = false;
    this.sixBlur.emit();
    Events.blur(this.host);
  }

  handleFocus() {
    this.hasFocus = true;
    this.sixFocus.emit();
    Events.focus(this.host);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this.host) + incr;
      if (index < 0) index = radios.length - 1;
      if (index > radios.length - 1) index = 0;

      this.getAllRadios().map((radio) => (radio.checked = false));
      radios[index].setFocus();
      radios[index].checked = true;

      event.preventDefault();
    }
  }

  handleMouseDown(event: MouseEvent) {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.input.focus();
  }

  render() {
    return (
      <label
        part="base"
        class={{
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--focused': this.hasFocus,
        }}
        htmlFor={this.inputId}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
      >
        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="5"></circle>
                </g>
              </g>
            </svg>
          </span>

          <input
            ref={(el) => (this.input = el)}
            id={this.inputId}
            type="radio"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            role="radio"
            aria-checked={this.checked ? 'true' : 'false'}
            aria-labelledby={this.labelId}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
          />
        </span>

        <span part="label" id={this.labelId} class="radio__label">
          <slot />
        </span>
      </label>
    );
  }
}
