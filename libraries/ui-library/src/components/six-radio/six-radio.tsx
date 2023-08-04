import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';

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
  private inputId = `radio-${++id}`;
  private labelId = `radio-label-${id}`;
  private nativeInput?: HTMLInputElement;
  private eventListeners = new EventListeners();

  @Element() host!: HTMLSixRadioElement;

  @State() hasFocus = false;

  /** The radio's name attribute. */
  @Prop() name = '';

  /** The radio's value attribute. */
  @Prop({ reflect: true }) value = 'on';

  /** Set to true to disable the radio. */
  @Prop() disabled = false;

  /** Set to true to draw the radio in a checked state. */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  @Watch('checked')
  handleCheckedChange() {
    if (this.checked) {
      this.getSiblingRadios().forEach((radio) => (radio.checked = false));
    }
    if (this.nativeInput != null) {
      this.nativeInput.checked = this.checked;
    }
  }

  @Watch('name')
  handleNameChange(name: string) {
    if (this.nativeInput != null) {
      this.nativeInput.name = name;
    }
  }

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-radio-blur' }) sixBlur!: EventEmitter<EmptyPayload>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'six-radio-change' }) sixChange!: EventEmitter<EmptyPayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-radio-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.eventListeners.forward('six-radio-change', 'change', this.host);
    this.eventListeners.forward('six-radio-blur', 'blur', this.host);
    this.eventListeners.forward('six-radio-focus', 'focus', this.host);
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  /** Sets focus on the radio. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.nativeInput?.focus(options);
  }

  /** Removes focus from the radio. */
  @Method()
  async removeFocus() {
    this.nativeInput?.blur();
  }

  private getAllRadios() {
    const form = this.host.closest('form') || document.body;

    if (this.name === '') return [];

    return [...form.querySelectorAll('six-radio')].filter(
      (radio: HTMLSixRadioElement) => radio.name === this.name
    ) as HTMLSixRadioElement[];
  }

  private getSiblingRadios() {
    return this.getAllRadios().filter((radio) => radio !== this.host) as HTMLSixRadioElement[];
  }

  private handleClick = () => {
    if (this.nativeInput != null) {
      this.checked = this.nativeInput.checked;
      this.sixChange.emit();
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

  private handleKeyDown = (keyboardEvent: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(keyboardEvent.key)) {
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const incr = ['ArrowUp', 'ArrowLeft'].includes(keyboardEvent.key) ? -1 : 1;
      let index = radios.indexOf(this.host) + incr;
      if (index < 0) index = radios.length - 1;
      if (index > radios.length - 1) index = 0;

      this.getAllRadios().forEach((radio) => (radio.checked = false));
      radios[index].setFocus();
      radios[index].checked = true;
      radios[index].dispatchEvent(new CustomEvent('six-radio-change', { bubbles: true, cancelable: true }));
      keyboardEvent.preventDefault();
    }
  };

  private handleMouseDown = (event: MouseEvent) => {
    // Prevent clicks on the label from briefly blurring the input
    event.preventDefault();
    this.nativeInput?.focus();
  };

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
            ref={(el) => (this.nativeInput = el)}
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
