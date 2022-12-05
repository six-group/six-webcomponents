import { newSpecPage } from '@stencil/core/testing';
import { SixMainContainer } from '../six-main-container';

describe('six-main-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixMainContainer],
      html: `<six-main-container></six-main-container>`,
    });

    expect(page.root).toEqualHtml(`
      <six-main-container>
        <mock:shadow-root>
          <div class="left-margin" part="left-margin"></div>
          <div class="content content--padded" part="content">
            <slot></slot>
          </div>
          <div class="right-margin" part="right-margin"></div>
        </mock:shadow-root>
      </six-main-container>
    `);
  });
});
