import { newSpecPage } from '@stencil/core/testing';
import { SixSidebarItemGroup } from '../six-sidebar-item-group';
import { SixSidebarItem } from '../../six-sidebar-item/six-sidebar-item';

describe('six-sidebar-item-group', () => {
  it('renders empty group', async () => {
    const page = await newSpecPage({
      components: [SixSidebarItemGroup],
      html: `<six-sidebar-item-group></six-sidebar-item-group>`,
    });
    expect(page.root).toEqualHtml(`
      <six-sidebar-item-group value="">
        <mock:shadow-root>
          <six-details class="six-sidebar-item-group six-sidebar-item-group--childless" inline="">
            <div slot="summary">
              <div class="six-sidebar-details__header"></div>
            </div>
            <slot name="summary-icon"></slot>
            <slot></slot>
          </six-details>
        </mock:shadow-root>
      </six-sidebar-item-group>
    `);
  });

  it('renders group with item', async () => {
    const page = await newSpecPage({
      components: [SixSidebarItemGroup, SixSidebarItem],
      html: `<six-sidebar-item-group><six-sidebar-item value="data">Data</six-sidebar-item></six-sidebar-item-group>`,
    });

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <six-sidebar-item-group value="">
        <mock:shadow-root>
          <six-details class="six-sidebar-item-group six-sidebar-item-group--childless" inline="">
            <div slot="summary">
              <div class="six-sidebar-details__header"></div>
            </div>
            <slot name="summary-icon"></slot>
            <slot></slot>
          </six-details>
        </mock:shadow-root>
        <six-sidebar-item value="data">
          <mock:shadow-root>
            <div aria-disabled="false" aria-selected="false" class="sidebar-item" role="menuitem">
              <slot></slot>
            </div>
          </mock:shadow-root>
          Data
        </six-sidebar-item>
      </six-sidebar-item-group>
    `);
  });
});
