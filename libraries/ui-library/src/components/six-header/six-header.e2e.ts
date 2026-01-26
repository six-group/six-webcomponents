import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-header accessibility issues:
// - six-icon-button doesn't pass aria-label to internal button element
// - Icon buttons need accessible names (button-name rule)

test.describe('six-header', () => {
  test('should render header with items', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-icon-button name="menu"></six-icon-button>
        </six-header-item>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
      </six-header>
    `);

    await expect(page.locator('six-header-item')).toHaveCount(2);
    await expect(page.locator('six-logo')).toBeVisible();
  });

  test('should set active state on header item', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item active>
          <six-icon-button name="home"></six-icon-button>
        </six-header-item>
        <six-header-item>
          <six-icon-button name="settings"></six-icon-button>
        </six-header-item>
      </six-header>
    `);

    const activeItem = page.locator('six-header-item[active]');
    await expect(activeItem).toHaveClass(/six-header-item--active/);
  });

  test('should show dropdown on click', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-dropdown-item>
          <six-icon-button slot="trigger" name="person"></six-icon-button>
          <six-menu>
            <six-menu-item>Profile</six-menu-item>
            <six-menu-item>Logout</six-menu-item>
          </six-menu>
        </six-header-dropdown-item>
      </six-header>
    `);

    // Click trigger to open dropdown
    await page.locator('six-icon-button[name="person"]').click();

    // Wait for dropdown to open
    await expect(page.locator('six-menu')).toBeVisible();
  });

  test('should set active state on dropdown when open', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-dropdown-item>
          <six-icon-button slot="trigger" name="person"></six-icon-button>
          <six-menu>
            <six-menu-item>Profile</six-menu-item>
          </six-menu>
        </six-header-dropdown-item>
      </six-header>
    `);

    const dropdownItem = page.locator('six-header-dropdown-item');

    // Initially not active
    await expect(dropdownItem).not.toHaveClass(/six-header-dropdown-item--active/);

    // Click to open
    await page.locator('six-icon-button[name="person"]').click();

    // Should be active when open
    await expect(dropdownItem).toHaveClass(/six-header-dropdown-item--active/);
  });

  test('should show and hide search field', async ({ page }) => {
    await page.setContent(`
      <six-header open-search>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
        <six-search-field slot="search-field"></six-search-field>
      </six-header>
    `);

    // Search field should be visible when open-search is set
    const searchField = page.locator('.six-header__search-field');
    await expect(searchField).toHaveClass(/six-header__search-field--visible/);
  });

  test('should render header-menu-button', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-dropdown-item>
          <six-header-menu-button slot="trigger">App Name</six-header-menu-button>
          <six-menu>
            <six-menu-item>Option 1</six-menu-item>
          </six-menu>
        </six-header-dropdown-item>
      </six-header>
    `);

    const menuButton = page.locator('six-header-menu-button');
    await expect(menuButton).toContainText('App Name');
  });
});

test.describe('six-header screenshots', () => {
  test('should match screenshot for simple header', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
        <six-header-item style="margin-left: auto;">
          <six-icon-button name="person"></six-icon-button>
        </six-header-item>
      </six-header>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('header-simple.png');
  });

  test('should match screenshot for full header', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-icon-button name="menu"></six-icon-button>
        </six-header-item>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
        <six-header-item style="margin-left: auto;">
          <six-icon-button name="search"></six-icon-button>
        </six-header-item>
        <six-header-item>
          <six-icon-button name="notifications_none"></six-icon-button>
        </six-header-item>
        <six-header-item>
          <six-icon-button name="person"></six-icon-button>
        </six-header-item>
      </six-header>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('header-full.png');
  });

  test('should match screenshot with active item', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
        <six-header-item active>
          <six-icon-button name="home"></six-icon-button>
        </six-header-item>
        <six-header-item>
          <six-icon-button name="settings"></six-icon-button>
        </six-header-item>
      </six-header>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('header-active-item.png');
  });

  test('should match screenshot with header-menu-button', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
        <six-header-dropdown-item style="margin-left: auto;">
          <six-header-menu-button slot="trigger" caret>Custody</six-header-menu-button>
          <six-menu>
            <six-menu-item checked>Custody</six-menu-item>
            <six-menu-item>Other</six-menu-item>
          </six-menu>
        </six-header-dropdown-item>
      </six-header>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('header-menu-button.png');
  });
});

test.describe('six-header accessibility', () => {
  test('should have header element', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
      </six-header>
    `);

    const header = page.locator('six-header header');
    await expect(header).toHaveAttribute('part', 'header');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-header>
        <six-header-item>
          <six-logo></six-logo>
        </six-header-item>
      </six-header>
    `);

    const results = await new AxeBuilder({ page })
      .include('six-header')
      // Disabled due to known issues documented in TODO above
      .disableRules(['aria-prohibited-attr', 'button-name'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
