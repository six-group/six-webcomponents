import { newSpecPage } from '@stencil/core/testing';
import { SixSelect } from '../six-select';

describe('six-select', () => {
  it('renders normal six-select', async () => {
    global.ResizeObserver = jest.fn();

    const page = await newSpecPage({
      components: [SixSelect],
      html: `
        <six-select>
        <six-menu-item value="option-1">Option 1</six-menu-item>
        </six-select>`,
    });
    expect(page.root).toEqualHtml(`
        <six-select>
          <mock:shadow-root>
            <div class="form-control form-control--medium" part="form-control">
                    <label aria-hidden="true" class="form-control__label" htmlfor="select-1" id="select-label-1" part="label">
                        <slot name="label"></slot>
                    </label>
              <div class="form-control__input">
                <six-dropdown class="select select--empty select--medium select--placeholder-visible" closeonselect="" filterdebounce="300" part="base">
                  <div aria-describedby="select-help-text-1" aria-expanded="false" aria-haspopup="true" aria-labelledby="select-label-1" class="select__box" id="select-1" role="combobox" slot="trigger" tabindex="0">
                    <span class="select__label"></span>
                    <span class="select__icon" part="icon">
                      <six-icon size="medium">expand_more</six-icon>
                    </span>
                    <six-input aria-hidden="true" class="select__hidden-select select__input" placeholder="" size="medium" tabindex="-1"></six-input>
                  </div>
                  <six-menu class="select__menu" part="menu" remove-box-shadow>
                    <slot></slot>
                  </six-menu>
                </six-dropdown>
              </div>
              <div aria-hidden="true" class="form-control__error-text" id="select-error-text-1" part="error-text"></div>
              <div aria-hidden="true" class="form-control__help-text" id="select-help-text-1" part="help-text">
                <slot name="help-text"></slot>
              </div>
            </div>
          </mock:shadow-root>
          <six-menu-item value="option-1">
            Option 1
          </six-menu-item>
        </six-select>
    `);
  });

  it('renders normal autocomplete six-select', async () => {
    global.ResizeObserver = jest.fn();

    const page = await newSpecPage({
      components: [SixSelect],
      html: `
        <six-select autocomplete>
        </six-select>`,
    });
    expect(page.root).toEqualHtml(`
        <six-select autocomplete="">
          <mock:shadow-root>
            <div class="form-control form-control--medium" part="form-control">
                    <label aria-hidden="true" class="form-control__label" htmlfor="select-2" id="select-label-2" part="label">
                        <slot name="label"></slot>
                    </label>
              <div class="form-control__input">
                <six-dropdown class="select select--empty select--medium select--placeholder-visible" closeonselect="" disablehideonenterandspace="" filterdebounce="300" part="base">
                  <div aria-describedby="select-help-text-2" aria-expanded="false" aria-haspopup="true" aria-labelledby="select-label-2" class="select__box select__box--autocomplete" id="select-2" role="combobox" slot="trigger" tabindex="0">
                    <span class="select__label"></span>
                    <six-input aria-hidden="true" class="select__input" placeholder="" size="medium" tabindex="-1"></six-input>
                  </div>
                  <six-menu class="select__menu select__menu--hidden" part="menu" remove-box-shadow>
                    <slot></slot>
                  </six-menu>
                </six-dropdown>
              </div>
              <div aria-hidden="true" class="form-control__error-text" id="select-error-text-2" part="error-text"></div>
              <div aria-hidden="true" class="form-control__help-text" id="select-help-text-2" part="help-text">
                <slot name="help-text"></slot>
              </div>
            </div>
          </mock:shadow-root>
        </six-select>
    `);
  });
});
