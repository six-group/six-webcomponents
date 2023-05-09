import { Component, Element, Host, h, Prop, Watch } from '@stencil/core';

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
  @Element() host: HTMLSixLayoutGridElement;

  /** Set the number of grid columns */
  @Prop() columns;

  @Watch('columns')
  handleColumnsChange() {
    const columns = this.columns ? this.columns : 12;
    this.host.style.setProperty('--no-of-columns', String(columns));
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
