import { newSpecPage } from '@stencil/core/testing';
import { SixDetails } from '../six-details';

describe('six-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixDetails],
      html: `<six-details></six-details>`,
    });
    expect(page.root).toEqualHtml(`
      <six-details summary-icon-size="inherit">
        <mock:shadow-root>
          <div class="details" part="base">
            <header aria-controls="details-1-content" aria-disabled="false" aria-expanded="false" class="details__header" id="details-1-header" part="header" role="button" tabindex="0">
              <div class="details__summary" part="summary">
                <slot name="summary"></slot>
              </div>
              <span class="details__summary-icon details__summary-icon--animate" part="summary-icon">
                <slot name="summary-icon">
                  <six-icon size="inherit">
                    expand_more
                  </six-icon>
                </slot>
              </span>
            </header>
            <div class="details__body" hidden="">
              <div aria-labelledby="details-1-header" class="details__content" id="details-1-content" part="content" role="region">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </six-details>
    `);
  });
});
