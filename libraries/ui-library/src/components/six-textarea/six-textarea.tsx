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
  private inputId = `textarea-${++id}`;
  private labelId = `textarea-label-${id}`;
  private helpTextId = `textarea-help-text-${id}`;
  private errorTextId = `input-error-text-${id}`;
  private nativeTextarea?: HTMLTextAreaElement;
  private customErrorText = '';
  private customValidation = false;
  private eventListeners = new EventListeners();
  private resizeObserver?: ResizeObserver;

  @Element() host!: HTMLSixTextareaElement;

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
  @Prop() placeholder?: string;

  /** The number of rows to display by default. */
  @Prop() rows = 4;

  /** Controls how the textarea can be resized. */
  @Prop() resize: 'none' | 'vertical' | 'auto' = 'vertical';

  /** Set to true to disable the textarea. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true for a readonly textarea. */
  @Prop({ reflect: true }) readonly = false;

  /** The minimum length of input that will be considered valid. */
  @Prop({ reflect: true }) minlength?: number;

  /** The maximum length of input that will be considered valid. */
  @Prop({ reflect: true }) maxlength?: number;

  /** The textarea's required attribute. */
  @Prop({ reflect: true }) required = false;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `required`,
   * `minlength`, and `maxlength` using the browser's constraint validation API.
   */
  @Prop({ mutable: true, reflect: true }) invalid = false;

  /** The textarea's autocaptialize attribute. */
  @Prop() autocapitalize = 'off';

  /** The textarea's autocorrect attribute. */
  @Prop() autocorrect: 'on' | 'off' = 'off';

  /** The textarea's autocomplete attribute. */
  @Prop() autocomplete = 'off';

  /** The textarea's autofocus attribute. */
  @Prop() autofocus = false;

  /** The textarea's spellcheck attribute. */
  @Prop() spellcheck = false;

  /** The textarea's inputmode attribute. */
  @Prop() inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** Emitted when the control's value changes. Access the new value via event.target.value. */
  @Event({ eventName: 'six-textarea-change' }) sixChange!: EventEmitter<EmptyPayload>;

  /** Emitted when the control receives input. Access the new value via event.target.value. */
  @Event({ eventName: 'six-textarea-input' }) sixInput!: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-textarea-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  /** Emitted when the control loses focus. Access the new value via event.target.value. */
  @Event({ eventName: 'six-textarea-blur' }) sixBlur!: EventEmitter<EmptyPayload>;

  @Watch('helpText')
  @Watch('errorText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  @Watch('rows')
  handleRowsChange() {
    if (this.nativeTextarea != null) {
      this.setTextareaHeight(this.nativeTextarea);
    }
  }

  @Watch('value')
  handleValueChange() {
    this.value = this.getValue();
    if (this.nativeTextarea != null) {
      if (this.nativeTextarea.value !== this.value) {
        this.nativeTextarea.value = this.value;
      }
      this.invalid = !this.nativeTextarea.checkValidity();
    }
  }

  /** default value the textarea will be reverted to when reset is executed */
  private defaultValue = '';

  connectedCallback() {
    this.host.shadowRoot?.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    this.defaultValue = this.value || '';
    this.handleSlotChange();
  }

  componentDidLoad() {
    const nativeTextarea = this.nativeTextarea;
    if (nativeTextarea == null) {
      return;
    }
    this.setTextareaHeight(nativeTextarea);
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight(nativeTextarea));
    this.resizeObserver.observe(nativeTextarea);
    this.eventListeners.add(nativeTextarea, 'invalid', (event) => {
      this.invalid = true;
      if (this.customValidation || (!this.hasErrorTextSlot && this.errorText === '' && this.customErrorText === '')) {
        this.customErrorText = nativeTextarea.validationMessage;
      }
      event.preventDefault();
    });
  }

  disconnectedCallback() {
    if (this.nativeTextarea != null) {
      this.resizeObserver?.unobserve(this.nativeTextarea);
    }
    this.host.shadowRoot?.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  /** Sets focus on the textarea. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.nativeTextarea?.focus(options);
  }

  /** Removes focus fromt the textarea. */
  @Method()
  async removeFocus() {
    this.nativeTextarea?.blur();
  }

  /** Selects all the text in the input. */
  @Method()
  async select() {
    return this.nativeTextarea?.select();
  }

  /** Sets the start and end positions of the text selection (0-based). */
  @Method()
  async setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    return this.nativeTextarea?.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Replaces a range of text with a new string. */
  @Method()
  async setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectMode: 'select' | 'start' | 'end' | 'preserve' = 'preserve'
  ) {
    if (this.nativeTextarea == null) {
      return;
    }
    this.nativeTextarea.setRangeText(replacement, start, end, selectMode);
    if (this.getValue() !== this.nativeTextarea.value) {
      this.value = this.nativeTextarea.value;
      this.setTextareaHeight(this.nativeTextarea);
      this.sixChange.emit();
      this.sixInput.emit();
    }
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.nativeTextarea?.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    if (this.nativeTextarea == null) {
      return true;
    }
    return this.nativeTextarea.validity.valid;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    this.customErrorText = '';
    this.customValidation = message !== '';
    if (this.nativeTextarea != null) {
      this.nativeTextarea.setCustomValidity(message);
      this.invalid = !this.nativeTextarea.checkValidity();
    }
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.value = this.defaultValue;
    this.customErrorText = '';
    this.customValidation = false;
    this.nativeTextarea?.setCustomValidity('');
    this.invalid = false;
  }

  private handleChange = () => {
    if (this.nativeTextarea != null) {
      this.value = this.nativeTextarea.value;
      this.sixChange.emit();
    }
  };

  private handleInput = () => {
    if (this.nativeTextarea != null) {
      this.value = this.nativeTextarea.value;
      this.setTextareaHeight(this.nativeTextarea);
      this.sixInput.emit();
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

  private handleSlotChange = () => {
    this.hasLabelSlot = hasSlot(this.host, 'label');
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
  };

  private setTextareaHeight(nativeTextarea: HTMLTextAreaElement) {
    if (this.resize === 'auto') {
      nativeTextarea.style.height = 'auto';
      const height = nativeTextarea.scrollHeight + 1;
      nativeTextarea.style.height = height + 'px';
    } else {
      nativeTextarea.style.height = '';
    }
  }

  private displayError() {
    return this.invalid && (!this.errorOnBlur || !this.hasFocus);
  }

  private getValue(): string {
    return (this.value ?? '').toString();
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
        errorText={this.customErrorText != null ? this.customErrorText : this.errorText}
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
            'textarea--empty': this.getValue().length === 0,
            'textarea--invalid': this.invalid,

            // Modifiers
            'textarea--resize-none': this.resize === 'none',
            'textarea--resize-vertical': this.resize === 'vertical',
            'textarea--resize-auto': this.resize === 'auto',
          }}
        >
          <textarea
            part="textarea"
            ref={(el) => (this.nativeTextarea = el)}
            id={this.inputId}
            class="textarea__control"
            name={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readOnly={this.readonly}
            rows={this.rows}
            minLength={this.minlength}
            maxLength={this.maxlength}
            value={this.getValue()}
            autoCapitalize={this.autocapitalize}
            autoCorrect={this.autocorrect}
            autoFocus={this.autofocus}
            spellcheck={this.spellcheck}
            required={this.required}
            inputMode={this.inputmode}
            aria-labelledby={this.labelId}
            onChange={this.handleChange}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      </FormControl>
    );
  }
}
