import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('six-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-dialog></six-dialog>');

    const element = await page.find('six-dialog');
    expect(element).toHaveClass('hydrated');
  });

  it('should open when the open attribute added', async () => {
    const page = await newE2EPage({
      html: `
        <six-dialog>This is a dialog.</six-dialog>
      `,
    });
    const dialog = await page.find('six-dialog');
    const base = await page.find('six-dialog >>> .dialog');
    const sixShow = await dialog.spyOnEvent('six-dialog-show');
    const sixAfterShow = await dialog.spyOnEvent('six-dialog-after-show');
    const sixInitialFocus = await dialog.spyOnEvent('six-dialog-initial-focus');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = dialog.waitForEvent('six-dialog-after-show');
    dialog.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(sixShow).toHaveReceivedEventTimes(1);
    expect(sixAfterShow).toHaveReceivedEventTimes(1);
    expect(sixInitialFocus).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <six-dialog open>This is a dialog.</six-dialog>
      `,
    });
    const dialog = await page.find('six-dialog');
    const base = await page.find('six-dialog >>> .dialog');
    const sixHide = await dialog.spyOnEvent('six-dialog-hide');
    const sixAfterHide = await dialog.spyOnEvent('six-dialog-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = dialog.waitForEvent('six-dialog-after-hide');
    dialog.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(sixHide).toHaveReceivedEventTimes(1);
    expect(sixAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open when the show() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-dialog>This is a dialog.</six-dialog>
      `,
    });
    const dialog = await page.find('six-dialog');
    const base = await page.find('six-dialog >>> .dialog');
    const sixShow = await dialog.spyOnEvent('six-dialog-show');
    const sixAfterShow = await dialog.spyOnEvent('six-dialog-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = dialog.waitForEvent('six-dialog-after-show');
    await dialog.callMethod('show');
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(sixShow).toHaveReceivedEventTimes(1);
    expect(sixAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the hide() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-dialog open>This is a dialog.</six-dialog>
      `,
    });
    const dialog = await page.find('six-dialog');
    const base = await page.find('six-dialog >>> .dialog');
    const sixHide = await dialog.spyOnEvent('six-dialog-hide');
    const sixAfterHide = await dialog.spyOnEvent('six-dialog-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = dialog.waitForEvent('six-dialog-after-hide');
    await dialog.callMethod('hide');
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(sixHide).toHaveReceivedEventTimes(1);
    expect(sixAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should emit six-overlay-dismiss when the overlay is clicked', async () => {
    const page = await newE2EPage({
      html: `
        <six-dialog open>This is a dialog.</six-dialog>
      `,
    });
    const dialog = await page.find('six-dialog');
    const sixOverlayDismiss = await dialog.spyOnEvent('six-dialog-overlay-dismiss');

    // We can't use the click method on the overlay since the click is in the middle, which will be behind the panel
    await page.mouse.click(0, 0);
    await page.waitForChanges();

    expect(sixOverlayDismiss).toHaveReceivedEventTimes(1);
  });

  it('should render dialog correctly', async () => {
    // given
    const page: E2EPage = await newE2EPage();
    await page.setContent('<six-dialog open>This is a dialog.</six-dialog>');

    await page.setViewport({ width: 520, height: 250 });

    // when
    const results = await page.compareScreenshot('SIX Dialog', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });
});
