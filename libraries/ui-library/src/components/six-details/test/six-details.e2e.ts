import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-details', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(`
      <six-details summary="Toggle Me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </six-details>
    `);

    element = await page.find('six-details');
  });

  it('renders', async () => {
    const element = await page.find('six-details');
    expect(element).toHaveClass('hydrated');
  });

  it('should open and close when summary is clicked', async () => {
    const details = await page.find('six-details');
    const header = await page.find('six-details >>> header');
    const base = await page.find('six-details >>> .details__body');

    let style = await base.getComputedStyle();
    expect(style.height).toBe('0px');

    const showEventHappened = details.waitForEvent('six-details-after-show');
    await header.click();
    await showEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).not.toBe('0px');

    const hideEventHappened = details.waitForEvent('six-details-after-hide');
    await header.click();
    await hideEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).toBe('0px');
  });

  it('should open and close with the show() and hide() methods', async () => {
    const details = await page.find('six-details');
    const base = await page.find('six-details >>> .details__body');

    let style = await base.getComputedStyle();
    expect(style.height).toBe('0px');

    const showEventHappened = details.waitForEvent('six-details-after-show');
    await details.callMethod('show');
    await showEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).not.toBe('0px');

    const hideEventHappened = details.waitForEvent('six-details-after-hide');
    await details.callMethod('hide');
    await hideEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).toBe('0px');
  });

  it('should open and close when the open attribute is added and removed', async () => {
    const details = await page.find('six-details');
    const base = await page.find('six-details >>> .details__body');

    let style = await base.getComputedStyle();
    expect(style.height).toBe('0px');

    const showEventHappened = details.waitForEvent('six-details-after-show');
    details.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).not.toBe('0px');

    const hideEventHappened = details.waitForEvent('six-details-after-hide');
    details.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).toBe('0px');
  });

  it('should emit six-show and six-after-show events when opened', async () => {
    const details = await page.find('six-details');
    const sixShow = await details.spyOnEvent('six-details-show');
    const sixAfterShow = await details.spyOnEvent('six-details-after-show');
    const showEventHappened = details.waitForEvent('six-details-after-show');

    await details.callMethod('show');
    await showEventHappened;

    expect(sixShow).toHaveReceivedEventTimes(1);
    expect(sixAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should emit six-hide and six-after-hide events when closed', async () => {
    // given
    const sixHide = await element.spyOnEvent('six-details-hide');
    const sixAfterHide = await element.spyOnEvent('six-details-after-hide');

    // when
    await element.setAttribute('open', '');
    await page.waitForChanges();

    await element.callMethod('hide');
    await element.waitForEvent('six-details-after-hide');

    // then
    expect(sixHide).toHaveReceivedEventTimes(1);
    expect(sixAfterHide).toHaveReceivedEventTimes(1);
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Screenshot tests
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  it('should render the closed details view correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <six-details summary="Toggle Me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </six-details>
    `);
    await page.setViewport({ width: 600, height: 100 });

    // when
    const results = await page.compareScreenshot('SIX Details', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });

  it('should render the group details view correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();

    await page.setContent(`
      <div>
        <six-details summary="First" open>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</six-details> <six-details summary=\"Second\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</six-details><six-details summary=\"Third\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </six-details>
      </div>
    `);
    await page.setViewport({ width: 800, height: 400 });

    // when
    const results = await page.compareScreenshot('SIX Details in Group', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 5 });
  });
});
