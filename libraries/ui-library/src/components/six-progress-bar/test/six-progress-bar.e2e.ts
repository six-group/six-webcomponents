import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-progress-bar></six-progress-bar>');

    const element = await page.find('six-progress-bar');
    expect(element).toHaveClass('hydrated');
  });

  it('should render progress bar correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-progress-bar percentage="50"></six-progress-bar>');

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('Six Progress Bar', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
