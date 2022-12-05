import { Component, h, Prop } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the nested displayed text of the item.
 */

@Component({
  tag: 'six-sidebar-item',
  styleUrl: 'six-sidebar-item.scss',
  shadow: true,
})
export class SixSidebarItem {
  /** A unique value to store in the sidebar item. This can be used as a way to identify sidebar items when selected. */
  @Prop({ reflect: true }) value = '';

  /** Set to true to draw the item in a selected state. */
  @Prop({ reflect: true }) selected = false;

  /** Set to true to draw the sidebar item in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  render() {
    return (
      <div
        class={{
          'sidebar-item': true,
          'sidebar-item--selected': this.selected,
          'sidebar-item--disabled': this.disabled,
        }}
        role="menuitem"
        aria-selected={this.selected ? 'true' : 'false'}
        aria-disabled={this.disabled ? 'true' : 'false'}
      >
        <slot></slot>
      </div>
    );
  }
}
