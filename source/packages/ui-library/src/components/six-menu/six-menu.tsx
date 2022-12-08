import { Component, Element, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { getTextContent } from '../../utils/slot';
import { StyleDeclaration } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';
import { debounce } from '../../utils/execution-control';

export interface SixMenuItemData {
  label: string;
  value: string;
}

export interface SixMenuItemSelectedPayload {
  name: string;
  item: HTMLSixMenuItemElement;
}

const isFocusedMenuItem = (menuItem: HTMLSixMenuItemElement) =>
  menuItem?.shadowRoot?.querySelector('.menu-item')?.classList?.contains('menu-item--focused');

const isSIXMenuItemElement = (el?: Element): el is HTMLSixMenuItemElement =>
  el?.tagName.toLowerCase() === 'six-menu-item';

const mapToMenuItem = ({ value, label }) => <six-menu-item value={value}>{label}</six-menu-item>;

const DEFAULT_NUMBER_OF_ITEMS_SHOWN_FOR_VIRTUAL_SCROLLING = 5;

const DEFAULT_SIX_MENU_ITEM_HEIGHT = 64;

const ITEMS_SHOWN_NOT_SET = undefined;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The menu's content, including menu items, menu dividers, and menu labels.
 *
 * @part base - The component's base wrapper.
 */
@Component({
  tag: 'six-menu',
  styleUrl: 'six-menu.scss',
  shadow: true,
})
export class SixMenu {
  private readonly eventListeners = new EventListeners();

  menu: HTMLElement;
  menuWrapper: HTMLElement;
  typeToSelectString = '';
  typeToSelectTimeout: NodeJS.Timeout;

  @Element() host: HTMLSixMenuElement;

  /** Emitted when a menu item is selected. */
  @Event({ eventName: 'six-menu-item-selected' }) sixMenuItemSelected: EventEmitter<SixMenuItemSelectedPayload>;

  /** Set to true to remove the box-shadow */
  @Prop() removeBoxShadow: boolean = false;

  /** Set the options to be shown in the dropdown */
  @Prop() items: SixMenuItemData[] | null = null;

  /** Defines how many items should be shown. If the number of items is larger than this properties a scrollbar will be shown */
  @Prop() itemsShown?: number = ITEMS_SHOWN_NOT_SET;

  /** Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
   *  are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. */
  @Prop() virtualScroll: boolean = false;

  /**
   * Used for virtual scrolling
   * Define how many items should be rendered in the DOM when using virtual scrolling
   */
  @Prop() itemSize: number = 10;

  /**
   * Used for virtual scrolling
   * Define the debounce for listening on scrolling changes in milliseconds.
   * The lower the number the more sensitive the component reacts to scrolling changes.
   */
  @Prop() scrollingDebounce: number = 15;

  /**
   * Used to calculate which items should be rendered in the DOM
   */
  @State()
  private scrollingIndex: number = 0;

  // set a default item height, this variable will be updated with the real value after the first render.
  // However, it's necessary to have a default value because we can only fetch the proper hight after the first render
  @State()
  sixMenuItemHeight = DEFAULT_SIX_MENU_ITEM_HEIGHT;

  connectedCallback() {
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillLoad() {
    if (this.items === null) {
      return;
    }
  }

  private handleScrolling = () => {
    // for performance improvements we only update the DOM if the scrollRatio change "enough"
    this.scrollingIndex = Math.floor(this.menuWrapper.scrollTop / this.sixMenuItemHeight);
  };

  componentDidLoad() {
    this.setupForVirtualScrollingAfterRendering();
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  /**
   * Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
   * The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
   * internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
   * enabling type-to-select when the menu doesn't have focus.
   */
  @Method()
  async typeToSelect(key: string) {
    clearTimeout(this.typeToSelectTimeout);
    this.typeToSelectTimeout = setTimeout(() => (this.typeToSelectString = ''), 750);
    this.typeToSelectString += key.toLowerCase();
    const items = this.getItems();
    for (const item of items) {
      const slot = item.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
      const label = getTextContent(slot).toLowerCase().trim();
      if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
        item.setFocus();
        break;
      }
    }
  }

  private getItemsShown() {
    const defaultItemsShown = this.virtualScroll
      ? DEFAULT_NUMBER_OF_ITEMS_SHOWN_FOR_VIRTUAL_SCROLLING
      : ITEMS_SHOWN_NOT_SET;

    return this.itemsShown ?? defaultItemsShown;
  }

  private setupForVirtualScrollingAfterRendering() {
    if (!this.virtualScroll) {
      return;
    }

    this.eventListeners.add(this.menuWrapper, 'scroll', debounce(this.handleScrolling, this.scrollingDebounce));

    // set menu height to proper height once the item is rendered.
    const menuItemHeight = this.menu?.querySelector('six-menu-item')?.clientHeight;
    if (menuItemHeight && menuItemHeight > 0) {
      this.sixMenuItemHeight = menuItemHeight;
    }
  }

  getItems() {
    if (this.items !== null && this.items !== undefined) {
      return this.items.map(mapToMenuItem);
    }

    const slot = this.menu.querySelector('slot');
    return [...slot.assignedElements({ flatten: true })].filter((el) => isSIXMenuItemElement(el) && !el.disabled);
  }

  private getActiveItemIndex() {
    const items = this.getItems();
    const selectedItem = this.getActiveItem();
    const itemIndex = items.indexOf(selectedItem);

    if (itemIndex > -1) {
      return itemIndex;
    }

    const sixMenuItems = this.extractItemsFromDOM();
    return sixMenuItems.findIndex(isFocusedMenuItem);
  }

  getActiveItem() {
    const activeElement = this.getItems().find((i) => i === document.activeElement);

    if (activeElement) {
      return activeElement;
    }

    return this.extractItemsFromDOM()?.find(isFocusedMenuItem);
  }

  private extractItemsFromDOM() {
    return Array.from(this.host?.shadowRoot?.querySelectorAll('six-menu-item'));
  }

  setActiveItem(item: HTMLSixMenuItemElement) {
    item.setFocus();
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedItem = target.closest('six-menu-item');
    if (clickedItem && !clickedItem.disabled) {
      this.sixMenuItemSelected.emit({ name: clickedItem.value, item: clickedItem });
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    // Make a selection when pressing enter
    if (event.key === 'Enter') {
      const activeItem = this.getActiveItem();
      event.preventDefault();

      if (activeItem) {
        this.sixMenuItemSelected.emit({ name: activeItem.value, item: activeItem });
      }
    }

    // Prevent scrolling when space is pressed
    if (event.key === ' ') {
      event.preventDefault();
    }

    // Move the selection when pressing down or up
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      const items = this.items === null ? this.getItems() : this.extractItemsFromDOM();

      let indexOfActiveItem = this.getActiveItemIndex();

      if (items.length) {
        event.preventDefault();

        if (event.key === 'ArrowDown') {
          indexOfActiveItem++;
        } else if (event.key === 'ArrowUp') {
          indexOfActiveItem--;
        } else if (event.key === 'Home') {
          indexOfActiveItem = 0;
        } else if (event.key === 'End') {
          indexOfActiveItem = items.length - 1;
        }

        if (indexOfActiveItem < 0) indexOfActiveItem = 0;
        if (indexOfActiveItem > items.length - 1) indexOfActiveItem = items.length - 1;

        this.setActiveItem(items[indexOfActiveItem]);

        return;
      }
    }

    void this.typeToSelect(event.key);
  }

  private getMenuWrapperStyle() {
    const styles: Partial<StyleDeclaration> = {};

    if (this.getItemsShown() > 0) {
      // calculate the proper height to show the correct number of items
      styles.height = `${this.getItemsShown() * this.sixMenuItemHeight}px`;
    }

    return {
      ...styles,
    };
  }

  private getMenuContainerStyle() {
    const styles: Partial<StyleDeclaration> = {};

    if (this.virtualScroll) {
      // calculate height of content are if all items would be rendered so the scrollbar has the proper size
      styles.transform = `translateY(${this.sixMenuItemHeight * this.scrollingIndex}px)`;
    }

    return {
      ...styles,
    };
  }

  private getScrollbarGhostStyle() {
    const styles: Partial<StyleDeclaration> = {};

    if (this.virtualScroll && this.items !== null) {
      styles.height = `${this.items.length * this.sixMenuItemHeight - this.itemSize * this.sixMenuItemHeight}px`;
    }

    return {
      ...styles,
    };
  }

  private renderItems() {
    if (this.items === undefined || this.items === null) {
      return;
    }

    if (!this.virtualScroll) {
      return this.items.map(mapToMenuItem);
    }

    return this.items
      .slice(this.scrollingIndex, Math.min(this.items.length, this.itemSize + this.scrollingIndex))
      .map(mapToMenuItem);
  }

  render() {
    return (
      <div
        ref={(el) => (this.menuWrapper = el)}
        style={this.getMenuWrapperStyle()}
        part="wrapper"
        class={{
          menu: true,
          'menu--noshadow': this.removeBoxShadow,
          'menu__wrapper--scrollable': this.getItemsShown() > 0,
        }}
      >
        <div
          ref={(el) => (this.menu = el)}
          part="base"
          role="menu"
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          tabIndex={0}
          style={this.getMenuContainerStyle()}
        >
          <slot />
          {this.renderItems()}
        </div>
        {this.virtualScroll && <div style={this.getScrollbarGhostStyle()} />}
      </div>
    );
  }
}
