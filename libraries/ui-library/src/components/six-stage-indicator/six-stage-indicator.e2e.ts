import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-stage-indicator', () => {
  test('should not render indicator content when stage is PROD', async ({ page }) => {
    await page.setContent('<six-stage-indicator stage="PROD">v1.0.0</six-stage-indicator>');

    // Shadow DOM should have no visible content when stage is PROD
    const icon = page.locator('six-stage-indicator six-icon');
    await expect(icon).toHaveCount(0);
  });

  test('should not render indicator content when stage is null', async ({ page }) => {
    await page.setContent('<six-stage-indicator>v1.0.0</six-stage-indicator>');

    // Shadow DOM should have no visible content when stage is null
    const icon = page.locator('six-stage-indicator six-icon');
    await expect(icon).toHaveCount(0);
  });

  test('should render when stage is DEV', async ({ page }) => {
    await page.setContent('<six-stage-indicator stage="DEV">v1.0.0</six-stage-indicator>');

    await expect(page.locator('six-stage-indicator')).toContainText('v1.0.0');
  });
});

test.describe('six-stage-indicator screenshots', () => {
  const stages = ['DEV', 'ITU', 'ETU', 'ACCEPTANCE'] as const;

  stages.forEach((stage) => {
    test(`should match screenshot for ${stage}`, async ({ page }) => {
      await page.setContent(`<six-stage-indicator stage="${stage}">v1.0.0</six-stage-indicator>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(
        `stage-indicator-${stage.toLowerCase()}.png`
      );
    });
  });
});

test.describe('six-stage-indicator accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-stage-indicator stage="DEV">v1.0.0</six-stage-indicator>');

    const results = await new AxeBuilder({ page }).include('six-stage-indicator').analyze();
    expect(results.violations).toEqual([]);
  });
});
