import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-icon-button', () => {
  test('should not emit click when disabled', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings" disabled></six-icon-button>');

    const clickSpy = await page.spyOnEvent('click');
    await page.locator('six-icon-button').click({ force: true });

    expect(clickSpy).not.toHaveReceivedEvent();
  });

  test('should emit click when enabled', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings"></six-icon-button>');

    const clickSpy = await page.spyOnEvent('click');
    await page.locator('six-icon-button').click();

    expect(clickSpy).toHaveReceivedEvent();
  });

  test('should render as link when href is set', async ({ page }) => {
    await page.setContent('<six-icon-button name="home" label="Home" href="https://example.com"></six-icon-button>');

    const link = page.locator('six-icon-button a');
    await expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('should skip disabled in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-icon-button name="settings" label="Settings" disabled></six-icon-button>
      <button id="after">After</button>
    `);

    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('#after')).toBeFocused();
  });
});

test.describe('six-icon-button screenshots', () => {
  const sizes = ['xSmall', 'small', 'medium', 'large', 'xLarge'] as const;

  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-icon-button name="settings" label="Settings" size="${size}"></six-icon-button>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`icon-button-${size}.png`);
    });
  });

  test('should match screenshot for disabled', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings" disabled></six-icon-button>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('icon-button-disabled.png');
  });

  test('should match screenshot for focused', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings"></six-icon-button>');
    await page.locator('six-icon-button button').focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('icon-button-focused.png');
  });
});

test.describe('six-icon-button accessibility', () => {
  test('should have aria-label attribute', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings"></six-icon-button>');

    const button = page.locator('six-icon-button button');
    await expect(button).toHaveAttribute('aria-label', 'Settings');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings"></six-icon-button>');

    const results = await new AxeBuilder({ page }).include('six-icon-button').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled', async ({ page }) => {
    await page.setContent('<six-icon-button name="settings" label="Settings" disabled></six-icon-button>');

    const results = await new AxeBuilder({ page }).include('six-icon-button').analyze();
    expect(results.violations).toEqual([]);
  });
});
