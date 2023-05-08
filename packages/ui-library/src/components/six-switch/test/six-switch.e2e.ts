import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-switch></six-switch>');

    const element = await page.find('six-switch');
    expect(element).toHaveClass('hydrated');
  });

  it('should render the switch correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-switch>Switch</six-switch>' +
        '<six-switch checked>Checked</six-switch>' +
        '<six-switch disabled>Disabled</six-switch>' +
        '<six-switch checked disabled>Checked Disabled</six-switch>' +
        '<six-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;">Big</six-switch>',
    );
    await page.setViewport({ width: 800, height: 100 });

    // when
    const results = await page.compareScreenshot('SIX Switch', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should toggle checked state on click', async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent('<six-switch>Switch</six-switch>');
    const sixChange = await page.spyOnEvent('six-switch-change');
    const beforeClick = await page.find('six-switch[checked]');
    expect(beforeClick).toBeNull();

    // check
    await page.click('six-switch');
    await page.waitForChanges();
    const afterCheckClick = await page.find('six-switch[checked]');
    expect(sixChange).toHaveReceivedEvent();
    expect(afterCheckClick).not.toBeNull();

    // uncheck
    await page.click('six-switch[checked]');
    await page.waitForChanges();
    const afterUncheckClick = await page.find('six-switch[checked]');
    expect(sixChange).toHaveReceivedEvent();
    expect(afterUncheckClick).toBeNull();
  });
});
