import { test } from '@stencil/playwright';
import { expect } from '@playwright/test';

declare global {
  interface Window {
    buttonClicked?: boolean;
    clickCount?: number;
    focusEventFired?: boolean;
    blurEventFired?: boolean;
  }
}

test.describe('six-button', () => {
  test.describe('basic rendering', () => {
    test('should render with text content', async ({ page }) => {
      await page.setContent('<six-button>Click Me</six-button>');
      const button = page.locator('six-button');
      await expect(button).toBeVisible();
      await expect(button).toContainText('Click Me');
    });

    test('should render as a button element by default', async ({ page }) => {
      await page.setContent('<six-button>Button</six-button>');
      const nativeButton = page.locator('six-button').locator('button');
      await expect(nativeButton).toBeVisible();
    });

    test('should render as an anchor element when href is set', async ({ page }) => {
      await page.setContent('<six-button href="https://example.com">Link</six-button>');
      const anchor = page.locator('six-button').locator('a');
      await expect(anchor).toBeVisible();
      await expect(anchor).toHaveAttribute('href', 'https://example.com');
    });
  });

  test.describe('button types', () => {
    const types = ['primary', 'secondary', 'link', 'success', 'warning', 'danger', 'action', 'action-outline'];

    for (const type of types) {
      test(`should render ${type} type`, async ({ page }) => {
        await page.setContent(`<six-button type="${type}">${type}</six-button>`);
        const button = page.locator('six-button');
        await expect(button).toHaveAttribute('type', type);
      });
    }
  });

  test.describe('button sizes', () => {
    test('should render small size', async ({ page }) => {
      await page.setContent('<six-button size="small">Small</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('size', 'small');
    });

    test('should render medium size (default)', async ({ page }) => {
      await page.setContent('<six-button size="medium">Medium</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('size', 'medium');
    });

    test('should render large size', async ({ page }) => {
      await page.setContent('<six-button size="large">Large</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('size', 'large');
    });
  });

  test.describe('button states', () => {
    test('should be clickable when enabled', async ({ page }) => {
      await page.setContent('<six-button>Click Me</six-button>');
      const button = page.locator('six-button').locator('button');
      await expect(button).toBeEnabled();
      await button.click();
    });

    test('should be disabled when disabled prop is set', async ({ page }) => {
      await page.setContent('<six-button disabled>Disabled</six-button>');
      const button = page.locator('six-button').locator('button');
      await expect(button).toBeDisabled();
    });

    test('should show loading state', async ({ page }) => {
      await page.setContent('<six-button loading>Loading</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('loading');

      // Check for spinner
      const spinner = button.locator('six-spinner');
      await expect(spinner).toBeVisible();
    });

    test('should not be clickable when loading', async ({ page }) => {
      let clicked = false;
      await page.setContent('<six-button loading>Loading</six-button>');

      await page.evaluate(() => {
        const btn = document.querySelector('six-button');
        btn?.addEventListener('click', () => {
          window.buttonClicked = true;
        });
      });

      const button = page.locator('six-button').locator('button');
      await button.click({ force: true });

      clicked = await page.evaluate(() => window.buttonClicked === true);
      expect(clicked).toBe(false);
    });
  });

  test.describe('button variants', () => {
    test('should render pill variant', async ({ page }) => {
      await page.setContent('<six-button pill>Pill Button</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('pill');
    });

    test('should render circle variant', async ({ page }) => {
      await page.setContent('<six-button circle>○</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('circle');
    });

    test('should render with caret', async ({ page }) => {
      await page.setContent('<six-button caret>Dropdown</six-button>');
      const button = page.locator('six-button');
      await expect(button).toHaveAttribute('caret');

      // Check for caret SVG
      const caret = button.locator('svg');
      await expect(caret).toBeVisible();
    });
  });

  test.describe('slots', () => {
    test('should render prefix slot', async ({ page }) => {
      await page.setContent(`
        <six-button>
          <span slot="prefix">⚙</span>
          Settings
        </six-button>
      `);
      const prefix = page.locator('six-button span[slot="prefix"]');
      await expect(prefix).toBeVisible();
      await expect(prefix).toContainText('⚙');
    });

    test('should render suffix slot', async ({ page }) => {
      await page.setContent(`
        <six-button>
          Refresh
          <span slot="suffix">↻</span>
        </six-button>
      `);
      const suffix = page.locator('six-button span[slot="suffix"]');
      await expect(suffix).toBeVisible();
      await expect(suffix).toContainText('↻');
    });

    test('should render both prefix and suffix slots', async ({ page }) => {
      await page.setContent(`
        <six-button>
          <span slot="prefix">←</span>
          Back
          <span slot="suffix">→</span>
        </six-button>
      `);
      const prefix = page.locator('six-button span[slot="prefix"]');
      const suffix = page.locator('six-button span[slot="suffix"]');
      await expect(prefix).toBeVisible();
      await expect(suffix).toBeVisible();
    });
  });

  test.describe('link behavior', () => {
    test('should render with href attribute', async ({ page }) => {
      await page.setContent('<six-button href="https://example.com">Link</six-button>');
      const anchor = page.locator('six-button a');
      await expect(anchor).toHaveAttribute('href', 'https://example.com');
    });

    test('should render with target attribute', async ({ page }) => {
      await page.setContent('<six-button href="https://example.com" target="_blank">New Tab</six-button>');
      const anchor = page.locator('six-button a');
      await expect(anchor).toHaveAttribute('target', '_blank');
      await expect(anchor).toHaveAttribute('rel', 'noreferrer noopener');
    });

    test('should render with download attribute', async ({ page }) => {
      await page.setContent('<six-button href="/file.pdf" download="document.pdf">Download</six-button>');
      const anchor = page.locator('six-button a');
      await expect(anchor).toHaveAttribute('download', 'document.pdf');
    });
  });

  test.describe('events', () => {
    test('should emit six-button-focus event on focus', async ({ page }) => {
      await page.setContent('<six-button>Focus Me</six-button>');

      const focusPromise = page.evaluate(() => {
        return new Promise((resolve) => {
          document.querySelector('six-button')?.addEventListener('six-button-focus', () => {
            resolve(true);
          });
        });
      });

      await page.locator('six-button').locator('button').focus();
      const focused = await focusPromise;
      expect(focused).toBe(true);
    });

    test('should emit six-button-blur event on blur', async ({ page }) => {
      await page.setContent(`
        <six-button id="btn1">Button 1</six-button>
        <six-button id="btn2">Button 2</six-button>
      `);

      const blurPromise = page.evaluate(() => {
        return new Promise((resolve) => {
          document.querySelector('#btn1')?.addEventListener('six-button-blur', () => {
            resolve(true);
          });
        });
      });

      await page.locator('#btn1').locator('button').focus();
      await page.locator('#btn2').locator('button').focus();

      const blurred = await blurPromise;
      expect(blurred).toBe(true);
    });
  });

  test.describe('methods', () => {
    test('should support setFocus method', async ({ page }) => {
      await page.setContent('<six-button>Focus Me</six-button>');

      await page.evaluate(() => {
        const button = document.querySelector('six-button') as HTMLSixButtonElement;
        return button.setFocus();
      });

      const isFocused = await page.evaluate(() => {
        const button = document.querySelector('six-button');
        return button?.shadowRoot?.activeElement?.tagName === 'BUTTON';
      });

      expect(isFocused).toBe(true);
    });

    test('should support removeFocus method', async ({ page }) => {
      await page.setContent('<six-button>Blur Me</six-button>');

      await page.evaluate(async () => {
        const button = document.querySelector('six-button') as HTMLSixButtonElement;
        await button.setFocus();
        await button.removeFocus();
      });

      const isFocused = await page.evaluate(() => {
        const button = document.querySelector('six-button');
        return button?.shadowRoot?.activeElement?.tagName === 'BUTTON';
      });

      expect(isFocused).toBe(false);
    });
  });

  test.describe('form integration', () => {
    test('should have correct button type for submit', async ({ page }) => {
      await page.setContent('<six-button submit>Submit</six-button>');
      const button = page.locator('six-button').locator('button');
      await expect(button).toHaveAttribute('type', 'submit');
    });

    test('should have correct button type for reset', async ({ page }) => {
      await page.setContent('<six-button reset>Reset</six-button>');
      const button = page.locator('six-button').locator('button');
      await expect(button).toHaveAttribute('type', 'reset');
    });

    test('should have name and value attributes', async ({ page }) => {
      await page.setContent('<six-button name="myButton" value="myValue">Button</six-button>');
      const button = page.locator('six-button').locator('button');
      await expect(button).toHaveAttribute('name', 'myButton');
      await expect(button).toHaveAttribute('value', 'myValue');
    });
  });
});
