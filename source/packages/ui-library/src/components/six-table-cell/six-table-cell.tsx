import { Component, h, Host } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the content of the cell.
 */

@Component({
  tag: 'six-table-cell',
  styleUrl: 'six-table-cell.scss',
  shadow: true,
})
export class SixTableCell {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
