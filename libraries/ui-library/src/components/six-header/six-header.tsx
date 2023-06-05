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
  @Event({ eventName: 'six-header-app-name-clicked' }) sixAppNameClicked!: EventEmitter<EmptyPayload>;

  /** Emitted when a menu item is in the app switcher menu is selected. */
  @Event({ eventName: 'six-header-app-switcher-select' })
  sixAppSwitcherSelect!: EventEmitter<SixHeaderAppSwitcherSelectPayload>;

  /** Emitted when a menu item is in the profile menu is selected. */
  @Event({ eventName: 'six-header-profile-select' }) sixProfileSelect!: EventEmitter<SixHeaderProfileSelectPayload>;

  /** Emitted when the hamburger menu is clicked. */
  @Event({ eventName: 'six-header-hamburger-menu-clicked' }) sixHamburgerClick!: EventEmitter<EmptyPayload>;

  /** Emitted when the header logo is clicked. */
  @Event({ eventName: 'six-header-logo-clicked' }) sixLogoClick!: EventEmitter<EmptyPayload>;

  /** Emitted when search field is toggled. */
  @Event({ eventName: 'six-header-search-field-toggle' })
  sixSearchFieldToggle!: EventEmitter<SixHeaderSearchFieldToggle>;

  @Element() host!: HTMLSixHeaderElement;

  private eventListeners = new EventListeners();

  private slots?: Record<Slot, boolean>;

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

  private setupMenu = (el: HTMLSixIconButtonElement) => {
    this.eventListeners.add(el, 'click', () => this.sixHamburgerClick.emit());
  };

  private setupLogo = (el: HTMLSixIconButtonElement) => {
    if (!this.clickableLogo) {
      return;
    }

    this.eventListeners.add(el, 'click', () => this.sixLogoClick.emit());
  };

  private setupProfile = (el: HTMLSixDropdownElement) => {
    this.eventListeners.add(el, 'six-dropdown-show', this.selectSection(Section.Profile));
    this.eventListeners.add(el, 'six-dropdown-hide', this.selectSection(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: CustomEvent) => {
      const { name, item } = event.detail;
      this.sixProfileSelect.emit({ selectedLabel: item.innerText, name, item });
    });
  };

  private setupAppSwitcher = (el: HTMLSixDropdownElement) => {
    this.eventListeners.add(el, 'six-dropdown-show', this.selectSection(Section.AppSwitcher));
    this.eventListeners.add(el, 'six-dropdown-hide', this.selectSection(Section.None));
    this.eventListeners.add(el, 'six-menu-item-selected', (event: CustomEvent) => {
      const { name, item } = event.detail;
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
      this.selectedApp = this.getSelectedApp();
    }

    if (this.hasSlot(Slot.Search)) {
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
    const search = this.hasSlot(Slot.Search) && (
      <section
        class={{
          'six-header__search': true,
          'six-header__search--open': this.isSectionSelected(Section.Search),
        }}
      >
        <six-icon-button name="search" onClick={() => this.toggleSearch()} data-testid="search-trigger" />
      </section>
    );

    const notifications = this.hasSlot(Slot.Notifications) && (
      <section class="six-header__notification">
        <slot name={Slot.Notifications} />
      </section>
    );

    const appSwitcher = this.hasSlot(Slot.AppSwitcher) && (
      <section
        class={{
          'six-header__app-switcher': true,
          'six-header__app-switcher--open': this.isSectionSelected(Section.AppSwitcher),
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

    const profile = this.hasSlot(Slot.Profile) && (
      <section
        class={{
          'six-header__profile': true,
          'six-header__profile--open': this.isSectionSelected(Section.Profile),
        }}
      >
        <six-dropdown distance={17} skidding={20} placement="bottom-end" ref={this.setupProfile}>
          <slot name="profile-avatar" slot="trigger" />
          <slot name="profile-menu" />
        </six-dropdown>
      </section>
    );

    const logo = this.hasSlot(Slot.Logo) ? (
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
            'six-header__search-field--visible': this.isSectionSelected(Section.Search),
            'six-header__search-field--shift-content': this.shiftContent,
          }}
        >
          <slot name={Slot.Search} />
        </div>
      </Host>
    );
  }
}
