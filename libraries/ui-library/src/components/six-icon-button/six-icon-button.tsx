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
  private button?: HTMLButtonElement;

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
    const html = this.html && <span innerHTML={this.html} />;

    return (
      <div onClick={this.handleClickEvent} class={{ 'icon-button-wrapper--disabled': this.disabled }}>
        <button
          ref={(el) => (this.button = el)}
          part="base"
          disabled={this.disabled}
          class={{
            'icon-button': true,
            'icon-button--disabled': this.disabled,
          }}
          type="button"
          aria-label={this.label}
        >
          <six-icon aria-hidden="true" size={this.size}>
            {this.name}
          </six-icon>
          <slot />
          {html}
        </button>
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
