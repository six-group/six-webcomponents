import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-radio', () => {
  test('should check radio when clicked', async ({ page }) => {
    await page.setContent('<six-radio>Option</six-radio>');

    await expect(page.getByRole('radio')).not.toBeChecked();
    await page.locator('six-radio').click();
    await expect(page.getByRole('radio')).toBeChecked();
  });

  test('should skip disabled radio in tab navigation', async ({ page }) => {
    await page.setContent(
      `
        <six-radio name="radio-1">Before</six-radio>
        <six-radio name="radio-2" disabled>Disabled</six-radio>
        <six-radio name="radio-3">After</six-radio>
      `
    );

    await expect(page.getByRole('radio', { name: 'Disabled' })).toBeDisabled();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('radio', { name: 'Before' })).toBeFocused();

    // Tab should skip disabled and go to After
    await page.keyboard.press('Tab');
    await expect(page.getByRole('radio', { name: 'After' })).toBeFocused();
  });

  test('should emit events (focus, change, blur)', async ({ page }) => {
    await page.setContent(
      `
        <six-radio>Radio</six-radio>
        <six-button>Other</six-button>
      `
    );
    const focusSpy = await page.spyOnEvent('six-radio-focus');
    const changeSpy = await page.spyOnEvent('six-radio-change');
    const blurSpy = await page.spyOnEvent('six-radio-blur');
    const standardFocus = await page.spyOnEvent('focus');
    const standardChange = await page.spyOnEvent('change');
    const standardBlur = await page.spyOnEvent('blur');

    // Click focuses and changes
    await page.locator('six-radio').click();
    expect(focusSpy).toHaveReceivedEvent();
    expect(standardFocus).toHaveReceivedEvent();
    expect(changeSpy).toHaveReceivedEvent();
    expect(standardChange).toHaveReceivedEvent();

    // Click elsewhere blurs
    await page.locator('six-button').click();
    expect(blurSpy).toHaveReceivedEvent();
    expect(standardBlur).toHaveReceivedEvent();
  });

  test('should not change state when disabled', async ({ page }) => {
    await page.setContent('<six-radio disabled>Disabled</six-radio>');

    await expect(page.getByRole('radio')).toBeDisabled();
    await expect(page.getByRole('radio')).not.toBeChecked();

    await page.locator('six-radio').click({ force: true });
    await expect(page.getByRole('radio')).not.toBeChecked();
  });

  test('should only allow one radio checked in a group', async ({ page }) => {
    await page.setContent(
      `
        <six-radio name="group" checked>Option 1</six-radio>
        <six-radio name="group">Option 2</six-radio>
        <six-radio name="group">Option 3</six-radio>
      `
    );

    await expect(page.getByRole('radio', { name: 'Option 1' })).toBeChecked();
    await expect(page.getByRole('radio', { name: 'Option 2' })).not.toBeChecked();

    await page.locator('six-radio').nth(1).click();

    await expect(page.getByRole('radio', { name: 'Option 1' })).not.toBeChecked();
    await expect(page.getByRole('radio', { name: 'Option 2' })).toBeChecked();
  });

  test('should navigate with arrow keys, wrap around, and skip disabled', async ({ page }) => {
    await page.setContent(
      `
        <six-radio name="group" checked>Option 1</six-radio>
        <six-radio name="group" disabled>Option 2</six-radio>
        <six-radio name="group">Option 3</six-radio>
        <six-radio name="group">Option 4</six-radio>
      `
    );

    await page.locator('six-radio').first().click();
    await expect(page.getByRole('radio', { name: 'Option 1' })).toBeFocused();

    // ArrowDown skips disabled Option 2, moves to Option 3
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('radio', { name: 'Option 3' })).toBeFocused();
    await expect(page.getByRole('radio', { name: 'Option 3' })).toBeChecked();

    // ArrowRight moves forward to Option 4
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('radio', { name: 'Option 4' })).toBeFocused();
    await expect(page.getByRole('radio', { name: 'Option 4' })).toBeChecked();

    // ArrowDown wraps to Option 1
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('radio', { name: 'Option 1' })).toBeFocused();
    await expect(page.getByRole('radio', { name: 'Option 1' })).toBeChecked();

    // ArrowUp wraps to Option 4
    await page.keyboard.press('ArrowUp');
    await expect(page.getByRole('radio', { name: 'Option 4' })).toBeFocused();
    await expect(page.getByRole('radio', { name: 'Option 4' })).toBeChecked();

    // ArrowLeft moves backward to Option 3
    await page.keyboard.press('ArrowLeft');
    await expect(page.getByRole('radio', { name: 'Option 3' })).toBeFocused();
    await expect(page.getByRole('radio', { name: 'Option 3' })).toBeChecked();

    // ArrowUp skips disabled Option 2, moves to Option 1
    await page.keyboard.press('ArrowUp');
    await expect(page.getByRole('radio', { name: 'Option 1' })).toBeFocused();
    await expect(page.getByRole('radio', { name: 'Option 1' })).toBeChecked();
  });
});

test.describe('six-radio screenshots', () => {
  const states = [
    { name: 'unchecked', props: '' },
    { name: 'checked', props: 'checked' },
    { name: 'disabled', props: 'disabled' },
    { name: 'disabled-checked', props: 'disabled checked' },
  ];

  states.forEach(({ name, props }) => {
    test(`should match screenshot for ${name} radio`, async ({ page }) => {
      await page.setContent(`<six-radio ${props}>Radio label</six-radio>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`radio-${name}.png`);
    });
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-radio>Radio label</six-radio>');
    await page.locator('six-radio').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('radio-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-radio>Radio label</six-radio>');
    await page.locator('six-radio').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('radio-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-radio>Radio label</six-radio>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('radio-focus-visible.png');
  });
});

test.describe('six-radio accessibility', () => {
  test('should have correct ARIA attributes when unchecked', async ({ page }) => {
    await page.setContent('<six-radio>Radio</six-radio>');

    const radio = page.getByRole('radio');
    await expect(radio).toHaveRole('radio');
    await expect(radio).toHaveAttribute('aria-checked', 'false');
  });

  test('should have correct ARIA attributes when checked', async ({ page }) => {
    await page.setContent('<six-radio checked>Radio</six-radio>');

    const radio = page.getByRole('radio');
    await expect(radio).toHaveAttribute('aria-checked', 'true');
  });

  test('should have no accessibility violations for default radio', async ({ page }) => {
    await page.setContent('<six-radio>Default</six-radio>');

    expect((await new AxeBuilder({ page }).include('six-radio').analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for checked radio', async ({ page }) => {
    await page.setContent('<six-radio checked>Checked</six-radio>');

    expect((await new AxeBuilder({ page }).include('six-radio').analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled radio', async ({ page }) => {
    await page.setContent('<six-radio disabled>Disabled</six-radio>');

    expect((await new AxeBuilder({ page }).include('six-radio').analyze()).violations).toEqual([]);
  });
});
