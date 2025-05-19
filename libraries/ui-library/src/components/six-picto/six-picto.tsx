import { Component, Element, h, Host, Prop } from '@stencil/core';

/**
 * @since 1.1
 * @status stable
 *
 * @part icon - The component's icon wrapper.
 */

@Component({
  tag: 'six-picto',
  styleUrl: 'six-picto.scss',
  shadow: true,
})
export class SixPicto {
  @Element() host!: HTMLSixPictoElement;

  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge' | '4xl' = 'medium';

  render() {
    const iconName = this.host.innerHTML?.trim();
    return (
      <Host>
        <div
          part="icon"
          class={{
            [`is-size-${this.size}`]: typeof this.size != null || this.size.trim() !== '',
            [`${iconName}`]: true,
          }}
        />
      </Host>
    );
  }
}
