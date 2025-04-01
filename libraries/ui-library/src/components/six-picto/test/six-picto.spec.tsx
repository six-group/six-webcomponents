import { newSpecPage } from '@stencil/core/testing';
import { SixPicto } from '../six-picto';

describe('six-picto', () => {
  it('renders correct pictogram', async () => {
    const page = await newSpecPage({
      components: [SixPicto],
      html: `<six-picto>copy</six-picto>`,
    });
    expect(page.root).toEqualHtml(`
      <six-picto>
        <mock:shadow-root>
          <div class="copy is-size-medium" part="icon"></div>
        </mock:shadow-root>
        copy
      </six-picto>
    `);
  });

  it('renders picto in correct size', async () => {
    const page = await newSpecPage({
      components: [SixPicto],
      html: `<six-picto size="xxLarge">search</six-picto>`,
    });
    expect(page.root).toEqualHtml(`
      <six-picto size="xxLarge">
        <mock:shadow-root>
          <div class="is-size-xxLarge search" part="icon"></div>
        </mock:shadow-root>
        search
      </six-picto>
    `);
  });
});
