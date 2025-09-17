import { newSpecPage } from '@stencil/core/testing';
import { SixIcon } from '../six-icon';

const getI = (page: any) => page.root.shadowRoot.querySelector('i') as HTMLElement;

describe('six-icon', () => {
  it('renders legacy Material Icons by default (outlined) with inherit size', async () => {
    const page = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon>home</six-icon>`,
    });

    const i = getI(page);

    expect(i.classList.contains('material-icons')).toBe(true);
    expect(i.classList.contains('material-icons-outlined')).toBe(true);
    expect(i.classList.contains('material-icons-filled')).toBe(false);
    expect(i.classList.contains('material-symbols')).toBe(false);
    expect(i.classList.contains('material-symbols-outlined')).toBe(false);

    // default size mapping
    expect(i.classList.contains('icon--inherit')).toBe(true);

    // no inline FILL var for legacy icons
    expect(i.getAttribute('style')).toBeNull();
  });

  it('renders Symbols and toggles FILL correctly via CSS variable', async () => {
    // Outlined (FILL 0)
    const pageOutlined = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon symbols>favorite</six-icon>`,
    });
    const iOutlined = getI(pageOutlined);
    expect(iOutlined.classList.contains('material-symbols-outlined')).toBe(true);
    expect(iOutlined.classList.contains('material-symbols')).toBe(false);
    expect(iOutlined.classList.contains('material-icons')).toBe(false);
    expect(iOutlined.getAttribute('style')!.replace(/\s/g, '')).toContain('--six-icon-fill:0');

    // Filled (FILL 1)
    const pageFilled = await newSpecPage({
      components: [SixIcon],
      html: `<six-icon symbols filled>favorite</six-icon>`,
    });
    const iFilled = getI(pageFilled);
    expect(iFilled.classList.contains('material-symbols')).toBe(true);
    expect(iFilled.classList.contains('material-symbols-outlined')).toBe(false);
    expect(iFilled.classList.contains('material-icons')).toBe(false);
    expect(iFilled.getAttribute('style')!.replace(/\s/g, '')).toContain('--six-icon-fill:1');
  });
});
