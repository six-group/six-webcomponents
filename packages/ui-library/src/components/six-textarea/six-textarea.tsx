import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import FormControl from '../../functional-components/form-control/form-control';
import { hasSlot } from '../../utils/slot';
import { EventListeners } from '../../utils/event-listeners';
import { EmptyPayload } from '../../utils/types';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot label - The textarea's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the input.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label, textarea, and help text.
 * @part label - The textarea label.
 * @part textarea - The textarea control.
 * @part help-text - The textarea help text.
 */
@Component({
  tag: 'six-textarea',
  styleUrl: 'six-textarea.scss',
  shadow: true,
})
export class SixTextarea {
  inputId = `textarea-${++id}`;
  labelId = `textarea-label-${id}`;
  helpTextId = `textarea-help-text-${id}`;
  errorTextId = `input-error-text-${id}`;
  resizeObserver: ResizeObserver;
  textarea: HTMLTextAreaElement;
  customErrorText = '';
  customValidation = false;

  readonly eventListeners = new EventListeners();

  @Element() host: HTMLSixTextareaElement;

  @State() hasFocus = false;
  @State() hasHelpTextSlot = false;
  @State() hasErrorTextSlot = false;
  @State() hasLabelSlot = false;

  /** The textarea's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The textarea's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** The textarea's value attribute. */
  @Prop({ mutable: true, reflect: true }) value = '';

  /** The textarea's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The textarea's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** The textarea's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** The textarea's placeholder text. */
  @Prop() placeholder: string;

  /** The number of rows to display by default. */
  @Prop() rows = 4;

  /** Controls how the textarea can be resized. */
  @Prop() resize: 'none' | 'vertical' | 'auto' = 'vertical';

  /** Set to true to disable the textarea. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true for a readonly textarea. */
  @Prop({ reflect: true }) readonly = false;

  /** The minimum length of input that will be considered valid. */
  @Prop({ reflect: true }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @Prop({ reflect: true }) maxlength: number;

  /** The textarea's required attribute. */
  @Prop({ reflect: true }) required: boolean;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `required`,
   * `minlength`, and `maxlength` using the browser's constraint validation API.
   */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  /** The textarea's autocaptialize attribute. */
  @Prop() autocapitalize: string;

  /** The textarea's autocorrect attribute. */
  @Prop() autocorrect: string;

  /** The textarea's autocomplete attribute. */
  @Prop() autocomplete: string;

  /** The textarea's autofocus attribute. */
  @Prop() autofocus: boolean;

  /** The textarea's spellcheck attribute. */
  @Prop() spellcheck: boolean;

  /** The textarea's inputmode attribute. */
  @Prop() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** Emitted when the control's value changes. Access the new value via event.target.value. */
  @Event({ eventName: 'six-textarea-change' }) sixChange: EventEmitter<EmptyPayload>;

  /** Emitted when the control receives input. Access the new value via event.target.value. */
  @Event({ eventName: 'six-textarea-input' }) sixInput: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-textarea-focus' }) sixFocus: EventEmitter<EmptyPayload>;

  /** Emitted when the control loses focus. Access the new value via event.target.value. */
  @Event({ eventName: 'six-textarea-blur' }) sixBlur: EventEmitter<EmptyPayload>;

  /**
   * Emitted whenever the value changes. Access the new value via event.target.value.
   * six-textarea-value-change will emit whenever the value changes.
   * So be it on textarea or when dynamically set. six-textarea-input will only be emitted when the user enters data,
   * but not when a value is dynamically set. six-textarea-change will only be emitted when the user either presses enter
   * or leaves the textarea field after entering some data.
   * */

  @Event({ eventName: 'six-textarea-value-change' }) sixValueChange: EventEmitter<EmptyPayload>;

  @Watch('helpText')
  @Watch('errorText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  @Watch('rows')
  handleRowsChange() {
    if (this.textarea) {
      this.setTextareaHeight();
    }
  }

  @Watch('value')
  handleValueChange() {
    if (!this.textarea) {
      return;
    }
    this.textarea.value = this.value;
    this.invalid = !this.textarea.checkValidity();
    this.sixValueChange.emit();
  }

  /** default value the textarea will be reverted to when reset is executed */
  private defaultValue = '';

  connectedCallback() {
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);

    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    this.defaultValue = this.value || '';
    this.handleSlotChange();
  }

  componentDidLoad() {
    this.setTextareaHeight();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.resizeObserver.observe(this.textarea);
    this.eventListeners.add(this.textarea, 'invalid', (event) => {
      if (this.customValidation || (!this.hasErrorTextSlot && !this.errorText && !this.customErrorText)) {
        this.customErrorText = this.textarea.validationMessage;
      }
      event.preventDefault();
    });
  }

  disconnectedCallback() {
    this.resizeObserver.unobserve(this.textarea);
    this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  /** Sets focus on the textarea. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.textarea.focus(options);
  }

  /** Removes focus fromt the textarea. */
  @Method()
  async removeFocus() {
    this.textarea.blur();
  }

  /** Selects all the text in the input. */
  @Method()
  async select() {
    return this.textarea.select();
  }

  /** Sets the start and end positions of the text selection (0-based). */
  @Method()
  async setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none',
  ) {
    return this.textarea.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Replaces a range of text with a new string. */
  @Method()
  async setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve',
  ) {
    this.textarea.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.textarea.value) {
      this.value = this.textarea.value;
      this.setTextareaHeight();
      this.sixChange.emit();
      this.sixInput.emit();
    }
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.textarea.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    return this.textarea.validity.valid;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    this.customErrorText = '';
    this.customValidation = message !== '';
    this.textarea.setCustomValidity(message);
    this.invalid = !this.textarea.checkValidity();
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.value = this.defaultValue;
    this.customErrorText = '';
    this.customValidation = false;
    this.textarea.setCustomValidity('');
    this.invalid = false;
  }

  handleChange() {
    this.sixChange.emit();
  }

  handleInput() {
    this.value = this.textarea.value;
    this.setTextareaHeight();
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

  handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.host, 'label');
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  }

  setTextareaHeight() {
    if (this.resize === 'auto') {
      this.textarea.style.height = 'auto';
      this.textarea.style.height = this.textarea.scrollHeight + 'px';
    } else {
      this.textarea.style.height = undefined;
    }
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
            textarea: true,

            // Sizes
            'textarea--small': this.size === 'small',
            'textarea--medium': this.size === 'medium',
            'textarea--large': this.size === 'large',

            // States
            'textarea--disabled': this.disabled,
            'textarea--focused': this.hasFocus,
            'textarea--empty': this.value?.length === 0,
            'textarea--invalid': this.invalid,

            // Modifiers
            'textarea--resize-none': this.resize === 'none',
            'textarea--resize-vertical': this.resize === 'vertical',
            'textarea--resize-auto': this.resize === 'auto',
          }}
        >
          <textarea
            part="textarea"
            ref={(el) => (this.textarea = el)}
            id={this.inputId}
            class="textarea__control"
            name={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readOnly={this.readonly}
            rows={this.rows}
            minLength={this.minlength}
            maxLength={this.maxlength}
            value={this.value}
            autoCapitalize={this.autocapitalize}
            autoCorrect={this.autocorrect}
            autoFocus={this.autofocus}
            spellcheck={this.spellcheck}
            required={this.required}
            inputMode={this.inputmode}
            aria-labelledby={this.labelId}
            onChange={this.handleChange}
            onInput={this.handleInput}
            onInvalid={this.handleInvalid}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      </FormControl>
    );
  }
}
