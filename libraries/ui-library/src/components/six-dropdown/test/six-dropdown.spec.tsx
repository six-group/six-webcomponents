import { newSpecPage } from '@stencil/core/testing';
import { SixDropdown } from '../six-dropdown';
import { SixMenu } from '../../six-menu/six-menu';

// TODO fix unit tests
describe('six-dropdown', () => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
  xit('renders open=false', async () => {
    const page = await newSpecPage({
      components: [SixDropdown],
      html: `<six-dropdown><six-button slot="trigger" caret>Dropdown</six-button><six-menu></six-menu></six-dropdown>`,
      supportsShadowDom: false,
    });
    expect(page.root).toEqualHtml(`
      <six-dropdown>
        <div class="dropdown" id="dropdown-1" part="base">
          <span class="dropdown__trigger" part="trigger">
            <six-button caret="" slot="trigger">
              Dropdown
            </six-button>
          </span>
          <div class="dropdown__positioner" hidden="">
            <div aria-hidden="true" aria-labelledby="dropdown-1" class="dropdown__panel" part="panel" role="menu">
              <div class="dropdown__panel__scroll">
                <six-menu></six-menu>
              </div>
            </div>
          </div>
        </div>
      </six-dropdown>
    `);
  });

  xit('renders open=true', async () => {
    const page = await newSpecPage({
      components: [SixDropdown],
      html: `<six-dropdown open="true"><six-button slot="trigger" caret>Dropdown</six-button><six-menu></six-menu></six-dropdown>`,
      supportsShadowDom: false,
    });
    expect(page.root).toEqualHtml(`
      <six-dropdown open="">
      <div class="dropdown dropdown--open" id="dropdown-2" part="base">
        <span class="dropdown__trigger" part="trigger">
          <six-button caret="" slot="trigger">
            Dropdown
          </six-button>
         </span>
         <div class="dropdown__positioner" style="position: absolute; left: 0; top: 0; margin: 0;">
             <div aria-hidden="false" aria-labelledby="dropdown-2" class="dropdown__panel" part="panel" role="menu">
             <div class="dropdown__panel__scroll">
              <six-menu></six-menu>
            </div>
         </div>
        </div>
      </div>
      </six-dropdown>
    `);
  });

  xit('renders filter=true', async () => {
    const page = await newSpecPage({
      components: [SixDropdown],
      html: `<six-dropdown open="true" filter="true"><six-button slot="trigger" caret>Dropdown</six-button><six-menu></six-menu></six-dropdown>`,
      supportsShadowDom: false,
    });

    expect(page.root).toEqualHtml(`
      <six-dropdown filter="true" open="">
        <div class="dropdown dropdown--open" id="dropdown-3" part="base">
          <span class="dropdown__trigger" part="trigger">
            <six-button caret="" slot="trigger">
              Dropdown
            </six-button>
          </span>
          <div class="dropdown__positioner dropdown__positioner__filtered" style="position: absolute; left: 0; top: 0; margin: 0;">
            <div aria-hidden="false" aria-labelledby="dropdown-3" class="dropdown__panel" part="panel" role="menu">
              <six-input aria-hidden="false" class="filter" dropdown-search="" placeholder="Filter...">
                <six-icon class="filter__icon" size="small" slot="suffix">
                  search
                </six-icon>
              </six-input>
              <div class="dropdown__panel__scroll">
                <six-menu></six-menu>
              </div>
            </div>
          </div>
        </div>
      </six-dropdown>
    `);
  });

  xit('renders dynamically added options', async () => {
    // given
    const page = await newSpecPage({
      components: [SixDropdown, SixMenu],
      html: ` <six-dropdown><six-button slot="trigger" caret>Dropdown</six-button></six-dropdown>`,
    });

    // when
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    page.root.options = Array.from(Array(3).keys()).map((idx) => ({
      label: `label ${idx}`,
      value: `value ${idx}`,
    }));
    await page.waitForChanges();

    // then
    expect(page.root).toEqualHtml(`
    <six-dropdown>
      <mock:shadow-root>
        <div class="dropdown" id="dropdown-4" part="base">
          <span class="dropdown__trigger" part="trigger">
            <slot name="trigger"></slot>
          </span>
          <div class="dropdown__positioner" hidden="">
            <div aria-hidden="true" aria-labelledby="dropdown-4" class="dropdown__panel" part="panel" role="menu">
              <div class="dropdown__panel__scroll">
                <slot></slot>
                <six-menu part="menu">
                  <mock:shadow-root>
                    <div class="menu" part="wrapper">
                      <div part="base" role="menu" tabindex="0">
                        <slot></slot>
                        <six-menu-item value="value 0">
                          label 0
                        </six-menu-item>
                        <six-menu-item value="value 1">
                          label 1
                        </six-menu-item>
                        <six-menu-item value="value 2">
                          label 2
                        </six-menu-item>
                      </div>
                    </div>
                  </mock:shadow-root>
                </six-menu>
              </div>
              <slot name="dropdown-footer"></slot>
            </div>
          </div>
        </div>
      </mock:shadow-root>
      <six-button caret="" slot="trigger">
        Dropdown
      </six-button>
    </six-dropdown>
    `);
  });
});
