import { Component, Method, Prop, State, h } from '@stencil/core';
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
  menuItem: HTMLElement;
  defaultSlot: HTMLSlotElement;

  @State() hasFocus = false;

  /** Set to true to draw the item in a checked state. */
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
  }

  /** Sets focus on the button. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.menuItem.focus(options);
  }

  /** Removes focus from the button. */
  @Method()
  async removeFocus() {
    this.menuItem.blur();
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  @Method()
  getTextLabel() {
    return Promise.resolve(getTextContent(this.defaultSlot));
  }

  handleBlur() {
    this.hasFocus = false;
  }

  handleFocus() {
    this.hasFocus = true;
  }

  handleMouseEnter() {
    this.setFocus();
  }

  handleMouseLeave() {
    this.removeFocus();
  }

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
        }}
        role="menuitem"
        aria-disabled={this.disabled ? 'true' : 'false'}
        aria-checked={this.checked ? 'true' : 'false'}
        tabIndex={!this.disabled ? 0 : null}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix" />
        </span>

        <span part="label" class="menu-item__label">
          <slot ref={(el) => (this.defaultSlot = el as HTMLSlotElement)} />
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix" />
        </span>

        <span part="checked-icon" class="menu-item__check">
          <six-icon size="small" aria-hidden="true">
            check
          </six-icon>
        </span>
      </div>
    );
  }
}
