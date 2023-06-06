import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';

/**
 * @since 1.01
 * @status stable
 *
 * @slot - The grid's content
 */

@Component({
  tag: 'six-layout-grid',
  styleUrl: 'six-layout-grid.scss',
  shadow: true,
})
export class SixLayoutGrid {
  @Element() host!: HTMLSixLayoutGridElement;

  /** Set the number of grid columns */
  @Prop({ mutable: true }) columns?: number;

  @Watch('columns')
  handleColumnsChange() {
    if (typeof this.columns !== 'number' || this.columns === 0) {
      this.columns = 12;
    }
    this.host.style.setProperty('--no-of-columns', String(this.columns));
  }

  componentWillLoad() {
    this.handleColumnsChange();
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
