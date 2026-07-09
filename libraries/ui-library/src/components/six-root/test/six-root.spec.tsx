import { newSpecPage } from '@stencil/core/testing';
import { SixRoot } from '../six-root';

describe('six-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixRoot],
      html: `<six-root></six-root>`,
    });

    expect(page.root).toEqualHtml(`
      <six-root theme="light">
        <mock:shadow-root>
          <host class="six-root">
            <header part="header">
              <slot name="header"></slot>
            </header>
            <nav class="six-root__left-sidebar" part="left-sidebar">
                <slot name="left-sidebar"></slot>
            </nav>
            <main part="main">
              <div class="six-root__container six-root__container--padded" part="container">
                <slot name="main"></slot>
              </div>
              <div class="six-root__footer">
                <slot name="footer"></slot>
              </div>
            </main>
            <nav class="six-root__right-sidebar" part="right-sidebar">
              <slot name="right-sidebar"></slot>
            </nav>
          </host>
        </mock:shadow-root>
      </six-root>
    `);
  });

  it('applies theme correctly', async () => {
    const page = await newSpecPage({
      components: [SixRoot],
      html: `<six-root theme="dark"></six-root>`,
    });

    expect(page.root?.getAttribute('theme')).toBe('dark');
  });

  it('can toggle theme', async () => {
    const page = await newSpecPage({
      components: [SixRoot],
      html: `<six-root theme="light"></six-root>`,
    });

    const root = page.rootInstance as SixRoot;
    await root.toggleTheme();

    const theme = await root.getTheme();
    expect(theme.theme).toBe('dark');
  });

  it('can set theme programmatically', async () => {
    const page = await newSpecPage({
      components: [SixRoot],
      html: `<six-root></six-root>`,
    });

    const root = page.rootInstance as SixRoot;
    await root.setTheme('dark');

    const theme = await root.getTheme();
    expect(theme.theme).toBe('dark');
  });
});
