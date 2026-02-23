import { test } from '../../test-utils/fixtures';
import { expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('six-dropdown', () => {
  test('should open and close via trigger click', async ({ page }) => {
    await page.setContent(
      `
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
          <six-menu-item value="option2">Option 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `
    );

    // Initially closed
    await expectDropdownToBeHidden(page);

    // Click to open
    await page.getByRole('button').click();
    await expectDropdownToBeVisible(page);

    // Click to close
    await page.getByRole('button').click();
    await expectDropdownToBeHidden(page);
  });

  test('should open and close via open prop', async ({ page }) => {
    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const dropdown = page.locator('six-dropdown');

    // Set open via attribute
    await dropdown.evaluate((el: HTMLElement) => el.setAttribute('open', ''));
    await expectDropdownToBeVisible(page);

    // Close via attribute removal
    await dropdown.evaluate((el: HTMLElement) => el.removeAttribute('open'));
    await expectDropdownToBeHidden(page);
  });

  test('should open and close via methods', async ({ page }) => {
    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const dropdown = page.locator('six-dropdown');

    // show
    await dropdown.evaluate((el: HTMLElement & { show: () => Promise<void> }) => el.show());
    await expectDropdownToBeVisible(page);

    // hide
    await dropdown.evaluate((el: HTMLElement & { hide: () => Promise<void> }) => el.hide());
    await expectDropdownToBeHidden(page);
  });

  test('should emit show/hide events', async ({ page }) => {
    await page.setContent(
      `
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
        </six-menu>
      </six-dropdown>
    `,
      // after events are not fired when animations are disabled
      { disableAnimations: false }
    );

    const showSpy = await page.spyOnEvent('six-dropdown-show');
    const afterShowSpy = await page.spyOnEvent('six-dropdown-after-show');
    const hideSpy = await page.spyOnEvent('six-dropdown-hide');
    const afterHideSpy = await page.spyOnEvent('six-dropdown-after-hide');

    // open
    await page.locator('six-button').click();
    expect(showSpy).toHaveReceivedEvent();
    await expect.poll(() => afterShowSpy.length).toBe(1);

    // close
    await page.locator('six-button').click();
    expect(hideSpy).toHaveReceivedEvent();
    await expect.poll(() => afterHideSpy.length).toBe(1);
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
          <six-menu-item value="option1">Option 2</six-menu-item>
          <six-menu-item value="option1">Option 3</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await page.locator('six-button').click();
    await expectDropdownToBeVisible(page);

    // open with Enter
    await page.keyboard.press('Enter');
    await expectDropdownToBeHidden(page);

    // close with Enter
    await page.keyboard.press('Enter');
    await expectDropdownToBeVisible(page);

    // close with Space
    await page.keyboard.press('Space');
    await expectDropdownToBeHidden(page);

    // open with Space
    await page.keyboard.press('Space');
    await expectDropdownToBeVisible(page);

    // navigate with arrow keys
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('menuitem', { name: 'Option 1' })).toBeFocused();

    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('menuitem', { name: 'Option 2' })).toBeFocused();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('menuitem', { name: 'Option 3' })).toBeFocused();

    await page.keyboard.press('ArrowUp');
    await expect(page.getByRole('menuitem', { name: 'Option 2' })).toBeFocused();

    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    await expect(page.getByRole('menuitem', { name: 'Option 1' })).toBeFocused();

    // close with Escape
    await page.keyboard.press('Escape');
    await expectDropdownToBeHidden(page);
  });

  test('should select item and close when closeOnSelect is true (default)', async ({ page }) => {
    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
          <six-menu-item value="option2">Option 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    // open
    await page.locator('six-button').click();
    await expectDropdownToBeVisible(page);

    // select item
    await page.getByRole('menuitem', { name: 'Option 2' }).click();

    // should close
    await expectDropdownToBeHidden(page);
  });

  test('should keep open when closeOnSelect is false', async ({ page }) => {
    await page.setContent(`
      <six-dropdown close-on-select="false">
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
          <six-menu-item value="option2">Option 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    // open
    await page.locator('six-button').click();
    await expectDropdownToBeVisible(page);

    // select item
    await page.getByRole('menuitem', { name: 'Option 2' }).click();

    // should keep open
    await expectDropdownToBeVisible(page);
  });

  test('should close when clicking outside', async ({ page }) => {
    await page.setContent(`
      <six-dropdown open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
        </six-menu>
      </six-dropdown>
      <six-button id="outside">Outside</six-button>
    `);

    // Click outside
    await page.locator('#outside').click();

    await expectDropdownToBeHidden(page);
  });
});

test.describe('six-dropdown filter', () => {
  test('should filter items when typing (client-side filter)', async ({ page }) => {
    await page.setContent(
      `
      <six-dropdown filter open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="apple">Apple</six-menu-item>
          <six-menu-item value="banana">Banana</six-menu-item>
          <six-menu-item value="cherry">Cherry</six-menu-item>
        </six-menu>
      </six-dropdown>
    `,
      // filter clears onAfterHide event, which is not fired when animations are disabled
      { disableAnimations: false }
    );

    // Type in filter
    await page.keyboard.type('ban');

    // Only banana should be visible
    await expect(page.getByRole('menuitem', { name: 'Apple' })).toBeHidden();
    await expect(page.getByRole('menuitem', { name: 'Banana' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Cherry' })).toBeHidden();

    // open and close
    await page.keyboard.press('Escape');
    await expectDropdownToBeHidden(page);
    await page.locator('six-button').click();

    // filter should be reset
    await expect(page.getByRole('textbox')).toHaveValue('');
    await expect(page.getByRole('menuitem', { name: 'Apple' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Banana' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Cherry' })).toBeVisible();
  });

  test('should show filter input when asyncFilter is enabled', async ({ page }) => {
    await page.setContent(`
      <six-dropdown async-filter open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    await expect(page.getByRole('textbox')).toBeVisible();
  });
});

test.describe('six-dropdown screenshots', () => {
  test('should match screenshot for closed dropdown', async ({ page }) => {
    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item>Option 1</six-menu-item>
          <six-menu-item>Option 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('dropdown-closed.png');
  });

  test('should match screenshot for open dropdown', async ({ page }) => {
    await page.setContent(`
      <six-dropdown open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item>Option 1</six-menu-item>
          <six-menu-item>Option 2</six-menu-item>
          <six-menu-divider></six-menu-divider>
          <six-menu-item>Option 3</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    // Panel is position:fixed (Popover), so screenshot the page
    await expect(page).toHaveScreenshot('dropdown-open.png');
  });

  test('should match screenshot with filter', async ({ page }) => {
    await page.setContent(`
      <six-dropdown filter open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item>Apple</six-menu-item>
          <six-menu-item>Banana</six-menu-item>
          <six-menu-item>Cherry</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    // Panel is position:fixed (Popover), so screenshot the page
    await expect(page).toHaveScreenshot('dropdown-with-filter.png');
  });
});

test.describe('six-dropdown accessibility', () => {
  test('should have menu role on panel', async ({ page }) => {
    await page.setContent(`
      <six-dropdown open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item>Option 1</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const panel = page.locator('six-dropdown [part="panel"]');
    await expect(panel).toHaveAttribute('role', 'menu');
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.setContent(`
      <six-dropdown>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
          <six-menu-item value="option2">Option 2</six-menu-item>
          <six-menu-item value="option3" disabled>Disabled</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const results = await new AxeBuilder({ page }).include('six-dropdown').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations when open', async ({ page }) => {
    await page.setContent(`
      <six-dropdown open>
        <six-button slot="trigger" caret>Options</six-button>
        <six-menu>
          <six-menu-item value="option1">Option 1</six-menu-item>
          <six-menu-item value="option2">Option 2</six-menu-item>
        </six-menu>
      </six-dropdown>
    `);

    const results = await new AxeBuilder({ page })
      .include('six-dropdown')
      // Disabled due to known issue with aria-checked on menuitem (from six-menu)
      .disableRules(['aria-allowed-attr'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});

function expectDropdownToBeVisible(page: Page) {
  return expect(page.locator('six-dropdown [part="panel"]')).toHaveCSS('opacity', '1');
}

function expectDropdownToBeHidden(page: Page) {
  return expect(page.locator('six-dropdown [part="panel"]')).toHaveCSS('opacity', '0');
}
