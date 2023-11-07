import { Component, Element, h, Prop, State } from '@stencil/core';
import { hasSlot } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the nested sidebar [group] items.
 */

@Component({
  tag: 'six-sidebar-item-group',
  styleUrl: 'six-sidebar-item-group.scss',
  shadow: true,
})
export class SixSidebarItemGroup {
  @Element() readonly host!: HTMLSixSidebarItemGroupElement;

  @State() hasItems = false;

  /** Title of item group */
  @Prop() name = '';

  /** Icon of the group */
  @Prop() icon = '';

  /** A unique value to store in the sidebar item of the group label. This can be used as a way to identify sidebar items when selected. */
  @Prop({ reflect: true }) value = '';

  /** Indicates whether the sidebar is shown */
  @Prop({ reflect: true }) open = false;

  /** Custom summary icon name. */
  @Prop() summaryIcon?: string;

  @State() summaryIconHasContent = false;

  /**
   * Provide if the item should be rendered as anchor tag.
   * Note, that the href is added automatically when using routerLink in Angular.
   */
  @Prop({ reflect: true }) href: string | undefined;

  connectedCallback() {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  componentWillLoad() {
    this.handleSlotChange();
  }

  private handleSlotChange() {
    this.hasItems = hasSlot(this.host);
  }

  private isSubgroup() {
    return this.host.parentElement?.closest('six-sidebar-item-group') != null;
  }

  private renderAsHref(): boolean {
    return this.href != null && !this.hasItems;
  }

  private provideSlot = (name: string) => {
    if (this.summaryIconHasContent) {
      return (
        <div slot={name}>
          <slot name={name}></slot>
        </div>
      );
    }

    return (
      <slot
        name={name}
        onSlotchange={() => {
          const slot = this.host.shadowRoot?.querySelector<HTMLSlotElement>(`slot[name="${name}"]`);
          if (slot != null) {
            this.summaryIconHasContent = slot.assignedNodes().length > 0;
          }
        }}
      ></slot>
    );
  };

  render() {
    const element = (
      <six-details
        class={{
          'six-sidebar-item-group': true,
          'six-sidebar-item-group--childless': !this.hasItems,
          'six-sidebar-item-group--subgroup': this.isSubgroup(),
        }}
        inline={true}
        open={this.open}
        summary-icon={this.summaryIcon}
        hasContent={this.hasItems}
      >
        <div slot="summary">
          <div class="six-sidebar-details__header">
            {this.icon && <six-icon class="six-sidebar-details__header-icon">{this.icon}</six-icon>}
            {this.name}
          </div>
        </div>
        {this.provideSlot('summary-icon')}
        <slot />
      </six-details>
    );

    if (this.renderAsHref()) {
      return (
        <a class="six-sidebar-details__link" href={this.href}>
          {element}
        </a>
      );
    } else {
      return element;
    }
  }
}
