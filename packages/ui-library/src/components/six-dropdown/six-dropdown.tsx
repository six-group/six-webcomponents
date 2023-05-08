import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { scrollIntoView } from '../../utils/scroll';
import { getNearestTabbableElement } from '../../utils/tabbable';
import Popover from '../../utils/popover';
import { EventListeners } from '../../utils/event-listeners';
import { getSlotChildren } from '../../utils/slot';
import { debounce, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { EmptyPayload } from '../../utils/types';
import { SixMenuItemData } from '../six-menu/six-menu';

export interface SixDropdownAutoFilterPayload {
  filterValue: string;
}

export interface SixDropdownAsyncFilterPayload {
  filterValue: string;
}

export interface SixDropdownScrollPayload {
  scrollHeight: number;
  scrollTop: number;
  scrollbarHeight: number;
  scrollRatio: number;
}

const isTagName =
  (name: string) =>
  <T extends Element>(el?: T) =>
    el?.tagName.toLowerCase() === name.toLowerCase();
const isSixMenu = isTagName('six-menu');
const isSixMenuItem = isTagName('six-menu-item');

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot trigger - The dropdown's trigger, usually a `<six-button>` element.
 * @slot - The dropdown's content.
 *
 * @part base - The component's base wrapper.
 * @part trigger - The container that wraps the trigger.
 * @part panel - The panel that gets shown when the dropdown is open.
 */

@Component({
  tag: 'six-dropdown',
  styleUrl: 'six-dropdown.scss',
  shadow: true,
})
export class SixDropdown {
  accessibleTrigger: HTMLElement;
  componentId = `dropdown-${++id}`;
  isVisible = false;
  panel: HTMLElement;
  positioner: HTMLElement;
  popover: Popover;
  trigger: HTMLElement;
  hasBeenInitialized = false;

  // the input element shown in the dropdown when filter is set to true
  filterInputElement: HTMLSixInputElement;

  @Element() host: HTMLSixDropdownElement;

  /** Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   */
  @Prop() placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'bottom-start';

  /** Determines whether the dropdown should hide when a menu item is selected. */
  @Prop() closeOnSelect = true;

  /** The distance in pixels from which to offset the panel away from its trigger. */
  @Prop() distance = 0;

  /** The distance in pixels from which to offset the panel along its trigger. */
  @Prop() skidding = 0;

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @Prop() hoist = false;

  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  @Prop() containingElement: HTMLElement;

  /**
   * Set to true to allow auto filtering for entries in the dropdown.
   * With this flag the dropdown will automatically filter itsel.
   * If you need to coordinate the shown elements yourself,
   * e.g. because you need to call an endpoint use asyncFilter instead
   */
  @Prop() filter = false;

  /**
   * Set to true to allow async filtering.
   * When you enter something in the search field the component will only emit an event but not filter any elements itself.
   * You can then simply listen to the 'six-async-filter-fired' event to manage the shown menu-items yourself
   */
  @Prop() asyncFilter = false;

  /** The filter's placeholder text. */
  @Prop() filterPlaceholder = 'Filter...';

  /** By default the search field will be focused when opening a dropdown with filtering enabled. */
  @Prop() autofocusFilter = true;

  get hasFilterEnabled() {
    return this.filter || this.asyncFilter;
  }

  /** The debounce for the filter callbacks. */
  @Prop() filterDebounce = DEFAULT_DEBOUNCE_FAST;

  /** The panel can be opend/closed by pressing the spacebar or the enter key. In some cases you might want to avoid this */
  @Prop() disableHideOnEnterAndSpace = false;

  /** Set the options to be shown in the dropdown (alternative to setting the elements via html)*/
  @Prop() options: SixMenuItemData[] | null = null;

  /** Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
   *  are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. */
  @Prop() virtualScroll = false;

  get container() {
    return this.containingElement || this.host;
  }

  /** Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-dropdown-show' }) sixShow: EventEmitter<EmptyPayload>;

  /** Emitted after the dropdown opens and all transitions are complete. */
  @Event({ eventName: 'six-dropdown-after-show' }) sixAfterShow: EventEmitter<EmptyPayload>;

  /** Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-dropdown-hide' }) sixHide: EventEmitter<EmptyPayload>;

  /** Emitted after the dropdown closes and all transitions are complete. */
  @Event({ eventName: 'six-dropdown-after-hide' }) sixAfterHide: EventEmitter<EmptyPayload>;

  /** Emitted when the auto filter is triggered */
  @Event({ eventName: 'six-dropdown-auto-filter-fired' })
  sixAutoFilterFired: EventEmitter<SixDropdownAutoFilterPayload>;

  /** Emitted when the async filter is triggered */
  @Event({ eventName: 'six-async-filter-fired' }) sixAsyncFilterFired: EventEmitter<SixDropdownAsyncFilterPayload>;

  /** Emitted when the user scrolls inside dropdown panel.*/
  @Event({ eventName: 'six-dropdown-scroll' }) sixScroll: EventEmitter<SixDropdownScrollPayload>;

  readonly eventListeners = new EventListeners();

  // internal representation of options, so we don't have to make options mutable
  @State()
  _options: SixMenuItemData[] = null;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
    this.updateAccessibleTrigger();
  }

  @Watch('distance')
  @Watch('hoist')
  @Watch('placement')
  @Watch('skidding')
  handlePopoverOptionsChange() {
    this.popover.setOptions({
      strategy: this.hoist ? 'fixed' : 'absolute',
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
    });
  }

  @Watch('options')
  handleOptionsChange() {
    this._options = [...this.options];
  }

  connectedCallback() {
    if (this.virtualScroll && this.options === null) {
      console.error('Options must be defined when using virtual scrolling');
    }

    if (this.options !== null) {
      this._options = [...this.options];
    }

    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleTriggerKeyDown = this.handleTriggerKeyDown.bind(this);
    this.handleTriggerKeyUp = this.handleTriggerKeyUp.bind(this);
    this.handleTriggerSlotChange = this.handleTriggerSlotChange.bind(this);
    this.handleDropdownScroll = this.handleDropdownScroll.bind(this);

    if (this.hasBeenInitialized && !this.popover) {
      // there was a weird bug when using six-dropdown inside an ag-grid filter. When closing the ag-grid filter
      // disconnectedCallback() is executed. However, since componentDidLoad() will not be rerendered the popover had
      // no longer a connected transitionEnd callback to the dropdown. To fix this, we have this sanity check here,
      // to re-initialize the popover in case the component has already been initialized but the popover is undefined.
      this.initializePopover();
    }
  }

  componentDidLoad() {
    this.hasBeenInitialized = true;
    this.initializePopover();

    // Show on init if open
    if (this.open) {
      void this.show();
    }

    if (this.filter) {
      this.setupFiltering(this.handleFilterInputChange);
    } else if (this.asyncFilter) {
      this.setupFiltering(() => this.sixAsyncFilterFired.emit({ filterValue: this.filterInputElement.value }));
    }
  }

  private initializePopover() {
    const onAfterHide = () => {
      if (this.filter) {
        this.filterInputElement.value = '';

        if (this._options !== null) {
          this._options = [...this.options];
        } else {
          const menuItems = this.getMenuItems();
          menuItems.forEach((item) => (item.style.display = 'unset'));
        }
      }

      this.sixAfterHide.emit();
    };

    const onAfterShow = async () => {
      if (this.hasFilterEnabled && this.autofocusFilter) {
        // if dropdown filter is enabled we should autofocus the search field
        await this.filterInputElement.setFocus();
      }

      this.sixAfterShow.emit();
    };

    const onTransitionEnd = () => {
      if (!this.open) {
        this.panel.scrollTop = 0;
      }
    };

    this.popover = new Popover(this.trigger, this.positioner, {
      strategy: this.hoist ? 'fixed' : 'absolute',
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
      transitionElement: this.panel,
      onAfterHide,
      onAfterShow,
      onTransitionEnd,
    });
  }

  private setupFiltering(callback: () => void) {
    this.eventListeners.add(this.filterInputElement, 'six-input-input', debounce(callback, this.filterDebounce));
  }

  getMenuItems = (): HTMLSixMenuItemElement[] => {
    if (this._options !== null) {
      return this._options.map((option) => <six-menu-item value={option.value}>{option.label}</six-menu-item>);
    }

    const [panel] = getSlotChildren<HTMLSixMenuElement>(this.panel);

    // the menu-items can be in a slot e.g. in six-select or direct children of the panel
    return getSlotChildren(panel) || Array.from(panel.querySelectorAll('six-menu-item'));
  };

  handleFilterInputChange = () => {
    const lowerCaseFilterTerm = this.filterInputElement.value?.toLowerCase()?.trim() || '';

    if (this._options) {
      this.handleFilteringForAttributeItems(lowerCaseFilterTerm);
    } else {
      this.handleFilteringForSlotItems(lowerCaseFilterTerm);
    }

    this.sixAutoFilterFired.emit({ filterValue: lowerCaseFilterTerm });
  };

  private handleFilteringForAttributeItems(lowerCaseFilterTerm: string) {
    if (lowerCaseFilterTerm === '') {
      this._options = [...this.options];
      return;
    }

    this._options = this.options.filter(
      (option) =>
        (option.label && String(option.label)?.toLowerCase()?.includes(lowerCaseFilterTerm)) ||
        (option.value && String(option.value)?.toLowerCase()?.includes(lowerCaseFilterTerm)),
    );
  }

  private handleFilteringForSlotItems(lowerCaseFilterTerm: string) {
    const menuItems = this.getMenuItems();
    menuItems.forEach(async (menuItem) => {
      // hide all elements which don't contain the entered substring
      const elementContainsFilterTerm =
        menuItem?.value?.toLowerCase()?.includes(lowerCaseFilterTerm) ||
        (await menuItem?.getTextLabel())?.toLowerCase()?.includes(lowerCaseFilterTerm);

      menuItem.style.display = elementContainsFilterTerm ? 'unset' : 'none';
    });
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();

    void this.hide();
    this.popover.destroy();
    this.popover = null;
  }

  /** Shows the dropdown panel */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isVisible) {
      return;
    }

    const sixShow = this.sixShow.emit();
    if (sixShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.eventListeners.add(this.panel, 'six-menu-item-selected', this.handlePanelSelect);
    this.eventListeners.add(document, 'keydown', this.handleDocumentKeyDown);
    this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);

    this.isVisible = true;
    this.open = true;
    this.popover.show();
  }

  /** Hides the dropdown panel */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isVisible) {
      return;
    }

    const sixHide = this.sixHide.emit();
    if (sixHide.defaultPrevented) {
      this.open = true;
      return;
    }

    this.eventListeners.remove(this.panel, 'six-menu-item-selected', this.handlePanelSelect);
    this.eventListeners.remove(document, 'keydown', this.handleDocumentKeyDown);
    this.eventListeners.remove(document, 'mousedown', this.handleDocumentMouseDown);

    this.isVisible = false;
    this.open = false;
    this.popover.hide();
  }

  focusOnTrigger() {
    const [trigger] = getSlotChildren<HTMLSixButtonElement>(this.trigger);
    if (trigger) {
      if (typeof trigger.setFocus === 'function') {
        trigger.setFocus();
      } else if (typeof trigger.focus === 'function') {
        trigger.focus();
      }
    }
  }

  getMenu() {
    const [menu] = getSlotChildren<HTMLSixMenuElement>(this.panel).filter(isSixMenu);
    return menu;
  }

  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  @Method()
  async reposition() {
    if (!this.open) {
      return;
    }
    this.popover.reposition();
  }

  handleDocumentKeyDown(event: KeyboardEvent) {
    // Close when escape is pressed
    if (event.key === 'Escape') {
      void this.hide();
      this.focusOnTrigger();
      return;
    }

    if (this.filterInputElement === this.host.shadowRoot.activeElement) {
      if (event.key === 'ArrowDown') {
        const item = this.getMenuItems().find((item) => item.style.display !== 'none');
        if (item) {
          item.setFocus();
        }
      }
    }

    // Handle tabbing
    if (event.key === 'Tab') {
      // Tabbing within an open menu should close the dropdown and refocus the trigger
      if (this.open && isSixMenuItem(document.activeElement)) {
        event.preventDefault();
        void this.hide();
        this.focusOnTrigger();
        return;
      }

      // Tabbing outside of the containing element closes the panel
      //
      // If the dropdown is used within a shadow DOM, we need to obtain the activeElement within that shadowRoot,
      // otherwise `document.activeElement` will only return the name of the parent shadow DOM element.
      setTimeout(() => {
        const activeElement =
          this.container.getRootNode() instanceof ShadowRoot
            ? document.activeElement.shadowRoot?.activeElement
            : document.activeElement;

        if (activeElement?.closest(this.container.tagName.toLowerCase()) !== this.container) {
          void this.hide();
          return;
        }
      });
    }
  }

  handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the containing element
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.container)) {
      void this.hide();
      return;
    }
  }

  handleMenuItemActivate(event: CustomEvent) {
    const item = event.target as HTMLSixMenuItemElement;
    scrollIntoView(item, this.panel);
  }

  handlePanelSelect(event: CustomEvent) {
    const target = event.target as HTMLElement;

    // Hide the dropdown when a menu item is selected
    if (this.closeOnSelect && isSixMenu(target)) {
      void this.hide();
      this.focusOnTrigger();
    }
  }

  handleTriggerClick() {
    this.open ? this.hide() : this.show();
  }

  handleTriggerKeyDown(event: KeyboardEvent) {
    const menu = this.getMenu();
    const menuItems = menu ? [...menu.querySelectorAll('six-menu-item')] : null;
    const firstMenuItem = menuItems[0];
    const lastMenuItem = menuItems[menuItems.length - 1];

    // Close when escape or tab is pressed
    if (event.key === 'Escape') {
      this.focusOnTrigger();
      void this.hide();
      return;
    }

    // When spacebar/enter is pressed, show the panel but don't focus on the menu. This let's the user press the same
    // key again to hide the menu in case they don't want to make a selection.
    if (!this.disableHideOnEnterAndSpace && [' ', 'Enter'].includes(event.key)) {
      event.preventDefault();
      this.open ? void this.hide() : void this.show();
      return;
    }

    // When up/down is pressed, we make the assumption that the user is familiar with the menu and plans to make a
    // selection. Rather than toggle the panel, we focus on the menu (if one exists) and activate the first item for
    // faster navigation.
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      // Show the menu if it's not already open
      if (!this.open) {
        void this.show();
      }

      // Focus on a menu item
      if (event.key === 'ArrowDown' && firstMenuItem) {
        firstMenuItem.setFocus();
        return;
      }

      if (event.key === 'ArrowUp' && lastMenuItem) {
        lastMenuItem.setFocus();
        return;
      }
    }

    // Other keys bring focus to the menu and initiate type-to-select behavior
    const ignoredKeys = ['Tab', 'Shift', 'Meta', 'Ctrl', 'Alt'];
    if (this.open && menu && !ignoredKeys.includes(event.key)) {
      void menu.typeToSelect(event.key);
      return;
    }
  }

  handleTriggerKeyUp(event: KeyboardEvent) {
    // Prevent space from triggering a click event in Firefox
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }

  handleDropdownScroll() {
    this.sixScroll.emit({
      scrollHeight: this.panel.scrollHeight,
      scrollTop: this.panel.scrollTop,
      scrollbarHeight: this.panel.offsetHeight * (this.panel.offsetHeight / this.panel.scrollHeight),
      scrollRatio: this.panel.scrollTop / (this.panel.scrollHeight - this.panel.clientHeight),
    });
  }

  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const [accessibleTrigger] = getSlotChildren(this.trigger).map(getNearestTabbableElement);

    if (accessibleTrigger) {
      accessibleTrigger.setAttribute('aria-haspopup', 'true');
      accessibleTrigger.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }
  }

  render() {
    return (
      <div
        part="base"
        id={this.componentId}
        class={{
          dropdown: true,
          'dropdown--open': this.open,
        }}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          ref={(el) => (this.trigger = el)}
          onClick={this.handleTriggerClick}
          onKeyDown={this.handleTriggerKeyDown}
          onKeyUp={this.handleTriggerKeyUp}
        >
          <slot name="trigger" onSlotchange={this.handleTriggerSlotChange} />
        </span>

        {/* Position the panel with a wrapper since the popover makes use of `translate`. This let's us add transitions
        on the panel without interfering with the position. */}
        <div
          ref={(el) => (this.positioner = el)}
          class={{
            dropdown__positioner: true,
            dropdown__positioner__filtered: (this.filter || this.asyncFilter) && !this.hoist,
          }}
        >
          {this.hasFilterEnabled && (
            <six-input
              class={{
                'filter-hidden': !this.open,
              }}
              aria-hidden={this.open ? 'false' : 'true'}
              ref={(el) => (this.filterInputElement = el)}
              placeholder={this.filterPlaceholder}
            />
          )}
          <div
            ref={(el) => (this.panel = el)}
            part="panel"
            class="dropdown__panel"
            role="menu"
            aria-hidden={this.open ? 'false' : 'true'}
            aria-labelledby={this.componentId}
            onScroll={this.handleDropdownScroll}
          >
            <slot />
            {this._options && (
              <six-menu part="menu" items={this._options} virtualScroll={this.virtualScroll}></six-menu>
            )}
          </div>
        </div>
      </div>
    );
  }
}
