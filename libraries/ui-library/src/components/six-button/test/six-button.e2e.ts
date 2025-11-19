import { test } from '@stencil/playwright';
import { expect } from '@playwright/test';

declare global {
  interface Window {
    buttonClicked?: boolean;
  }
}

test.describe('six-button', () => {
  test('should render as an anchor element when href is set', async ({ page }) => {
    await page.setContent('<six-button href="https://example.com">Link</six-button>');
    await expect(page.getByRole('link')).toBeVisible();
  });

  test('should be clickable by default', async ({ page }) => {
    await page.setContent('<six-button>Click Me</six-button>');
    await page.getByRole('button').click();
  });

  test('should show spinner and not clickable', async ({ page }) => {
    await page.setContent('<six-button loading>Loading</six-button>');
    await expect(page.locator('six-button six-spinner')).toBeVisible();

    await page.evaluate(() => {
      const btn = document.querySelector('six-button');
      btn?.addEventListener('click', () => {
        window.buttonClicked = true;
      });
    });

    await page.getByRole('button').click({ force: true });

    // the button should not be clicked
    const wasClicked = await page.evaluate(() => window.buttonClicked === true);
    expect(wasClicked).toBe(false);
  });

  test('should render with caret', async ({ page }) => {
    await page.setContent('<six-button caret>Dropdown</six-button>');
    const button = page.getByRole('button');
    await expect(button.locator('svg')).toBeVisible();
  });

  test('should render both prefix and suffix slots', async ({ page }) => {
    await page.setContent(`
        <six-button>
          <span slot="prefix">←</span>
          Back
         <span slot="suffix">→</span>
        </six-button>
      `);
    await page.getByText('←').click();
    await page.getByText('→').click();
  });

  test('should handle focus correctly', async ({ page }) => {
    await page.setContent(`
        <six-button data-testid="btn1">Button 1</six-button>
        <six-button data-testid="btn2">Button 2</six-button>
      `);

    await page.getByTestId('btn1').click();
    await expect(page.getByTestId('btn1')).toBeFocused();

    await page.getByTestId('btn2').click();
    await expect(page.getByTestId('btn1')).not.toBeFocused();
  });
});
