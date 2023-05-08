import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { SixMenuItem } from '../six-menu-item';

describe('six-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-menu-item></six-menu-item>');

    const element = await page.find('six-menu-item');
    expect(element).toHaveClass('hydrated');
  });

  it('should handle onFocus and onBlur', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-menu-item></six-menu-item>');

    const elem = await page.find('six-menu-item >>> div');
    expect(elem).toHaveClass('menu-item');

    await page.hover('six-menu-item');
    const focusElem = await page.find('six-menu-item >>> div');
    expect(focusElem).toHaveClass('menu-item--focused');

    await page.$eval('six-menu-item', (e: HTMLElement & SixMenuItem) => e.blur());
    const blurElem = await page.find('six-menu-item >>> div');
    expect(blurElem).toHaveClass('menu-item');
  });

  it.skip('should handle mouseEnter and mouseLeave', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-menu-item></six-menu-item>');

    const elem = await page.find('six-menu-item >>> div');
    expect(elem).toHaveClass('menu-item');

    await page.$eval('six-menu-item', (e: HTMLElement) => e.dispatchEvent(new MouseEvent('mouseenter')));
    const focusElem = await page.find('six-menu-item >>> div');
    expect(focusElem).toHaveClass('menu-item--focused');

    await page.$eval('six-menu-item', (e: HTMLElement) => e.dispatchEvent(new MouseEvent('mouseleave')));
    const blurElem = await page.find('six-menu-item >>> div');
    expect(blurElem).toHaveClass('menu-item');
  });

  it('should render the menu item correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-menu style="max-width: 200px; border: solid 1px var(--six-panel-border-color); border-radius: var(--six-border-radius-medium);">' +
        '<six-menu-item value="apple">Apple</six-menu-item>' +
        '</six-menu>',
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Menu Item', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
