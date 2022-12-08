import { Component, Host, h } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the cells of the header.
 */

@Component({
  tag: 'six-table-header',
  styleUrl: 'six-table-header.scss',
  shadow: true,
})
export class SixTableHeader {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
