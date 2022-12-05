import { newSpecPage } from '@stencil/core/testing';
import { SixTableCell } from '../six-table-cell';

describe('six-table-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTableCell],
      html: `<six-table-cell></six-table-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <six-table-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </six-table-cell>
    `);
  });
});
