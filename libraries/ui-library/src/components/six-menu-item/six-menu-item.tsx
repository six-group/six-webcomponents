import { Component, Element, h, Method, Prop, State } from '@stencil/core';
import { getTextContent } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The menu item's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @part base - The component's base wrapper.
 * @part checked-icon - The container that wraps the checked icon.
 * @part prefix - The prefix container.
 * @part label - The menu item label.
 * @part suffix - The suffix container.
 */

@Component({
  tag: 'six-menu-item',
  styleUrl: 'six-menu-item.scss',
  shadow: true,
})
export class SixMenuItem {
  private menuItem?: HTMLElement;
  private defaultSlot?: HTMLSlotElement;

  @Element() host!: HTMLSixMenuItemElement;

  @State() hasFocus = false;

  @State() active = false;

  /** Defines if the checked state is displayed as a checkbox or a check-icon */
  @Prop() checkType: 'checkbox' | 'check' = 'check';

  /** Internal: Draws the item in a checked state. CheckType needs to be set to 'checkbox' or 'check' to show the
   * checked state */
  @Prop({ reflect: true }) checked = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @Prop({ reflect: true }) value = '';

  /** Set to true to draw the menu item in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  connectedCallback() {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  /** Sets focus on the button. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.menuItem?.focus(options);
  }

  /** Removes focus from the button. */
  @Method()
  async removeFocus() {
    this.menuItem?.blur();
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  @Method()
  getTextLabel() {
    return Promise.resolve(getTextContent(this.defaultSlot));
  }

  private handleBlur() {
    this.hasFocus = false;
  }

  private handleFocus() {
    this.hasFocus = true;
  }

  private handleMouseEnter() {
    this.active = true;
  }

  private handleMouseLeave() {
    this.active = false;
    this.hasFocus = false;
  }

  private handleCheckboxChange = () => {
    this.host.dispatchEvent(new Event('click', { bubbles: true, cancelable: true }));
  };

  render() {
    return (
      <div
        ref={(el) => (this.menuItem = el)}
        part="base"
        class={{
          'menu-item': true,
          'menu-item--checked': this.checked,
          'menu-item--disabled': this.disabled,
          'menu-item--focused': this.hasFocus,
          'menu-item--active': this.active,
        }}
        role="menuitem"
        aria-disabled={this.disabled ? 'true' : 'false'}
        aria-checked={this.checked ? 'true' : 'false'}
        tabIndex={!this.disabled ? 0 : undefined}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.checkType === 'checkbox' && (
          <span class="menu-item__checkbox">
            <six-checkbox
              onSix-checkbox-change={this.handleCheckboxChange}
              disabled={this.disabled}
              checked={this.checked}
            ></six-checkbox>
          </span>
        )}

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix" />
        </span>

        <span part="label" class="menu-item__label">
          <slot ref={(el) => (this.defaultSlot = el as HTMLSlotElement)} />
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix" />
        </span>

        {this.checkType === 'check' && (
          <span part="checked-icon" class="menu-item__check">
            <six-icon size="small" aria-hidden="true">
              check
            </six-icon>
          </span>
        )}
      </div>
    );
  }
}
