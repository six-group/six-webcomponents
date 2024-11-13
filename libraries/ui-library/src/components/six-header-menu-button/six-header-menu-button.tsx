import { Component, h, Prop } from '@stencil/core';

/**
 * @since 4.2.7
 * @status beta
 */

@Component({
  tag: 'six-header-menu-button',
  styleUrl: 'six-header-menu-button.scss',
  shadow: true,
})
export class SixHeaderMenuButton {
  /**
   * The icon of the menu button.
   */
  @Prop({ reflect: true }) icon = '';

  render() {
    return (
      <six-button type="secondary">
        <span slot="suffix">
          <six-icon>{this.icon}</six-icon>
        </span>
        <slot />
      </six-button>
    );
  }
}
