import { newSpecPage } from '@stencil/core/testing';
import { SixIconButton } from '../six-icon-button';

describe('six-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixIconButton],
      html: `<six-icon-button></six-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon-button size="medium">
        <mock:shadow-root>
         <div>
          <button class="icon-button" part="base" type="button">
            <six-icon aria-hidden="true" size="medium"></six-icon>
            <slot></slot>
          </button>
         </div>
        </mock:shadow-root>
      </six-icon-button>
    `);
  });
});
