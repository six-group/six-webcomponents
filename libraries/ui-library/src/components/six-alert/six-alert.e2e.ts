import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-alert', () => {
  test('should show and hide via open prop', async ({ page }) => {
    await page.setContent('<six-alert>Alert message</six-alert>');
    const alert = page.locator('six-alert');

    await expect(page.getByRole('alert')).toBeHidden();

    // Show alert
    await alert.evaluate((el: HTMLElement) => el.setAttribute('open', ''));
    await expect(page.getByRole('alert')).toBeVisible();

    // Hide alert
    await alert.evaluate((el: HTMLElement) => el.removeAttribute('open'));
    await expect(page.getByRole('alert')).toBeHidden();
  });

  test('should close when close button is clicked', async ({ page }) => {
    await page.setContent('<six-alert open closable>Closable alert</six-alert>');
    const alert = page.locator('six-alert');

    await alert.getByRole('button').click();
    await expect(alert.getByRole('alert')).not.toBeVisible();
  });

  test('should emit events (show, after-show, hide, after-hide)', async ({ page }) => {
    await page.setContent(
      '<six-alert>Alert message</six-alert>',
      // filter clears onAfterHide event, which is not fired when animations are disabled
      { disableAnimations: false }
    );

    const showSpy = await page.spyOnEvent('six-alert-show');
    const afterShowSpy = await page.spyOnEvent('six-alert-after-show');
    const hideSpy = await page.spyOnEvent('six-alert-hide');
    const afterHideSpy = await page.spyOnEvent('six-alert-after-hide');

    const alert = page.locator('six-alert');
    const alertBase = page.locator('six-alert [part="base"]');

    // Show alert
    await alert.evaluate((el: HTMLElement) => el.setAttribute('open', ''));
    expect(showSpy).toHaveReceivedEvent();

    // Wait for show transition to complete (opacity becomes 1)
    await expect(alertBase).toHaveCSS('opacity', '1');
    await expect.poll(() => afterShowSpy.length).toBe(1);

    // Hide alert
    await alert.evaluate((el: HTMLElement) => el.removeAttribute('open'));
    expect(hideSpy).toHaveReceivedEvent();

    // Wait for hide transition to complete (opacity becomes 0)
    await expect(alertBase).toHaveCSS('opacity', '0');
    await expect.poll(() => afterHideSpy.length).toBe(1);
  });
});

test.describe('six-alert screenshots', () => {
  const types = ['primary', 'success', 'info', 'warning', 'danger'];

  types.forEach((type) => {
    test(`should match screenshot for ${type} alert`, async ({ page }) => {
      await page.setContent(`<six-alert type="${type}" open>This is a ${type} alert</six-alert>`);
      // Wait for transition to complete (opacity becomes 1)
      const alertBase = page.getByRole('alert');
      await expect(alertBase).toHaveCSS('opacity', '1');
      await expect(alertBase).toHaveScreenshot(`alert-${type}.png`);
    });
  });

  types.forEach((type) => {
    test(`should match screenshot for closable ${type} alert`, async ({ page }) => {
      await page.setContent(`<six-alert type="${type}" open closable>This is a closable ${type} alert</six-alert>`);
      // Wait for transition to complete (opacity becomes 1)
      const alertBase = page.getByRole('alert');
      await expect(alertBase).toHaveCSS('opacity', '1');
      await expect(alertBase).toHaveScreenshot(`alert-${type}-closable.png`);
    });
  });
});

test.describe('six-alert accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent('<six-alert open>Alert message</six-alert>');

    const alertBase = page.getByRole('alert');
    await expect(alertBase).toHaveRole('alert');
    await expect(alertBase).toHaveAttribute('aria-live', 'assertive');
    await expect(alertBase).toHaveAttribute('aria-atomic', 'true');
  });

  test('should have aria-hidden="true" when closed', async ({ page }) => {
    await page.setContent('<six-alert>Message</six-alert>');

    await expect(page.locator('[part="base"]')).toHaveAttribute('aria-hidden', 'true');
  });

  test('should have aria-hidden="false" when open', async ({ page }) => {
    await page.setContent('<six-alert open>Message</six-alert>');

    await expect(page.locator('[part="base"]')).toHaveAttribute('aria-hidden', 'false');
  });

  const types = ['primary', 'success', 'info', 'warning', 'danger'];

  types.forEach((type) => {
    test(`should have no accessibility violations for ${type} alert`, async ({ page }) => {
      await page.setContent(`<six-alert type="${type}" open>This is a ${type} alert</six-alert>`);

      const results = await new AxeBuilder({ page }).include('six-alert').analyze();
      expect(results.violations).toEqual([]);
    });
  });
});
