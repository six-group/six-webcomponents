import { newSpecPage } from '@stencil/core/testing';
import { SixTableHeaderCell } from '../six-table-header-cell';

describe('six-table-header-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTableHeaderCell],
      html: `<six-table-header-cell></six-table-header-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <six-table-header-cell>
        <mock:shadow-root>
          <div class="header">
             <slot></slot>
             <div class="header__trigger-icon-box"></div>
         </div>
        </mock:shadow-root>
      </six-table-header-cell>
    `);
  });
});
