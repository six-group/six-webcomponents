import { Component, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';

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
  private inputElement?: HTMLInputElement;

  @State() hasFocus = false;

  /** The switch's name attribute. */
  @Prop() name = '';

  /** The switch's value attribute. */
  @Prop() value = 'on';

  /** Set to true to disable the switch. */
  @Prop() disabled = false;

  /** Set to true to make the switch a required field. */
  @Prop() required = false;

  /** Set to true to draw the switch in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @Prop({ mutable: true, reflect: true }) invalid = false;

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

  /** default value the switch will be reverted to when reset is executed */
  private defaultValue = '';

  componentWillLoad() {
    this.defaultValue = this.value;
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

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.inputElement?.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    return this.inputElement?.validity.valid;
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    if (this.inputElement != null) {
      this.inputElement.setCustomValidity(message);
      this.invalid = !this.inputElement.checkValidity();
    }
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.value = this.defaultValue;
    this.inputElement?.setCustomValidity('');
    this.invalid = false;
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
    );
  }
}
