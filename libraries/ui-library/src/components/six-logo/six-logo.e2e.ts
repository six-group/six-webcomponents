import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-logo displays the SIX or BME logo - purely presentational

test.describe('six-logo screenshots', () => {
  test('should match screenshot for SIX logo (default)', async ({ page }) => {
    await page.setContent('<six-logo></six-logo>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('logo-six.png');
  });

  test('should match screenshot for BME logo', async ({ page }) => {
    await page.setContent('<six-logo brand="bme"></six-logo>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('logo-bme.png');
  });
});

test.describe('six-logo accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-logo></six-logo>');

    const results = await new AxeBuilder({ page }).include('six-logo').analyze();
    expect(results.violations).toEqual([]);
  });
});
