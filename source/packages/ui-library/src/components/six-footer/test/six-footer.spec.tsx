import { newSpecPage } from '@stencil/core/testing';
import { SixFooter } from '../six-footer';

describe('six-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixFooter],
      html: `<six-footer></six-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <six-footer>
        <mock:shadow-root>
          <footer class="six-footer">
            <slot></slot>
          </footer>
        </mock:shadow-root>
      </six-footer>

    `);
  });
});
