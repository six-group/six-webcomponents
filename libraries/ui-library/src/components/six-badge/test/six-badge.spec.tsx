import { newSpecPage } from '@stencil/core/testing';
import { SixBadge } from '../six-badge';

describe('six-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixBadge],
      html: `<six-badge></six-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <six-badge>
        <mock:shadow-root>
          <span class="badge badge--primary" part="base" role="status">
            <slot></slot>
          </span>
         </mock:shadow-root>
      </six-badge>
    `);
  });
});
