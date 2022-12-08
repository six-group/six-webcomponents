import { newSpecPage } from '@stencil/core/testing';
import { SixSidebarItem } from '../six-sidebar-item';

describe('six-sidebar-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixSidebarItem],
      html: `<six-sidebar-item></six-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <six-sidebar-item value="">
        <mock:shadow-root>
          <div aria-disabled="false" aria-selected="false" class="sidebar-item" role="menuitem">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-sidebar-item>
    `);
  });

  it('render disabled attribute', async () => {
    const page = await newSpecPage({
      components: [SixSidebarItem],
      html: `<six-sidebar-item disabled></six-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <six-sidebar-item disabled="" value="">
        <mock:shadow-root>
          <div aria-disabled="true" aria-selected="false" class="sidebar-item sidebar-item--disabled" role="menuitem">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-sidebar-item>
    `);
  });

  it('render selected attribute', async () => {
    const page = await newSpecPage({
      components: [SixSidebarItem],
      html: `<six-sidebar-item selected></six-sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <six-sidebar-item selected="" value="">
        <mock:shadow-root>
          <div aria-disabled="false" aria-selected="true" class="sidebar-item sidebar-item--selected" role="menuitem">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-sidebar-item>
    `);
  });
});
