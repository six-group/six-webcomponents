import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-icon></six-icon>');

    const element = await page.find('six-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('should render the icons correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-icon>face</six-icon>' +
        '<six-icon>favorite</six-icon>' +
        '<six-icon>backup</six-icon>' +
        '<six-icon>delete</six-icon>' +
        '<six-icon>language</six-icon>'
    );

    await page.setViewport({ width: 150, height: 30 });

    // when
    const results = await page.compareScreenshot('SIX Icons', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
