import { newSpecPage } from '@stencil/core/testing';
import { SixCheckbox } from '../six-checkbox';

describe('six-checkbox', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [SixCheckbox],
      html: `<six-checkbox></six-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
       <six-checkbox>
         <mock:shadow-root>
           <div class="form-control form-control--medium" part="form-control">
             <label aria-hidden="true" class="form-control__label" htmlfor="checkbox-1" id="checkbox-label-1" part="label">
               <slot name="label"></slot>
             </label>
             <div class="form-control__input">
               <label class="checkbox" htmlfor="checkbox-1" part="base">
                 <span class="checkbox__control" part="control">
                   <input aria-checked="false" aria-labelledby="checkbox-label-1" id="checkbox-1" role="checkbox" type="checkbox">
                 </span>
                 <span class="checkbox__text" id="checkbox-text-1" part="text">
                   <slot></slot>
                 </span>
               </label>
             </div>
             <div aria-hidden="true" class="form-control__error-text" id="input-error-text-1" part="error-text"></div>
             <div aria-hidden="true" class="form-control__help-text" part="help-text">
               <slot name="help-text"></slot>
             </div>
           </div>
         </mock:shadow-root>
       </six-checkbox>
    `);
  });

  it('checked', async () => {
    const page = await newSpecPage({
      components: [SixCheckbox],
      html: `<six-checkbox checked></six-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <six-checkbox checked="">
        <mock:shadow-root>
          <div class="form-control form-control--medium" part="form-control">
            <label aria-hidden="true" class="form-control__label" htmlfor="checkbox-2" id="checkbox-label-2" part="label">
                <slot name="label"></slot>
            </label>
            <div class="form-control__input">
              <label class="checkbox checkbox--checked" htmlfor="checkbox-2" part="base">
                <span part="control" class="checkbox__control">
                  <span part="checked-icon" class="checkbox__icon">
                    <svg viewBox="0 0 16 16">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g stroke="currentColor" stroke-width="2">
                          <g transform="translate(3.428571, 3.428571)">
                            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <input id="checkbox-2" type="checkbox" role="checkbox" aria-checked="true" aria-labelledby="checkbox-label-2" checked="">
                </span>
                <span part="text" id="checkbox-text-2" class="checkbox__text">
                  <slot></slot>
                </span>
              </label>
            </div>
            <div aria-hidden="true" class="form-control__error-text" id="input-error-text-2" part="error-text"></div>
            <div aria-hidden="true" class="form-control__help-text" part="help-text">
                <slot name="help-text"></slot>
            </div>
          </div>
        </mock:shadow-root>
    </six-checkbox>
    `);
  });
});
