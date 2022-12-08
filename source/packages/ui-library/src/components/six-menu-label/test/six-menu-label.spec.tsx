import { newSpecPage } from '@stencil/core/testing';
import { SixMenuLabel } from '../six-menu-label';

describe('six-menu-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixMenuLabel],
      html: `<six-menu-label></six-menu-label>`,
    });
    expect(page.root).toEqualHtml(`
      <six-menu-label>
        <mock:shadow-root>
          <div class="menu-label" part="base">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-menu-label>
    `);
  });
});
