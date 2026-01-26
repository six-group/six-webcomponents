import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-checkbox', () => {
  test('should toggle checked state when clicked', async ({ page }) => {
    await page.setContent('<six-checkbox>Accept terms</six-checkbox>');

    await expect(page.getByRole('checkbox')).not.toBeChecked();
    await page.locator('six-checkbox').click();
    await expect(page.getByRole('checkbox')).toBeChecked();
    await page.locator('six-checkbox').click();
    await expect(page.getByRole('checkbox')).not.toBeChecked();
  });

  test('should skip disabled checkbox in tab navigation', async ({ page }) => {
    await page.setContent(
      `
        <six-checkbox>Before</six-checkbox>
        <six-checkbox disabled>Disabled</six-checkbox>
        <six-checkbox>After</six-checkbox>
      `
    );

    await expect(page.getByRole('checkbox', { name: 'Disabled' })).toBeDisabled();

    // Tab into the first checkbox, then tab again to verify disabled is skipped
    await page.keyboard.press('Tab');
    await expect(page.getByRole('checkbox', { name: 'Before' })).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.getByRole('checkbox', { name: 'After' })).toBeFocused();
  });

  test('should emit events (focus, change, blur)', async ({ page }) => {
    await page.setContent(
      `
        <six-checkbox>Checkbox</six-checkbox>
        <six-button>Other</six-button>
      `
    );
    const focusSpy = await page.spyOnEvent('six-checkbox-focus');
    const changeSpy = await page.spyOnEvent('six-checkbox-change');
    const blurSpy = await page.spyOnEvent('six-checkbox-blur');
    const standardFocus = await page.spyOnEvent('focus');
    const standardChange = await page.spyOnEvent('change');
    const standardBlur = await page.spyOnEvent('blur');

    // Click focuses and changes
    await page.locator('six-checkbox').click();
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
    await page.setContent('<six-checkbox disabled>Disabled</six-checkbox>');

    await expect(page.getByRole('checkbox')).toBeDisabled();
    await expect(page.getByRole('checkbox')).not.toBeChecked();

    // Attempt to toggle via force click (bypasses actionability checks)
    await page.locator('six-checkbox').click({ force: true });
    await expect(page.getByRole('checkbox')).not.toBeChecked();
  });

  test('should toggle with keyboard space', async ({ page }) => {
    await page.setContent('<six-checkbox>Option</six-checkbox>');

    await page.locator('six-checkbox').click();
    await expect(page.getByRole('checkbox')).toBeChecked();

    await page.keyboard.press('Space');
    await expect(page.getByRole('checkbox')).not.toBeChecked();

    await page.keyboard.press('Space');
    await expect(page.getByRole('checkbox')).toBeChecked();
  });

  test('should clear indeterminate state when clicked', async ({ page }) => {
    await page.setContent('<six-checkbox indeterminate>Indeterminate</six-checkbox>');

    await expect(page.locator('six-checkbox')).toHaveAttribute('indeterminate', '');

    await page.locator('six-checkbox').click();

    await expect(page.locator('six-checkbox')).not.toHaveAttribute('indeterminate');
    await expect(page.getByRole('checkbox')).toBeChecked();
  });
});

test.describe('six-checkbox screenshots', () => {
  const states = [
    { name: 'unchecked', props: '' },
    { name: 'checked', props: 'checked' },
    { name: 'indeterminate', props: 'indeterminate' },
    { name: 'disabled', props: 'disabled' },
    { name: 'disabled-checked', props: 'disabled checked' },
  ];

  states.forEach(({ name, props }) => {
    test(`should match screenshot for ${name} checkbox`, async ({ page }) => {
      await page.setContent(`<six-checkbox ${props}>Checkbox label</six-checkbox>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`checkbox-${name}.png`);
    });
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-checkbox>Checkbox label</six-checkbox>');
    await page.locator('six-checkbox').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('checkbox-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent('<six-checkbox>Checkbox label</six-checkbox>');
    await page.locator('six-checkbox').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('checkbox-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent('<six-checkbox>Checkbox label</six-checkbox>');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('checkbox-focus-visible.png');
  });
});

test.describe('six-checkbox accessibility', () => {
  test('should have correct ARIA attributes when unchecked', async ({ page }) => {
    await page.setContent('<six-checkbox>Checkbox</six-checkbox>');

    const checkbox = page.getByRole('checkbox');
    await expect(checkbox).toHaveRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });

  test('should have correct ARIA attributes when checked', async ({ page }) => {
    await page.setContent('<six-checkbox checked>Checkbox</six-checkbox>');

    const checkbox = page.getByRole('checkbox');
    await expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  test('should have no accessibility violations for default checkbox', async ({ page }) => {
    await page.setContent('<six-checkbox>Default</six-checkbox>');

    expect((await new AxeBuilder({ page }).include('six-checkbox').analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for checked checkbox', async ({ page }) => {
    await page.setContent('<six-checkbox checked>Checked</six-checkbox>');

    expect((await new AxeBuilder({ page }).include('six-checkbox').analyze()).violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled checkbox', async ({ page }) => {
    await page.setContent('<six-checkbox disabled>Disabled</six-checkbox>');

    expect((await new AxeBuilder({ page }).include('six-checkbox').analyze()).violations).toEqual([]);
  });
});
