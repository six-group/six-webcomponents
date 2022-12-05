import { Component, h, Host } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the cells of the row.
 */

@Component({
  tag: 'six-table-row',
  styleUrl: 'six-table-row.scss',
  shadow: true,
})
export class SixTableRow {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
