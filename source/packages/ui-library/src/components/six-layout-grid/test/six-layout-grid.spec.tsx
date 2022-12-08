import { newSpecPage } from '@stencil/core/testing';
import { SixLayoutGrid } from '../six-layout-grid';

describe('six-layout-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixLayoutGrid],
      html: `<six-layout-grid></six-layout-grid>`,
    });

    expect(page.root).toEqualHtml(`
      <six-layout-grid style="--no-of-columns: 12;">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </six-layout-grid>
    `);
  });
});
