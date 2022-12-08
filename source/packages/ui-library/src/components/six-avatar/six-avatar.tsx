import { Component, h, Prop, State } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the avatar icon.
 * @part initials - The container that wraps the avatar initials.
 * @part image - The avatar image.
 */
@Component({
  tag: 'six-avatar',
  styleUrl: 'six-avatar.scss',
  shadow: true,
})
export class SixAvatar {
  @State() hasError = false;

  /** The image source to use for the avatar. */
  @Prop() image = '';

  /** Alternative text for the image. */
  @Prop() alt = '';

  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  @Prop() initials = '';

  /** The shape of the avatar. */
  @Prop() shape: 'circle' | 'square' | 'rounded' = 'circle';

  connectedCallback() {
    this.handleImageError = this.handleImageError.bind(this);
  }

  handleImageError() {
    this.hasError = true;
  }

  render() {
    return (
      <div
        part="base"
        class={{
          avatar: true,
          'avatar--circle': this.shape === 'circle',
          'avatar--rounded': this.shape === 'rounded',
          'avatar--square': this.shape === 'square',
        }}
        role="image"
        aria-label={this.alt}
        tabIndex={0}
      >
        {!this.initials && (
          <div part="icon" class="avatar__icon">
            <slot name="icon">
              <six-icon>person</six-icon>
            </slot>
          </div>
        )}

        {this.initials && (
          <div part="initials" class="avatar__initials">
            {this.initials}
          </div>
        )}

        {this.image && !this.hasError && (
          <img part="image" class="avatar__image" src={this.image} onError={this.handleImageError} />
        )}
      </div>
    );
  }
}
