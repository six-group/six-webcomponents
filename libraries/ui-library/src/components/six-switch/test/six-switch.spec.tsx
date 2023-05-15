import { newSpecPage } from '@stencil/core/testing';
import { SixSwitch } from '../six-switch';

describe('six-switch', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [SixSwitch],
      html: `<six-switch></six-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <six-switch>
        <mock:shadow-root>
          <label class="switch" htmlfor="switch-1" part="base">
            <span class="switch__control" part="control">
              <span class="switch__thumb" part="thumb"></span>
              <input aria-checked="false" aria-labelledby="switch-label-1" id="switch-1" role="switch" type="checkbox">
            </span>
            <span class="switch__label" id="switch-label-1" part="label">
              <slot></slot>
            </span>
          </label>
        </mock:shadow-root>
      </six-switch>
    `);
  });

  it('checked', async () => {
    const page = await newSpecPage({
      components: [SixSwitch],
      html: `<six-switch checked></six-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <six-switch checked="">
        <mock:shadow-root>
          <label class="switch switch--checked" htmlfor="switch-2" part="base">
            <span class="switch__control" part="control">
              <span class="switch__thumb" part="thumb"></span>
              <input aria-checked="true" aria-labelledby="switch-label-2" checked="" id="switch-2" role="switch" type="checkbox">
            </span>
            <span class="switch__label" id="switch-label-2" part="label">
              <slot></slot>
            </span>
          </label>
        </mock:shadow-root>
      </six-switch>
    `);
  });
});
