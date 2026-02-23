import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-main-container screenshots', () => {
  test('should match screenshot for default (padded)', async ({ page }) => {
    await page.setContent(`
      <style>
        six-main-container { background-color: #f0f0f0; }
        six-main-container > div { text-align: center; background-color: #e0e0e0; border: 1px solid #000; }
      </style>
      <six-main-container>
        <div>Main content area</div>
      </six-main-container>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('main-container-padded.png');
  });

  test('should match screenshot for not padded', async ({ page }) => {
    await page.setContent(`
      <style>
        six-main-container { background-color: #f0f0f0; }
        six-main-container > div { text-align: center; background-color: #e0e0e0; border: 1px solid #000; }
      </style>
      <six-main-container padded="false">
        <div>Main content area without padding</div>
      </six-main-container>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('main-container-not-padded.png');
  });
});

test.describe('six-main-container accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-main-container>
        <div>Main content</div>
      </six-main-container>
    `);

    const results = await new AxeBuilder({ page }).include('six-main-container').analyze();
    expect(results.violations).toEqual([]);
  });
});
