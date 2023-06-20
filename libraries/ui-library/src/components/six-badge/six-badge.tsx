import { Component, Prop, h } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The badge's content.
 *
 * @part base - The base wrapper
 */

@Component({
  tag: 'six-badge',
  styleUrl: 'six-badge.scss',
  shadow: true,
})
export class SixBadge {
  /** The badge's type. */
  @Prop() type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'action' = 'primary';

  /** Set to true to draw a pill-style badge with rounded edges. */
  @Prop() pill = false;

  /** Set to true to make the badge pulsate to draw attention. */
  @Prop() pulse = false;

  render() {
    return (
      <span
        part="base"
        class={{
          badge: true,

          // Types
          'badge--primary': this.type === 'primary',
          'badge--secondary': this.type === 'secondary',
          'badge--success': this.type === 'success',
          'badge--warning': this.type === 'warning',
          'badge--danger': this.type === 'danger',
          'badge--action': this.type === 'action',
          'badge--info': this.type === 'info',
          'badge--pill': this.pill,
          'badge--pulse': this.pulse,
        }}
        role="status"
      >
        <slot />
      </span>
    );
  }
}
