import { Component, Element, h, Host, State } from '@stencil/core';
import { getSlot } from '../../utils/slot';

/**
 * @since 4.2.7
 * @status beta
 */

@Component({
  tag: 'six-header-dropdown-item',
  styleUrl: 'six-header-dropdown-item.scss',
  shadow: true,
})
export class SixHeaderDropdownItem {
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
