import { Component, Element, h, Prop } from '@stencil/core';

/**
 * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 *
 * @since 5.0
 * @status beta
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with six-icon.
 *
 * @part base - The component's base wrapper.
 */
@Component({
  tag: 'six-breadcrumbs',
  styleUrl: 'six-breadcrumbs.scss',
  shadow: true,
})
export class SixBreadcrumbs {
  @Element() host!: HTMLSixBreadcrumbsElement;

  /** The breadcrumbs item size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Defines an icon as a separator without having to place a slot. Default value: chevron_right **/
  @Prop({ attribute: 'separator-icon', reflect: true }) separatorIcon: string = 'chevron_right';

  private updateBreadcrumbItems = () => {
    const items = [...this.host.querySelectorAll('six-breadcrumbs-item')] as HTMLSixBreadcrumbsItemElement[];

    items.forEach(async (item, index) => {
      await item.componentOnReady();

      // Append separators to each item if they don't already have one
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        // No separator exists, add one
        item.append(this.getSeparatorElement());
      } else if (separator.hasAttribute('data-default')) {
        // A default separator exists, replace it
        separator.replaceWith(this.getSeparatorElement());
      }

      // Set each to equal size
      item.shadowRoot?.querySelector('six-button')?.setAttribute('size', this.size);

      // The last breadcrumb item is the "current page"
      if (index === items.length - 1) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  };

  private getSeparatorElement(): HTMLElement {
    const slot = Array.from(this.host.children).find((child) => child.getAttribute('slot') === 'separator');
    if (slot) {
      return this.cloneSlottedElement(slot);
    }
    return this.createDefaultIconElement();
  }

  private cloneSlottedElement(element: Element) {
    const clone = element.cloneNode(true) as HTMLElement;
    clone.removeAttribute('id');
    clone.setAttribute('data-default', '');
    return clone;
  }

  private createDefaultIconElement() {
    const sixIcon = document.createElement('six-icon');
    sixIcon.innerText = this.separatorIcon;
    sixIcon.setAttribute('size', this.size);
    sixIcon.setAttribute('data-default', '');
    sixIcon.slot = 'separator';
    return sixIcon;
  }

  render() {
    return (
      <host>
        <nav part="base">
          <slot onSlotchange={this.updateBreadcrumbItems} />
        </nav>
      </host>
    );
  }
}
