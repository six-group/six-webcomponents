import { Component, Host, h } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the content of the card.
 */

@Component({
  tag: 'six-card',
  styleUrl: 'six-card.scss',
  shadow: true,
})
export class SixCard {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
