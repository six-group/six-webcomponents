import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-badge></six-badge>');

    const element = await page.find('six-badge');
    expect(element).toHaveClass('hydrated');
  });

  it('should render the different badge types correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-badge type="primary" pill>Primary</six-badge>\n' +
        '<six-badge type="info" pill>Info</six-badge>\n' +
        '<six-badge type="success" pill>Success</six-badge>\n' +
        '<six-badge type="warning" pill>Warning</six-badge>\n' +
        '<six-badge type="danger" pill>Danger</six-badge>\n' +
        '<six-badge type="action" pill>Action</six-badge>'
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Badge', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
