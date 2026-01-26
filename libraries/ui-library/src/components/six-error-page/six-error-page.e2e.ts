import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-error-page is purely presentational - no behavior to test functionally

test.describe('six-error-page screenshots', () => {
  const errorCodes = [403, 404, 500] as const;

  errorCodes.forEach((code) => {
    test(`should match screenshot for ${code} error (English)`, async ({ page }) => {
      await page.setContent(`<six-error-page error-code="${code}" language="en"></six-error-page>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`error-page-${code}-en.png`);
    });

    test(`should match screenshot for ${code} error (German)`, async ({ page }) => {
      await page.setContent(`<six-error-page error-code="${code}" language="de"></six-error-page>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`error-page-${code}-de.png`);
    });
  });

  test('should match screenshot for custom content', async ({ page }) => {
    await page.setContent(`<six-error-page custom-title="Custom Title" custom-icon="home"></six-error-page>`);
    await page.locator('six-error-page').evaluate((el: HTMLElement & { customDescription: string[] }) => {
      el.customDescription = ['Custom description line 1', 'Custom description line 2'];
    });
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('error-page-custom.png');
  });
});

test.describe('six-error-page accessibility', () => {
  test('should have no accessibility violations for 404 error', async ({ page }) => {
    await page.setContent('<six-error-page error-code="404" language="en"></six-error-page>');

    const results = await new AxeBuilder({ page }).include('six-error-page').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for custom content', async ({ page }) => {
    await page.setContent('<six-error-page custom-title="Custom Title" custom-icon="home"></six-error-page>');

    const results = await new AxeBuilder({ page }).include('six-error-page').analyze();
    expect(results.violations).toEqual([]);
  });
});
