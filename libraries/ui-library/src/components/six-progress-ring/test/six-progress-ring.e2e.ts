import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-progress-ring', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-progress-ring></six-progress-ring>');

    const element = await page.find('six-progress-ring');
    expect(element).toHaveClass('hydrated');
  });

  it('should render progress ring correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-progress-ring percentage="50"></six-progress-ring>');

    await page.setViewport({ width: 400, height: 200 });

    // when
    const results = await page.compareScreenshot('Six Progress Ring', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
