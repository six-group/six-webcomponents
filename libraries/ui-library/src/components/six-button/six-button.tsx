import { Component, Element, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { submitForm } from '../../utils/form';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The button's label.
 * @slot prefix - Used to prepend an icon or similar element to the button.
 * @slot suffix - Used to append an icon or similar element to the button.
 *
 * @part base - The component's base wrapper.
 * @part prefix - The prefix container.
 * @part label - The button's label.
 * @part suffix - The suffix container.
 * @part caret - The button's caret.
 */

@Component({
  tag: 'six-button',
  styleUrl: 'six-button.scss',
  shadow: true,
})
export class SixButton {
  private nativeButton?: HTMLButtonElement | HTMLAnchorElement;

  @Element() host!: HTMLSixButtonElement;

  @State() hasFocus = false;
  @State() hasLabel = false;
  @State() hasPrefix = false;
  @State() hasSuffix = false;

  /** The button's type. */
  @Prop({ reflect: true }) type: 'secondary' | 'primary' | 'link' | 'success' | 'warning' | 'danger' | 'action' =
    'primary';

  /** The button's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to draw the button with a caret for use with dropdowns, popovers, etc. */
  @Prop() caret = false;

  /** Set to true to disable the button. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to draw the button in a loading state. */
  @Prop({ reflect: true }) loading = false;

  /** Set to true to draw a pill-style button with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** Set to true to draw a circle button. */
  @Prop({ reflect: true }) circle = false;

  /** Indicates if activating the button should submit the form. Ignored when `href` is set. */
  @Prop({ reflect: true }) submit = false;

  /** Indicates if activating the button should reset the form. */
  @Prop({ reflect: true }) reset = false;

  /** An optional name for the button. Ignored when `href` is set. */
  @Prop() name = '';

  /** An optional value for the button. Ignored when `href` is set. */
  @Prop() value = '';

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @Prop() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @Prop() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @Prop() download?: string;

  /** Emitted when the button loses focus. */
  @Event({ eventName: 'six-button-blur' }) sixBlur!: EventEmitter<EmptyPayload>;

  /** Emitted when the button gains focus. */
  @Event({ eventName: 'six-button-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  componentWillLoad() {
    this.handleSlotChange();
  }

  /** Sets focus on the button. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.nativeButton?.focus(options);
  }

  /** Removes focus from the button. */
  @Method()
  async removeFocus() {
    this.nativeButton?.blur();
  }

  private handleSlotChange = () => {
    this.hasLabel = hasSlot(this.host);
    this.hasPrefix = hasSlot(this.host, 'prefix');
    this.hasSuffix = hasSlot(this.host, 'suffix');
  };

  private handleBlur = () => {
    this.hasFocus = false;
    this.sixBlur.emit();
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.sixFocus.emit();
  };

  private handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.submit) {
      event.preventDefault();
      submitForm(this.host);
    }
  };

  render() {
    const isLink = this.href != null;
    const isButton = !isLink;
    const Button = isLink ? 'a' : 'button';

    return (
      <div onClick={this.handleClick} class={{ 'button-wrapper--disabled': this.disabled }}>
        <Button
          ref={(el) => (this.nativeButton = el)}
          part="base"
          class={{
            button: true,

            // Types
            'button--secondary': this.type === 'secondary',
            'button--primary': this.type === 'primary',
            'button--link': this.type === 'link',
            'button--success': this.type === 'success',
            'button--warning': this.type === 'warning',
            'button--danger': this.type === 'danger',
            'button--action': this.type === 'action',

            // Sizes
            'button--small': this.size === 'small',
            'button--medium': this.size === 'medium',
            'button--large': this.size === 'large',

            // Modifiers
            'button--caret': this.caret,
            'button--circle': this.circle,
            'button--disabled': this.disabled,
            'button--focused': this.hasFocus,
            'button--loading': this.loading,
            'button--pill': this.pill,
            'button--has-label': this.hasLabel,
            'button--has-prefix': this.hasPrefix,
            'button--has-suffix': this.hasSuffix,
          }}
          disabled={isButton ? this.disabled : undefined}
          type={isButton ? (this.submit ? 'submit' : this.reset ? 'reset' : 'button') : undefined}
          name={isButton ? this.name : undefined}
          value={isButton ? this.value : undefined}
          href={isLink ? this.href : undefined}
          target={isLink && this.target != null ? this.target : undefined}
          download={isLink && this.download != null ? this.download : undefined}
          rel={isLink && this.target != null ? 'noreferrer noopener' : undefined}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onClick={this.handleClick}
          data-testid="button"
        >
          <span part="prefix" class="button__prefix">
            <slot onSlotchange={this.handleSlotChange} name="prefix" />
          </span>
          <span part="label" class="button__label">
            <slot onSlotchange={this.handleSlotChange} />
          </span>
          <span part="suffix" class="button__suffix">
            <slot onSlotchange={this.handleSlotChange} name="suffix" />
          </span>
          {this.caret && (
            <span part="caret" class="button__caret">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          )}

          {this.loading && <six-spinner />}
        </Button>
      </div>
    );
  }
}
