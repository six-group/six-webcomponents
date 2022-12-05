import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-menu-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-menu-label></six-menu-label>');

    const element = await page.find('six-menu-label');
    expect(element).toHaveClass('hydrated');
  });

  it('should render the menu label correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-menu style="max-width: 200px; border: solid 1px var(--six-panel-border-color); border-radius: var(--six-border-radius-medium);">' +
        '<six-menu-label>Fruit</six-menu-label>' +
        '<six-menu-item value="apple">Apple</six-menu-item>' +
        '</six-menu>',
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Menu Label', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
