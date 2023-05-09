import { newSpecPage } from '@stencil/core/testing';
import { SixTabGroup } from '../six-tab-group';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

global.MutationObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('six-tab-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixTabGroup],
      html: `<six-tab-group></six-tab-group>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tab-group>
        <mock:shadow-root>
          <div class="tab-group tab-group--top" part="base">
            <div class="tab-group__nav-container">
              <div class="tab-group__nav" part="nav">
                <div class="tab-group__tabs" part="tabs" role="tablist">
                  <div class="tab-group__active-tab-indicator" part="active-tab-indicator"></div>
                  <slot name="nav"></slot>
                </div>
              </div>
            </div>
            <div class="tab-group__body" part="body">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </six-tab-group>
    `);
  });
});
