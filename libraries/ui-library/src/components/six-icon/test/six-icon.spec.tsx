import { newSpecPage } from '@stencil/core/testing';
import { SixIcon } from '../six-icon';

describe('six-icon', () => {
  it('renders with default library (material-icons, outlined, inherit size)', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon>home</six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit" class="six-icon--inherit material-icons material-icons-outlined">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
        home
      </six-icon>
    `);
  });

  it('renders Material Symbols (outlined) when library="material-symbols"', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon library="material-symbols">home</six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit" library="material-symbols" class="six-icon--inherit material-symbols-outlined">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
        home
      </six-icon>
    `);
  });

  it('renders Material Symbols (filled) when library="material-symbols" and filled', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon library="material-symbols" filled>home</six-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <six-icon size="inherit" library="material-symbols" filled=""  class="six-icon--inherit material-symbols">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
        home
      </six-icon>
    `);
  });
});
