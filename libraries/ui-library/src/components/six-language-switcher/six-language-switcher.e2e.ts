import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-language-switcher has color contrast issue:
// - Selected label contrast ratio 4.23:1 doesn't meet WCAG 2 AA (4.5:1)

test.describe('six-language-switcher', () => {
  test('should emit change event when language clicked', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    const changeSpy = await page.spyOnEvent('six-language-switcher-change');

    // Click second language (DE)
    await page.locator('six-language-switcher [part="label"]').nth(1).click();

    expect(changeSpy).toHaveReceivedEventDetail('DE');
  });

  test('should emit change event when language selected via keyboard', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    const changeSpy = await page.spyOnEvent('six-language-switcher-change');

    // Tab to second language and press Enter
    await page.locator('six-language-switcher [part="label"]').first().focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    expect(changeSpy).toHaveReceivedEventDetail('DE');

    // Tab to third language and press Space
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');

    expect(changeSpy).toHaveReceivedEventDetail('ES');
  });

  test('should default to first language when none selected', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    const switcher = page.locator('six-language-switcher');
    await expect(switcher).toHaveAttribute('selected', 'EN');
  });

  test('should respect selected prop', async ({ page }) => {
    await page.setContent('<six-language-switcher selected="DE"></six-language-switcher>');

    const switcher = page.locator('six-language-switcher');
    await expect(switcher).toHaveAttribute('selected', 'DE');
  });

  test('should update selected when language clicked', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    const switcher = page.locator('six-language-switcher');

    // Click third language (ES)
    await page.locator('six-language-switcher [part="label"]').nth(2).click();

    await expect(switcher).toHaveAttribute('selected', 'ES');
  });

  test('should handle custom languages array', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    await page.locator('six-language-switcher').evaluate((el: HTMLElement & { languages: string[] }) => {
      el.languages = ['FR', 'IT', 'DE'];
    });

    const labels = page.locator('six-language-switcher [part="label"]');
    await expect(labels).toHaveCount(3);
    await expect(labels.nth(0)).toHaveText('FR');
    await expect(labels.nth(1)).toHaveText('IT');
    await expect(labels.nth(2)).toHaveText('DE');
  });

  test('should emit value from key/value language objects', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    await page
      .locator('six-language-switcher')
      .evaluate((el: HTMLElement & { languages: Array<{ key: string; value: string }> }) => {
        el.languages = [
          { key: 'FR', value: 'French' },
          { key: 'IT', value: 'Italian' },
          { key: 'DE', value: 'German' },
        ];
      });

    const changeSpy = await page.spyOnEvent('six-language-switcher-change');

    // Click second language (IT)
    await page.locator('six-language-switcher [part="label"]').nth(1).click();

    expect(changeSpy).toHaveReceivedEventDetail('Italian');
  });
});

test.describe('six-language-switcher screenshots', () => {
  test('should match screenshot for default state', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('language-switcher-default.png');
  });

  test('should match screenshot for DE selected', async ({ page }) => {
    await page.setContent('<six-language-switcher selected="DE"></six-language-switcher>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('language-switcher-de-selected.png');
  });

  test('should match screenshot for custom languages', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    await page.locator('six-language-switcher').evaluate((el: HTMLElement & { languages: string[] }) => {
      el.languages = ['FR', 'IT'];
    });

    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('language-switcher-custom.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');
    await page.locator('six-language-switcher [part="label"]').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('language-switcher-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');
    await page.locator('six-language-switcher [part="label"]').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('language-switcher-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('language-switcher-focus-visible.png');
  });
});

test.describe('six-language-switcher accessibility', () => {
  test('should have focusable labels', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    const labels = page.locator('six-language-switcher [part="label"]');
    await expect(labels.nth(0)).toHaveAttribute('tabindex', '0');
    await expect(labels.nth(1)).toHaveAttribute('tabindex', '0');
    await expect(labels.nth(2)).toHaveAttribute('tabindex', '0');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-language-switcher></six-language-switcher>');

    const results = await new AxeBuilder({ page })
      .include('six-language-switcher')
      // Disabled due to known issue documented in TODO above
      .disableRules(['color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
