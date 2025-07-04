import { Component, Element, h } from '@stencil/core';
import { getSlot } from '../../utils/slot';

@Component({
  tag: 'six-breadcrumbs',
  styleUrl: 'six-breadcrumbs.scss',
  shadow: true,
})
export class SixBreadcrumbs {
  @Element() el!: HTMLSixBreadcrumbsElement;

  private getDefaultSeparator() {
    const span = document.createElement('span');
    span.innerText = '/';
    return span;
  }

  private getSeparator(): HTMLElement {
    return (getSlot(this.el, 'separator') as HTMLSlotElement) || this.getDefaultSeparator();
  }

  private cloneSeparator(): HTMLElement {
    const clone = this.getSeparator().cloneNode(true) as HTMLElement;
    clone.removeAttribute('id');
    clone.setAttribute('data-default', '');
    clone.slot = 'separator';
    return clone;
  }

  private appendSeparatorForEachItem() {
    const slot = this.el?.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    const items = [...slot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === 'six-breadcrumbs-item'
    ) as HTMLElement[];
    items.forEach((item, index) => {
      if (index === items.length - 1) {
        item.removeAttribute('aria-current');
        item.setAttribute('disabled', 'true');
        return;
      }
      item.setAttribute('aria-current', 'page');
      item.appendChild(this.cloneSeparator());
    });
  }

  private handleSlotChange = () => {
    this.appendSeparatorForEachItem();
  };

  render() {
    return (
      <host>
        <nav part="base">
          <slot onSlotchange={this.handleSlotChange} />
        </nav>
      </host>
    );
  }
}
