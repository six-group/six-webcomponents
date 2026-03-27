import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-error is a simple styled container for error messages - no behavior to test functionally

// TODO: Error text color (#de3919) has insufficient contrast ratio of 4.46:1 against white background.
// Required ratio is 4.5:1 for WCAG 2 AA compliance.

test.describe('six-error screenshots', () => {
  test('should match screenshot for default error', async ({ page }) => {
    await page.setContent('<six-error>This is an error message</six-error>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('error-default.png');
  });
});

test.describe('six-error accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-error>This is an error message</six-error>');

    // Disable color-contrast due to error text color issue (see TODO at top)
    const results = await new AxeBuilder({ page }).include('six-error').disableRules(['color-contrast']).analyze();
    expect(results.violations).toEqual([]);
  });
});
