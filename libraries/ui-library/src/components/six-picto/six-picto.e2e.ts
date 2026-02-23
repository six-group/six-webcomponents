import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// six-picto displays pictograms - primarily presentational

test.describe('six-picto screenshots', () => {
  const sizes = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge', 'xxxLarge'] as const;

  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-picto size="${size}">search</six-picto>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`picto-${size}.png`);
    });
  });
});

test.describe('six-picto accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-picto size="medium">search</six-picto>');

    const results = await new AxeBuilder({ page }).include('six-picto').analyze();
    expect(results.violations).toEqual([]);
  });
});
