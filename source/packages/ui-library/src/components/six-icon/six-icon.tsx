import { Component, h, Prop } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the material icon name.
 */

@Component({
  tag: 'six-icon',
  styleUrls: ['six-icon.scss'],
  shadow: true,
})
export class SixIcon {
  /** The icon's size. */
  @Prop({ reflect: true }) size:
    | 'inherit'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | 'xxxLarge' = 'inherit';

  /** If set to true the default material outlined icons are not used. */
  @Prop() filled = false;

  render() {
    return (
      <i
        class={{
          'material-icons': true,
          'material-icons-outlined': !this.filled,
          'material-icons-filled': this.filled,
          'icon--xsmall': this.size === 'xSmall',
          'icon--small': this.size === 'small',
          'icon--medium': this.size === 'medium',
          'icon--large': this.size === 'large',
          'icon--xlarge': this.size === 'xLarge',
          'icon--xxlarge': this.size === 'xxLarge',
          'icon--xxxlarge': this.size === 'xxxLarge',
          'icon--inherit': this.size === 'inherit',
        }}
      >
        <slot></slot>
      </i>
    );
  }
}
