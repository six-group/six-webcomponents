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

  @Prop({ attribute: 'separator-icon', reflect: true }) separatorIcon: string = '';

  private updateBreadcrumbItems = () => {
    const items = [...this.host.querySelectorAll('six-breadcrumbs-item')] as HTMLSixBreadcrumbsItemElement[];

    items.forEach((item, index) => {
      // Append separators to each item if they don't already have one
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        // No separator exists, add one
        item.append(this.createSeparatorElement());
      } else if (separator.hasAttribute('data-default')) {
        // A default separator exists, replace it
        separator.replaceWith(this.createSeparatorElement());
      }

      // The last breadcrumb item is the "current page"
      if (index === items.length - 1) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  };

  private createSeparatorElement(): HTMLElement {
    // Find a custom separator by checking direct children only
    const customSeparator = this.getCustomSeparator();
    console.log(customSeparator);
    if (customSeparator) {
      const clone = customSeparator.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      clone.setAttribute('data-default', '');
      clone.slot = 'separator';
      return clone;
    }

    // Create default separator element
    const span = document.createElement('span');
    span.innerText = '/';
    span.slot = 'separator';
    span.setAttribute('data-default', '');
    return span;
  }

  private getCustomSeparator() {
    if (this.separatorIcon) {
      const sixIcon = document.createElement('six-icon');
      sixIcon.innerText = this.separatorIcon;
      sixIcon.setAttribute('size', 'small');
      return sixIcon;
    }
    return Array.from(this.host.children).find((child) => child.getAttribute('slot') === 'separator');
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
