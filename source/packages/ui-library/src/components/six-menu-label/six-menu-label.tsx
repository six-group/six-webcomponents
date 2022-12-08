import { Component, h } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The menu label's content.
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'six-menu-label',
  styleUrl: 'six-menu-label.scss',
  shadow: true,
})
export class SixMenuLabel {
  render() {
    return (
      <div part="base" class="menu-label">
        <slot />
      </div>
    );
  }
}
