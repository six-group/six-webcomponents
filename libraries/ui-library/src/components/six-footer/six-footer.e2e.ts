import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-footer is a simple styled container - no behavior to test functionally

test.describe('six-footer screenshots', () => {
  test('should match screenshot for default footer', async ({ page }) => {
    await page.setContent('<six-footer>Copyright © 2021-present SIX Group</six-footer>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('footer-default.png');
  });
});

test.describe('six-footer accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-footer>Copyright © 2021-present SIX Group</six-footer>');

    const results = await new AxeBuilder({ page }).include('six-footer').analyze();
    expect(results.violations).toEqual([]);
  });
});
