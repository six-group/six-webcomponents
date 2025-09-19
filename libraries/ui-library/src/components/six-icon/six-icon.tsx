import { Component, h, Prop } from '@stencil/core';
import { getDefaultIconLibrary, IconLibrary } from '../../utils/icon';

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

  /**
   * Icon library for this instance. Overrides the global default.
   * - "classic"  → Material Icons (Outlined/Regular)
   * - "symbols"  → Material Symbols (variable font)
   */
  @Prop({ reflect: true }) library?: IconLibrary;

  private isSymbols(): boolean {
    const lib = this.library ?? getDefaultIconLibrary();
    return lib === 'material-symbols';
  }

  render() {
    // inside render()
    const isSymbols = this.isSymbols();
    return (
      <i
        class={{
          'material-icons': !isSymbols,
          'material-icons-outlined': !isSymbols && !this.filled,
          'material-icons-filled': !isSymbols && this.filled,

          'material-symbols-outlined': isSymbols && !this.filled,
          'material-symbols': isSymbols && this.filled,

          // sizes … (unchanged)
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
