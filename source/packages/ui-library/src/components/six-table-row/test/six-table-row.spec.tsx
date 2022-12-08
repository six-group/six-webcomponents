import { newSpecPage } from '@stencil/core/testing';
import { SixTableRow } from '../six-table-row';

describe('six-table-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTableRow],
      html: `<six-table-row></six-table-row>`,
    });
    expect(page.root).toEqualHtml(`
      <six-table-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </six-table-row>
    `);
  });
});
