import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { getSlot } from '../../utils/slot';

/**
 * @since 4.2.7
 * @status stable
 */

@Component({
  tag: 'six-header-dropdown-item',
  styleUrl: 'six-header-dropdown-item.scss',
  shadow: true,
})
export class SixHeaderDropdownItem {
  /**
   * Set to true to allow auto filtering for entries in the dropdown.
   * With this flag the dropdown will automatically filter itsel.
   * If you need to coordinate the shown elements yourself,
   * e.g. because you need to call an endpoint use asyncFilter instead
   */
  @Prop() filter = false;

  /** The filter's placeholder text. */
  @Prop() filterPlaceholder = 'Filter...';

  @State() active = false;

  @Element() host!: HTMLSixHeaderDropdownItemElement;

  private dropdownElement?: HTMLSixDropdownElement;

  connectedCallback() {
    this.updateDropdownDistance();
  }

  componentDidLoad() {
    this.updateDropdownDistance();
  }

  render() {
    return (
      <Host
        class={{
          'six-header-dropdown-item--active': this.active,
        }}
      >
        <six-dropdown
          ref={(el) => (this.dropdownElement = el)}
          hoist
          skidding={0}
          placement="bottom-end"
          onSix-dropdown-show={() => (this.active = true)}
          onSix-dropdown-hide={() => (this.active = false)}
          filter={this.filter}
          filterPlaceholder={this.filterPlaceholder}
        >
          <slot slot="trigger" name="trigger" />
          <slot />
        </six-dropdown>
      </Host>
    );
  }

  private updateDropdownDistance() {
    const trigger = getSlot(this.host, 'trigger');
    const header = this.host.closest('six-header');
    if (trigger != null && header != null && this.dropdownElement != null && this.host != null) {
      const hostRight = this.host.getBoundingClientRect().right;
      const triggerRight = trigger.getBoundingClientRect().right;
      const headerBottom = header.getBoundingClientRect().bottom;
      const triggerBottom = trigger.getBoundingClientRect().bottom;
      this.dropdownElement.distance = headerBottom - triggerBottom + 3;
      this.dropdownElement.skidding = hostRight - triggerRight;
    }
  }
}
