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

  /**
   * Provide if the item should be rendered as anchor tag.
   * Note, that the href is added automatically when using routerLink in Angular.
   */
  @Prop({ reflect: true }) href: string | undefined;

  render() {
    const Tag = this.href != null ? 'a' : 'div';
    return (
      <Tag
        class={{
          'sidebar-item': true,
          'sidebar-item--selected': this.selected,
          'sidebar-item--disabled': this.disabled,
        }}
        role="menuitem"
        href={this.href}
        aria-selected={this.selected ? 'true' : 'false'}
        aria-disabled={this.disabled ? 'true' : 'false'}
      >
        <slot></slot>
      </Tag>
    );
  }
}
