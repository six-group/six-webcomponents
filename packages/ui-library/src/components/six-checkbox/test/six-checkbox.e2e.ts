import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-checkbox></six-checkbox>');

    const element = await page.find('six-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it('should render the checkbox correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(
      '<six-checkbox>Checkbox</six-checkbox>' +
        '<six-checkbox checked>Checked</six-checkbox>' +
        '<six-checkbox indeterminate>Indeterminate</six-checkbox>' +
        '<six-checkbox disabled>Disabled</six-checkbox>' +
        '<six-checkbox checked disabled>Checked Disabled</six-checkbox>' +
        '<six-checkbox indeterminate disabled>Indeterminate Disabled</six-checkbox>',
    );
    await page.setViewport({ width: 800, height: 100 });

    // when
    const results = await page.compareScreenshot('SIX Checkbox', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should toggle checked state on click', async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent('<six-checkbox>Checkbox</six-checkbox>');
    const sixChange = await page.spyOnEvent('six-checkbox-change');
    const beforeClick = await page.find('six-checkbox[checked]');
    expect(beforeClick).toBeNull();

    // check
    await page.click('six-checkbox');
    await page.waitForChanges();
    const afterCheckClick = await page.find('six-checkbox[checked]');
    expect(sixChange).toHaveReceivedEvent();
    expect(afterCheckClick).not.toBeNull();

    // uncheck
    await page.click('six-checkbox[checked]');
    await page.waitForChanges();
    const afterUncheckClick = await page.find('six-checkbox[checked]');
    expect(sixChange).toHaveReceivedEvent();
    expect(afterUncheckClick).toBeNull();
  });
});
