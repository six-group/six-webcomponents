import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { getAvailableSlots } from '../../utils/slot';
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
  Notifications,
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

const getSlots = getAvailableSlots(Slot);

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define a custom component that is included in the header.
 * @slot search-field - Used to define the search field component in the header.
 * @slot notifications - Used to define the notification component in the header.
 * @slot app-switcher-menu - Used to define the application switcher menu in the header.
 * @slot profile-menu - Used to define the profile menu in the header.
 * @slot profile-avatar - Used to define the avator in the header.
 */

@Component({
  tag: 'six-header',
  styleUrl: 'six-header.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class SixHeader {
  /** Indicates if content should be shifted down when search field is visible. */
  @Prop() shiftContent = false;

  /** Set the hamburger menu icon to open or closed state */
  @Prop() openHamburgerMenu = false;

  /** Set the header search to be in an open or closed state */
  @Prop() openSearch = false;

  /** Set whether the logo should be clickable */
  @Prop() clickableLogo = false;

  @Watch('openSearch')
  handleOpenSearchChange() {
    this.computeSearchOpenState();
  }

  /** Sets open state for search */
  @Method()
  async setSearchOpenState(openState: boolean) {
    if (this.selectedSection === Section.Search && !openState) {
      this.selectedSection = Section.None;
    } else if (openState && this.selectedSection !== Section.Search) {
      this.selectedSection = Section.Search;
    }
  }

  /** Get open state for search */
  @Method()
  async getIsSearchOpen() {
    return this.selectedSection === Section.Search;
  }

  /** Emitted when the name of the selected app is clicked. */
  @Event({ eventName: 'six-header-app-name-clicked' })
  sixAppNameClicked: EventEmitter<EmptyPayload>;

  /** Emitted when a menu item is in the app switcher menu is selected. */
  @Event({ eventName: 'six-header-app-switcher-select' })
  sixAppSwitcherSelect: EventEmitter<SixHeaderAppSwitcherSelectPayload>;

  /** Emitted when a menu item is in the profile menu is selected. */
  @Event({ eventName: 'six-header-profile-select' })
  sixProfileSelect: EventEmitter<SixHeaderProfileSelectPayload>;

  /** Emitted when the hamburger menu is clicked. */
  @Event({ eventName: 'six-header-hamburger-menu-clicked' })
  sixHamburgerClick: EventEmitter<EmptyPayload>;

  /** Emitted when the header logo is clicked. */
  @Event({ eventName: 'six-header-logo-clicked' })
  sixLogoClick: EventEmitter<EmptyPayload>;

  /** Emitted when search field is toggled. */
  @Event({ eventName: 'six-header-search-field-toggle' })
  sixSearchFieldToggle: EventEmitter<SixHeaderSearchFieldToggle>;

  @Element() host: HTMLSixHeaderElement;

  readonly eventListeners = new EventListeners();

  slots: { readonly [K: string]: boolean };

  @State() selectedApp: string;
  @State() selectedSection: Section;

  has = (slot: Slot) => this.slots[slot];

  selected = (value: Section) => value === this.selectedSection;

  select = (value: Section) => () => {
    this.selectedSection = value;
  };

  toggleSearch = (value: Section) => () => {
    if (value === Section.Search) {
      const visible = this.selectedSection !== value;
      if (visible) {
        this.host.querySelector(`[slot="${Slot.Search}"]`).shadowRoot.querySelector('six-input')?.setFocus();
      }
      this.sixSearchFieldToggle.emit({ visible });
    }
    this.selectedSection = this.selectedSection === value ? Section.None : value;
  };

  setupMenu = (el: HTMLSixIconButtonElement) => {
    this.eventListeners.add(el, 'click', () => this.sixHamburgerClick.emit());
  };

  setupLogo = (el: HTMLSixIconButtonElement) => {
    if (!this.clickableLogo) {
      return;
    }

    this.eventListeners.add(el, 'click', () => this.sixLogoClick.emit());
  };

  setupProfile = (el: HTMLSixDropdownElement) => {
    this.eventListeners.add(el, 'six-dropdown-show', this.select(Section.Profile));
    this.eventListeners.add(el, 'six-dropdown-hide', this.select(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: CustomEvent) => {
      const { name, item } = event.detail;
      this.sixProfileSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  setupAppSwitcher = (el: HTMLSixDropdownElement) => {
    this.eventListeners.add(el, 'six-dropdown-show', this.select(Section.AppSwitcher));
    this.eventListeners.add(el, 'six-dropdown-hide', this.select(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: CustomEvent) => {
      const { name, item } = event.detail;
      this.selectedApp = item.innerText;
      this.sixAppSwitcherSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  appNameClicked = () => this.sixAppNameClicked.emit();

  computeSearchOpenState = () => {
    this.selectedSection = this.openSearch ? Section.Search : Section.None;
  };

  componentWillLoad() {
    this.slots = getSlots(this.host);

    if (this.has(Slot.AppSwitcher)) {
      this.selectedApp = this.getSelectedApp();
    }

    if (this.has(Slot.Search)) {
      this.computeSearchOpenState();
    }
  }

  private getSelectedApp() {
    // there are more concise ways to select the first checked menu item, but this is one that works for jest
    const element = this.host.querySelector(`[slot="${Slot.AppSwitcher}"]`);
    const items = Array.from(element.querySelectorAll('six-menu-item'));
    const firstCheckedMenuItem = items.find((item: HTMLElement) => item.hasAttribute('checked'));
    return firstCheckedMenuItem?.textContent;
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  render() {
    const search = this.has(Slot.Search) && (
      <section
        class={{
          'six-header__search': true,
          'six-header__search--open': this.selected(Section.Search),
        }}
      >
        <six-icon-button name="search" onClick={this.toggleSearch(Section.Search)} data-testid="search-trigger" />
      </section>
    );

    const notifications = this.has(Slot.Notifications) && (
      <section class="six-header__notification">
        <slot name={Slot.Notifications} />
      </section>
    );

    const appSwitcher = this.has(Slot.AppSwitcher) && (
      <section
        class={{
          'six-header__app-switcher': true,
          'six-header__app-switcher--open': this.selected(Section.AppSwitcher),
        }}
      >
        <a onClick={this.appNameClicked} class="six-header__selected-app">
          {this.selectedApp}
        </a>
        <six-dropdown distance={13} skidding={20} placement="bottom-end" ref={this.setupAppSwitcher}>
          <six-icon-button name="apps" slot="trigger" />
          <slot name={Slot.AppSwitcher} />
        </six-dropdown>
      </section>
    );

    const profile = this.has(Slot.Profile) && (
      <section
        class={{
          'six-header__profile': true,
          'six-header__profile--open': this.selected(Section.Profile),
        }}
      >
        <six-dropdown distance={17} skidding={20} placement="bottom-end" ref={this.setupProfile}>
          <slot name="profile-avatar" slot="trigger" />
          <slot name="profile-menu" />
        </six-dropdown>
      </section>
    );

    const logo = this.has(Slot.Logo) ? (
      <section>
        <slot name="logo" />
      </section>
    ) : (
      <section
        class={{
          'six-header__logo': true,
          'six-header__logo--clickable': this.clickableLogo,
        }}
        ref={this.setupLogo}
      >
        <svg height="20" viewBox="0 0 90 26" xmlns="http://www.w3.org/2000/svg">
          <title>SIX</title>
          <g fill="#DE3919" fill-rule="nonzero">
            <path d="m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525" />
            <path d="m42.16.324h5.21v24.806h-5.21z" />
            <path d="m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545" />
          </g>
        </svg>
      </section>
    );

    return (
      <Host>
        <header class="six-header">
          <section class="six-header__menu">
            <six-icon-button name={this.openHamburgerMenu ? 'menu_open' : 'menu'} ref={this.setupMenu} />
          </section>

          {logo}

          <section class="six-header__placeholder" />

          <section class="six-header__custom">
            <slot />
          </section>

          {search}

          {notifications}

          {appSwitcher}

          {profile}
        </header>

        <div
          class={{
            'six-header__search-field': true,
            'six-header__search-field--visible': this.selected(Section.Search),
            'six-header__search-field--shift-content': this.shiftContent,
          }}
        >
          <slot name={Slot.Search} />
        </div>
      </Host>
    );
  }
}
