import { newSpecPage } from '@stencil/core/testing';
import { SixDropdown } from '../six-dropdown';
import { SixMenu } from '../../six-menu/six-menu';

describe('six-dropdown', () => {
  it('renders open=false', async () => {
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
             <six-menu></six-menu>
         </div>
        </div>
      </div>
      </six-dropdown>
    `);
  });

  it('renders open=true', async () => {
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
             <six-menu></six-menu>
         </div>
        </div>
      </div>
      </six-dropdown>
    `);
  });

  it('renders filter=true', async () => {
    const page = await newSpecPage({
      components: [SixDropdown],
      html: `<six-dropdown open="true" filter="true"><six-button slot="trigger" caret>Dropdown</six-button><six-menu></six-menu></six-dropdown>`,
      supportsShadowDom: false,
    });

    expect(page.root).toEqualHtml(`
      <six-dropdown open="" filter="true">
        <div part="base" id="dropdown-3" class="dropdown dropdown--open">
            <span part="trigger" class="dropdown__trigger"><six-button slot="trigger" caret="">Dropdown</six-button></span>
            <div class="dropdown__positioner dropdown__positioner__filtered" style="position: absolute; left: 0; top: 0; margin: 0;">
            <six-input aria-hidden="false" placeholder="Filter..."></six-input>
            <div part="panel" class="dropdown__panel" role="menu" aria-hidden="false" aria-labelledby="dropdown-3">
            <six-menu></six-menu></div></div></div>
            </six-dropdown>
    `);
  });

  it('renders dynamically added options', async () => {
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
