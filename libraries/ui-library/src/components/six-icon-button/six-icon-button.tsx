import { Component, h, Prop } from '@stencil/core';
import { focusVisible } from '../../utils/focus-visible';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'six-icon-button',
  styleUrl: 'six-icon-button.scss',
  shadow: true,
})
export class SixIconButton {
  private button?: HTMLButtonElement | HTMLAnchorElement;

  /** The name of the icon to draw. */
  @Prop({ reflect: true }) name?: string;

  /** The icon's size. */
  @Prop({ reflect: true }) size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge' = 'medium';

  /**
   * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
   * always include a label that describes what the icon button does.
   */
  @Prop({ reflect: true }) label?: string;

  /** Set to true to disable the button. */
  @Prop({ reflect: true }) disabled = false;

  /** HTML symbol code or entity. */
  @Prop({ reflect: true }) html?: string;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @Prop() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @Prop() target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @Prop() download?: string;

  componentDidLoad() {
    if (this.button != null) {
      focusVisible.observe(this.button);
    }
  }

  disconnectedCallback() {
    if (this.button != null) {
      focusVisible.unobserve(this.button);
    }
  }

  render() {
    const isLink = this.href != null;
    const isButton = !isLink;
    const Button = isLink ? 'a' : 'button';
    const html = this.html && <span innerHTML={this.html} />;

    return (
      <div onClick={this.handleClickEvent} class={{ 'icon-button-wrapper--disabled': this.disabled }}>
        <Button
          ref={(el) => (this.button = el)}
          part="base"
          disabled={isButton ? this.disabled : undefined}
          tabindex={this.disabled ? '-1' : undefined}
          class={{
            'icon-button': true,
            'icon-button--disabled': this.disabled,
          }}
          type={isButton ? 'button' : undefined}
          aria-label={this.label}
          href={isLink ? this.href : undefined}
          target={isLink && this.target != null ? this.target : undefined}
          download={isLink && this.download != null ? this.download : undefined}
          rel={isLink && this.target != null ? 'noreferrer noopener' : undefined}
        >
          <six-icon aria-hidden="true" size={this.size}>
            {this.name}
          </six-icon>
          <slot />
          {html}
        </Button>
      </div>
    );
  }

  private handleClickEvent = (event: Event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
}
