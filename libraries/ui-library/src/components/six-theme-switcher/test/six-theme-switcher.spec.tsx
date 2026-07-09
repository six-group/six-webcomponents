import { newSpecPage } from '@stencil/core/testing';
import { SixThemeSwitcher } from '../six-theme-switcher';

describe('six-theme-switcher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixThemeSwitcher],
      html: `<six-theme-switcher></six-theme-switcher>`,
    });

    // Note: the part="base" attribute is not rendered by Stencil's mock DOM (it is in real browsers)
    expect(page.root).toEqualHtml(`
      <six-theme-switcher label="Toggle theme" size="medium">
        <mock:shadow-root>
          <six-icon-button label="Toggle theme" name="dark_mode" size="medium"></six-icon-button>
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

  it('toggles the data-six-theme attribute directly when no six-root is present', async () => {
    const page = await newSpecPage({
      components: [SixThemeSwitcher],
      html: `<six-theme-switcher></six-theme-switcher>`,
    });

    const instance = page.rootInstance as SixThemeSwitcher;

    await instance['handleClick']();
    await page.waitForChanges();
    expect(page.doc.documentElement.getAttribute('data-six-theme')).toBe('dark');

    await instance['handleClick']();
    await page.waitForChanges();
    expect(page.doc.documentElement.getAttribute('data-six-theme')).toBe('light');
  });
});
