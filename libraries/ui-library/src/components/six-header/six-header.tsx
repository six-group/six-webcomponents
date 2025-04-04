import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { getSlot } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 * @slot search-field - Used to define the search field component in the header.
 */
@Component({
  tag: 'six-header',
  styleUrl: 'six-header.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class SixHeader {
  /** Indicates if content should be shifted down when search field is visible. */
  @Prop() shiftContent = false;

  /**
   * Set the header search input to be in an open or closed state.
   *
   * Focuses the first `six-input` found in the search slot.
   */
  @Prop() openSearch = false;

  @Watch('openSearch')
  handleOpenSearchChange() {
    if (this.openSearch) {
      // deferred due to https://github.com/ionic-team/stencil/issues/3772
      setTimeout(
        async () => getSlot(this.host, 'search-field')?.shadowRoot?.querySelector('six-input')?.setFocus(),
        50
      );
    }
  }

  @Element() host!: HTMLSixHeaderElement;

  private eventListeners = new EventListeners();

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  render() {
    return (
      <Host>
        <header part="header" class="six-header">
          <slot />
        </header>
        <div
          class={{
            'six-header__search-field': true,
            'six-header__search-field--visible': this.openSearch,
            'six-header__search-field--shift-content': this.shiftContent,
          }}
        >
          <slot name={'search-field'} />
        </div>
      </Host>
    );
  }
}
