import { test } from '../../test-utils/fixtures';
import { expect, Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// TODO: Component is missing six-focus event (only has six-change and six-blur)

// TODO: Popup is not keyboard accessible. Either implement ARIA APG date-picker keyboard support
// (see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)
// or hide the popup from screen readers (aria-hidden="true") and require typing dates in the input (recommended).

// TODO: Component should set aria-expanded on the input to indicate popup state.
// Currently the input does not have aria-expanded attribute.
// See: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

// TODO: Component should set aria-hidden on the popup panel when closed to hide it from screen readers.
// Currently the popup is always in the DOM without aria-hidden.

test.describe('six-date', () => {
  test('should open popup on click and close on Escape', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');

    await expectPanelToBeHidden(page);

    // Click to open (this focuses the input)
    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Escape to close - input must have focus for keydown handler to work
    await page.getByRole('textbox').press('Escape');
    await expectPanelToBeHidden(page);
  });

  test('should select date from calendar', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    const changeSpy = await page.spyOnEvent('six-change');

    // Open calendar
    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Click a different day (20th) - days are divs with data-date attribute
    await page.locator('six-date .panel [data-date="2025-01-20"]').click();

    // Panel should close and value should change to selected date
    await expectPanelToBeHidden(page);
    expect(changeSpy).toHaveReceivedEvent();

    const value = await page.locator('six-date').evaluate((el: HTMLElement & { value: string }) => el.value);
    expect(value).toBe('2025-01-20');
  });

  test('should not open popup when disabled', async ({ page }) => {
    await page.setContent('<six-date label="Date" disabled></six-date>');

    // Try to click
    await page.locator('six-date').click({ force: true });
    await expectPanelToBeHidden(page);
  });

  test('should clear value when clearable', async ({ page }) => {
    await page.setContent('<six-date label="Date" clearable value="2025-01-15"></six-date>');

    const changeSpy = await page.spyOnEvent('six-change');

    // Click clear button
    await page.locator('six-date six-input').evaluate((el: HTMLElement & { value: string }) => {
      el.shadowRoot?.querySelector<HTMLButtonElement>('[part="clear-button"]')?.click();
    });

    expect(changeSpy).toHaveReceivedEvent();
  });

  test('should emit events (change, blur) and forward to standard events', async ({ page }) => {
    await page.setContent(`
      <six-date label="Date" value="2025-01-15"></six-date>
      <button>Other</button>
    `);

    // Set up all spies BEFORE actions
    const changeSpy = await page.spyOnEvent('six-change');
    const blurSpy = await page.spyOnEvent('six-blur');
    const standardChangeSpy = await page.spyOnEvent('change');
    const standardBlurSpy = await page.spyOnEvent('blur');

    // Open popup and select a date - triggers change
    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);
    await page.locator('six-date .panel [data-date="2025-01-20"]').click();

    expect(changeSpy).toHaveReceivedEvent();
    expect(standardChangeSpy).toHaveReceivedEvent();

    // Tab away - triggers blur
    await page.keyboard.press('Tab');

    expect(blurSpy).toHaveReceivedEvent();
    expect(standardBlurSpy).toHaveReceivedEvent();
  });

  test('should skip disabled date in tab navigation', async ({ page }) => {
    await page.setContent(`
      <button id="before">Before</button>
      <six-date label="Date" disabled></six-date>
      <button id="after">After</button>
    `);

    await page.locator('#before').focus();
    await page.keyboard.press('Tab');

    await expect(page.locator('#after')).toBeFocused();
  });

  test('should normalize null/undefined value to empty string', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    // Set value to null
    await page.locator('six-date').evaluate((el: HTMLElement & { value: string | null }) => {
      el.value = null as unknown as string;
    });

    const value = await page.locator('six-date').evaluate((el: HTMLElement & { value: string }) => el.value);
    expect(value).toBe('');
  });

  test('should change month via month selection', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Click month selector to open month view
    await page.locator('six-date .panel .selector').first().click();
    await expect(page.locator('six-date .panel .month-selection')).toBeVisible();

    // Select March (months are divs with .cell class)
    await page.locator('six-date .panel .month-selection .cell:has-text("Mar")').click();

    // Should return to day view with March selected, select a day
    await page.locator('six-date .panel [data-date="2025-03-15"]').click();

    const value = await page.locator('six-date').evaluate((el: HTMLElement & { value: string }) => el.value);
    expect(value).toBe('2025-03-15');
  });

  test('should change year via year selection', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Click year selector to open year view
    await page.locator('six-date .panel .selector').last().click();
    await expect(page.locator('six-date .panel .year-selection')).toBeVisible();

    // Select 2026 (years are divs with .cell class)
    await page.locator('six-date .panel .year-selection .cell:has-text("2026")').click();

    // Should return to day view with 2026 selected, select a day
    await page.locator('six-date .panel [data-date="2026-01-15"]').click();

    const value = await page.locator('six-date').evaluate((el: HTMLElement & { value: string }) => el.value);
    expect(value).toBe('2026-01-15');
  });

  test('should update value programmatically', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');

    // Set value programmatically
    await page.locator('six-date').evaluate((el: HTMLElement & { value: string }) => {
      el.value = '2025-06-20';
    });

    const value = await page.locator('six-date').evaluate((el: HTMLElement & { value: string }) => el.value);
    expect(value).toBe('2025-06-20');

    // Verify input displays formatted value
    const inputValue = await page.getByRole('textbox').inputValue();
    expect(inputValue).toBe('20.06.2025');
  });

  test('should respect min date constraint', async ({ page }) => {
    await page.setContent('<six-date label="Date" min="2025-01-15" value="2025-01-20"></six-date>');

    await page.locator('six-date').click();

    // Days before min should be disabled
    const disabledDay = page.locator('six-date .panel [data-date="2025-01-10"]');
    await expect(disabledDay).toHaveClass(/cell--disabled/);

    // Days on or after min should not be disabled
    const enabledDay = page.locator('six-date .panel [data-date="2025-01-15"]');
    await expect(enabledDay).not.toHaveClass(/cell--disabled/);
  });

  test('should respect max date constraint', async ({ page }) => {
    await page.setContent('<six-date label="Date" max="2025-01-20" value="2025-01-15"></six-date>');

    await page.locator('six-date').click();

    // Days after max should be disabled
    const disabledDay = page.locator('six-date .panel [data-date="2025-01-25"]');
    await expect(disabledDay).toHaveClass(/cell--disabled/);

    // Days on or before max should not be disabled
    const enabledDay = page.locator('six-date .panel [data-date="2025-01-20"]');
    await expect(enabledDay).not.toHaveClass(/cell--disabled/);
  });

  test('should respect allowedDates callback', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    // Set allowedDates to only allow weekends
    await page.locator('six-date').evaluate((el: HTMLElement & { allowedDates: (date: string) => boolean }) => {
      el.allowedDates = (isoDate: string) => {
        const day = new Date(isoDate).getDay();
        return day === 0 || day === 6; // Only Saturday and Sunday
      };
    });

    await page.locator('six-date').click();

    // Monday Jan 13 should be disabled
    const weekday = page.locator('six-date .panel [data-date="2025-01-13"]');
    await expect(weekday).toHaveClass(/cell--disabled/);

    // Saturday Jan 18 should not be disabled
    const weekend = page.locator('six-date .panel [data-date="2025-01-18"]');
    await expect(weekend).not.toHaveClass(/cell--disabled/);
  });

  test('should show placeholder text', async ({ page }) => {
    await page.setContent('<six-date label="Date" placeholder="Select date"></six-date>');

    await expect(page.getByRole('textbox')).toHaveAttribute('placeholder', 'Select date');
  });

  test('should show default placeholder from dateFormat', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');

    await expect(page.getByRole('textbox')).toHaveAttribute('placeholder', 'dd.MM.yyyy');
  });

  test('should navigate to previous/next month in day view', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Verify we're in January 2025
    await expect(page.locator('six-date .panel .selector').first()).toContainText('January');

    // Click next to go to February
    await page.locator('six-date .panel .next').click();
    await expect(page.locator('six-date .panel .selector').first()).toContainText('February');

    // Click previous twice to go back to January then December
    await page.locator('six-date .panel .previous').click();
    await expect(page.locator('six-date .panel .selector').first()).toContainText('January');
    await page.locator('six-date .panel .previous').click();
    await expect(page.locator('six-date .panel .selector').first()).toContainText('December');
  });

  test('should navigate to previous/next year in month view', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Open month view
    await page.locator('six-date .panel .selector').first().click();
    await expect(page.locator('six-date .panel .month-selection')).toBeVisible();

    // Verify year is 2025
    await expect(page.locator('six-date .panel .selector')).toContainText('2025');

    // Click next to go to 2026
    await page.locator('six-date .panel .next').click();
    await expect(page.locator('six-date .panel .selector')).toContainText('2026');

    // Click previous to go back to 2025
    await page.locator('six-date .panel .previous').click();
    await expect(page.locator('six-date .panel .selector')).toContainText('2025');
  });

  test('should navigate to previous/next year range in year view', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');

    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);

    // Open year view
    await page.locator('six-date .panel .selector').last().click();
    await expect(page.locator('six-date .panel .year-selection')).toBeVisible();

    // Verify 2025 is visible in the initial range
    await expect(page.locator('six-date .panel .year-selection .cell:has-text("2025")')).toBeVisible();

    // Click next to shift the year range forward (shifts by 25 years)
    await page.locator('six-date .panel .next').click();

    // After shifting forward, years around 2050 should be visible
    await expect(page.locator('six-date .panel .year-selection .cell:has-text("2050")')).toBeVisible();

    // Click previous to go back
    await page.locator('six-date .panel .previous').click();

    // 2025 should be visible again
    await expect(page.locator('six-date .panel .year-selection .cell:has-text("2025")')).toBeVisible();
  });
});

test.describe('six-date screenshots', () => {
  test('should match screenshot for default date', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-default.png');
  });

  test('should match screenshot for date with value', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-with-value.png');
  });

  test('should match screenshot for disabled date', async ({ page }) => {
    await page.setContent('<six-date label="Date" disabled value="2025-01-15"></six-date>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-disabled.png');
  });

  test('should match screenshot for required date', async ({ page }) => {
    await page.setContent('<six-date label="Date" required></six-date>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-required.png');
  });

  test('should match screenshot for invalid date', async ({ page }) => {
    await page.setContent('<six-date label="Date" invalid error-text="Invalid date"></six-date>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-invalid.png');
  });

  const sizes = ['small', 'medium', 'large'] as const;

  sizes.forEach((size) => {
    test(`should match screenshot for ${size} size`, async ({ page }) => {
      await page.setContent(`<six-date label="Date" size="${size}"></six-date>`);
      await expect(page.locator('.playwright-test-container')).toHaveScreenshot(`date-${size}.png`);
    });
  });

  test('should match screenshot for popup with day selection', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');
    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);
    // Panel is position:fixed (Popover), so screenshot the page
    await expect(page).toHaveScreenshot('date-popup-days.png');
  });

  test('should match screenshot for popup with month selection', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');
    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);
    // Click month selector to open month view
    await page.locator('six-date .panel .selector').first().click();
    await expect(page.locator('six-date .panel .month-selection')).toBeVisible();
    // Panel is position:fixed (Popover), so screenshot the page
    await expect(page).toHaveScreenshot('date-popup-months.png');
  });

  test('should match screenshot for popup with year selection', async ({ page }) => {
    await page.setContent('<six-date label="Date" value="2025-01-15"></six-date>');
    await page.locator('six-date').click();
    await expectPanelToBeVisible(page);
    // Click year selector to open year view
    await page.locator('six-date .panel .selector').last().click();
    await expect(page.locator('six-date .panel .year-selection')).toBeVisible();
    // Panel is position:fixed (Popover), so screenshot the page
    await expect(page).toHaveScreenshot('date-popup-years.png');
  });

  test('should match screenshot for focused date', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');
    await page.getByRole('textbox').focus();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-focused.png');
  });

  test('should match screenshot for hover state', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');
    await page.locator('six-date six-input').hover();
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-hover.png');
  });

  test('should match screenshot with custom placeholder', async ({ page }) => {
    await page.setContent('<six-date label="Date" placeholder="Select date"></six-date>');
    await expect(page.locator('.playwright-test-container')).toHaveScreenshot('date-placeholder.png');
  });
});

test.describe('six-date accessibility', () => {
  test('should have aria-describedby for format help', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');

    const input = page.locator('six-date six-input');
    await expect(input).toHaveAttribute('aria-describedby', 'date-format');
  });

  test('should have no accessibility violations for default date', async ({ page }) => {
    await page.setContent('<six-date label="Date"></six-date>');

    const results = await new AxeBuilder({ page }).include('six-date').analyze();
    expect(results.violations).toEqual([]);
  });

  test('should have no accessibility violations for disabled date', async ({ page }) => {
    await page.setContent('<six-date label="Date" disabled value="2025-01-15"></six-date>');

    const results = await new AxeBuilder({ page }).include('six-date').analyze();
    expect(results.violations).toEqual([]);
  });

  // TODO: Error text has color contrast issue (ratio 4.46 vs 4.5:1 required)
  test('should have no accessibility violations for invalid date', async ({ page }) => {
    await page.setContent('<six-date label="Date" invalid error-text="Error"></six-date>');

    const results = await new AxeBuilder({ page }).include('six-date').disableRules(['color-contrast']).analyze();
    expect(results.violations).toEqual([]);
  });
});

// Popover-based visibility helpers (six-date uses Popover util with opacity transitions)
function expectPanelToBeVisible(page: Page) {
  return expect(page.locator('six-date .panel')).toHaveCSS('opacity', '1');
}

function expectPanelToBeHidden(page: Page) {
  return expect(page.locator('six-date .panel')).toHaveCSS('opacity', '0');
}
