import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-progress-ring screenshots', () => {
  test('should match screenshot for 0%', async ({ page }) => {
    await page.setContent('<six-progress-ring percentage="0"></six-progress-ring>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-ring-0.png');
  });

  test('should match screenshot for 50%', async ({ page }) => {
    await page.setContent('<six-progress-ring percentage="50">50%</six-progress-ring>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-ring-50.png');
  });

  test('should match screenshot for 100%', async ({ page }) => {
    await page.setContent('<six-progress-ring percentage="100">100%</six-progress-ring>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-ring-100.png');
  });

  test('should match screenshot for custom size', async ({ page }) => {
    await page.setContent('<six-progress-ring percentage="75" size="64">75%</six-progress-ring>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-ring-custom-size.png');
  });
});

test.describe('six-progress-ring accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-progress-ring percentage="50">50%</six-progress-ring>');

    const results = await new AxeBuilder({ page }).include('six-progress-ring').analyze();
    expect(results.violations).toEqual([]);
  });
});
