import { newSpecPage } from '@stencil/core/testing';
import { SixMenu } from '../six-menu';

describe('six-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixMenu],
      html: `<six-menu></six-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <six-menu>
        <mock:shadow-root>
        <div class="menu" part="wrapper">
          <div part="base" role="menu" tabindex="0">
            <slot></slot>
          </div>
          </div>
        </mock:shadow-root>
      </six-menu>
    `);
  });

  it('renders without box-shadow', async () => {
    const page = await newSpecPage({
      components: [SixMenu],
      html: `<six-menu remove-box-shadow></six-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <six-menu remove-box-shadow="">
        <mock:shadow-root>
          <div class=".no-shadow menu" part="wrapper">
            <div part="base" role="menu" tabindex="0">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </six-menu>
    `);
  });

  it('renders virtual scrolling', async () => {
    const page = await newSpecPage({
      components: [SixMenu],
      html: `<six-menu virtual-scroll></six-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <six-menu virtual-scroll="">
        <mock:shadow-root>
          <div class="menu" part="wrapper" style="height: 320px;">
            <div part="base" role="menu" tabindex="0" style="transform: translateY(0px);">
              <slot></slot>
            </div>
            <div></div>
          </div>
        </mock:shadow-root>
      </six-menu>
    `);
  });

  it('renders dynamically added items', async () => {
    // given
    const page = await newSpecPage({
      components: [SixMenu],
      html: `<six-menu></six-menu>`,
    });

    // when
    if (page.root != null) {
      page.root.items = Array.from(Array(3).keys()).map((idx) => ({
        label: `label ${idx}`,
        value: `value ${idx}`,
      }));
    }
    await page.waitForChanges();

    // then
    expect(page.root).toEqualHtml(`
      <six-menu>
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
    `);
  });
});
