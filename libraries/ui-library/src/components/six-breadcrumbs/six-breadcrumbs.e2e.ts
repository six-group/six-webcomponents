import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-breadcrumbs uses six-button with type="link" which has color contrast 3.12:1,
// doesn't meet WCAG 2 AA (4.5:1)

test.describe('six-breadcrumbs', () => {
  test('should render breadcrumb items', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    await expect(page.locator('six-breadcrumbs-item')).toHaveCount(3);
    await expect(page.locator('six-breadcrumbs-item').first()).toContainText('Home');
    await expect(page.locator('six-breadcrumbs-item').last()).toContainText('Current');
  });

  test('should add default separator between items', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // Check separator exists on first item
    const separator = page.locator('six-breadcrumbs-item').first().locator('[slot="separator"]');
    await expect(separator).toBeVisible();
    await expect(separator).toContainText('/');
  });

  test('should use custom separator icon', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs separator-icon="arrow_forward">
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // Check that six-icon is used as separator (check inside the item's separator slot)
    const firstItem = page.locator('six-breadcrumbs-item').first();
    const separator = firstItem.locator('six-icon[slot="separator"]');
    await expect(separator).toContainText('arrow_forward');
  });

  test('should use custom separator from slot', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-icon slot="separator" size="small">chevron_right</six-icon>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // Check that custom icon is cloned as separator
    const firstItem = page.locator('six-breadcrumbs-item').first();
    const separator = firstItem.locator('six-icon[slot="separator"]');
    await expect(separator).toContainText('chevron_right');
  });

  test('should render item as link when href is set', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item href="/home">Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // Find the link inside the first breadcrumb item
    const item = page.locator('six-breadcrumbs-item[href="/home"]');
    const link = item.getByRole('link');
    await expect(link).toHaveAttribute('href', '/home');
  });

  test('should not be clickable when readonly', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item href="/home" read-only>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    const button = page.locator('six-breadcrumbs-item[read-only] six-button');
    // When readonly, href should not be passed to button
    await expect(button).not.toHaveAttribute('href');
    // Should have negative tabindex
    await expect(button).toHaveAttribute('tabindex', '-1');
  });

  test('should render prefix and suffix slots', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>
          <six-icon slot="prefix" size="small">house</six-icon>
          Home
          <six-icon slot="suffix" size="small">star</six-icon>
        </six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    const item = page.locator('six-breadcrumbs-item').first();
    await expect(item.locator('six-icon[slot="prefix"]')).toContainText('house');
    await expect(item.locator('six-icon[slot="suffix"]')).toContainText('star');
  });

  test('should set aria-current on last item', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // First items should not have aria-current
    await expect(page.locator('six-breadcrumbs-item').first()).not.toHaveAttribute('aria-current');
    await expect(page.locator('six-breadcrumbs-item').nth(1)).not.toHaveAttribute('aria-current');

    // Last item should have aria-current="page"
    await expect(page.locator('six-breadcrumbs-item').last()).toHaveAttribute('aria-current', 'page');
  });
});

test.describe('six-breadcrumbs screenshots', () => {
  test('should match screenshot for default', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('breadcrumbs-default.png');
  });

  test('should match screenshot with custom separator icon', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs separator-icon="arrow_forward">
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('breadcrumbs-custom-separator.png');
  });

  test('should match screenshot with prefix icons', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs separator-icon="arrow_forward">
        <six-breadcrumbs-item>
          <six-icon slot="prefix" size="small">house</six-icon>
          Home
        </six-breadcrumbs-item>
        <six-breadcrumbs-item>Page</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('breadcrumbs-with-prefix.png');
  });

  const sizes = ['small', 'medium', 'large'] as const;
  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`
        <six-breadcrumbs>
          <six-breadcrumbs-item size="${size}">Home</six-breadcrumbs-item>
          <six-breadcrumbs-item size="${size}">Page</six-breadcrumbs-item>
          <six-breadcrumbs-item size="${size}">Current</six-breadcrumbs-item>
        </six-breadcrumbs>
      `);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`breadcrumbs-${size}.png`);
    });
  });
});

test.describe('six-breadcrumbs accessibility', () => {
  test('should have nav element', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // Breadcrumbs should be wrapped in nav element
    const nav = page.locator('six-breadcrumbs nav');
    await expect(nav).toHaveAttribute('part', 'base');
  });

  test('should have aria-hidden on separators', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item>Home</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    // Separator should be hidden from screen readers
    const separator = page.locator('six-breadcrumbs-item').first().locator('[part="separator"]');
    await expect(separator).toHaveAttribute('aria-hidden', 'true');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-breadcrumbs>
        <six-breadcrumbs-item href="/home">Home</six-breadcrumbs-item>
        <six-breadcrumbs-item href="/page">Page</six-breadcrumbs-item>
        <six-breadcrumbs-item>Current</six-breadcrumbs-item>
      </six-breadcrumbs>
    `);

    const results = await new AxeBuilder({ page })
      .include('six-breadcrumbs')
      // Disabled due to known issue documented in TODO above
      .disableRules(['color-contrast'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
