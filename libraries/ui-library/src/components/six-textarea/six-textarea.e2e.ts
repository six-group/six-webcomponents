import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-textarea', () => {
  test('should emit events (focus, input, change, blur)', async ({ page }) => {
    await page.setContent(`
      <six-textarea label="Comments"></six-textarea>
      <button>Other</button>
    `);

    const focusSpy = await page.spyOnEvent('six-textarea-focus');
    const inputSpy = await page.spyOnEvent('six-textarea-input');
    const changeSpy = await page.spyOnEvent('six-textarea-change');
    const blurSpy = await page.spyOnEvent('six-textarea-blur');

    const textarea = page.getByRole('textbox');
    await textarea.click();
    expect(focusSpy).toHaveReceivedEvent();

    await textarea.fill('Hello World');
    expect(inputSpy).toHaveReceivedEvent();

    // Tab away to trigger change
    await page.locator('button').click();
    expect(changeSpy).toHaveReceivedEvent();
    expect(blurSpy).toHaveReceivedEvent();
  });

  test('should not allow input when disabled', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" disabled value="initial"></six-textarea>');

    const textarea = page.getByRole('textbox');
    await expect(textarea).toBeDisabled();
  });

  test('should not allow editing when readonly', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" readonly value="readonly text"></six-textarea>');

    const textarea = page.getByRole('textbox');
    await expect(textarea).toHaveAttribute('readonly', '');
    await expect(textarea).toHaveValue('readonly text');
  });

  test('should skip disabled in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-textarea label="Comments" disabled></six-textarea>
      <button id="after">After</button>
    `);

    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('#after')).toBeFocused();
  });

  test('should handle null value gracefully', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments"></six-textarea>');

    await page.locator('six-textarea').evaluate((el: HTMLElement & { value: string | null }) => {
      el.value = null;
    });

    await expect(page.getByRole('textbox')).toHaveValue('');
  });
});

test.describe('six-textarea screenshots', () => {
  test('should match screenshot for default', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" placeholder="Enter your comments..."></six-textarea>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-default.png');
  });

  test('should match screenshot with value', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" value="Some text content"></six-textarea>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-with-value.png');
  });

  test('should match screenshot for disabled', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" disabled value="Disabled content"></six-textarea>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-disabled.png');
  });

  test('should match screenshot for invalid', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" invalid error-text="This field is required"></six-textarea>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-invalid.png');
  });

  const sizes = ['small', 'medium', 'large'] as const;
  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-textarea label="Comments" size="${size}" value="Content"></six-textarea>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`textarea-${size}.png`);
    });
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" placeholder="Enter your comments..."></six-textarea>');
    await page.locator('six-textarea textarea').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" placeholder="Enter your comments..."></six-textarea>');
    await page.locator('six-textarea textarea').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" placeholder="Enter your comments..."></six-textarea>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('textarea-focus-visible.png');
  });
});

test.describe('six-textarea accessibility', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments"></six-textarea>');

    const results = await new AxeBuilder({ page }).include('six-textarea').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled', async ({ page }) => {
    await page.setContent('<six-textarea label="Comments" disabled></six-textarea>');

    const results = await new AxeBuilder({ page }).include('six-textarea').analyze();
    expect(results.violations).toEqual([]);
  });
});
