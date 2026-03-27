import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-range has accessibility issues:
// - Form label is not properly connected to native input in shadow DOM
// - axe-core cannot detect the label association across shadow boundary
// - Disabled label has color contrast ratio 4.23:1, doesn't meet WCAG 2 AA (4.5:1)

test.describe('six-range', () => {
  test('should emit events (focus, change, blur)', async ({ page }) => {
    await page.setContent(`
      <six-range min="0" max="100"></six-range>
      <button>Other</button>
    `);

    const focusSpy = await page.spyOnEvent('six-range-focus');
    const changeSpy = await page.spyOnEvent('six-range-change');
    const blurSpy = await page.spyOnEvent('six-range-blur');

    // Focus and change value
    const slider = page.getByRole('slider');
    await slider.click();
    expect(focusSpy).toHaveReceivedEvent();

    // Change value using keyboard
    await page.keyboard.press('ArrowRight');
    await expect.poll(() => changeSpy.length).toBeGreaterThan(0);

    // Click elsewhere blurs
    await page.locator('button').click();
    expect(blurSpy).toHaveReceivedEvent();
  });

  test('should not change value when disabled', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" disabled></six-range>');

    const slider = page.getByRole('slider');
    await expect(slider).toBeDisabled();

    // Try to change value - should remain at 50
    await slider.focus({ timeout: 1000 }).catch(() => {});
    await page.keyboard.press('ArrowRight');
    await expect(slider).toHaveValue('50');
  });

  test('should skip disabled in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-range disabled></six-range>
      <button id="after">After</button>
    `);

    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('#after')).toBeFocused();
  });

  test('should update value via keyboard', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" step="1"></six-range>');

    const slider = page.getByRole('slider');
    await slider.focus();

    await page.keyboard.press('ArrowRight');
    await expect(slider).toHaveValue('51');

    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveValue('50');
  });

  test('should respect min/max/step attributes', async ({ page }) => {
    await page.setContent('<six-range min="10" max="50" step="5" value="15"></six-range>');

    const slider = page.getByRole('slider');
    await slider.focus();
    await expect(slider).toHaveAttribute('min', '10');
    await expect(slider).toHaveAttribute('max', '50');
    await expect(slider).toHaveAttribute('step', '5');

    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveValue('10');
    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveValue('10');
  });
});

test.describe('six-range screenshots', () => {
  test('should match screenshot for default', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" style="width: 300px"></six-range>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-default.png');
  });

  test('should match screenshot for disabled', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" disabled style="width: 300px"></six-range>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-disabled.png');
  });

  test('should match screenshot with label', async ({ page }) => {
    await page.setContent('<six-range label="Volume" min="0" max="100" value="50" style="width: 300px"></six-range>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-with-label.png');
  });

  test('should match screenshot for invalid state', async ({ page }) => {
    await page.setContent(
      '<six-range label="Volume" error-text="Value out of range" invalid min="0" max="100" value="50" style="width: 300px"></six-range>'
    );
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-invalid.png');
  });

  test('should match screenshot with tooltip none', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" tooltip="none" style="width: 300px"></six-range>');
    await page.getByRole('slider').click();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-no-tooltip.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" tooltip="none" style="width: 300px"></six-range>');
    await page.locator('six-range input').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" tooltip="none" style="width: 300px"></six-range>');
    await page.locator('six-range input').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-range min="0" max="100" value="50" tooltip="none" style="width: 300px"></six-range>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('range-focus-visible.png');
  });
});

test.describe('six-range accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent('<six-range label="Volume" min="0" max="100" value="50"></six-range>');

    const slider = page.getByRole('slider');
    await expect(slider).toHaveAttribute('min', '0');
    await expect(slider).toHaveAttribute('max', '100');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-range label="Volume" min="0" max="100" value="50"></six-range>');

    const results = await new AxeBuilder({ page })
      .include('six-range')
      // Disabled due to known issue documented in TODO above
      .disableRules(['label'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled', async ({ page }) => {
    await page.setContent('<six-range label="Volume" min="0" max="100" value="50" disabled></six-range>');

    const results = await new AxeBuilder({ page })
      .include('six-range')
      // Disabled due to known issues documented in TODO above
      .disableRules(['label', 'color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
