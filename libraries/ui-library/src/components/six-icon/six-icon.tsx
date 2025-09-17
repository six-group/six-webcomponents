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

  /** Opt-in to Material Symbols (keeps backward compatibility by default). */
  @Prop() symbols = false;

  render() {
    // inside render()
    const isSymbols = this.symbols;
    const symbolsStyle = isSymbols ? { '--six-icon-fill': this.filled ? '1' : '0' } : undefined;
    return (
      <i
        style={symbolsStyle}
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
