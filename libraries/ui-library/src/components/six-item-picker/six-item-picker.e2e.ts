import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-item-picker', () => {
  test('should display initial value', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('5');
  });

  test('should increment value when clicking up button', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    const changeSpy = await page.spyOnEvent('six-item-picker-change');

    // Click up button
    await page.locator('six-item-picker [part="up"]').click();

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('6');
    expect(changeSpy).toHaveReceivedEvent();
  });

  test('should decrement value when clicking down button', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    const changeSpy = await page.spyOnEvent('six-item-picker-change');

    // Click down button
    await page.locator('six-item-picker [part="down"]').click();

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('4');
    expect(changeSpy).toHaveReceivedEvent();
  });

  test('should increment value with ArrowUp key', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    const picker = page.locator('six-item-picker [part="container"]');
    await picker.focus();
    await page.keyboard.press('ArrowUp');

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('6');
  });

  test('should decrement value with ArrowDown key', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    const picker = page.locator('six-item-picker [part="container"]');
    await picker.focus();
    await page.keyboard.press('ArrowDown');

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('4');
  });

  test('should respect min value when roundtrip disabled', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="0" min="0" max="10" roundtrip="false"></six-item-picker>
    `);

    // Click down button at min value
    await page.locator('six-item-picker [part="down"]').click();

    // Value should stay at min without roundtrip
    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('0');
  });

  test('should respect max value when roundtrip disabled', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="10" min="0" max="10" roundtrip="false"></six-item-picker>
    `);

    // Click up button at max value
    await page.locator('six-item-picker [part="up"]').click();

    // Value should stay at max without roundtrip
    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('10');
  });

  test('should wrap around with roundtrip enabled', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="10" min="0" max="10" roundtrip></six-item-picker>
    `);

    // Click up button at max value with roundtrip
    await page.locator('six-item-picker [part="up"]').click();

    // Value should wrap to min
    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('0');
  });

  test('should work with custom step value', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="0" min="0" max="100" step="10"></six-item-picker>
    `);

    // Click up button
    await page.locator('six-item-picker [part="up"]').click();

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('10');
  });

  test('should pad values when padded is set', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="99" padded padding-length="2" padding-char="0"></six-item-picker>
    `);

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('05');
  });

  test('should work with capital-letter type', async ({ page }) => {
    await page.setContent(`
      <six-item-picker type="capital-letter" value="A" min="A" max="Z"></six-item-picker>
    `);

    // Click up button
    await page.locator('six-item-picker [part="up"]').click();

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('B');
  });

  test('should work with custom items', async ({ page }) => {
    await page.setContent(`
      <six-item-picker id="custom-picker" type="custom"></six-item-picker>
    `);

    // Set custom items programmatically
    await page.locator('#custom-picker').evaluate((el: HTMLElement & { items: string[]; value: string }) => {
      el.items = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
      el.value = 'Jan';
    });

    // Wait for component to update with custom items
    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('Jan');

    // Click up button
    await page.locator('six-item-picker [part="up"]').click();

    await expect(content).toHaveText('Feb');
  });

  test('should set value programmatically', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="0" min="0" max="10"></six-item-picker>
    `);

    await page.locator('six-item-picker').evaluate((el: HTMLElement & { value: number }) => {
      el.value = 7;
    });

    const content = page.locator('six-item-picker [part="content"]');
    await expect(content).toHaveText('7');
  });
});

test.describe('six-item-picker screenshots', () => {
  test('should match screenshot for default number picker', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-number.png');
  });

  test('should match screenshot for padded number picker', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="99" padded padding-length="2"></six-item-picker>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-padded.png');
  });

  test('should match screenshot for capital-letter picker', async ({ page }) => {
    await page.setContent(`
      <six-item-picker type="capital-letter" value="M" min="A" max="Z"></six-item-picker>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-capital-letter.png');
  });

  test('should match screenshot at min value (down disabled)', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="0" min="0" max="10"></six-item-picker>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-at-min.png');
  });

  test('should match screenshot at max value (up disabled)', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="10" min="0" max="10"></six-item-picker>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-at-max.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-item-picker value="5" min="0" max="10"></six-item-picker>');
    await page.locator('six-item-picker [part="container"]').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-item-picker value="5" min="0" max="10"></six-item-picker>');
    await page.locator('six-item-picker [part="container"]').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-item-picker value="5" min="0" max="10"></six-item-picker>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('item-picker-focus-visible.png');
  });
});

test.describe('six-item-picker accessibility', () => {
  test('should be keyboard navigable', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    // Tab to picker
    await page.keyboard.press('Tab');

    // Picker container should have focus
    const container = page.locator('six-item-picker [part="container"]');
    await expect(container).toBeFocused();
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-item-picker value="5" min="0" max="10"></six-item-picker>
    `);

    // Wait for component to render
    await expect(page.locator('six-item-picker [part="content"]')).toHaveText('5');

    const results = await new AxeBuilder({ page }).include('six-item-picker').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations with capital-letter type', async ({ page }) => {
    await page.setContent(`
      <six-item-picker type="capital-letter" value="M" min="A" max="Z"></six-item-picker>
    `);

    // Wait for component to render
    await expect(page.locator('six-item-picker [part="content"]')).toHaveText('M');

    const results = await new AxeBuilder({ page }).include('six-item-picker').analyze();
    expect(results.violations).toEqual([]);
  });
});
