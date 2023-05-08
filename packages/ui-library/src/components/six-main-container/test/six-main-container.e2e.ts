import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { Viewport } from 'puppeteer';

describe('six-main-container', () => {
  let page: E2EPage;
  let element: E2EElement;
  let content: E2EElement;
  const WINDOW_WIDTH = 1280;
  const WINDOW_HEIGHT = 800;

  async function getBoundingClientRect(component: string, selector: string): Promise<any> {
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

  beforeEach(async () => {
    page = await newE2EPage({
      html: `
        <six-main-container>
          <div>Test</div>
        </six-main-container>
      `,
    });
    element = await page.find('six-main-container');
    content = await page.find('six-main-container >>> .content');

    const viewPort: Viewport = { width: WINDOW_WIDTH, height: WINDOW_HEIGHT, deviceScaleFactor: 1 };
    await page.setViewport(viewPort);
  });

  it('window of size ' + WINDOW_WIDTH + 'x' + WINDOW_HEIGHT, async () => {
    innerWidth = await page.evaluate((_) => {
      return window.innerWidth;
    });
    innerHeight = await page.evaluate((_) => {
      return window.innerHeight;
    });
    expect(innerWidth).toEqual(WINDOW_WIDTH);
    expect(innerHeight).toEqual(WINDOW_HEIGHT);
  });

  it('normal window', async () => {
    const rectLeftMargin: any = await getBoundingClientRect('six-main-container', '.left-margin');
    const rectContent: any = await getBoundingClientRect('six-main-container', '.content');
    const rectRightMargin: any = await getBoundingClientRect('six-main-container', '.right-margin');
    const rectContainerChild: any = await getBoundingClientRect('six-main-container > div', null);

    expect(rectLeftMargin.width).toEqual(160);
    expect(rectLeftMargin.height).toEqual(118);
    expect(rectContent.width).toEqual(960);
    expect(rectContent.height).toEqual(118);
    expect(rectRightMargin.width).toEqual(160);
    expect(rectRightMargin.height).toEqual(118);
    expect(rectContainerChild.width).toEqual(960);
  });

  it('small window', async () => {
    const viewPort: Viewport = { width: 640, height: 480, deviceScaleFactor: 1 };
    await page.setViewport(viewPort);

    const rectLeftMargin: any = await getBoundingClientRect('six-main-container', '.left-margin');
    const rectContent: any = await getBoundingClientRect('six-main-container', '.content');
    const rectRightMargin: any = await getBoundingClientRect('six-main-container', '.right-margin');

    expect(rectLeftMargin.width).toEqual(48);
    expect(rectLeftMargin.height).toEqual(118);
    expect(rectContent.width).toEqual(768);
    expect(rectContent.height).toEqual(118);
    expect(rectRightMargin.width).toEqual(48);
    expect(rectRightMargin.height).toEqual(118);
  });

  it('large window', async () => {
    const viewPort: Viewport = { width: 3200, height: 1800, deviceScaleFactor: 1 };
    await page.setViewport(viewPort);

    const rectLeftMargin: any = await getBoundingClientRect('six-main-container', '.left-margin');
    const rectContent: any = await getBoundingClientRect('six-main-container', '.content');
    const rectRightMargin: any = await getBoundingClientRect('six-main-container', '.right-margin');

    expect(rectLeftMargin.width).toEqual(800);
    expect(rectLeftMargin.height).toEqual(118);
    expect(rectContent.width).toEqual(1600);
    expect(rectContent.height).toEqual(118);
    expect(rectRightMargin.width).toEqual(800);
    expect(rectRightMargin.height).toEqual(118);
  });

  it('remove padding', async () => {
    expect(content).toHaveClass('content--padded');

    element.setProperty('padded', false);
    await page.waitForChanges();

    expect(content).not.toHaveClass('content--padded');
  });
});
