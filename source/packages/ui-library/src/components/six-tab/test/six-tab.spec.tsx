import { newSpecPage } from '@stencil/core/testing';
import { SixTab } from '../six-tab';

describe('six-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTab],
      html: `<six-tab></six-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tab id="tab-1" panel="">
        <mock:shadow-root>
          <div aria-disabled="false" aria-selected="false" class="tab" part="base" role="tab" tabindex="-1">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-tab>
    `);
  });
});
