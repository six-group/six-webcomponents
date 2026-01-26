import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-group-label is a form label wrapper - primarily presentational

test.describe('six-group-label screenshots', () => {
  test('should match screenshot for default', async ({ page }) => {
    await page.setContent(`
      <six-group-label label="Group Label">
        <six-input></six-input>
      </six-group-label>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('group-label-default.png');
  });

  test('should match screenshot with help text', async ({ page }) => {
    await page.setContent(`
      <six-group-label label="Group Label" help-text="This is help text">
        <six-input></six-input>
      </six-group-label>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('group-label-help-text.png');
  });

  test('should match screenshot for required', async ({ page }) => {
    await page.setContent(`
      <six-group-label label="Group Label" required>
        <six-input></six-input>
      </six-group-label>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('group-label-required.png');
  });

  test('should match screenshot for disabled', async ({ page }) => {
    await page.setContent(`
      <six-group-label label="Group Label" disabled>
        <six-input disabled></six-input>
      </six-group-label>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('group-label-disabled.png');
  });

  const sizes = ['small', 'medium', 'large'] as const;
  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`
        <six-group-label label="Group Label" size="${size}">
          <six-input size="${size}"></six-input>
        </six-group-label>
      `);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`group-label-${size}.png`);
    });
  });
});

test.describe('six-group-label accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    // Use six-input with its own label to avoid label accessibility issues
    await page.setContent(`
      <six-group-label label="Group Label">
        <six-input label="Input Label"></six-input>
      </six-group-label>
    `);

    const results = await new AxeBuilder({ page }).include('six-group-label').analyze();
    expect(results.violations).toEqual([]);
  });
});
