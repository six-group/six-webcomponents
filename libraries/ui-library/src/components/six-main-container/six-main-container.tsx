import { Component, Element, h, Host, Prop } from '@stencil/core';

/**
 * @since 1.01
 * @status stable
 *
 * @slot - The main container's content.
 *
 * @part left-margin  - The component's left margin area.
 * @part content      - The component's content area.
 * @part right-margin - The component's right margin area.
 */

@Component({
  tag: 'six-main-container',
  styleUrl: 'six-main-container.scss',
  shadow: true,
})
export class SixMainContainer {
  @Element() host!: HTMLSixMainContainerElement;

  /** Set to false to remove top and bottom padding.  */
  // eslint-disable-next-line @stencil-community/ban-default-true
  @Prop() padded = true;

  render() {
    return (
      <Host>
        <div part="left-margin" class="left-margin" />
        <div part="content" class={{ content: true, 'content--padded': this.padded }}>
          <slot />
        </div>
        <div part="right-margin" class="right-margin" />
      </Host>
    );
  }
}
