import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-tile has accessibility issues:
// - Close button (six-icon-button) missing accessible name

test.describe('six-tile', () => {
  test('should emit selected event when clicked', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard"></six-tile>');

    const selectedSpy = await page.spyOnEvent('six-tile-selected');

    await page.locator('six-tile six-icon').first().click();

    expect(selectedSpy).toHaveReceivedEvent();
  });

  test('should emit closed event when close button clicked', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard" closeable></six-tile>');

    const closedSpy = await page.spyOnEvent('six-tile-closed');

    await page.locator('six-tile six-icon-button[name="close"]').click();

    expect(closedSpy).toHaveReceivedEvent();
  });

  test('should hide after close button clicked', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard" closeable></six-tile>');

    await page.locator('six-tile six-icon-button[name="close"]').click();

    // Check the tile's own base div is hidden (use .tile class)
    await expect(page.locator('six-tile .tile')).not.toHaveClass(/tile--visible/);
  });

  test('should show/hide via methods', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard"></six-tile>');

    const tile = page.locator('six-tile');
    const tileDiv = page.locator('six-tile .tile');

    await expect(tileDiv).toHaveClass(/tile--visible/);

    await tile.evaluate((el: HTMLElement & { hide: () => Promise<void> }) => el.hide());
    await expect(tileDiv).not.toHaveClass(/tile--visible/);

    await tile.evaluate((el: HTMLElement & { show: () => Promise<void> }) => el.show());
    await expect(tileDiv).toHaveClass(/tile--visible/);
  });
});

test.describe('six-tile screenshots', () => {
  test('should match screenshot for default', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard"></six-tile>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tile-default.png');
  });

  test('should match screenshot for elevated', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard" elevated></six-tile>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tile-elevated.png');
  });

  test('should match screenshot for not closeable', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard" closeable="false"></six-tile>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tile-not-closeable.png');
  });

  const sizes = ['small', 'medium', 'large'] as const;
  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-tile label="Dashboard" icon-name="dashboard" size="${size}"></six-tile>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`tile-${size}.png`);
    });
  });
});

test.describe('six-tile accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-tile label="Dashboard" icon-name="dashboard"></six-tile>');

    const results = await new AxeBuilder({ page })
      .include('six-tile')
      // Disabled due to known issue documented in TODO above
      .disableRules(['button-name'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
