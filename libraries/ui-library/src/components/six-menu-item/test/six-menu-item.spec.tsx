import { newSpecPage } from '@stencil/core/testing';
import { SixMenuItem } from '../six-menu-item';

describe('six-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixMenuItem],
      html: `<six-menu-item></six-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <six-menu-item value="">
        <mock:shadow-root>
          <div aria-checked="false" aria-disabled="false" class="menu-item" part="base" role="menuitem" tabindex="0">
            <span class="menu-item__prefix" part="prefix">
              <slot name="prefix"></slot>
            </span>
            <span class="menu-item__label" part="label">
              <slot></slot>
            </span>
            <span class="menu-item__suffix" part="suffix">
              <slot name="suffix"></slot>
            </span>
            <span class="menu-item__check" part="checked-icon">
              <six-icon aria-hidden="true" size="small">
                check
              </six-icon>
            </span>
          </div>
        </mock:shadow-root>
      </six-menu-item>
    `);
  });
});
