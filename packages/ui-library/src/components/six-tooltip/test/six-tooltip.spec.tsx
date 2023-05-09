import { newSpecPage } from '@stencil/core/testing';
import { SixTooltip } from '../six-tooltip';

describe('six-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTooltip],
      html: `<six-tooltip content="This is a tooltip"><six-button>Hover Me</six-button></six-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tooltip content="This is a tooltip">
        <mock:shadow-root>
          <slot></slot>
          <div class="tooltip-positioner" hidden="">
            <div aria-hidden="true" class="tooltip" id="tooltip-1" part="base" role="tooltip">
              <slot name="content">
                This is a tooltip
              </slot>
            </div>
          </div>
        </mock:shadow-root>
        <six-button>
          Hover Me
        </six-button>
      </six-tooltip>
    `);
  });
});
