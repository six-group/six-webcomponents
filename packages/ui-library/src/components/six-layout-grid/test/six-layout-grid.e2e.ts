import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-layout-grid', () => {
  let page: E2EPage;
  let element: E2EElement;

  async function getBoundingClientRect(component: string, selector?: string): Promise<any> {
    return await page.evaluate(
      (component, selector) => {
        const cmpEl = document.querySelector(component);
        const textEl = selector ? cmpEl.shadowRoot.querySelector(selector) : cmpEl;
        const rect = textEl.getBoundingClientRect();
        return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
      },
      component,
      selector,
    );
  }

  async function getCssVar(component: string, cssVar: string): Promise<any> {
    return await page.evaluate(
      (component, cssVar) => {
        const cmpEl = document.querySelector(component);
        return cmpEl.style.getPropertyValue(cssVar);
      },
      component,
      cssVar,
    );
  }

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <six-layout-grid style="width: 800px;">
          <div>Col 1</div>
          <div>Col 2</div>
          <div>Col 3</div>
          <div>Col 4</div>
        </six-layout-grid>
      `,
    });
    element = await page.find('six-layout-grid');
  });

  it('layout default columns', async () => {
    expect(await getCssVar('six-layout-grid', '--no-of-columns')).toBe('12');
  });

  it('layout 6 columns', async () => {
    const childElement = 'six-layout-grid div';
    const noOfColumns = '6';
    const rectChildBefore: any = await getBoundingClientRect(childElement);
    element.setProperty('columns', noOfColumns);
    await page.waitForChanges();
    expect(await getCssVar('six-layout-grid', '--no-of-columns')).toBe(noOfColumns);
    const rectChildAfter: any = await getBoundingClientRect(childElement);
    expect(rectChildBefore.width).toBe(52); // (800px - 11 * 1rem) / 12
    expect(rectChildAfter.width).toBe(120); // (800px - 5 * 1rem) / 6
  });
});
