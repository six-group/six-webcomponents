import { Component, h } from '@stencil/core';

/**
 * @since 4.0
 * @status beta
 *
 * @slot default - The error's message content
 */

@Component({
  tag: 'six-error',
  styleUrl: 'six-error.scss',
  shadow: true,
})
export class SixError {
  render() {
    return (
      <div class="six-error-container">
        <slot />
      </div>
    );
  }
}
