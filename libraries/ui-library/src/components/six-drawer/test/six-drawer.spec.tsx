import { newSpecPage } from '@stencil/core/testing';
import { SixDrawer } from '../six-drawer';

describe('six-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixDrawer],
      html: `<six-drawer></six-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <six-drawer>
        <mock:shadow-root>
          <div class="drawer drawer--fixed drawer--right" part="base">
            <div class="drawer__overlay" part="overlay" tabindex="-1"></div>
            <div aria-hidden="true" aria-labelledby="drawer-1-title" aria-modal="true" class="drawer__panel" part="panel" role="dialog" tabindex="0">
              <header class="drawer__header" part="header">
                <span class="drawer__title" id="drawer-1-title" part="title">
                  <slot name="label"></slot>
                </span>
                <six-icon-button class="drawer__close" exportparts="base:close-button" name="x"></six-icon-button>
              </header>
              <div class="drawer__body" part="body">
                <slot></slot>
              </div>
              <footer class="drawer__footer" part="footer">
                <slot name="footer"></slot>
              </footer>
            </div>
          </div>
        </mock:shadow-root>
      </six-drawer>
    `);
  });
});
