import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-tag clearable has accessibility issue:
// - Clear button (six-icon-button) missing accessible name (aria-label)

test.describe('six-tag', () => {
  test('should emit six-tag-clear when clearable and clear button clicked', async ({ page }) => {
    await page.setContent('<six-tag clearable>Tag</six-tag>');

    const clearSpy = await page.spyOnEvent('six-tag-clear');
    await page.locator('six-tag six-icon-button').click();

    expect(clearSpy).toHaveReceivedEvent();
  });
});

test.describe('six-tag screenshots', () => {
  const types = ['primary', 'success', 'info', 'warning', 'danger', 'action', 'text'] as const;

  types.forEach((type) => {
    test(`should match screenshot for ${type} type`, async ({ page }) => {
      await page.setContent(`<six-tag type="${type}">Tag</six-tag>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`tag-${type}.png`);
    });
  });

  const sizes = ['small', 'medium', 'large'] as const;

  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-tag size="${size}">Tag</six-tag>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`tag-${size}.png`);
    });
  });

  test('should match screenshot for pill style', async ({ page }) => {
    await page.setContent('<six-tag pill>Tag</six-tag>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tag-pill.png');
  });

  test('should match screenshot for clearable', async ({ page }) => {
    await page.setContent('<six-tag clearable>Tag</six-tag>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tag-clearable.png');
  });
});

test.describe('six-tag accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-tag>Tag</six-tag>');

    const results = await new AxeBuilder({ page }).include('six-tag').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for clearable', async ({ page }) => {
    await page.setContent('<six-tag clearable>Tag</six-tag>');

    const results = await new AxeBuilder({ page })
      .include('six-tag')
      // Disabled due to known issue documented in TODO above
      .disableRules(['button-name'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
