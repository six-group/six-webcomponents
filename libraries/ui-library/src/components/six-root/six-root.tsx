import { Component, Element, h, Prop, Watch, Method } from '@stencil/core';
import { StageType } from '../six-stage-indicator/six-stage-indicator';

export type SixTheme = 'light' | 'dark' | 'auto';

/**
 * @since 1.0
 * @status stable
 *
 * @slot header - Used to define the header component.
 * @slot main - Used to define the components in the main area.
 * @slot left-sidebar - Used to define the sidebar on the left side.
 * @slot right-sidebar - Used to define the sidebar on the right side.
 * @slot footer - Used to define the footer component.
 */

@Component({
  tag: 'six-root',
  styleUrl: 'six-root.scss',
  shadow: true,
})
export class SixRoot {
  private mediaQuery?: MediaQueryList;
  private mediaQueryHandler?: (e: MediaQueryListEvent) => void;

  @Element() host!: HTMLSixRootElement;

  /** Defines whether the content section should be padded */
  // eslint-disable-next-line @stencil-community/ban-default-true
  @Prop() padded = true;

  /** Defines the stage of the application*/
  @Prop() stage: StageType = null;

  /** Defines the version of the application*/
  @Prop() version = '';

  /** Defines the theme */
  @Prop({ mutable: true, reflect: true }) theme: SixTheme = 'light';

  @Watch('theme')
  handleThemeChange() {
    this.applyTheme();
  }

  connectedCallback() {
    this.setupSystemPreferenceDetection();
    this.loadSavedTheme();
    this.applyTheme();
    this.exposeGlobalAPI();
  }

  disconnectedCallback() {
    this.cleanupSystemPreferenceDetection();
    this.cleanupGlobalAPI();
  }

  componentDidLoad() {
    this.applyTheme();
  }

  /** Sets the theme. */
  @Method()
  async setTheme(theme: SixTheme) {
    if (!['light', 'dark', 'auto'].includes(theme)) {
      console.warn(`[six-root] Invalid theme: ${theme}. Using 'light' as fallback.`);
      theme = 'light';
    }

    this.theme = theme;
    this.saveTheme(theme);
    this.applyTheme();
  }

  /** Gets the current theme and applied theme. */
  @Method()
  async getTheme(): Promise<{ theme: SixTheme; appliedTheme: 'light' | 'dark' }> {
    return {
      theme: this.theme,
      appliedTheme: this.getAppliedTheme(),
    };
  }

  /** Toggles between light and dark theme. */
  @Method()
  async toggleTheme() {
    const currentApplied = this.getAppliedTheme();
    const newTheme = currentApplied === 'dark' ? 'light' : 'dark';
    await this.setTheme(newTheme);
  }

  private setupSystemPreferenceDetection() {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryHandler = () => {
      if (this.theme === 'auto') {
        this.applyTheme();
      }
    };
    this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
  }

  private cleanupSystemPreferenceDetection() {
    if (this.mediaQuery && this.mediaQueryHandler) {
      this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  private getSystemPreference(): 'light' | 'dark' {
    if (this.mediaQuery && this.mediaQuery.matches) {
      return 'dark';
    }
    return 'light';
  }

  private getAppliedTheme(): 'light' | 'dark' {
    if (this.theme === 'auto') {
      return this.getSystemPreference();
    }
    return this.theme as 'light' | 'dark';
  }

  private applyTheme() {
    const appliedTheme = this.getAppliedTheme();
    const root = document.documentElement;

    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(`theme-${appliedTheme}`);

    this.updateMetaThemeColor(appliedTheme);
  }

  private updateMetaThemeColor(theme: 'light' | 'dark') {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }

    const colors = {
      light: '#ffffff',
      dark: '#000000',
    };

    metaThemeColor.setAttribute('content', colors[theme] || colors.light);
  }

  private loadSavedTheme() {
    const savedTheme = localStorage.getItem('six-theme') as SixTheme | null;
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      this.theme = savedTheme;
    }
  }

  private saveTheme(theme: SixTheme) {
    try {
      localStorage.setItem('six-theme', theme);
    } catch (e) {
      console.warn('[six-root] Failed to save theme to localStorage:', e);
    }
  }

  private exposeGlobalAPI() {
    if (!window.SixTheme) {
      window.SixTheme = {
        setTheme: (theme: SixTheme) => this.setTheme(theme),
        getTheme: () => this.getTheme(),
        toggle: () => this.toggleTheme(),
      };
    }
  }

  private cleanupGlobalAPI() {
    if (window.SixTheme) {
      delete window.SixTheme;
    }
  }

  render() {
    return (
      <host class="six-root">
        <header part="header">
          {this.stage && <six-stage-indicator stage={this.stage}>{this.version}</six-stage-indicator>}
          <slot name="header" />
        </header>
        <nav class="six-root__left-sidebar" part="left-sidebar">
          <slot name="left-sidebar" />
        </nav>
        <main part="main">
          <div class={{ 'six-root__container': true, 'six-root__container--padded': this.padded }} part="container">
            <slot name="main" />
          </div>
          <div class="six-root__footer">
            <slot name="footer" />
          </div>
        </main>
        <nav class="six-root__right-sidebar" part="right-sidebar">
          <slot name="right-sidebar" />
        </nav>
      </host>
    );
  }
}

declare global {
  interface Window {
    SixTheme?: {
      setTheme: (theme: SixTheme) => Promise<void>;
      getTheme: () => Promise<{ theme: SixTheme; appliedTheme: 'light' | 'dark' }>;
      toggle: () => Promise<void>;
    };
  }
}
