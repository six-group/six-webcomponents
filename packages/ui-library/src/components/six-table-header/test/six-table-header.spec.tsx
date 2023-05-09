import { newSpecPage } from '@stencil/core/testing';
import { SixTableHeader } from '../six-table-header';

describe('six-table-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTableHeader],
      html: `<six-table-header></six-table-header>`,
    });
    expect(page.root).toEqualHtml(`
      <six-table-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </six-table-header>
    `);
  });
});
