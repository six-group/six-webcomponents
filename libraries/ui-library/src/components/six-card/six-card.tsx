import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { hasSlot } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the content of the card.
 * @slot header - An optional header for the card. Headings (`h1`-`h6`) are styled as title, other elements (e.g. `p`) as subtitle.
 * @slot header-actions - Optional content right-aligned in the header (e.g. an icon button).
 * @slot media - An optional media section to render at the start (top) of the card.
 * @slot footer - An optional footer for the card, left-aligned (e.g. secondary/icon buttons).
 * @slot footer-actions - An optional actions section in the footer, right-aligned (e.g. primary actions).
 *
 * @part base - The component's base wrapper.
 * @part media - The media container.
 * @part header - The header container.
 * @part content - The content container.
 * @part footer - The footer container.
 */

@Component({
  tag: 'six-card',
  styleUrl: 'six-card.scss',
  shadow: true,
})
export class SixCard {
  @Element() host!: HTMLSixCardElement;

  @State() hasMedia = false;
  @State() hasHeader = false;
  @State() hasHeaderActions = false;
  @State() hasFooter = false;
  @State() hasFooterActions = false;

  /** Set to true to let the card cast a shadow. */
  @Prop({ reflect: true }) elevated = false;

  componentWillLoad() {
    this.handleSlotChange();
  }

  private handleSlotChange = () => {
    this.hasMedia = hasSlot(this.host, 'media');
    this.hasHeader = hasSlot(this.host, 'header');
    this.hasHeaderActions = hasSlot(this.host, 'header-actions');
    this.hasFooter = hasSlot(this.host, 'footer');
    this.hasFooterActions = hasSlot(this.host, 'footer-actions');
  };

  render() {
    // All slots are always rendered so that `slotchange` fires when slotted content is added or removed later.
    // Empty sections are hidden via the `card--has-*` modifier classes.
    return (
      <Host>
        <div
          part="base"
          class={{
            card: true,
            'card--elevated': this.elevated,
            'card--has-media': this.hasMedia,
            'card--has-header': this.hasHeader || this.hasHeaderActions,
            'card--has-header-actions': this.hasHeaderActions,
            'card--has-footer': this.hasFooter || this.hasFooterActions,
            'card--has-footer-content': this.hasFooter,
            'card--has-footer-actions': this.hasFooterActions,
          }}
        >
          <div part="media" class="card__media">
            <slot name="media" onSlotchange={this.handleSlotChange} />
          </div>

          <header part="header" class="card__header">
            <div class="card__header__content">
              <slot name="header" onSlotchange={this.handleSlotChange} />
            </div>
            <div class="card__header__actions">
              <slot name="header-actions" onSlotchange={this.handleSlotChange} />
            </div>
          </header>

          <div part="content" class="card__content">
            <slot />
          </div>

          <footer part="footer" class="card__footer">
            <div class="card__footer__content">
              <slot name="footer" onSlotchange={this.handleSlotChange} />
            </div>
            <div class="card__footer__actions">
              <slot name="footer-actions" onSlotchange={this.handleSlotChange} />
            </div>
          </footer>
        </div>
      </Host>
    );
  }
}
