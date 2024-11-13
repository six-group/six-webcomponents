import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { getSlot, hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';

export interface SixHeaderAppSwitcherSelectPayload {
  selectedLabel: string;
  name: string;
  item: HTMLSixMenuItemElement;
}

export interface SixHeaderProfileSelectPayload {
  selectedLabel: string;
  name: string;
  item: HTMLSixMenuItemElement;
}

export interface SixHeaderSearchFieldToggle {
  visible: boolean;
}

enum Section {
  None,
  Search,
  AppSwitcher,
  Profile,
}

enum Slot {
  Search = 'search-field',
  Notifications = 'notifications',
  AppSwitcher = 'app-switcher-menu',
  Profile = 'profile-menu',
  Logo = 'logo',
}

/**
 * @since 1.0
 * @status stable
 * @slot - Used to define a custom component that is included in the header.
 * @slot search-field - Used to define the search field component in the header.
 * @slot notifications - <span style="color:red">[Deprecated]</span>, use six-header `custom` property instead. Used to define the notification component in the header.
 * @slot app-switcher-menu - <span style="color:red">[Deprecated]</span>, use six-header `custom` property instead. Used to define the application switcher menu in the header.
 * @slot profile-menu -  <span style="color:red">[Deprecated]</span>, use six-header `custom` property instead. Used to define the profile menu in the header.
 * @slot profile-avatar - <span style="color:red">[Deprecated]</span>, use six-header `custom` property instead. Used to define the avator in the header.
 */
@Component({
  tag: 'six-header',
  styleUrl: 'six-header.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class SixHeader {
  /**
   * Set `custom` to `true` for complete control over the header content. When enabled, all other properties and slots
   * are ignored.
   *
   * Use `six-header-item`, `six-header-dropdown-item` and `six-header-menu-button` to structure the content.
   *
   * @since 4.2.7
   * @status beta
   */
  @Prop() custom = false;

  /** Indicates if content should be shifted down when search field is visible. */
  @Prop() shiftContent = false;

  /**
   * Set whether the hamburger menu should be visible or not
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Prop() hideHamburgerMenu = false;

  /**
   * Set the hamburger menu icon to open or closed state
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Prop() openHamburgerMenu = false;

  /**
   * Set the header search to be in an open or closed state.
   *
   * If `custom` is `true`, focuses the first `six-input` found in the search slot.
   */
  @Prop() openSearch = false;

  /**
   * Set whether the logo should be clickable
   *
   * @deprecated Use six-header `custom` property with `six-logo` instead
   */
  @Prop() clickableLogo = false;

  /**
   * The displayed logo. Either six or bme. Defaults to six.
   *
   * @deprecated Use six-header `custom` property with `six-logo` instead
   */
  @Prop() logo: 'six' | 'bme' = 'six';

  @Watch('openSearch')
  handleOpenSearchChange() {
    if (this.custom) {
      if (this.openSearch) {
        // setFocus deferred due to https://github.com/ionic-team/stencil/issues/3772
        setTimeout(async () => {
          const slot = getSlot(this.host, Slot.Search);
          slot?.shadowRoot?.querySelector('six-input')?.setFocus();
        }, 50);
      }
    } else {
      this.computeSearchOpenState();
    }
  }

  /**
   * Sets open state for search
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Method()
  async setSearchOpenState(openState: boolean) {
    if (this.selectedSection === Section.Search && !openState) {
      this.selectedSection = Section.None;
    } else if (openState && this.selectedSection !== Section.Search) {
      this.selectedSection = Section.Search;
    }
  }

  /**
   * Get open state for search
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Method()
  async getIsSearchOpen() {
    return this.selectedSection === Section.Search;
  }

  /**
   * Emitted when the name of the selected app is clicked.
   *
   * @deprecated Use six-header `custom` property with `six-header-dropdown-item` and `six-header-menu-button` instead
   */
  @Event({ eventName: 'six-header-app-name-clicked' }) sixAppNameClicked!: EventEmitter<EmptyPayload>;

  /**
   * Emitted when a menu item is in the app switcher menu is selected.
   *
   * @deprecated Use six-header `custom` property with `six-header-dropdown-item` and `six-header-menu-button` instead
   */
  @Event({ eventName: 'six-header-app-switcher-select' })
  sixAppSwitcherSelect!: EventEmitter<SixHeaderAppSwitcherSelectPayload>;

  /**
   * Emitted when a menu item is in the profile menu is selected.
   *
   * @deprecated Use six-header `custom` property with `six-header-dropdown-item` and `six-avatar` instead
   */
  @Event({ eventName: 'six-header-profile-select' }) sixProfileSelect!: EventEmitter<SixHeaderProfileSelectPayload>;

  /**
   * Emitted when the hamburger menu is clicked.
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Event({ eventName: 'six-header-hamburger-menu-clicked' }) sixHamburgerClick!: EventEmitter<EmptyPayload>;

  /**
   * Emitted when the header logo is clicked.
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Event({ eventName: 'six-header-logo-clicked' }) logoClick!: EventEmitter<EmptyPayload>;

  /**
   * Emitted when search field is toggled.
   *
   * @deprecated Use six-header `custom` property instead
   */
  @Event({ eventName: 'six-header-search-field-toggle' })
  sixSearchFieldToggle!: EventEmitter<SixHeaderSearchFieldToggle>;

  @Element() host!: HTMLSixHeaderElement;

  private eventListeners = new EventListeners();

  private slots?: Record<Slot, boolean>;

  private mutationObserver?: MutationObserver;

  @State() selectedApp?: string;
  @State() selectedSection?: Section;

  private hasSlot(slot: Slot): boolean {
    if (this.slots == null) {
      return false;
    }
    return this.slots[slot];
  }

  private isSectionSelected(value: Section) {
    return value === this.selectedSection;
  }

  private selectSection(section: Section) {
    return () => (this.selectedSection = section);
  }

  private toggleSearch() {
    const visible = this.selectedSection !== Section.Search;
    this.selectedSection = this.selectedSection === Section.Search ? Section.None : Section.Search;
    this.sixSearchFieldToggle.emit({ visible });
    if (this.selectedSection === Section.Search) {
      // setFocus deferred due to https://github.com/ionic-team/stencil/issues/3772
      setTimeout(async () => {
        const slot = getSlot(this.host, Slot.Search);
        slot?.shadowRoot?.querySelector('six-input')?.setFocus();
      }, 50);
    }
  }

  private setupMenu = (el?: HTMLSixIconButtonElement) => {
    if (el == null) return;

    this.eventListeners.add(el, 'click', () => this.sixHamburgerClick.emit());
  };

  private setupLogo = (el?: HTMLElement) => {
    if (!this.clickableLogo || el == null) return;

    this.eventListeners.add(el, 'click', () => this.logoClick.emit());
  };

  private setupProfile = (el?: HTMLSixDropdownElement) => {
    if (el == null) return;

    this.eventListeners.add(el, 'six-dropdown-show', this.selectSection(Section.Profile));
    this.eventListeners.add(el, 'six-dropdown-hide', this.selectSection(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: Event) => {
      const { name, item } = (event as CustomEvent).detail;
      this.sixProfileSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  private setupAppSwitcher = (el?: HTMLSixDropdownElement) => {
    if (el == null) return;

    this.eventListeners.add(el, 'six-dropdown-show', this.selectSection(Section.AppSwitcher));
    this.eventListeners.add(el, 'six-dropdown-hide', this.selectSection(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: Event) => {
      const { name, item } = (event as CustomEvent).detail;
      this.selectedApp = item.innerText;
      this.sixAppSwitcherSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  private appNameClicked = () => this.sixAppNameClicked.emit();

  private computeSearchOpenState = () => {
    this.selectedSection = this.openSearch ? Section.Search : Section.None;
  };

  componentWillLoad() {
    this.slots = {
      [Slot.Search]: hasSlot(this.host, Slot.Search),
      [Slot.Notifications]: hasSlot(this.host, Slot.Notifications),
      [Slot.AppSwitcher]: hasSlot(this.host, Slot.AppSwitcher),
      [Slot.Profile]: hasSlot(this.host, Slot.Profile),
      [Slot.Logo]: hasSlot(this.host, Slot.Logo),
    };

    if (this.hasSlot(Slot.AppSwitcher)) {
      this.updateSelectedApp();
    }

    if (this.hasSlot(Slot.Search)) {
      this.computeSearchOpenState();
    }
  }

  connectedCallback() {
    const appSwitcherSlot = getSlot(this.host, Slot.AppSwitcher);
    if (appSwitcherSlot) {
      this.mutationObserver = new MutationObserver((mutations) => {
        if (mutations.some((mutation) => mutation.type === 'childList' || mutation.type === 'attributes')) {
          this.updateSelectedApp();
        }
      });
      this.mutationObserver.observe(appSwitcherSlot, { attributes: true, childList: true, subtree: true });
    }
  }

  private updateSelectedApp() {
    // there are more concise ways to select the first checked menu item, but this is one that works for jest
    const element = getSlot(this.host, Slot.AppSwitcher);
    if (element == null) {
      return undefined;
    }
    const items = Array.from(element.querySelectorAll('six-menu-item'));
    const firstCheckedMenuItem = items.find(
      (item) => item.hasAttribute('checked') && item.getAttribute('checked') !== 'false'
    );
    this.selectedApp = firstCheckedMenuItem?.textContent ?? undefined;
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
    this.mutationObserver?.disconnect();
  }

  render() {
    const hamburgerMenu = !this.hideHamburgerMenu && (
      <six-header-item>
        <six-icon-button name={this.openHamburgerMenu ? 'menu_open' : 'menu'} ref={this.setupMenu} />
      </six-header-item>
    );

    const search = this.hasSlot(Slot.Search) && (
      <six-header-item active={this.isSectionSelected(Section.Search)}>
        <six-icon-button name="search" onClick={() => this.toggleSearch()} data-testid="search-trigger" />
      </six-header-item>
    );

    const notifications = this.hasSlot(Slot.Notifications) && (
      <six-header-item>
        <slot name={Slot.Notifications} />
      </six-header-item>
    );

    const appSwitcher = this.hasSlot(Slot.AppSwitcher) && (
      <six-header-item active={this.isSectionSelected(Section.AppSwitcher)}>
        <six-dropdown distance={14} skidding={20} placement="bottom-end" ref={this.setupAppSwitcher}>
          <div slot="trigger" class="six-header__app-switcher-dropdown">
            <a onClick={this.appNameClicked} class="six-header__selected-app">
              {this.selectedApp}
            </a>
            <six-icon-button name="apps" />
          </div>
          <slot name={Slot.AppSwitcher} />
        </six-dropdown>
      </six-header-item>
    );

    const profile = this.hasSlot(Slot.Profile) && (
      <six-header-item active={this.isSectionSelected(Section.Profile)}>
        <six-dropdown distance={18} skidding={20} placement="bottom-end" ref={this.setupProfile}>
          <slot name="profile-avatar" slot="trigger" />
          <slot name="profile-menu" />
        </six-dropdown>
      </six-header-item>
    );

    const logo = this.hasSlot(Slot.Logo) ? (
      <six-header-item>
        <slot name="logo" />
      </six-header-item>
    ) : (
      <six-header-item class={{ 'six-header__logo--clickable': this.clickableLogo }} ref={this.setupLogo}>
        <six-logo brand={this.logo} />
      </six-header-item>
    );

    const customView = (
      <Host>
        <header part="header" class="six-header">
          <slot />
        </header>
        <div
          class={{
            'six-header__search-field': true,
            'six-header__search-field--visible': this.openSearch,
            'six-header__search-field--shift-content': this.shiftContent,
          }}
        >
          <slot name={Slot.Search} />
        </div>
      </Host>
    );

    const defaultView = (
      <Host>
        <header part="header" class="six-header">
          {hamburgerMenu}
          {logo}
          <six-header-item class="six-header__placeholder" />
          <six-header-item>
            <slot />
          </six-header-item>
          {search}
          {notifications}
          {appSwitcher}
          {profile}
        </header>

        <div
          class={{
            'six-header__search-field': true,
            'six-header__search-field--visible': this.isSectionSelected(Section.Search),
            'six-header__search-field--shift-content': this.shiftContent,
          }}
        >
          <slot name={Slot.Search} />
        </div>
      </Host>
    );

    return this.custom ? customView : defaultView;
  }
}
