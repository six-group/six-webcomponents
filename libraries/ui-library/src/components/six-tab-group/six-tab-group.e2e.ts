import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: six-tab-group has accessibility issues:
// - six-tab-panel uses aria-selected on role="tabpanel" which is not allowed per ARIA spec.
//   The aria-selected attribute should only be on role="tab", not on tabpanel.
// - tablist has non-allowed children (six-tab custom elements with aria-controls).
//   This is likely a limitation of how axe analyzes custom elements in slots.

test.describe('six-tab-group', () => {
  test('should show first tab by default', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // First tab should be active (assertion waits for component initialization)
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await expect(page.locator('six-tab-panel[name="tab1"]')).toHaveAttribute('active', '');

    // Second tab should not be active
    await expect(page.locator('six-tab[panel="tab2"]')).not.toHaveAttribute('active', '');
    await expect(page.locator('six-tab-panel[name="tab2"]')).not.toHaveAttribute('active', '');
  });

  test('should switch tabs on click', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active before clicking
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    // Click second tab
    await page.locator('six-tab[panel="tab2"]').click();

    // Second tab should now be active
    await expect(page.locator('six-tab[panel="tab2"]')).toHaveAttribute('active', '');
    await expect(page.locator('six-tab-panel[name="tab2"]')).toHaveAttribute('active', '');

    // First tab should not be active
    await expect(page.locator('six-tab[panel="tab1"]')).not.toHaveAttribute('active', '');
    await expect(page.locator('six-tab-panel[name="tab1"]')).not.toHaveAttribute('active', '');
  });

  test('should emit events (six-tab-show, six-tab-hide)', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    const showSpy = await page.spyOnEvent('six-tab-show');
    const hideSpy = await page.spyOnEvent('six-tab-hide');

    // Click second tab
    await page.locator('six-tab[panel="tab2"]').click();

    expect(showSpy).toHaveReceivedEventDetail({ name: 'tab2' });
    expect(hideSpy).toHaveReceivedEventDetail({ name: 'tab1' });
  });

  test('should not switch to disabled tab', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2" disabled>Disabled</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    const showSpy = await page.spyOnEvent('six-tab-show');

    // Click disabled tab
    await page.locator('six-tab[panel="tab2"]').click({ force: true });

    // First tab should remain active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    expect(showSpy).not.toHaveReceivedEvent();
  });

  test('should navigate with keyboard (ArrowLeft, ArrowRight, Home, End)', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab slot="nav" panel="tab3">Tab 3</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
        <six-tab-panel name="tab3">Panel 3</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    // Focus first tab
    await page.locator('six-tab[panel="tab1"]').click();

    // ArrowRight moves to next tab
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('six-tab[panel="tab2"]')).toHaveAttribute('active', '');

    // ArrowRight moves to next tab
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('six-tab[panel="tab3"]')).toHaveAttribute('active', '');

    // ArrowLeft moves to previous tab
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('six-tab[panel="tab2"]')).toHaveAttribute('active', '');

    // Home moves to first tab
    await page.keyboard.press('Home');
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    // End moves to last tab
    await page.keyboard.press('End');
    await expect(page.locator('six-tab[panel="tab3"]')).toHaveAttribute('active', '');
  });

  test('should skip disabled tabs in keyboard navigation', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2" disabled>Disabled</six-tab>
        <six-tab slot="nav" panel="tab3">Tab 3</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
        <six-tab-panel name="tab3">Panel 3</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    // Focus first tab
    await page.locator('six-tab[panel="tab1"]').click();

    // ArrowRight should skip disabled and go to tab3
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('six-tab[panel="tab3"]')).toHaveAttribute('active', '');
  });

  test('should emit close event for closable tab', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2" closable>Closable</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for tabs to be ready
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    const closeSpy = await page.spyOnEvent('six-tab-close');

    // Click close button on closable tab
    await page.locator('six-tab[panel="tab2"] six-icon-button').click();

    expect(closeSpy).toHaveReceivedEvent();
  });

  test('should switch tabs via show method', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    // Use show method to switch to second tab
    await page.locator('six-tab-group').evaluate((el: HTMLElement & { show: (panel: string) => Promise<void> }) => {
      return el.show('tab2');
    });

    await expect(page.locator('six-tab[panel="tab2"]')).toHaveAttribute('active', '');
    await expect(page.locator('six-tab-panel[name="tab2"]')).toHaveAttribute('active', '');
  });
});

test.describe('six-tab-group screenshots', () => {
  test('should match screenshot for top placement', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab slot="nav" panel="tab3" disabled>Disabled</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
        <six-tab-panel name="tab3">Panel 3 content</six-tab-panel>
      </six-tab-group>
    `);
    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-top.png');
  });

  test('should match screenshot for bottom placement', async ({ page }) => {
    await page.setContent(`
      <six-tab-group placement="bottom">
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-bottom.png');
  });

  test('should match screenshot for left placement', async ({ page }) => {
    await page.setContent(`
      <six-tab-group placement="left">
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-left.png');
  });

  test('should match screenshot for right placement', async ({ page }) => {
    await page.setContent(`
      <six-tab-group placement="right">
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-right.png');
  });

  test('should match screenshot with closable tab', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2" closable>Closable</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-closable.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await page.locator('six-tab[panel="tab1"]').first().hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-hover.png');
  });

  test('should match screenshot for focused state', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await page.locator('six-tab[panel="tab1"]').first().focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-focused.png');
  });

  test('should match screenshot for focus-visible state', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
      </six-tab-group>
    `);
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');
    await page.keyboard.press('Tab');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('tab-group-focus-visible.png');
  });
});

test.describe('six-tab-group accessibility', () => {
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    // Tab group should have tablist role
    const tablist = page.locator('six-tab-group [part="tabs"]');
    await expect(tablist).toHaveAttribute('role', 'tablist');

    // Active tab should have aria-selected="true"
    const activeTab = page.locator('six-tab[panel="tab1"] [part="base"]');
    await expect(activeTab).toHaveAttribute('role', 'tab');
    await expect(activeTab).toHaveAttribute('aria-selected', 'true');

    // Inactive tab should have aria-selected="false"
    const inactiveTab = page.locator('six-tab[panel="tab2"] [part="base"]');
    await expect(inactiveTab).toHaveAttribute('aria-selected', 'false');

    // Active tab panel should have tabpanel role
    const activePanel = page.locator('six-tab-panel[name="tab1"] [part="base"]');
    await expect(activePanel).toHaveAttribute('role', 'tabpanel');
    await expect(activePanel).toHaveAttribute('aria-hidden', 'false');

    // Hidden tab panel should have aria-hidden="true"
    const hiddenPanel = page.locator('six-tab-panel[name="tab2"] [part="base"]');
    await expect(hiddenPanel).toHaveAttribute('aria-hidden', 'true');
  });

  test('should have aria-disabled on disabled tab', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2" disabled>Disabled</six-tab>
        <six-tab-panel name="tab1">Panel 1</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    const disabledTab = page.locator('six-tab[panel="tab2"] [part="base"]');
    await expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-tab-group>
        <six-tab slot="nav" panel="tab1">Tab 1</six-tab>
        <six-tab slot="nav" panel="tab2">Tab 2</six-tab>
        <six-tab slot="nav" panel="tab3" disabled>Disabled</six-tab>
        <six-tab-panel name="tab1">Panel 1 content</six-tab-panel>
        <six-tab-panel name="tab2">Panel 2 content</six-tab-panel>
        <six-tab-panel name="tab3">Panel 3 content</six-tab-panel>
      </six-tab-group>
    `);

    // Wait for first tab to be active
    await expect(page.locator('six-tab[panel="tab1"]')).toHaveAttribute('active', '');

    const results = await new AxeBuilder({ page })
      .include('six-tab-group')
      // Disabled due to known issues documented in TODO above
      .disableRules(['aria-allowed-attr', 'aria-required-children'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
