import { newSpecPage } from '@stencil/core/testing';
import { SixGroupLabel } from '../six-group-label';

describe('six-group-label', () => {
  it('renders', async () => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    const page = await newSpecPage({
      components: [SixGroupLabel],
      html: `<six-group-label>
              <six-layout-grid columns="2">
               <six-radio name="option" checked>Option 1</six-radio>
               <six-radio name="option">Option 2</six-radio>
              </six-layout-grid>
             </six-group-label>`,
    });
    expect(page.root).toEqualHtml(`
      <six-group-label size="medium">
        <mock:shadow-root>
         <div class="form-control form-control--medium" part="form-control">
           <label aria-hidden="true" class="form-control__label" htmlfor="label-1" id="label-label-1" part="label">
             <slot name="label"></slot>
           </label>
           <div class="form-control__input">
             <slot></slot>
           </div>
           <div aria-hidden="true" class="form-control__error-text" part="error-text"></div>
           <div aria-hidden="true" class="form-control__help-text" id="label-help-text-1" part="help-text">
             <slot name="help-text"></slot>
           </div>
         </div>
       </mock:shadow-root>
       <six-layout-grid columns="2">
         <six-radio checked="" name="option">Option 1</six-radio></mock:shadow-root>
         <six-radio name="option">Option 2</six-radio>
       </six-layout-grid>
     </six-group-label>
    `);
  });
});
