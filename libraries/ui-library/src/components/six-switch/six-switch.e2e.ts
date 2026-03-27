import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-switch', () => {
  test('should emit events (focus, change, blur)', async ({ page }) => {
    await page.setContent(`
      <six-switch>Toggle me</six-switch>
      <button>Other</button>
    `);

    const focusSpy = await page.spyOnEvent('six-switch-focus');
    const changeSpy = await page.spyOnEvent('six-switch-change');
    const blurSpy = await page.spyOnEvent('six-switch-blur');

    // Click switch to toggle and focus
    await page.locator('six-switch').click();
    expect(focusSpy).toHaveReceivedEvent();
    expect(changeSpy).toHaveReceivedEventDetail(true);

    // Click elsewhere blurs
    await page.locator('button').click();
    expect(blurSpy).toHaveReceivedEvent();
  });

  test('should toggle via keyboard', async ({ page }) => {
    await page.setContent('<six-switch>Toggle</six-switch>');

    const switchEl = page.getByRole('switch');
    await switchEl.focus();

    await page.keyboard.press('Space');
    await expect(switchEl).toBeChecked();

    await page.keyboard.press('Space');
    await expect(switchEl).not.toBeChecked();
  });

  test('should toggle via ArrowLeft/ArrowRight', async ({ page }) => {
    await page.setContent('<six-switch>Toggle</six-switch>');

    const switchEl = page.getByRole('switch');
    await switchEl.focus();

    await page.keyboard.press('ArrowRight');
    await expect(switchEl).toBeChecked();

    await page.keyboard.press('ArrowLeft');
    await expect(switchEl).not.toBeChecked();
  });

  test('should not toggle when disabled', async ({ page }) => {
    await page.setContent('<six-switch disabled>Disabled</six-switch>');

    const switchEl = page.getByRole('switch');
    await expect(switchEl).toBeDisabled();

    await page.locator('six-switch').click({ force: true });
    await expect(switchEl).not.toBeChecked();
  });

  test('should skip disabled in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-switch disabled>Disabled</six-switch>
      <button id="after">After</button>
    `);

    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('#after')).toBeFocused();
  });
});

test.describe('six-switch screenshots', () => {
  const states = [
    { name: 'unchecked', props: '' },
    { name: 'checked', props: 'checked' },
    { name: 'disabled', props: 'disabled' },
    { name: 'disabled-checked', props: 'disabled checked' },
  ];

  states.forEach(({ name, props }) => {
    test(`should match screenshot for ${name}`, async ({ page }) => {
      await page.setContent(`<six-switch ${props}>Label</six-switch>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`switch-${name}.png`);
    });
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-switch>Label</six-switch>');
    await page.locator('six-switch').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('switch-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-switch>Label</six-switch>');
    await page.locator('six-switch').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('switch-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-switch>Label</six-switch>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('switch-focus-visible.png');
  });
});

test.describe('six-switch accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent('<six-switch checked>Toggle</six-switch>');

    const switchEl = page.getByRole('switch');
    await expect(switchEl).toHaveRole('switch');
    await expect(switchEl).toHaveAttribute('aria-checked', 'true');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-switch>Toggle</six-switch>');

    const results = await new AxeBuilder({ page }).include('six-switch').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled', async ({ page }) => {
    await page.setContent('<six-switch disabled>Disabled</six-switch>');

    const results = await new AxeBuilder({ page }).include('six-switch').analyze();
    expect(results.violations).toEqual([]);
  });
});
