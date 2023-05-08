import { newE2EPage } from '@stencil/core/testing';

describe('six-alert', () => {
  it('should open when the open attribute is set', async () => {
    const page = await newE2EPage({
      html: `
        <six-alert>This is an alert</six-alert>
      `,
    });
    const alert = await page.find('six-alert');
    const base = await page.find('six-alert >>> .alert');
    const showEvent = await alert.spyOnEvent('six-alert-show');
    const afterShowEvent = await alert.spyOnEvent('six-alert-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = alert.waitForEvent('six-alert-after-show');
    alert.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(showEvent).toHaveReceivedEventTimes(1);
    expect(afterShowEvent).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <six-alert open>This is an alert</six-alert>
      `,
    });
    const alert = await page.find('six-alert');
    const base = await page.find('six-alert >>> .alert');
    const hideEvent = await alert.spyOnEvent('six-alert-hide');
    const afterHideEvent = await alert.spyOnEvent('six-alert-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = alert.waitForEvent('six-alert-after-hide');
    alert.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(hideEvent).toHaveReceivedEventTimes(1);
    expect(afterHideEvent).toHaveReceivedEventTimes(1);
  });

  it('should open with the show() method', async () => {
    const page = await newE2EPage({
      html: `
        <six-alert>This is an alert</six-alert>
      `,
    });
    const alert = await page.find('six-alert');
    const base = await page.find('six-alert >>> .alert');
    const sixShow = await alert.spyOnEvent('six-alert-show');
    const sixAfterShow = await alert.spyOnEvent('six-alert-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = alert.waitForEvent('six-alert-after-show');
    await alert.callMethod('show');
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(sixShow).toHaveReceivedEventTimes(1);
    expect(sixAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close with the hide() method', async () => {
    const page = await newE2EPage({
      html: `
        <six-alert open>This is an alert</six-alert>
      `,
    });
    const alert = await page.find('six-alert');
    const base = await page.find('six-alert >>> .alert');
    const sixHide = await alert.spyOnEvent('six-alert-hide');
    const sixAfterHide = await alert.spyOnEvent('six-alert-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = alert.waitForEvent('six-alert-after-hide');
    await alert.callMethod('hide');
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(sixHide).toHaveReceivedEventTimes(1);
    expect(sixAfterHide).toHaveReceivedEventTimes(1);
  });
});
