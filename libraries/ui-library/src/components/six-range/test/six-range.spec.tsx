import { newSpecPage } from '@stencil/core/testing';
import { SixRange } from '../six-range';

describe('six-range', () => {
  it('renders', async () => {
    global.ResizeObserver = jest.fn();

    const page = await newSpecPage({
      components: [SixRange],
      html: `<six-range tooltip="none"></six-range>`,
    });
    expect(page.root).toEqualHtml(`
      <six-range tooltip="none">
       <mock:shadow-root>
        <div class="form-control form-control--medium" part="form-control">
         <label aria-hidden="true" class="form-control__label" htmlfor="input-1" id="input-label-1" part="label">
          <slot name="label"></slot>
         </label>
         <div class="form-control__input">
          <div class="range" part="base">
           <input class="range__control" max="100" min="0" part="input" step="1" type="range" value="0" style="background: -webkit-linear-gradient(left, var(--track-color) 0%, var(--track-color) 0%, var(--six-color-web-rock-300) 0%);">
          </div>
         </div>
         <div aria-hidden="true" class="form-control__error-text" id="input-error-text-1" part="error-text">
           <slot name="error-text"></slot>
         </div>
          <div aria-hidden="true" class="form-control__help-text" id="input-help-text-1" part="help-text">
           <slot name="help-text"></slot>
          </div>
        </div>
       </mock:shadow-root>
      </six-range>
    `);
  });
});
