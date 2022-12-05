import { newSpecPage } from '@stencil/core/testing';
import { SixSidebar } from '../six-sidebar';

describe('six-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixSidebar],
      html: `<six-sidebar></six-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <six-sidebar>
        <mock:shadow-root>
          <host class="six-sidebar">
            <div aria-hidden="true" class="sidebar--left sidebar__container" style="width: 16rem; margin-left: calc(1rem - 16rem);">
              <slot></slot>
            </div>
          </host>
        </mock:shadow-root>
      </six-sidebar>
    `);
  });
});
