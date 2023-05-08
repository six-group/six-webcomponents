import { Component, h } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'six-menu-divider',
  styleUrl: 'six-menu-divider.scss',
  shadow: true,
})
export class SixMenuDivider {
  render() {
    return <div part="base" class="menu-divider" role="separator" aria-hidden="true" />;
  }
}
