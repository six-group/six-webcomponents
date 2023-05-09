import { newSpecPage } from '@stencil/core/testing';
import { SixMenuDivider } from '../six-menu-divider';

describe('six-menu-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixMenuDivider],
      html: `<six-menu-divider></six-menu-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <six-menu-divider>
        <mock:shadow-root>
          <div part="base" class="menu-divider" role="separator" aria-hidden="true" />
        </mock:shadow-root>
      </six-menu-divider>
    `);
  });
});
