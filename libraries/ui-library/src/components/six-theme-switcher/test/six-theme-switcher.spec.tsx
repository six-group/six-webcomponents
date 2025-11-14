import { newSpecPage } from '@stencil/core/testing';
import { SixThemeSwitcher } from '../six-theme-switcher';

describe('six-theme-switcher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixThemeSwitcher],
      html: `<six-theme-switcher></six-theme-switcher>`,
    });

    expect(page.root).toEqualHtml(`
      <six-theme-switcher size="medium">
        <mock:shadow-root>
          <six-icon-button label="Toggle theme" name="dark_mode" part="base" size="medium"></six-icon-button>
        </mock:shadow-root>
      </six-theme-switcher>
    `);
  });

  it('renders with custom size', async () => {
    const page = await newSpecPage({
      components: [SixThemeSwitcher],
      html: `<six-theme-switcher size="large"></six-theme-switcher>`,
    });

    const iconButton = page.root?.shadowRoot?.querySelector('six-icon-button');
    expect(iconButton?.getAttribute('size')).toBe('large');
  });

  it('renders with disabled state', async () => {
    const page = await newSpecPage({
      components: [SixThemeSwitcher],
      html: `<six-theme-switcher disabled></six-theme-switcher>`,
    });

    const iconButton = page.root?.shadowRoot?.querySelector('six-icon-button');
    expect(iconButton?.hasAttribute('disabled')).toBe(true);
  });

  it('renders with custom label', async () => {
    const page = await newSpecPage({
      components: [SixThemeSwitcher],
      html: `<six-theme-switcher label="Custom label"></six-theme-switcher>`,
    });

    const iconButton = page.root?.shadowRoot?.querySelector('six-icon-button');
    expect(iconButton?.getAttribute('label')).toBe('Custom label');
  });
});
