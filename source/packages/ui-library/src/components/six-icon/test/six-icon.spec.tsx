import { newSpecPage } from '@stencil/core/testing';
import { SixIcon } from '../six-icon';

describe('six-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon></six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit">
        <mock:shadow-root>
          <i class="icon--inherit material-icons material-icons-outlined">
            <slot></slot>
          </i>
        </mock:shadow-root>
      </six-icon>
    `);
  });
});
