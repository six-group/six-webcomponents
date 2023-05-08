import { newSpecPage } from '@stencil/core/testing';
import { SixTable } from '../six-table';

describe('six-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTable],
      html: `<six-table></six-table>`,
    });
    expect(page.root).toEqualHtml(`
      <six-table>
        <mock:shadow-root>
          <slot>
            <six-table-header data-testid="table-header"></six-table-header>
          </slot>
        </mock:shadow-root>
      </six-table>
    `);
  });
});
