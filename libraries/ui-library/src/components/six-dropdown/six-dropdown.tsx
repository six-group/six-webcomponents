import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { getNearestTabbableElement } from '../../utils/tabbable';
import Popover from '../../utils/popover';
import { EventListeners } from '../../utils/event-listeners';
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

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot trigger - The dropdown's trigger, usually a `<six-button>` element.
 * @slot dropdown-footer - The dropdown's footer area.
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
  private componentId = `dropdown-${++id}`;
  private isVisible = false;
  private panel?: HTMLElement;
  private scrollPanel?: HTMLElement;
  private panelSlot?: HTMLSlotElement;
  private positioner?: HTMLElement;
  private popover?: Popover;
  private trigger?: HTMLElement;
  private triggerSlot?: HTMLSlotElement;
  private resizeObserver = new ResizeObserver(debounce(() => this.updatePanelPosition(), 100));

  // the input element shown in the dropdown when filter is set to true
  private filterInputElement?: HTMLSixInputElement;

  @Element() host!: HTMLSixDropdownElement;

  /** Indicates whether the dropdown is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside the viewport.
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
  // eslint-disable-next-line @stencil-community/ban-default-true
  @Prop() closeOnSelect = true;

  /** The distance in pixels from which to offset the panel away from its trigger. */
  @Prop() distance = 4;

  /** The distance in pixels from which to offset the panel along its trigger. */
  @Prop() skidding = 0;

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @Prop() hoist = false;

  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  @Prop() containingElement?: HTMLElement;

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
  // eslint-disable-next-line @stencil-community/ban-default-true
  @Prop() autofocusFilter = true;

  get filterEnabled() {
    return this.filter || this.asyncFilter;
  }

  /** The debounce for the filter callbacks. */
  @Prop({ mutable: true }) filterDebounce = 0;

  /** The panel can be opend/closed by pressing the spacebar or the enter key. In some cases you might want to avoid this */
  @Prop() disableHideOnEnterAndSpace = false;

  /** Set the options to be shown in the dropdown (alternative to setting the elements via html)*/
  @Prop({ mutable: true }) options: SixMenuItemData[] = [];

  /** Defines if the overflow should be shown instead of there being a scrollbar. */
  @Prop({ mutable: true }) showOverflow = false;

  /** Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
   *  are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. */
  @Prop() virtualScroll = false;

  /**
   * Determines if the dropdown panel's width should match the width of the trigger element.
   *
   * If set to `true`, the panel will resize its width to align with the trigger's width.
   * If `false` or omitted, the panel will maintain its default width.
   */
  @Prop() matchTriggerWidth = false;

  get container() {
    return this.containingElement || this.host;
  }

  /** Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-dropdown-show' }) sixShow!: EventEmitter<EmptyPayload>;

  /** Emitted after the dropdown opens and all transitions are complete. */
  @Event({ eventName: 'six-dropdown-after-show' }) sixAfterShow!: EventEmitter<EmptyPayload>;

  /** Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-dropdown-hide' }) sixHide!: EventEmitter<EmptyPayload>;

  /** Emitted after the dropdown closes and all transitions are complete. */
  @Event({ eventName: 'six-dropdown-after-hide' }) sixAfterHide!: EventEmitter<EmptyPayload>;

  /** Emitted when the auto filter is triggered */
  @Event({ eventName: 'six-dropdown-auto-filter-fired' }) sixAutoFilter!: EventEmitter<SixDropdownAutoFilterPayload>;

  /** Emitted when the async filter is triggered */
  @Event({ eventName: 'six-async-filter-fired' }) sixAsyncFilterFired!: EventEmitter<SixDropdownAsyncFilterPayload>;

  /** Emitted when the user scrolls inside dropdown panel.*/
  @Event({ eventName: 'six-dropdown-scroll' }) sixScroll!: EventEmitter<SixDropdownScrollPayload>;

  private eventListeners = new EventListeners();

  // internal representation of options, so we don't have to make options mutable
  @State() renderedOptions: SixMenuItemData[] = [];

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
    if (this.popover == null) return;

    this.popover.setOptions({
      strategy: this.hoist ? 'fixed' : 'absolute',
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
    });
  }

  @Watch('options')
  @Watch('virtualScroll')
  handleOptionsChange() {
    this.validateOptions();
  }

  private validateOptions() {
    if (!Array.isArray(this.options)) {
      this.options = [];
    }
    if (this.virtualScroll && this.options.length === 0) {
      console.error('Options must be defined when using virtual scrolling');
    }
    this.renderedOptions = [...this.options];
  }

  componentWillLoad() {
    this.validateOptions();
    if (this.asyncFilter) {
      this.filterDebounce = DEFAULT_DEBOUNCE_FAST;
    }
  }

  componentDidLoad() {
    this.init();
    if (this.open) {
      void this.show();
    }
  }

  connectedCallback() {
    this.init();
  }

  private init() {
    this.initPopover();

    // listen to filter
    const filterInputElement = this.filterInputElement;
    if (filterInputElement != null) {
      this.eventListeners.add(
        filterInputElement,
        'six-input-input',
        debounce(() => {
          const filterValue = filterInputElement.value ?? '';
          if (this.filter) {
            this.applyFilter(filterValue);
          }
          this.emitFilterEvents(filterValue);
        }, this.filterDebounce)
      );
    }
  }

  private applyFilter(filterTerm: string) {
    const lowerCaseFilterTerm = filterTerm.toLowerCase()?.trim() || '';
    if (this.options.length > 0) {
      this.renderedOptions = this.options.filter(
        (option) =>
          (option.label && String(option.label)?.toLowerCase()?.includes(lowerCaseFilterTerm)) ||
          (option.value && String(option.value)?.toLowerCase()?.includes(lowerCaseFilterTerm))
      );
    } else {
      const { selectionContainerItems, sixMenuItems } = this.getMenuItems();
      const selectionContainerValues = selectionContainerItems.map((s) => s.value);

      // Filter items in selection container
      selectionContainerItems.forEach(async (menuItem) => {
        menuItem.style.display = (await containsFilterTerm(menuItem, lowerCaseFilterTerm)) ? 'unset' : 'none';
      });

      // Filter other items. Always hide items which contained in the selection container.
      sixMenuItems.forEach(async (menuItem) => {
        menuItem.style.display =
          (await containsFilterTerm(menuItem, lowerCaseFilterTerm)) &&
          !selectionContainerValues.includes(menuItem.value)
            ? 'unset'
            : 'none';
      });
    }
  }

  private resetFilter() {
    if (this.filterInputElement != null) {
      this.filterInputElement.value = '';
      this.emitFilterEvents('');
    }
    if (this.options.length > 0) {
      this.renderedOptions = [...this.options];
    } else {
      const { selectionContainerItems, sixMenuItems } = this.getMenuItems();
      [...selectionContainerItems, ...sixMenuItems].forEach((item) => (item.style.display = 'unset'));
    }
  }

  private emitFilterEvents(filterValue: string) {
    if (this.filter) {
      this.sixAutoFilter.emit({ filterValue });
    } else if (this.asyncFilter) {
      this.sixAsyncFilterFired.emit({ filterValue });
    }
  }

  private initPopover() {
    if (this.trigger == null || this.positioner == null) return;
    this.popover = new Popover(this.trigger, this.positioner, {
      strategy: this.hoist ? 'fixed' : 'absolute',
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
      transitionElement: this.panel,
      onAfterHide: () => {
        if (this.filterEnabled) {
          this.resetFilter();
        }
        this.sixAfterHide.emit();
      },
      onAfterShow: async () => {
        this.sixAfterShow.emit();
      },
      onTransitionEnd: () => {
        if (!this.open && this.scrollPanel != null) {
          this.scrollPanel.scrollTop = 0;
        }
      },
    });
  }

  private getMenuItems = (): {
    selectionContainerItems: HTMLSixMenuItemElement[];
    sixMenuItems: HTMLSixMenuItemElement[];
  } => {
    if (this.options.length > 0) {
      return {
        sixMenuItems: this.renderedOptions.map((option) => (
          <six-menu-item value={option.value}>{option.label}</six-menu-item>
        )),
        selectionContainerItems: [],
      };
    }
    if (this.panel == null) return { sixMenuItems: [], selectionContainerItems: [] };

    // Relies on the implementation of six-select. Its dropdown slot contains two elements,
    // one for the selected menu items, and one for the other items.
    const selectionContainer = this.panelSlot?.assignedElements({ flatten: true }).filter(isSelectionContainer).at(0);
    const sixMenuElement = this.panelSlot?.assignedElements({ flatten: true }).filter(isSixMenu).at(0) as
      | HTMLSixMenuElement
      | undefined;
    const selectionContainerItems = selectionContainer?.querySelectorAll('six-menu-item') || [];
    let sixMenuItems: HTMLSixMenuItemElement[] =
      sixMenuElement
        ?.querySelector('slot')
        ?.assignedElements()
        .filter((el): el is HTMLSixMenuItemElement => isSixMenuItem(el)) || [];

    if (sixMenuItems.length === 0) {
      sixMenuItems = Array.from(sixMenuElement?.shadowRoot?.querySelectorAll('six-menu-item') || []);
    }

    if (selectionContainerItems.length > 0 || sixMenuItems.length > 0) {
      return { sixMenuItems, selectionContainerItems: [...selectionContainerItems] };
    } else {
      return {
        sixMenuItems: sixMenuElement ? Array.from(sixMenuElement.querySelectorAll('six-menu-item')) : [],
        selectionContainerItems: [],
      };
    }
  };

  disconnectedCallback() {
    this.resizeObserver.disconnect();
    this.eventListeners.removeAll();
    void this.hide();
    this.popover?.destroy();
    this.popover = undefined;
  }

  /** Shows the dropdown panel */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isVisible || this.popover == null || this.panel == null) {
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

    if (this.trigger != null) {
      this.resizeObserver.observe(this.trigger);
    }
    this.updatePanelPosition();
    this.popover.show();

    if (this.filterEnabled && this.autofocusFilter) {
      requestAnimationFrame(() => {
        this.filterInputElement?.setFocus();
      });
    }
  }

  /**
   * Set min width of dropdown panel to the width of the trigger element
   */
  private updatePanelPosition() {
    if (!this.open) {
      return;
    }

    if (this.matchTriggerWidth && this.trigger != null && this.panel != null) {
      const width = this.trigger.getBoundingClientRect().width;
      this.panel.style.minWidth = `${width}px`;
    }

    if (this.popover != null) {
      this.popover.reposition();
    }
  }

  /** Hides the dropdown panel */
  @Method()
  async hide() {
    this.resizeObserver.disconnect();

    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isVisible || this.panel == null || this.popover == null) {
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

  private focusOnTrigger() {
    if (this.trigger == null) return;
    const trigger = this.triggerSlot?.assignedElements({ flatten: true }).at(0) as HTMLSixButtonElement | undefined;
    if (trigger != null) {
      if (typeof trigger.setFocus === 'function') {
        trigger.setFocus();
      } else if (typeof trigger.focus === 'function') {
        trigger.focus();
      }
    }
  }

  private getMenu(): HTMLSixMenuElement | undefined {
    return this.panelSlot?.assignedElements({ flatten: true }).filter(isSixMenu).at(0) as
      | HTMLSixMenuElement
      | undefined;
  }

  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   *
   * @deprecated: use the property `matchTriggerWidth` instead.
   */
  @Method()
  async reposition() {
    if (this.open && this.popover != null) {
      this.popover.reposition();
    }
  }

  private handleDocumentKeyDown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;
    // Close when escape is pressed
    if (keyboardEvent.key === 'Escape') {
      void this.hide();
      this.focusOnTrigger();
      return;
    }

    if (this.filterInputElement === this.host.shadowRoot?.activeElement) {
      if (keyboardEvent.key === 'ArrowDown') {
        const { sixMenuItems, selectionContainerItems } = this.getMenuItems();
        const item = [...selectionContainerItems, ...sixMenuItems].find((item) => item.style.display !== 'none');
        if (item != null) {
          item.setFocus();
        }
      }
    }

    // Handle tabbing
    if (keyboardEvent.key === 'Tab') {
      // Tabbing within an open menu should close the dropdown and refocus the trigger
      if (this.open && document.activeElement != null && isSixMenuItem(document.activeElement)) {
        keyboardEvent.preventDefault();
        void this.hide();
        this.focusOnTrigger();
        return;
      }

      // Tabbing outside the containing element closes the panel
      //
      // If the dropdown is used within a shadow DOM, we need to obtain the activeElement within that shadowRoot,
      // otherwise `document.activeElement` will only return the name of the parent shadow DOM element.
      setTimeout(() => {
        const activeElement =
          this.container.getRootNode() instanceof ShadowRoot
            ? document.activeElement?.shadowRoot?.activeElement
            : document.activeElement;

        if (activeElement?.closest(this.container.tagName.toLowerCase()) !== this.container) {
          void this.hide();
          return;
        }
      });
    }
  };

  private handleDocumentMouseDown = (event: Event) => {
    // Close when clicking outside the containing element
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.container)) {
      void this.hide();
      return;
    }
  };

  private handlePanelSelect = (event: Event) => {
    const target = event.target as HTMLElement;

    // Hide the dropdown when a menu item is selected
    if (this.closeOnSelect && isSixMenu(target)) {
      void this.hide();
      this.focusOnTrigger();
    }
  };

  private handleTriggerClick = () => {
    this.open ? this.hide() : this.show();
  };

  private handleTriggerKeyDown = (event: KeyboardEvent) => {
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

    const menu = this.getMenu();

    // When up/down is pressed, we make the assumption that the user is familiar with the menu and plans to make a
    // selection. Rather than toggle the panel, we focus on the menu (if one exists) and activate the first item for
    // faster navigation.
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      // Show the menu if it's not already open
      if (!this.open) {
        void this.show();
      }

      if (menu == null) {
        return;
      }
      const menuItems = [...menu.querySelectorAll('six-menu-item')];
      const firstMenuItem = menuItems.at(0);
      const lastMenuItem = menuItems.at(menuItems.length - 1);

      // Focus on a menu item
      if (event.key === 'ArrowDown' && firstMenuItem != null) {
        firstMenuItem.setFocus();
        return;
      }

      if (event.key === 'ArrowUp' && lastMenuItem != null) {
        lastMenuItem.setFocus();
        return;
      }
    }

    // Other keys bring focus to the menu and initiate type-to-select behavior
    const ignoredKeys = ['Tab', 'Shift', 'Meta', 'Ctrl', 'Alt'];
    if (this.open && menu != null && !ignoredKeys.includes(event.key)) {
      void menu.typeToSelect(event.key);
      return;
    }
  };

  private handleTriggerKeyUp = (event: KeyboardEvent) => {
    // Prevent space from triggering a click event in Firefox
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  private handleTriggerSlotChange = () => {
    this.updateAccessibleTrigger();
  };

  private handleDropdownScroll = () => {
    if (this.scrollPanel == null) return;

    this.sixScroll.emit({
      scrollHeight: this.scrollPanel.scrollHeight,
      scrollTop: this.scrollPanel.scrollTop,
      scrollbarHeight: this.scrollPanel.offsetHeight * (this.scrollPanel.offsetHeight / this.scrollPanel.scrollHeight),
      scrollRatio: this.scrollPanel.scrollTop / (this.scrollPanel.scrollHeight - this.scrollPanel.clientHeight),
    });
  };

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
  private updateAccessibleTrigger() {
    if (this.trigger == null) return;
    const assignedElements = (this.triggerSlot?.assignedElements({ flatten: true }) || []) as HTMLElement[];
    const accessibleTrigger = assignedElements.map(getNearestTabbableElement).at(0);
    if (accessibleTrigger != null) {
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
          <slot
            name="trigger"
            ref={(el) => (this.triggerSlot = el as HTMLSlotElement)}
            onSlotchange={this.handleTriggerSlotChange}
          />
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
          <div
            ref={(el) => (this.panel = el)}
            part="panel"
            class="dropdown__panel"
            role="menu"
            aria-hidden={this.open ? 'false' : 'true'}
            aria-labelledby={this.componentId}
          >
            {this.filterEnabled && (
              <six-input
                class={{
                  filter: true,
                  'filter-hidden': !this.open,
                }}
                dropdown-search
                aria-hidden={this.open ? 'false' : 'true'}
                ref={(el) => (this.filterInputElement = el)}
                placeholder={this.filterPlaceholder}
              >
                <six-icon class="filter__icon" slot="suffix" size="small">
                  search
                </six-icon>
              </six-input>
            )}
            <div
              class={{
                dropdown__panel__scroll: !this.showOverflow,
                'dropdown__panel__scroll--virtual': this.virtualScroll,
              }}
              onScroll={this.handleDropdownScroll}
              ref={(el) => (this.scrollPanel = el)}
            >
              <slot ref={(el) => (this.panelSlot = el as HTMLSlotElement)} />
              {this.options.length > 0 && (
                <six-menu part="menu" items={this.renderedOptions} virtualScroll={this.virtualScroll}></six-menu>
              )}
            </div>
            <slot name="dropdown-footer"></slot>
          </div>
        </div>
      </div>
    );
  }
}

function isSixMenu(el?: Element): boolean {
  return el?.tagName.toLowerCase() === 'six-menu';
}
function isSixMenuItem(el?: Element): boolean {
  return el?.tagName.toLowerCase() === 'six-menu-item';
}
function isSelectionContainer(el?: Element): boolean {
  return el?.getAttribute('class')?.includes('selection-container') || false;
}
async function containsFilterTerm(menuItem: HTMLSixMenuItemElement, lowerCaseFilterTerm: string): Promise<boolean> {
  return (
    menuItem.value.toLowerCase().includes(lowerCaseFilterTerm) ||
    (await menuItem.getTextLabel()).toLowerCase().includes(lowerCaseFilterTerm)
  );
}
