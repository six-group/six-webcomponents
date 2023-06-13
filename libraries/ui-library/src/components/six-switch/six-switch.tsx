import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';
import FormControl from '../../functional-components/form-control/form-control';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The switch's label.
 *
 * @part base - The component's base wrapper.
 * @part control - The switch control.
 * @part thumb - The switch position indicator.
 * @part label - The switch label.
 */

@Component({
  tag: 'six-switch',
  styleUrl: 'six-switch.scss',
  shadow: true,
})
export class SixSwitch {
  private switchId = `switch-${++id}`;
  private labelId = `switch-label-${id}`;
  private errorTextId = `input-error-text-${id}`;

  private inputElement?: HTMLInputElement;
  private eventListeners = new EventListeners();

  @Element() host!: HTMLSixSwitchElement;

  @State() hasFocus = false;

  /** The switch's name attribute. */
  @Prop() name = '';

  /** The switch's value attribute. */
  @Prop() value = 'on';

  /** Set to true to disable the switch. */
  @Prop() disabled = false;

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /** Set to true to draw the switch in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** The label text. */
  @Prop() label = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText = '';

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  @Watch('checked')
  handleCheckedChange() {
    if (this.inputElement != null) {
      this.inputElement.checked = this.checked;
      this.checked = this.inputElement.checked;
    }
    this.sixChange.emit(this.checked);
  }

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-switch-blur' }) sixBlur!: EventEmitter<boolean>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'six-switch-change' }) sixChange!: EventEmitter<boolean>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-switch-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.eventListeners.forward('six-switch-change', 'change', this.host);
    this.eventListeners.forward('six-switch-blur', 'blur', this.host);
    this.eventListeners.forward('six-switch-focus', 'focus', this.host);
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  /** Sets focus on the switch. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.inputElement?.focus(options);
  }

  /** Removes focus from the switch. */
  @Method()
  async removeFocus() {
    this.inputElement?.blur();
  }

  private handleClick = () => {
    if (this.inputElement != null) {
      this.checked = this.inputElement.checked;
    }
  };

  private handleBlur = () => {
    this.hasFocus = false;
    this.sixBlur.emit(this.checked);
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.sixFocus.emit();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
    }
  };

  private handleMouseDown = (event: MouseEvent) => {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.inputElement?.focus();
  };

  render() {
    return (
      <FormControl
        inputId={this.switchId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={false}
        errorTextId={this.errorTextId}
        errorText={this.errorText}
        size="medium"
        disabled={this.disabled}
        required={this.required}
        displayError={this.invalid}
      >
        <label
          part="base"
          htmlFor={this.switchId}
          class={{
            switch: true,
            'switch--checked': this.checked,
            'switch--disabled': this.disabled,
            'switch--focused': this.hasFocus,
          }}
          onMouseDown={this.handleMouseDown}
        >
          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb" />

            <input
              ref={(el) => (this.inputElement = el)}
              id={this.switchId}
              type="checkbox"
              name={this.name}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              required={this.required}
              role="switch"
              aria-checked={this.checked ? 'true' : 'false'}
              aria-labelledby={this.labelId}
              onClick={this.handleClick}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              onKeyDown={this.handleKeyDown}
            />
          </span>

          <span part="label" id={this.labelId} class="switch__label">
            <slot />
          </span>
        </label>
      </FormControl>
    );
  }
}
