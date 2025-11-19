import { Component, h, Host, Prop } from '@stencil/core';
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
  /** Name of the icon, path to SVG file or a data image */
  @Prop() src?: string;

  /**
   * If the src is a svg, either render <svg><use/></svg> or <img>
   *
   * - <svg><use/></svg> is better for styling (e.g. currentColor), but slower at rendering.
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
   * - "material-icons"    → Material Icons
   * - "material-symbols"  → Material Symbols
   */
  @Prop({ reflect: true }) library?: IconLibrary;

  private isSvgSrc = (src?: string): boolean => {
    if (src === undefined) {
      return false;
    }
    const lower = src.toLowerCase();
    return lower.includes('.svg') || lower.startsWith('data:image/svg+xml');
  };

  private isSymbolsLibrary = (): boolean => {
    const lib = this.library ?? getDefaultIconLibrary();
    return lib === 'material-symbols';
  };

  private renderContent(isSvg: boolean) {
    if (this.src !== undefined) {
      if (isSvg) {
        if (this.inlineSvg) {
          return (
            <svg part="svg">
              <use href={`${this.src}#img`} />
            </svg>
          );
        }
        return <img src={this.src} />;
      }
      return this.src;
    }
    return <slot />;
  }

  render() {
    const isSvg = this.isSvgSrc(this.src);
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
