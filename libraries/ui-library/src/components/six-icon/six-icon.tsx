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
   * Icon library to use when no `library` prop is provided.
   * By default, all `<six-icon>` instances fall back to the globally configured
   * default library (via `setDefaultIconLibrary()` / `getDefaultIconLibrary()`),
   * which is `"material-icons"` unless changed at runtime.
   *
   * This allows teams to switch the default across an entire project without
   * having to set the `library` prop on every `<six-icon>` instance.
   *
   * Icon library for this instance. Overrides the global default.
   * - "material-icons"  → Material Icons
   * - "material-symbols"  → Material Symbols
   */
  @Prop({ reflect: true }) library?: IconLibrary;

  private isSymbols(): boolean {
    const lib = this.library ?? getDefaultIconLibrary();
    return lib === 'material-symbols';
  }

  render() {
    const isSymbols = this.isSymbols();
    return (
      <i
        class={{
          'material-icons': !isSymbols,
          'material-icons-outlined': !isSymbols && !this.filled,
          'material-icons-filled': !isSymbols && this.filled,

          'material-symbols-outlined': isSymbols && !this.filled,
          'material-symbols': isSymbols && this.filled,

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
