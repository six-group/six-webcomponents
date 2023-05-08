import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';
import FormControl from '../../functional-components/form-control/form-control';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';

const ICON_SIZES: Record<'small' | 'medium' | 'large', 'xSmall' | 'small' | 'medium'> = {
  large: 'medium',
  medium: 'small',
  small: 'xSmall',
};

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot label - The input's label. Alternatively, you can use the label prop.
 * @slot prefix - Used to prepend an icon or similar element to the input.
 * @slot suffix - Used to append an icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Help text that describes how to use the input. Alternatively, you can use the help-text prop.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label, input, and help-text.
 * @part label - The input label.
 * @part input - The input control.
 * @part prefix - The input prefix container.
 * @part clear-button - The clear button.
 * @part password-toggle-button - The password toggle button.
 * @part suffix - The input suffix container.
 * @part help-text - The input help text.
 */

@Component({
  tag: 'six-input',
  styleUrl: 'six-input.scss',
  shadow: true,
})
export class SixInput {
  inputId = `input-${++id}`;
  labelId = `input-label-${id}`;
  helpTextId = `input-help-text-${id}`;
  errorTextId = `input-error-text-${id}`;
  input: HTMLInputElement;
  customErrorText = '';
  customValidation = false;

  readonly eventListeners = new EventListeners();

  @Element() host: HTMLSixInputElement;

  @State() hasFocus = false;
  @State() hasHelpTextSlot = false;
  @State() hasErrorTextSlot = false;
  @State() hasLabelSlot = false;
  @State() isPasswordVisible = false;

  /** The input's type. */
  @Prop({ reflect: true }) type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' = 'text';

  /** The input's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The input's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** The input's value attribute. */
  @Prop({ mutable: true, reflect: true }) value = '';

  /** Set to true to draw a pill-style input with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** The input's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The input's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** The input's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** The input's placeholder text. */
  @Prop() placeholder: string;

  /** Set to true to disable the input. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to make the input readonly. */
  @Prop({ reflect: true }) readonly = false;

  /** The minimum length of input that will be considered valid. */
  @Prop({ reflect: true }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @Prop({ reflect: true }) maxlength: number;

  /** The input's minimum value. */
  @Prop({ reflect: true }) min: number;

  /** The input's maximum value. */
  @Prop({ reflect: true }) max: number;

  /** The input's step attribute. */
  @Prop({ reflect: true }) step: number;

  /** A pattern to validate input against. */
  @Prop({ reflect: true }) pattern: string;

  /** Set to true to make the input a required field. */
  @Prop({ reflect: true }) required: boolean;

  /** The input's autocaptialize attribute. */
  @Prop() autocapitalize: string;

  /** The input's autocorrect attribute. */
  @Prop() autocorrect: string;

  /** The input's autocomplete attribute. */
  @Prop() autocomplete: string;

  /** The input's autofocus attribute. */
  @Prop() autofocus: boolean;

  /** Enables spell checking on the input. */
  @Prop() spellcheck: boolean;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
   * `required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API.
   */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  /** Set to true to add a password toggle button for password inputs. */
  @Prop() togglePassword = false;

  /** The input's inputmode attribute. */
  @Prop() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Set to render as line */
  @Prop() line = false;

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  @Watch('helpText')
  @Watch('errorText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  @Watch('value')
  handleValueChange() {
    if (!this.input) {
      return;
    }
    this.input.value = this.value;
    this.invalid = !this.input.checkValidity();
    this.sixValueChange.emit();
  }

  /** Emitted when the control's value changes. Access the new value via event.target.value. */
  @Event({ eventName: 'six-input-change' }) sixChange: EventEmitter<EmptyPayload>;

  /** Emitted when the clear button is activated. */
  @Event({ eventName: 'six-input-clear' }) sixClear: EventEmitter<EmptyPayload>;

  /** Emitted when the control receives input. Access the new value via event.target.value.  */
  @Event({ eventName: 'six-input-input' }) sixInput: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-input-focus' }) sixFocus: EventEmitter<EmptyPayload>;

  /** Emitted when the control loses focus. Access the new value via event.target.value. */
  @Event({ eventName: 'six-input-blur' }) sixBlur: EventEmitter<EmptyPayload>;

  /**
   * Emitted whenever the value changes. Access the new value via event.target.value.
   * six-input-value-change will emit whenever the value changes.
   * So be it on input or when dynamically set. six-input-input will only be emitted when the user enters data,
   * but not when a value is dynamically set. six-input-change will only be emitted when the user either presses enter
   * or leaves the input field after entering some data.
   * */
  @Event({ eventName: 'six-input-value-change' }) sixValueChange: EventEmitter<EmptyPayload>;

  /** defaultValue which the input will be reverted to when executing reset */
  private defaultValue = '';

  connectedCallback() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);

    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    this.defaultValue = this.value;
    this.handleSlotChange();
  }

  componentDidLoad() {
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

  /** Selects all the text in the input. */
  @Method()
  async select() {
    return this.input.select();
  }

  /** Sets the start and end positions of the text selection (0-based). */
  @Method()
  async setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Replaces a range of text with a new string. */
  @Method()
  async setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve'
  ) {
    this.input.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.sixChange.emit();
      this.sixInput.emit();
    }
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

  /** Returns the native input's validity */
  @Method()
  async getValidity() {
    return this.input.validity;
  }

  /** Returns the native input's validity */
  @Method()
  async isValid() {
    return this.input.validity.valid;
  }

  /** Returns the native input's validationMessage */
  @Method()
  async getValidationMessage() {
    return this.input.validationMessage;
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

  handleChange() {
    this.value = this.input.value;
    this.sixChange.emit();
  }

  handleInput() {
    this.value = this.input.value;
    this.sixInput.emit();
  }

  handleInvalid() {
    this.invalid = true;
  }

  handleBlur() {
    this.hasFocus = false;
    this.sixBlur.emit();
  }

  handleFocus() {
    this.hasFocus = true;
    this.sixFocus.emit();
  }

  handleClearClick(event: MouseEvent) {
    this.value = '';
    this.sixClear.emit();
    this.sixInput.emit();
    this.sixChange.emit();
    this.input.focus();

    event.stopPropagation();
  }

  handlePasswordToggle() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
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
        helpTextId={this.helpTextId}
        helpText={this.helpText}
        hasHelpTextSlot={this.hasHelpTextSlot}
        errorTextId={this.errorTextId}
        errorText={this.customErrorText ? this.customErrorText : this.errorText}
        hasErrorTextSlot={this.hasErrorTextSlot}
        size={this.size}
        disabled={this.disabled}
        required={this.required}
        displayError={this.displayError()}
      >
        <div
          part="base"
          class={{
            input: true,

            // Sizes
            'input--small': this.size === 'small',
            'input--medium': this.size === 'medium',
            'input--large': this.size === 'large',

            // States
            'input--line': this.line,
            'input--pill': this.pill,
            'input--disabled': this.disabled,
            'input--focused': this.hasFocus,
            'input--empty': this.value?.length === 0,
            'input--invalid': this.invalid,
          }}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix" />
          </span>

          <input
            part="input"
            ref={(el) => (this.input = el)}
            id={this.inputId}
            size={1} // needed for firefox to overrule the default of 20
            class={{
              input__control: true,
              input__control__prefix: hasSlot(this.host, 'prefix'),
            }}
            type={this.type === 'password' && this.isPasswordVisible ? 'text' : this.type}
            name={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readonly={this.readonly}
            minLength={this.minlength}
            maxLength={this.maxlength}
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            autoCapitalize={this.autocapitalize}
            autoComplete={this.autocomplete}
            autoCorrect={this.autocorrect}
            autoFocus={this.autofocus}
            spellcheck={this.spellcheck}
            pattern={this.pattern}
            required={this.required}
            inputMode={this.inputmode}
            aria-labelledby={this.labelId}
            aria-describedby={this.helpTextId}
            aria-invalid={this.invalid ? 'true' : 'false'}
            onChange={this.handleChange}
            onInput={this.handleInput}
            onInvalid={this.handleInvalid}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            data-testid="input-control"
          />

          {this.clearable && (
            <button
              part="clear-button"
              class="input__clear"
              type="button"
              onClick={this.handleClearClick}
              tabindex="-1"
              data-testid="input-clear-button"
            >
              <slot name="clear-icon">
                <six-icon size={ICON_SIZES[this.size]}>clear</six-icon>
              </slot>
            </button>
          )}

          {this.togglePassword && (
            <button
              part="password-toggle-button"
              class="input__password-toggle"
              type="button"
              onClick={this.handlePasswordToggle}
              tabindex="-1"
            >
              {this.isPasswordVisible ? (
                <slot name="show-password-icon">
                  <six-icon size={ICON_SIZES[this.size]}>visibility_off</six-icon>
                </slot>
              ) : (
                <slot name="hide-password-icon">
                  <six-icon size={ICON_SIZES[this.size]}>visibility</six-icon>
                </slot>
              )}
            </button>
          )}

          <span part="suffix" class="input__suffix">
            <slot name="suffix" />
          </span>
        </div>
      </FormControl>
    );
  }
}
