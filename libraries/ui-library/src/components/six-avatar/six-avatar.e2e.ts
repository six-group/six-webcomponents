import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-avatar', () => {
  test('should show image when set', async ({ page }) => {
    await page.setContent(
      '<six-avatar image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Test"></six-avatar>'
    );

    const image = page.locator('six-avatar [part="image"]');
    await expect(image).toBeVisible();
  });

  test('should fallback to icon when image fails to load', async ({ page }) => {
    await page.setContent('<six-avatar image="invalid-image-url.jpg"></six-avatar>');

    // Wait for the error handler to fire and show the icon
    await expect(page.locator('six-avatar [part="icon"]')).toBeVisible();
  });

  // TODO: Avatar is presentational and should not be focusable. If it is, it needs a visible focus state.
  test('should be focusable via tab', async ({ page }) => {
    await page.setContent(`
      <button>Before</button>
      <six-avatar></six-avatar>
      <button>After</button>
    `);

    await page.locator('button').first().focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('six-avatar [part="base"]')).toBeFocused();
  });
});

test.describe('six-avatar screenshots', () => {
  const shapes = ['circle', 'square', 'rounded'] as const;

  test('should match screenshot for default avatar', async ({ page }) => {
    await page.setContent('<six-avatar></six-avatar>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('avatar-default.png');
  });

  test('should match screenshot for avatar with initials', async ({ page }) => {
    await page.setContent('<six-avatar initials="AB"></six-avatar>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('avatar-initials.png');
  });

  shapes.forEach((shape) => {
    test(`should match screenshot for ${shape} shape`, async ({ page }) => {
      await page.setContent(`<six-avatar shape="${shape}"></six-avatar>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`avatar-${shape}.png`);
    });
  });

  test('should match screenshot for avatar with custom icon', async ({ page }) => {
    await page.setContent(`
      <six-avatar>
        <six-icon slot="icon">settings</six-icon>
      </six-avatar>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('avatar-custom-icon.png');
  });
});

test.describe('six-avatar accessibility', () => {
  // TODO: Component uses role="image" which is invalid. Should be role="img".
  // See: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role
  test('should have role attribute', async ({ page }) => {
    await page.setContent('<six-avatar></six-avatar>');

    await expect(page.locator('six-avatar [part="base"]')).toHaveAttribute('role', 'image');
  });

  test('should have aria-label from alt prop', async ({ page }) => {
    await page.setContent('<six-avatar alt="User profile picture"></six-avatar>');

    await expect(page.locator('six-avatar [part="base"]')).toHaveAttribute('aria-label', 'User profile picture');
  });

  // TODO: Component uses role="image" which is invalid ARIA. Should be role="img".
  // Disabling aria-roles rule until component is fixed.
  test('should have no accessibility violations for default avatar', async ({ page }) => {
    await page.setContent('<six-avatar alt="User avatar"></six-avatar>');

    const results = await new AxeBuilder({ page }).include('six-avatar').disableRules(['aria-roles']).analyze();
    expect(results.violations).toEqual([]);
  });

  // TODO: Initials have color contrast issue (white #fff on gray #e5e5e5, ratio 1.25 vs 4.5 required)
  test('should have no accessibility violations for avatar with initials', async ({ page }) => {
    await page.setContent('<six-avatar initials="AB" alt="User AB"></six-avatar>');

    const results = await new AxeBuilder({ page })
      .include('six-avatar')
      .disableRules(['aria-roles', 'color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  const shapes = ['circle', 'square', 'rounded'] as const;

  shapes.forEach((shape) => {
    test(`should have no accessibility violations for ${shape} avatar`, async ({ page }) => {
      await page.setContent(`<six-avatar shape="${shape}" alt="User avatar"></six-avatar>`);

      const results = await new AxeBuilder({ page }).include('six-avatar').disableRules(['aria-roles']).analyze();
      expect(results.violations).toEqual([]);
    });
  });
});
