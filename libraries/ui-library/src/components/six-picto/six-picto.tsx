import { Component, Element, h, Host, Prop, State } from '@stencil/core';

/**
 * @since 1.1
 * @status stable
 *
 * @part icon - The component's icon wrapper.
 */

@Component({
  tag: 'six-picto',
  styleUrl: 'six-picto.scss',
  shadow: true,
})
export class SixPicto {
  @Element() host!: HTMLSixPictoElement;

  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge' | '4xl' = 'medium';

  @State() svgContent: string | null = null;

  async componentWillLoad() {
    const iconName = this.host.innerHTML?.trim();
    if (iconName) {
      try {
        const response = await fetch(`/assets/pictograms/${iconName}.svg`);
        if (response.ok) {
          this.svgContent = await response.text();
        } else {
          console.error(`Icon "${iconName}" not found in assets/pictograms.`);
        }
      } catch (error) {
        console.error(`Error loading icon "${iconName}":`, error);
      }
    }
  }

  render() {
    return (
      <Host>
        <div
          part="icon"
          class={{
            [`is-size-${this.size}`]: true,
          }}
          innerHTML={this.svgContent || ''} // Inject the loaded SVG content into the component
        ></div>
      </Host>
    );
  }
}
