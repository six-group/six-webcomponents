import { newSpecPage } from '@stencil/core/testing';
import { SixProgressBar } from '../six-progress-bar';

describe('six-progress-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixProgressBar],
      html: `<six-progress-bar percentage="50"></six-progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
       <six-progress-bar percentage="50">
         <mock:shadow-root>
           <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar" part="base" role="progressbar">
             <div class="progress-bar__indicator" part="indicator" style="width: 50%;">
               <span class="progress-bar__label" part="label">
                 <slot></slot>
               </span>
             </div>
           </div>
         </mock:shadow-root>
       </six-progress-bar>
    `);
  });
});
