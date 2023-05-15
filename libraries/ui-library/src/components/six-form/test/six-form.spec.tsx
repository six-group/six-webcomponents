import { newSpecPage } from '@stencil/core/testing';
import { SixForm } from '../six-form';

describe('six-form', () => {
  xit('renders', async () => {
    const page = await newSpecPage({
      components: [SixForm],
      html: `
        <six-form>
         <six-input name="name" type="text" label="Name" required></six-input>
        </six-form>`,
    });
    expect(page.root).toEqualHtml(`
     <six-form>
      <mock:shadow-root>
        <div class="form" part="base" role="form">
         <slot></slot>
        </div>
       </mock:shadow-root>
       <six-input label="Name" name="name" required="" type="text"></six-input>
      </six-form>
    `);
  });
});
