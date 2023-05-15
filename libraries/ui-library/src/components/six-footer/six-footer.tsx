import { Component, h } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the content of the footer.
 */

@Component({
  tag: 'six-footer',
  styleUrl: 'six-footer.scss',
  shadow: true,
})
export class SixFooter {
  render() {
    return (
      <footer class="six-footer">
        <slot />
      </footer>
    );
  }
}
