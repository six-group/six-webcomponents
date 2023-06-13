import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
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
  private inputId = `checkbox-${++id}`;
  private labelId = `checkbox-label-${id}`;
  private textId = `checkbox-text-${id}`;
  private errorTextId = `input-error-text-${id}`;
  private nativeInput?: HTMLInputElement;
  private eventListeners = new EventListeners();

  @Element() host!: HTMLSixCheckboxElement;

  @State() hasFocus = false;
  @State() hasLabelSlot = false;

  /** The checkbox's name attribute. */
  @Prop() name = '';

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop() value = 'on';

  /** Set to true to disable the checkbox. */
  @Prop() disabled = false;

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /** The label text. */
  @Prop() label = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText = '';

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** Set to true to draw the checkbox in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Set to true to draw the checkbox in an indeterminate state. */
  @Prop({ mutable: true, reflect: true }) indeterminate = false;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-checkbox-blur' }) sixBlur!: EventEmitter<EmptyPayload>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'six-checkbox-change' }) sixChange!: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-checkbox-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  @Watch('checked')
  @Watch('indeterminate')
  handleCheckedChange() {
    if (this.nativeInput == null) {
      return;
    }
    this.nativeInput.checked = this.checked;
    this.checked = this.nativeInput.checked;
    this.nativeInput.indeterminate = this.indeterminate;
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
    this.host.shadowRoot?.addEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.forward('six-checkbox-change', 'change', this.host);
    this.eventListeners.forward('six-checkbox-blur', 'blur', this.host);
    this.eventListeners.forward('six-checkbox-focus', 'focus', this.host);
  }

  disconnectedCallback() {
    this.host.shadowRoot?.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  componentWillLoad() {
    this.defaultState = this.checked;
    this.handleSlotChange();
  }

  componentDidLoad() {
    const nativeInput = this.nativeInput;
    if (nativeInput == null) {
      return;
    }

    nativeInput.indeterminate = this.indeterminate;
  }

  /** Sets focus on the checkbox. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.nativeInput?.focus(options);
  }

  /** Removes focus from the checkbox. */
  @Method()
  async removeFocus() {
    this.nativeInput?.blur();
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.checked = this.defaultState;
  }

  private handleChange = () => {
    if (this.nativeInput != null) {
      this.checked = this.nativeInput.checked;
      this.indeterminate = false;
    }
  };

  private handleBlur = () => {
    this.hasFocus = false;
    this.sixBlur.emit();
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.sixFocus.emit();
  };

  private handleMouseDown = (event: MouseEvent) => {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.nativeInput?.focus();
  };

  private handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.host, 'label');
  }

  render() {
    return (
      <FormControl
        inputId={this.inputId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={this.hasLabelSlot}
        errorTextId={this.errorTextId}
        errorText={this.errorText}
        size="medium"
        disabled={this.disabled}
        required={this.required}
        displayError={this.invalid}
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
              ref={(el) => (this.nativeInput = el)}
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
