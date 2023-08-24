import { newSpecPage } from '@stencil/core/testing';
import { SixTag } from '../six-tag';

describe('six-tag', () => {
  beforeEach(async () => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTag],
      html: `<six-tag size="small">label</six-tag>`,
    });
    expect(page.root).toEqualHtml(`

      <six-tag size="small" type="primary">
        <mock:shadow-root>
          <span class="tag tag--primary tag--small" part="base">
          <six-tooltip>
            <span class="tag__content" part="content">
              <slot></slot>
            </span>
            </six-tooltip>
          </span>
        </mock:shadow-root>
        label
      </six-tag>
    `);
  });

  it('renders clearable', async () => {
    const page = await newSpecPage({
      components: [SixTag],
      html: `<six-tag size="medium" clearable>label</six-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tag clearable="" size="medium" type="primary">
        <mock:shadow-root>
          <span class="tag tag--clear tag--medium tag--primary" part="base">
          <six-tooltip>
            <span class="tag__content" part="content">
              <slot></slot>
            </span>
          </six-tooltip>
            <six-icon-button class="tag__clear" exportparts="base:clear-button" name="clear" size="xSmall"></six-icon-button>
          </span>
        </mock:shadow-root>
        label
      </six-tag>
    `);
  });
});
