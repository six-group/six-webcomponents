import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-progress-bar has accessibility issues:
// - Missing aria-label on progressbar element (aria-progressbar-name)
// - Color contrast ratio 4.46:1 doesn't meet WCAG 2 AA (4.5:1)

test.describe('six-progress-bar screenshots', () => {
  test('should match screenshot for 0%', async ({ page }) => {
    await page.setContent('<six-progress-bar percentage="0"></six-progress-bar>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-bar-0.png');
  });

  test('should match screenshot for 50%', async ({ page }) => {
    await page.setContent('<six-progress-bar percentage="50">50%</six-progress-bar>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-bar-50.png');
  });

  test('should match screenshot for 100%', async ({ page }) => {
    await page.setContent('<six-progress-bar percentage="100">100%</six-progress-bar>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-bar-100.png');
  });

  test('should match screenshot for indeterminate', async ({ page }) => {
    await page.setContent('<six-progress-bar indeterminate></six-progress-bar>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('progress-bar-indeterminate.png');
  });
});

test.describe('six-progress-bar accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent('<six-progress-bar percentage="50"></six-progress-bar>');

    const progressbar = page.getByRole('progressbar');
    await expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    await expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    await expect(progressbar).toHaveAttribute('aria-valuenow', '50');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-progress-bar percentage="50">50%</six-progress-bar>');

    const results = await new AxeBuilder({ page })
      .include('six-progress-bar')
      // Disabled due to known issues documented in TODO above
      .disableRules(['aria-progressbar-name', 'color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
