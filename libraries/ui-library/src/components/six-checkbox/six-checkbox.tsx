import { Component, Event, EventEmitter, Method, Prop, State, Watch, h, Element } from '@stencil/core';
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
 * @slot label - The checkbox label.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 *
 * @part base - The component's base wrapper.
 * @part control - The checkbox control.
 * @part checked-icon - The container the wraps the checked icon.
 * @part indeterminate-icon - The container that wraps the indeterminate icon.
 * @part text - The checkbox text rendered to the right.
 */

@Component({
  tag: 'six-checkbox',
  styleUrl: 'six-checkbox.scss',
  shadow: true,
})
export class SixCheckbox {
  inputId = `checkbox-${++id}`;
  labelId = `checkbox-label-${id}`;
  textId = `checkbox-text-${id}`;
  errorTextId = `input-error-text-${id}`;
  input: HTMLInputElement;
  customErrorText = '';
  customValidation = false;

  readonly eventListeners = new EventListeners();

  @Element() host: HTMLSixCheckboxElement;

  @State() hasFocus = false;
  @State() hasLabelSlot = false;
  @State() hasErrorTextSlot = false;

  /** The checkbox's name attribute. */
  @Prop() name: string;

  /** The checkbox's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the checkbox. */
  @Prop() disabled = false;

  /** Set to true to make the checkbox a required field. */
  @Prop() required = false;

  /** The checkbox label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The checkbox's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** Set to true to draw the checkbox in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Set to true to draw the checkbox in an indeterminate state. */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-checkbox-blur' }) sixBlur: EventEmitter<EmptyPayload>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'six-checkbox-change' }) sixChange: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-checkbox-focus' }) sixFocus: EventEmitter<EmptyPayload>;

  @Watch('checked')
  @Watch('indeterminate')
  handleCheckedChange() {
    if (!this.input) {
      return;
    }
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.invalid = !this.input.checkValidity();
    this.sixChange.emit();
  }

  @Watch('errorText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  /** default state whether the radio button should be checked or not when resetting */
  private defaultState = false;

  connectedCallback() {
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);

    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  disconnectedCallback() {
    this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  componentWillLoad() {
    this.defaultState = this.checked;
    this.handleSlotChange();
  }

  componentDidLoad() {
    this.input.indeterminate = this.indeterminate;
    this.eventListeners.add(this.input, 'invalid', (event) => {
      if (this.customValidation || (!this.hasErrorTextSlot && !this.errorText && !this.customErrorText)) {
        this.customErrorText = this.input.validationMessage;
      }
      event.preventDefault();
    });
  }

  /** Sets focus on the checkbox. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
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
    this.customErrorText = '';
    this.customValidation = message !== '';
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.checked = this.defaultState;
    this.customErrorText = '';
    this.customValidation = false;
    this.input.setCustomValidity('');
    this.invalid = false;
  }

  handleChange() {
    this.checked = this.input.checked;
    this.indeterminate = false;
  }

  handleBlur() {
    this.hasFocus = false;
    this.sixBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.sixFocus.emit();
  }

  handleMouseDown(event: MouseEvent) {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.input.focus();
  }

  handleInvalid() {
    this.invalid = true;
  }

  handleSlotChange() {
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
    this.hasLabelSlot = hasSlot(this.host, 'label');
  }

  displayError() {
    return this.invalid && (!this.errorOnBlur || !this.hasFocus);
  }

  render() {
    return (
      <FormControl
        inputId={this.inputId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={this.hasLabelSlot}
        errorTextId={this.errorTextId}
        errorText={this.customErrorText ? this.customErrorText : this.errorText}
        hasErrorTextSlot={this.hasErrorTextSlot}
        size="medium"
        disabled={this.disabled}
        required={this.required}
        displayError={this.displayError()}
      >
        <label
          part="base"
          class={{
            checkbox: true,
            'checkbox--checked': this.checked,
            'checkbox--disabled': this.disabled,
            'checkbox--focused': this.hasFocus,
            'checkbox--invalid': this.invalid,
            'checkbox--indeterminate': this.indeterminate,
          }}
          htmlFor={this.inputId}
          onMouseDown={this.handleMouseDown}
        >
          <span part="control" class="checkbox__control">
            {this.checked && (
              <span part="checked-icon" class="checkbox__icon">
                <svg viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(3.428571, 3.428571)">
                        <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                        <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            )}

            {!this.checked && this.indeterminate && (
              <span part="indeterminate-icon" class="checkbox__icon">
                <svg viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(2.285714, 6.857143)">
                        <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            )}

            <input
              ref={(el) => (this.input = el)}
              id={this.inputId}
              type="checkbox"
              name={this.name}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              required={this.required}
              role="checkbox"
              aria-checked={this.checked ? 'true' : 'false'}
              aria-labelledby={this.labelId}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onInvalid={this.handleInvalid}
            />
          </span>

          <span part="text" id={this.textId} class="checkbox__text">
            <slot />
          </span>
        </label>
      </FormControl>
    );
  }
}
