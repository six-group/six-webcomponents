import { newSpecPage } from '@stencil/core/testing';
import { SixInput } from '../six-input';

describe('six-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixInput],
      html: `<six-input></six-input>`,
    });
    expect(page.root).toEqualHtml(`
        <six-input size="medium" type="text" value="">
          <mock:shadow-root>
            <div class="form-control form-control--medium" part="form-control">
              <label aria-hidden="true" class="form-control__label" htmlfor="input-1" id="input-label-1" part="label">
                <slot name="label"></slot>
              </label>
              <div class="form-control__input">
                <div class="input input--empty input--medium" part="base">
                  <span class="input__prefix" part="prefix">
                    <slot name="prefix"></slot>
                  </span>
                  <input aria-describedby="input-help-text-1" aria-invalid="false" aria-labelledby="input-label-1" class="input__control" data-testid="input-control" id="input-1" part="input" type="text" value="" size="1">
                  <span class="input__suffix" part="suffix">
                    <slot name="suffix"></slot>
                  </span>
                </div>
              </div>
              <div aria-hidden="true" class="form-control__error-text" id="input-error-text-1" part="error-text"></div>
              <div aria-hidden="true" class="form-control__help-text" id="input-help-text-1" part="help-text">
                <slot name="help-text"></slot>
              </div>
            </div>
        </mock:shadow-root>
      </six-input>
    `);
  });
});
