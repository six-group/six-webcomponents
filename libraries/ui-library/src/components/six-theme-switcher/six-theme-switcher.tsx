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
  }

  private cleanupThemeListener() {
    document.removeEventListener('six-root-theme-change', this.handleThemeChange);
  }

  private handleThemeChange = async () => {
    await this.updateThemeState();
  };

  private async updateThemeState() {
    if (window.SixTheme) {
      try {
        const { theme, appliedTheme } = await window.SixTheme.getTheme();
        this.currentTheme = theme;
        this.appliedTheme = appliedTheme;
      } catch (e) {
        console.warn('[six-theme-switcher] Failed to get theme:', e);
      }
    }
  }

  private handleClick = async () => {
    if (this.disabled) {
      return;
    }

    if (window.SixTheme) {
      try {
        await window.SixTheme.toggle();
        await this.updateThemeState();
        this.sixThemeChange.emit();
      } catch (e) {
        console.warn('[six-theme-switcher] Failed to toggle theme:', e);
      }
    } else {
      console.warn('[six-theme-switcher] SixTheme API not found. Make sure six-root is present in your DOM.');
    }
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
