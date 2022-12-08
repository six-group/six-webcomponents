import { newSpecPage } from '@stencil/core/testing';
import { SixDialog } from '../six-dialog';

describe('six-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixDialog],
      html: `<six-dialog></six-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <six-dialog>
        <mock:shadow-root>
          <div class="dialog" part="base">
            <div class="dialog__overlay" part="overlay"></div>
            <div aria-hidden="true" aria-labelledby="dialog-1-title" aria-modal="true" class="dialog__panel" part="panel" role="dialog" tabindex="0">
              <header class="dialog__header" part="header">
                <span class="dialog__title" id="dialog-1-title" part="title">
                    <slot name="label"></slot>
                </span>
                <six-icon-button class="dialog__close" exportparts="base:close-button" name="close"></six-icon-button>
              </header>
              <div class="dialog__body" part="body">
                <slot></slot>
              </div>
              <footer class="dialog__footer" part="footer">
                <slot name="footer"></slot>
              </footer>
            </div>
          </div>
        </mock:shadow-root>
      </six-dialog>
    `);
  });
});
