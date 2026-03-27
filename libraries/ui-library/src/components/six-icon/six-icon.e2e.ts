import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-icon renders Material Icons - primarily presentational

test.describe('six-icon screenshots', () => {
  const sizes = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge', 'xxxLarge'] as const;

  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-icon size="${size}">settings</six-icon>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`icon-${size}.png`);
    });
  });

  test('should match screenshot for filled icon', async ({ page }) => {
    await page.setContent('<six-icon size="large" filled>settings</six-icon>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('icon-filled.png');
  });

  test('should match screenshot for outlined icon (default)', async ({ page }) => {
    await page.setContent('<six-icon size="large">settings</six-icon>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('icon-outlined.png');
  });
});

test.describe('six-icon accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-icon size="medium">settings</six-icon>');

    const results = await new AxeBuilder({ page }).include('six-icon').analyze();
    expect(results.violations).toEqual([]);
  });
});
