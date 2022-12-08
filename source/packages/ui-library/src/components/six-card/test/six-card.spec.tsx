import { newSpecPage } from '@stencil/core/testing';
import { SixCard } from '../six-card';

describe('six-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixCard],
      html: `<six-card></six-card>`,
    });
    expect(page.root).toEqualHtml(`
      <six-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </six-card>
    `);
  });
});
