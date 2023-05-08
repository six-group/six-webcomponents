import { newE2EPage } from '@stencil/core/testing';

describe('six-drawer', () => {
  it('should open when the open attribute added', async () => {
    const page = await newE2EPage({
      html: `
        <six-drawer>This is a drawer.</six-drawer>
      `,
    });
    const drawer = await page.find('six-drawer');
    const base = await page.find('six-drawer >>> .drawer');
    const sixShow = await drawer.spyOnEvent('six-drawer-show');
    const sixAfterShow = await drawer.spyOnEvent('six-drawer-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = drawer.waitForEvent('six-drawer-after-show');
    drawer.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(sixShow).toHaveReceivedEventTimes(1);
    expect(sixAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <six-drawer open>This is a drawer.</six-drawer>
      `,
    });
    const drawer = await page.find('six-drawer');
    const base = await page.find('six-drawer >>> .drawer');
    const sixHide = await drawer.spyOnEvent('six-drawer-hide');
    const sixAfterHide = await drawer.spyOnEvent('six-drawer-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = drawer.waitForEvent('six-drawer-after-hide');
    drawer.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(sixHide).toHaveReceivedEventTimes(1);
    expect(sixAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open when the show() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-drawer>This is a drawer.</six-drawer>
      `,
    });
    const drawer = await page.find('six-drawer');
    const base = await page.find('six-drawer >>> .drawer');
    const sixShow = await drawer.spyOnEvent('six-drawer-show');
    const sixAfterShow = await drawer.spyOnEvent('six-drawer-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = drawer.waitForEvent('six-drawer-after-show');
    await drawer.callMethod('show');
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(sixShow).toHaveReceivedEventTimes(1);
    expect(sixAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the hide() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <six-drawer open>This is a drawer.</six-drawer>
      `,
    });
    const drawer = await page.find('six-drawer');
    const base = await page.find('six-drawer >>> .drawer');
    const sixHide = await drawer.spyOnEvent('six-drawer-hide');
    const sixAfterHide = await drawer.spyOnEvent('six-drawer-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = drawer.waitForEvent('six-drawer-after-hide');
    await drawer.callMethod('hide');
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(sixHide).toHaveReceivedEventTimes(1);
    expect(sixAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should emit six-overlay-dismiss when the overlay is clicked', async () => {
    const page = await newE2EPage({
      html: `
        <six-drawer open>This is a drawer.</six-drawer>
      `,
    });
    const drawer = await page.find('six-drawer');
    const sixOverlayDismiss = await drawer.spyOnEvent('six-drawer-overlay-dismiss');

    // We can't use the click method on the overlay since the click is in the middle, which will be behind the panel
    await page.mouse.click(0, 0);
    await page.waitForChanges();

    expect(sixOverlayDismiss).toHaveReceivedEventTimes(1);
  });
});
