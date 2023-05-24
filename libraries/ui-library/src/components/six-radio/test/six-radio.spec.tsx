import { newSpecPage } from '@stencil/core/testing';
import { SixRadio } from '../six-radio';

describe('six-radio', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [SixRadio],
      html: `<six-radio></six-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <six-radio>
        <mock:shadow-root>
          <label class="radio" htmlfor="radio-1" part="base">
            <span class="radio__control" part="control">
              <span class="radio__icon" part="checked-icon">
                <svg viewBox="0 0 16 16">
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g fill="currentColor">
                      <circle cx="8" cy="8" r="5"></circle>
                    </g>
                  </g>
                </svg>
              </span>
              <input aria-checked="false" aria-labelledby="radio-label-1" id="radio-1" role="radio" type="radio" value="on">
            </span>
            <span class="radio__label" id="radio-label-1" part="label">
              <slot></slot>
            </span>
          </label>
        </mock:shadow-root>
      </six-radio>
    `);
  });

  it('checked', async () => {
    const page = await newSpecPage({
      components: [SixRadio],
      html: `<six-radio checked></six-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <six-radio checked="">
        <mock:shadow-root>
          <label class="radio radio--checked" htmlfor="radio-2" part="base">
            <span class="radio__control" part="control">
              <span class="radio__icon" part="checked-icon">
                <svg viewBox="0 0 16 16">
                  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g fill="currentColor">
                      <circle cx="8" cy="8" r="5"></circle>
                    </g>
                  </g>
                </svg>
              </span>
              <input aria-checked="true" aria-labelledby="radio-label-2" checked="" id="radio-2" role="radio" type="radio" value="on">
            </span>
            <span class="radio__label" id="radio-label-2" part="label">
              <slot></slot>
            </span>
          </label>
        </mock:shadow-root>
      </six-radio>
    `);
  });
});
