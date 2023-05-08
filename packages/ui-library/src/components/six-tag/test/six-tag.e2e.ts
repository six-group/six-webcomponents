import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tag></six-tag>');

    const element = await page.find('six-tag');
    expect(element).toHaveClass('hydrated');
  });

  it('should render different sizes correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tag size="small">Small</six-tag>' +
        '<six-tag size="medium">Medium</six-tag>' +
        '<six-tag size="large">Large</six-tag>',
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Tag (sizes)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render pill correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tag size="small" pill>Small</six-tag>' +
        '<six-tag size="medium" pill>Medium</six-tag>' +
        '<six-tag size="large" pill>Large</six-tag>',
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Tag (pill)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should render types correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-tag type="primary">Primary</six-tag>' +
        '<six-tag type="info">Info</six-tag>' +
        '<six-tag type="success">Success</six-tag>' +
        '<six-tag type="action">Action</six-tag>' +
        '<six-tag type="warning">Warning</six-tag>' +
        '<six-tag type="danger">Danger</six-tag>',
    );

    await page.setViewport({ width: 520, height: 120 });

    // when
    const results = await page.compareScreenshot('SIX Tag (types)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('should emit clear event', async () => {
    const page: E2EPage = await newE2EPage();

    await page.setContent('<six-tag size="small" clearable>Small</six-tag>');

    const spy = await page.spyOnEvent('six-tag-clear');

    const iconButton = await page.find('six-tag >>> six-icon-button');
    await iconButton.click();
    await page.waitForChanges();

    expect(spy).toHaveReceivedEvent();
  });
});
