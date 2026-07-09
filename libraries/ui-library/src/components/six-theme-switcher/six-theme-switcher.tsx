import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';

export type SixTheme = 'light' | 'dark' | 'auto';

/**
 * @since 5.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'six-theme-switcher',
  styleUrl: 'six-theme-switcher.scss',
  shadow: true,
})
export class SixThemeSwitcher {
  private attributeObserver?: MutationObserver;
  private mediaQuery?: MediaQueryList;

  @State() currentTheme: SixTheme = 'light';
  @State() appliedTheme: 'light' | 'dark' = 'light';

  /** The icon button's size. */
  @Prop({ reflect: true }) size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge' = 'medium';

  /** Set to true to disable the theme switcher. */
  @Prop({ reflect: true }) disabled = false;

  /** A description that gets read by screen readers. */
  @Prop({ reflect: true }) label = 'Toggle theme';

  /** Emitted when the theme is changed. */
  @Event({ eventName: 'six-theme-switcher-change' }) sixThemeChange!: EventEmitter<EmptyPayload>;

  async connectedCallback() {
    await this.updateThemeState();
    this.setupThemeListener();
  }

  disconnectedCallback() {
    this.cleanupThemeListener();
  }

  componentDidLoad() {
    this.updateThemeState();
  }

  private setupThemeListener() {
    document.addEventListener('six-root-theme-change', this.handleThemeChange);

    // Keep in sync when data-six-theme is toggled directly on the root element
    if (typeof MutationObserver !== 'undefined') {
      this.attributeObserver = new MutationObserver(this.handleThemeChange);
      this.attributeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-six-theme'],
      });
    }

    // Keep in sync when the OS preference changes while no explicit theme is set
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', this.handleThemeChange);
  }

  private cleanupThemeListener() {
    document.removeEventListener('six-root-theme-change', this.handleThemeChange);
    this.attributeObserver?.disconnect();
    this.mediaQuery?.removeEventListener('change', this.handleThemeChange);
  }

  private handleThemeChange = async () => {
    await this.updateThemeState();
  };

  /**
   * Reads the theme from the data-six-theme attribute / OS preference.
   * Used when no six-root is present to provide the SixTheme API.
   */
  private getThemeFromDocument(): { theme: SixTheme; appliedTheme: 'light' | 'dark' } {
    const attribute = document.documentElement.getAttribute('data-six-theme');
    if (attribute === 'dark' || attribute === 'light') {
      return { theme: attribute, appliedTheme: attribute };
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return { theme: 'auto', appliedTheme: prefersDark ? 'dark' : 'light' };
  }

  private async updateThemeState() {
    if (window.SixTheme) {
      try {
        const { theme, appliedTheme } = await window.SixTheme.getTheme();
        this.currentTheme = theme;
        this.appliedTheme = appliedTheme;
        return;
      } catch (e) {
        console.warn('[six-theme-switcher] Failed to get theme:', e);
      }
    }

    const { theme, appliedTheme } = this.getThemeFromDocument();
    this.currentTheme = theme;
    this.appliedTheme = appliedTheme;
  }

  private handleClick = async () => {
    if (this.disabled) {
      return;
    }

    if (window.SixTheme) {
      try {
        await window.SixTheme.toggle();
      } catch (e) {
        console.warn('[six-theme-switcher] Failed to toggle theme:', e);
        return;
      }
    } else {
      // No six-root present — toggle the data-six-theme attribute directly
      const { appliedTheme } = this.getThemeFromDocument();
      document.documentElement.setAttribute('data-six-theme', appliedTheme === 'dark' ? 'light' : 'dark');
    }

    await this.updateThemeState();
    this.sixThemeChange.emit();
  };

  private getIconName(): string {
    return this.appliedTheme === 'dark' ? 'light_mode' : 'dark_mode';
  }

  render() {
    return (
      <six-icon-button
        part="base"
        name={this.getIconName()}
        size={this.size}
        disabled={this.disabled}
        label={this.label}
        onClick={this.handleClick}
      />
    );
  }
}
