import { Component, h, Host, Prop } from '@stencil/core';
import { getDefaultIconLibrary, IconLibrary } from '../../utils/icon';

/**
 * @since 1.0
 * @status stable
 *
 * @summary
 * Renders a Material icon, Material Symbol, or external SVG source in a unified way.
 *
 * - Without `src`, it renders a ligature-based Material icon / symbol using the component’s text content.
 * - With `src` pointing to an image or SVG file, it renders either an `<img>` or `<svg><use/></svg>` sprite.
 *
 * @slot - Used to define the material icon or symbol name when `src` is not provided.
 *
 * @csspart svg - The `<svg>` element when `inlineSvg` is true.
 *
 * @prop {string} [src] - Icon name, path to an SVG file, or data URL.
 * @prop {boolean} [inlineSvg=false] - When `true` and `src` is an SVG, renders `<svg><use/></svg>` instead of `<img>`.
 * @prop {'inherit' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge'} [size='inherit']
 *   Visual size of the icon.
 * @prop {boolean} [filled=false] - For Material fonts, toggles between outlined and filled variants when available.
 * @prop {'material-icons' | 'material-symbols'} [library]
 *   Icon library to use when rendering ligature-based Material icons. Defaults to the globally configured library.
 */

@Component({
  tag: 'six-icon',
  styleUrls: ['six-icon.scss'],
  shadow: true,
})
export class SixIcon {

  /** Name of the icon */
  @Prop() name?: string;

  /** Path to SVG file or a data image */
  @Prop() src?: string;

  /**
   * If the src is a svg, either render <svg><use/></svg> or <img>
   *
   * - <svg><use/></svg> is better for styling (e.g. fill: red), but slower at rendering.
   * - <img> is better for HTTP caching, but you cannot style the internal SVG elements.
   */
  @Prop({ reflect: true }) inlineSvg: boolean = false;

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
   * - "material-icons"  → Material Icons
   * - "material-symbols"  → Material Symbols
   */
  @Prop({ reflect: true }) library?: IconLibrary;

  private isSymbolsLibrary = (): boolean => {
    const lib = this.library ?? getDefaultIconLibrary();
    return lib === 'material-symbols';
  };

  private renderContent(isSvg: boolean) {
    if (!isSvg) {
      if (this.name) {
        return this.name;
      }

      return <slot />;
    }

    if (!this.inlineSvg) {
      return <img src={this.src} />;
    }

    return (
      <svg part="svg">
        <use href={`${this.src}#img`} />
      </svg>
    );
  }

  render() {
    const isSvg = this.src !== undefined;
    const isSymbols = this.isSymbolsLibrary();

    return (
      <Host
        class={{
          'six-icon--xsmall': this.size === 'xSmall',
          'six-icon--small': this.size === 'small',
          'six-icon--medium': this.size === 'medium',
          'six-icon--large': this.size === 'large',
          'six-icon--xlarge': this.size === 'xLarge',
          'six-icon--xxlarge': this.size === 'xxLarge',
          'six-icon--xxxlarge': this.size === 'xxxLarge',
          'six-icon--inherit': this.size === 'inherit',

          // only apply material classes when not rendering SVG
          ...(!isSvg
            ? {
              'material-icons': !isSymbols,
              'material-icons-outlined': !isSymbols && !this.filled,
              'material-icons-filled': !isSymbols && this.filled,
              'material-symbols-outlined': isSymbols && !this.filled,
              'material-symbols': isSymbols && this.filled,
            }
            : {}),
        }}
      >
        {this.renderContent(isSvg)}
      </Host>
    );
  }
}
