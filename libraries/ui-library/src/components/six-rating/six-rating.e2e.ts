import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: Missing value accessor for angular forms
// TODO: Missing correct focus styling

test.describe('six-rating', () => {
  // TODO: Missing default events (focus, blur, ...): Check connectedCallback in other components like six-input.tsx
  test('should emit events (focus, change, blur)', async ({ page }) => {
    await page.setContent(`
      <six-rating label="Rating"></six-rating>
      <button>Other</button>
    `);

    const focusSpy = await page.spyOnEvent('six-rating-focus');
    const changeSpy = await page.spyOnEvent('six-rating-change');
    const blurSpy = await page.spyOnEvent('six-rating-blur');

    // Click rating to focus
    await page.locator('six-rating [part="base"]').click();
    expect(focusSpy).toHaveReceivedEvent();

    // Click 3rd star
    await page.locator('six-rating six-icon').nth(2).click();
    expect(changeSpy).toHaveReceivedEventDetail(3);

    // Click elsewhere blurs
    await page.locator('button').click();
    expect(blurSpy).toHaveReceivedEvent();
  });

  test('should update value via keyboard', async ({ page }) => {
    await page.setContent('<six-rating label="Rating" value="3"></six-rating>');

    const slider = page.locator('six-rating [part="base"]');
    await slider.focus();

    // ArrowLeft decreases and sets value (see TODO above for unusual behavior)
    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveAttribute('aria-valuenow', '2');

    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveAttribute('aria-valuenow', '1');

    await page.keyboard.press('ArrowRight');
    // TODO: ArrowRight only moves hover position without updating value
    // await expect(slider).toHaveAttribute('aria-valuenow', '2');
  });

  test('should not change value when disabled', async ({ page }) => {
    await page.setContent('<six-rating label="Rating" value="3" disabled></six-rating>');

    const slider = page.locator('six-rating [part="base"]');
    await expect(slider).toHaveAttribute('aria-disabled', 'true');

    // Try to click a star - should not change
    await page.locator('six-rating six-icon').nth(4).click({ force: true });
    await expect(slider).toHaveAttribute('aria-valuenow', '3');
  });

  test('should not change value when readonly', async ({ page }) => {
    await page.setContent('<six-rating label="Rating" value="3" readonly></six-rating>');

    const slider = page.locator('six-rating [part="base"]');
    await expect(slider).toHaveAttribute('aria-readonly', 'true');

    // Try to click a star - should not change
    await page.locator('six-rating six-icon').nth(4).click();
    await expect(slider).toHaveAttribute('aria-valuenow', '3');
  });

  test('should skip disabled in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-rating disabled></six-rating>
      <button id="after">After</button>
    `);

    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('#after')).toBeFocused();
  });
});

test.describe('six-rating screenshots', () => {
  test('should match screenshot for default (no value)', async ({ page }) => {
    await page.setContent('<six-rating></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-default.png');
  });

  test('should match screenshot with value', async ({ page }) => {
    await page.setContent('<six-rating value="3"></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-value-3.png');
  });

  test('should match screenshot for disabled', async ({ page }) => {
    await page.setContent('<six-rating value="3" disabled></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-disabled.png');
  });

  test('should match screenshot with label', async ({ page }) => {
    await page.setContent('<six-rating label="Rate this" value="4"></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-with-label.png');
  });

  test('should match screenshot for small size', async ({ page }) => {
    await page.setContent('<six-rating size="small" value="3"></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-small.png');
  });

  test('should match screenshot for large size', async ({ page }) => {
    await page.setContent('<six-rating size="large" value="3"></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-large.png');
  });

  test('should match screenshot with max 10', async ({ page }) => {
    await page.setContent('<six-rating max="10" value="6"></six-rating>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-max-10.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-rating value="3"></six-rating>');
    await page.locator('six-rating [part="base"]').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-rating value="3"></six-rating>');
    await page.locator('six-rating [part="base"]').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-rating value="3"></six-rating>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('rating-focus-visible.png');
  });
});

test.describe('six-rating accessibility', () => {
  test('should have correct ARIA slider attributes', async ({ page }) => {
    await page.setContent('<six-rating label="Rating" value="3" max="5"></six-rating>');

    const slider = page.locator('six-rating [part="base"]');
    await expect(slider).toHaveAttribute('role', 'slider');
    await expect(slider).toHaveAttribute('aria-valuenow', '3');
    await expect(slider).toHaveAttribute('aria-valuemin', '0');
    await expect(slider).toHaveAttribute('aria-valuemax', '5');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-rating label="Rating" value="3"></six-rating>');

    const results = await new AxeBuilder({ page }).include('six-rating').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled', async ({ page }) => {
    await page.setContent('<six-rating label="Rating" value="3" disabled></six-rating>');

    const results = await new AxeBuilder({ page }).include('six-rating').analyze();
    expect(results.violations).toEqual([]);
  });
});
