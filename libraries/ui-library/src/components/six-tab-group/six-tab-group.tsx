import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { getOffset } from '../../utils/offset';
import { scrollIntoView } from '../../utils/scroll';
import { focusVisible } from '../../utils/focus-visible';

export interface SixTabShowPayload {
  name: string;
}

export interface SixTabHidePayload {
  name: string;
}

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot nav - Used for grouping tabs in the tab group.
 * @slot - Used for grouping tab panels in the tab group.
 *
 * @part base - The component's base wrapper.
 * @part nav - The tab group navigation container.
 * @part tabs - The container that wraps the slotted tabs.
 * @part active-tab-indicator - An element that displays the currently selected tab. This is a child of the tab's container.
 * @part body - The tab group body where tab panels are slotted in.
 * @part scroll-button - The previous and next scroll buttons that appear when tabs are scrollable.
 */
@Component({
  tag: 'six-tab-group',
  styleUrl: 'six-tab-group.scss',
  shadow: true,
})
export class SixTabGroup {
  private activeTab?: HTMLSixTabElement;
  private activeTabIndicator?: HTMLElement;
  private body?: HTMLElement;
  private mutationObserver?: MutationObserver;
  private nav?: HTMLElement;
  private resizeObserver?: ResizeObserver;
  private tabGroup?: HTMLElement;
  private tabs?: HTMLElement;

  @Element() host!: HTMLSixTabGroupElement;

  @State() hasScrollControls = false;

  /** The placement of the tabs. */
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

  /** Disables the scroll arrows that appear when tabs overflow. */
  @Prop() noScrollControls = false;

  @Watch('placement')
  handlePlacementChange() {
    this.syncActiveTabIndicator();
  }

  @Watch('noScrollControls')
  handleNoScrollControlsChange() {
    this.updateScrollControls();
  }

  /** Emitted when a tab is shown. */
  @Event({ eventName: 'six-tab-show' }) sixTabShow!: EventEmitter<SixTabShowPayload>;

  /** Emitted when a tab is hidden. */
  @Event({ eventName: 'six-tab-hide' }) sixTabHide!: EventEmitter<SixTabHidePayload>;

  componentDidLoad() {
    if (this.tabGroup == null || this.nav == null) return;

    // Set initial tab state when the tabs first become visible
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].intersectionRatio > 0) {
        this.setAriaLabels();
        this.setActiveTab(this.getActiveTab() || this.getAllTabs()[0], false);
        observer.unobserve(entries[0].target);
      }
    });
    observer.observe(this.host);

    focusVisible.observe(this.tabGroup);

    this.resizeObserver = new ResizeObserver(() => this.updateScrollControls());
    this.resizeObserver.observe(this.nav);
    requestAnimationFrame(() => this.updateScrollControls());

    // Update aria labels if the DOM changes
    this.mutationObserver = new MutationObserver((mutations) => {
      if (
        mutations.some((mutation) => {
          return !['aria-labelledby', 'aria-controls'].includes(mutation.attributeName ?? '');
        })
      ) {
        setTimeout(() => this.setAriaLabels());
      }
    });
    this.mutationObserver.observe(this.host, { attributes: true, childList: true, subtree: true });
  }

  disconnectedCallback() {
    if (this.mutationObserver == null || this.tabGroup == null || this.nav == null || this.resizeObserver == null) {
      return;
    }

    this.mutationObserver.disconnect();
    focusVisible.unobserve(this.tabGroup);
    this.resizeObserver.unobserve(this.nav);
  }

  /** Shows the specified tab panel. */
  @Method()
  async show(panel: string) {
    const tabs = this.getAllTabs();
    const tab = tabs.find((el) => el.panel === panel);

    if (tab != null) {
      this.setActiveTab(tab);
    }
  }

  private getAllTabs(includeDisabled = false): HTMLSixTabElement[] {
    const slot = this.tabs?.querySelector('slot');
    if (slot == null) return [];

    return [...slot.assignedElements()].filter((el: Element) => {
      return includeDisabled
        ? el.tagName.toLowerCase() === 'six-tab'
        : el.tagName.toLowerCase() === 'six-tab' && !(el as HTMLSixTabElement).disabled;
    }) as [HTMLSixTabElement];
  }

  private getAllPanels(): HTMLSixTabPanelElement[] {
    const slot = this.body?.querySelector('slot');
    if (slot == null) return [];
    return [...slot.assignedElements()].filter((el: Element) => el.tagName.toLowerCase() === 'six-tab-panel') as [
      HTMLSixTabPanelElement
    ];
  }

  private getActiveTab() {
    return this.getAllTabs().find((el) => el.active);
  }

  private handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const tab = target.closest('six-tab');
    const tabGroup = tab?.closest('six-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this.host) {
      return false;
    }

    if (tab != null) {
      this.setActiveTab(tab);
    }
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.nav == null) return;

    const target = event.target as HTMLElement;
    const tab = target.closest('six-tab');
    const tabGroup = tab?.closest('six-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this.host) {
      return false;
    }

    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      if (tab != null) {
        this.setActiveTab(tab);
        event.preventDefault();
      }
    }

    // Move focus left or right
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const activeEl = document.activeElement as HTMLSixTabElement;

      if (activeEl && activeEl.tagName.toLowerCase() === 'six-tab') {
        const tabs = this.getAllTabs();
        let index = tabs.indexOf(activeEl);

        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = tabs.length - 1;
        } else if (event.key === 'ArrowLeft') {
          index = Math.max(0, index - 1);
        } else if (event.key === 'ArrowRight') {
          index = Math.min(tabs.length - 1, index + 1);
        }

        tabs[index].setFocus({ preventScroll: true });

        if (['top', 'bottom'].includes(this.placement)) {
          scrollIntoView(tabs[index], this.nav, 'horizontal');
        }

        event.preventDefault();
      }
    }
  };

  private handleScrollLeft = () => {
    if (this.nav == null) return;

    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth',
    });
  };

  private handleScrollRight = () => {
    if (this.nav == null) return;

    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth',
    });
  };

  private updateScrollControls() {
    if (this.nav == null) return;

    this.hasScrollControls = this.noScrollControls
      ? false
      : ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
  }

  private setActiveTab(tab: HTMLSixTabElement, emitEvents = true) {
    if (this.nav == null) return;

    if (tab != null && tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;

      // Sync tabs and panels
      this.getAllTabs().map((el) => (el.active = el === this.activeTab));
      this.getAllPanels().map((el) => (el.active = el.name === this.activeTab?.panel));
      this.syncActiveTabIndicator();

      if (['top', 'bottom'].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, 'horizontal');
      }

      // Emit events
      if (emitEvents) {
        if (previousTab != null) {
          this.sixTabHide.emit({ name: previousTab.panel });
        }

        this.sixTabShow.emit({ name: this.activeTab.panel });
      }
    }
  }

  private setAriaLabels() {
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();

    // Link each tab with its corresponding panel
    tabs.map((tab) => {
      const panel = panels.find((el) => el.name === tab.panel);
      if (panel != null) {
        tab.setAttribute('aria-controls', panel.getAttribute('id') ?? '');
        panel.setAttribute('aria-labelledby', tab.getAttribute('id') ?? '');
      }
    });
  }

  private syncActiveTabIndicator = () => {
    if (this.activeTabIndicator == null || this.nav == null) return;

    const tab = this.getActiveTab();

    if (tab != null) {
      this.activeTabIndicator.style.display = 'block';
    } else {
      this.activeTabIndicator.style.display = 'none';
      return;
    }

    const width = tab.clientWidth;
    const height = tab.clientHeight;
    const offset = getOffset(tab, this.nav);
    const offsetTop = offset.top + this.nav.scrollTop;
    const offsetLeft = offset.left + this.nav.scrollLeft;

    switch (this.placement) {
      case 'top':
      case 'bottom':
        this.activeTabIndicator.style.width = `${width}px`;
        this.activeTabIndicator.style.height = '';
        this.activeTabIndicator.style.transform = `translateX(${offsetLeft}px)`;
        break;

      case 'left':
      case 'right':
        this.activeTabIndicator.style.width = '';
        this.activeTabIndicator.style.height = `${height}px`;
        this.activeTabIndicator.style.transform = `translateY(${offsetTop}px)`;
        break;
    }
  };

  render() {
    return (
      <div
        part="base"
        ref={(el) => (this.tabGroup = el)}
        class={{
          'tab-group': true,

          // Placements
          'tab-group--top': this.placement === 'top',
          'tab-group--bottom': this.placement === 'bottom',
          'tab-group--left': this.placement === 'left',
          'tab-group--right': this.placement === 'right',

          'tab-group--has-scroll-controls': this.hasScrollControls,
        }}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <div class="tab-group__nav-container">
          {this.hasScrollControls && (
            <six-icon-button
              class="tab-group__scroll-button tab-group__scroll-button--left"
              exportparts="base:scroll-button"
              name="chevron_left"
              onClick={this.handleScrollLeft}
            />
          )}
          <div ref={(el) => (this.nav = el)} key="nav" part="nav" class="tab-group__nav">
            <div ref={(el) => (this.tabs = el)} part="tabs" class="tab-group__tabs" role="tablist">
              <div
                ref={(el) => (this.activeTabIndicator = el)}
                part="active-tab-indicator"
                class="tab-group__active-tab-indicator"
              />
              <slot name="nav" onSlotchange={this.syncActiveTabIndicator} />
            </div>
          </div>
          {this.hasScrollControls && (
            <six-icon-button
              class="tab-group__scroll-button tab-group__scroll-button--right"
              exportparts="base:scroll-button"
              name="chevron_right"
              onClick={this.handleScrollRight}
            />
          )}
        </div>

        <div ref={(el) => (this.body = el)} part="body" class="tab-group__body">
          <slot onSlotchange={this.syncActiveTabIndicator} />
        </div>
      </div>
    );
  }
}
