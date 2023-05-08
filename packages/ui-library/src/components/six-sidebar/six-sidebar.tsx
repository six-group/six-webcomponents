import { Component, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { scrollIntoView } from '../../utils/scroll';

const isSidebarItemGroup = (node: Element) => node.tagName.toLowerCase() === 'six-sidebar-item-group';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the nested side bar [group] items.
 */

@Component({
  tag: 'six-sidebar',
  styleUrl: 'six-sidebar.scss',
  shadow: true,
})
export class SixSidebar {
  willShow = false;
  willHide = false;

  sidebar: HTMLElement;

  @State() isVisible = false;

  /** Sidebar position */
  @Prop() position: 'left' | 'right' = 'left';

  /** Indicates whether or not the sidebar is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Sidebar width */
  @Prop() width: string = '16rem';

  /** Define whether sidebar is toggled meaning only one menu can be open at the same time*/
  @Prop() toggled: boolean = false;

  /** Emitted when the sidebar opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-sidebar-show' }) sixShow: EventEmitter<EmptyPayload>;

  /** Emitted after the sidebar opens and all transitions are complete. */
  @Event({ eventName: 'six-sidebar-after-show' }) sixAfterShow: EventEmitter<EmptyPayload>;

  /** Emitted when the sidebar closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-sidebar-hide' }) sixHide: EventEmitter<EmptyPayload>;

  /** Emitted after the sidebar closes and all transitions are complete. */
  @Event({ eventName: 'six-sidebar-after-hide' }) sixAfterHide: EventEmitter<EmptyPayload>;

  /**
   * Emitted when the sidebar opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
   * allow you to set it on a different element in the sidebar, such as an input or button.
   */
  @Event({ eventName: 'six-sidebar-initial-focus' }) sixInitialFocus: EventEmitter<EmptyPayload>;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  handleTransitionEnd = (event: TransitionEvent) => {
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (event.type === 'transitionend' && target.classList.contains('sidebar__container')) {
      this.resetTransitionVariables();
    }
  };

  componentWillLoad() {
    // Show on init if open
    if (this.open) {
      void this.show();
      // if the sidebar is open by default we need to manually reset the
      // transition variables since there will be no transition event
      this.resetTransitionVariables();
    }
  }

  componentDidRender() {
    this.setupTogglableMenuItems();
  }

  disconnectedCallback() {
    this.sidebar.removeEventListener('six-details-show', this.closeSiblingDetailsOnShow);
  }

  private closeSiblingDetailsOnShow = (event: CustomEvent<EmptyPayload>) => {
    const clickedMenuItem = event.target as HTMLElement;
    scrollIntoView(clickedMenuItem, this.sidebar);

    const closeAllSiblingsBySiblingProperty = (getSibling: (node: Element) => Element) => {
      let node: Element = clickedMenuItem;

      while (getSibling(node) !== null) {
        node = getSibling(node);
        if (isSidebarItemGroup(node)) {
          node.shadowRoot.querySelector('six-details').open = false;
        }
      }
    };

    // close all previous siblings
    closeAllSiblingsBySiblingProperty((node) => node.previousElementSibling);
    // close all further siblings
    closeAllSiblingsBySiblingProperty((node) => node.nextElementSibling);
  };

  private setupTogglableMenuItems() {
    if (!this.toggled) {
      return;
    }

    this.markAllMenuItemsAsSelectableEmpty();

    this.sidebar.addEventListener('six-details-show', this.closeSiblingDetailsOnShow);
  }

  private markAllMenuItemsAsSelectableEmpty() {
    // when you have a toggled menu you also want to close other menu items when you click on an item without children
    // nice benefit this item will then also be highlighted
    const slot = this.sidebar.querySelector('slot');
    const nodes = slot.assignedElements();

    // since we don't just want to make the top level empty menuItems selectable in toggled mode,
    // but also nested items we need to traverse the whole menu item tree
    const menuItems = [];
    while (nodes.length > 0) {
      const node = nodes.pop();

      // collect six-details in the current shadowDOM
      const menuItemsForCurrentNode = node.shadowRoot.querySelectorAll('six-details');
      menuItems.push(...menuItemsForCurrentNode);

      // collect all six-sidebar-item-group children of the current node to afterwards check their shadowDOM too
      const newItemGroups = Array.from(node.children).filter(isSidebarItemGroup);
      nodes.push(...newItemGroups);
    }

    menuItems.forEach((details) => (details.selectableEmpty = true));
  }

  /** Toggles whether the sidebar should be shown or hidden */
  @Method()
  async toggle() {
    if (this.willShow || this.willHide) {
      return;
    }

    if (this.open) {
      await this.hide();
    } else {
      await this.show();
    }
  }

  /** Shows the sidebar */
  @Method()
  async show() {
    if (this.willShow) {
      return;
    }

    const sixShow = this.sixShow.emit();
    if (sixShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.willShow = true;
    this.isVisible = true;
    this.open = true;
  }

  /** Hides the sidebar */
  @Method()
  async hide() {
    if (this.willHide) {
      return;
    }

    const sixHide = this.sixHide.emit();
    if (sixHide.defaultPrevented) {
      this.open = true;
      return;
    }

    this.willHide = true;
    this.open = false;
  }

  /** Allows to select a menu item programmatically by index */
  @Method()
  async selectItemByIndex(index: number) {
    const slot = this.sidebar.querySelector('slot');
    const menuItemsOnRootLevel: HTMLSixDetailsElement[] = slot
      .assignedElements()
      .map((el) => el.shadowRoot.querySelector('six-details'));

    if (index < 0 || index > menuItemsOnRootLevel.length - 1) {
      console.error(
        `Tried to access sidebar menu item by index, but provided index out of range. Provided index: ${index}`,
      );
      return;
    }

    await menuItemsOnRootLevel[index].show();
  }

  /** Allows to select a menu item programmatically by name */
  @Method()
  async selectItemByName(value: string) {
    const slot = this.sidebar.querySelector('slot');
    const sidebarItemGroups = slot.assignedElements() as HTMLSixSidebarItemGroupElement[];
    const indexOfSelectedElement = sidebarItemGroups.findIndex((el) => el?.name === value);
    const selectedItem = sidebarItemGroups[indexOfSelectedElement].shadowRoot.querySelector('six-details');
    await selectedItem.show();
  }

  private resetTransitionVariables() {
    this.isVisible = this.open;
    this.willShow = false;
    this.willHide = false;
    this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
  }

  render() {
    return (
      <host class="six-sidebar">
        <div
          class={{
            sidebar__container: true,
            'sidebar--visible': this.isVisible,
            'sidebar--open': this.open,
            'sidebar--left': this.position === 'left',
            'sidebar--right': this.position === 'right',
          }}
          style={{
            width: this.width,
            [`margin-${this.position}`]: this.open ? '0' : `calc(1rem - ${this.width})`,
          }}
          ref={(el) => (this.sidebar = el)}
          aria-hidden={this.open ? 'false' : 'true'}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <slot />
        </div>
      </host>
    );
  }
}
