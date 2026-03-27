import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-card is a simple styled container - no behavior to test functionally

test.describe('six-card screenshots', () => {
  test('should match screenshot for default card', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('card-default.png');
  });
});

test.describe('six-card accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-card>
        <p>Card content</p>
      </six-card>
    `);

    const results = await new AxeBuilder({ page }).include('six-card').analyze();
    expect(results.violations).toEqual([]);
  });
});
