import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @since 4.2.7
 * @status stable
 */

@Component({
  tag: 'six-header-item',
  styleUrl: 'six-header-item.scss',
  shadow: true,
})
export class SixHeaderItem {
  /**
   * Indicates whether the item is styled as active.
   * When set to `true`, a border is displayed below the trigger element.
   *
   * Use <code>six-header-dropdown-item</code> to automatically set the active
   * state for dropdowns.
   */
  @Prop({ reflect: true }) active = false;

  render() {
    return (
      <Host class={{ 'six-header-item--active': this.active }}>
        <slot />
      </Host>
    );
  }
}
