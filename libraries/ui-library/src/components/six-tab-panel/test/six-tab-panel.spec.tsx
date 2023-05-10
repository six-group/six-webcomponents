import { newSpecPage } from '@stencil/core/testing';
import { SixTabPanel } from '../six-tab-panel';

describe('six-tab-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTabPanel],
      html: `<six-tab-panel></six-tab-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tab-panel id="tab-panel-1" style="display: none;">
        <mock:shadow-root>
          <div aria-hidden="true" aria-selected="false" class="tab-panel" part="base" role="tabpanel">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-tab-panel>
    `);
  });
});
