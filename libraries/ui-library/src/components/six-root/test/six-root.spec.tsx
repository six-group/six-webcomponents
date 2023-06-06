import { newSpecPage } from '@stencil/core/testing';
import { SixRoot } from '../six-root';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('six-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixRoot],
      html: `<six-root></six-root>`,
    });

    expect(page.root).toEqualHtml(`
      <six-root>
        <mock:shadow-root>
          <host class="six-root">
            <header part="header">
              <slot name="header"></slot>
            </header>
            <nav class="six-root__left-sidebar" part="left-sidebar">
              <set-attributes>
                <slot name="left-sidebar"></slot>
              </set-attributes>
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
});
