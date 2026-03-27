import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-spinner is a loading indicator - primarily presentational

test.describe('six-spinner screenshots', () => {
  test('should match screenshot for default spinner', async ({ page }) => {
    await page.setContent('<six-spinner></six-spinner>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('spinner-default.png');
  });

  test('should match screenshot for SIX logo spinner', async ({ page }) => {
    await page.setContent('<six-spinner logo="six"></six-spinner>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('spinner-six-logo.png');
  });

  test('should match screenshot for BME logo spinner', async ({ page }) => {
    await page.setContent('<six-spinner logo="bme"></six-spinner>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('spinner-bme-logo.png');
  });
});

test.describe('six-spinner accessibility', () => {
  test('should have aria-busy and aria-live attributes', async ({ page }) => {
    await page.setContent('<six-spinner></six-spinner>');

    const spinner = page.locator('six-spinner [aria-busy]');
    await expect(spinner).toHaveAttribute('aria-busy', 'true');
    await expect(spinner).toHaveAttribute('aria-live', 'polite');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-spinner></six-spinner>');

    const results = await new AxeBuilder({ page }).include('six-spinner').analyze();
    expect(results.violations).toEqual([]);
  });
});
