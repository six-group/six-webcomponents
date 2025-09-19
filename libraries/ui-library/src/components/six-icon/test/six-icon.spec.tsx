import { newSpecPage } from '@stencil/core/testing';
import { SixIcon } from '../six-icon';

describe('six-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon></six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit">
        <mock:shadow-root>
          <i class="icon--inherit material-icons material-icons-outlined">
            <slot></slot>
          </i>
        </mock:shadow-root>
      </six-icon>
    `);
  });

  it('renders Material Symbols (outlined) by default with inherit size', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon symbols>home</six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit" symbols="">
        <mock:shadow-root>
          <i class="icon--inherit material-symbols-outlined" style="--six-icon-fill: 0;">
            <slot></slot>
          </i>
        </mock:shadow-root>
        home
      </six-icon>
    `);
  });

  it('renders Material Symbols (filled) when "filled" is set', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon symbols filled>home</six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit" symbols="" filled="">
        <mock:shadow-root>
          <i class="icon--inherit material-symbols" style="--six-icon-fill: 1;">
            <slot></slot>
          </i>
        </mock:shadow-root>
        home
      </six-icon>
    `);
  });
});
