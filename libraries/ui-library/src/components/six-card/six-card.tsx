import { Component, Prop, h, Host, Element } from '@stencil/core';
import { hasSlot } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the content of the card.
 * @slot header - An optional header for the card (e.g. title/subtitle).
 * @slot header-actions - Optional content right-aligned in the header (e.g. an icon).
 * @slot media - An optional media section to render at the start (top) of the card.
 * @slot footer - An optional footer for the card, left-aligned (e.g. secondary/icon buttons).
 * @slot footer-actions - An optional actions section in the footer, right-aligned (e.g. primary actions).
 *
 * @part base - The component's base wrapper.
 * @part image - The media container.
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

  /** Set to true to show a shadow. */
  @Prop() shadow = false;

  render() {
    return (
      <Host class={{ card__shadow: this.shadow }} part="base">
        {hasSlot(this.host, 'media') && (
          <div part="image" class="card__image">
            <slot name="media" />
          </div>
        )}

        {(hasSlot(this.host, 'header') || hasSlot(this.host, 'header-actions')) && (
          <header part="header" class="card__header">
            <div class="card__header__content">
              <slot name="header" />
            </div>
            {hasSlot(this.host, 'header-actions') && (
              <div class="card__header__actions">
                <slot name="header-actions" />
              </div>
            )}
          </header>
        )}

        <div part="content" class="card__content">
          <slot />
        </div>

        {(hasSlot(this.host, 'footer') || hasSlot(this.host, 'footer-actions')) && (
          <footer part="footer" class="card__footer">
            {hasSlot(this.host, 'footer') && (
              <div class="card__footer__content">
                <slot name="footer" />
              </div>
            )}
            {hasSlot(this.host, 'footer-actions') && (
              <div class="card__footer__actions">
                <slot name="footer-actions" />
              </div>
            )}
          </footer>
        )}
      </Host>
    );
  }
}
