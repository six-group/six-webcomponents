import { test } from '../../test-utils/fixtures';
import { expect } from '@playwright/test';

test.describe('six-timepicker', () => {
  test('should display the initial value in the input', async ({ page }) => {
    // arrange
    const content = '<six-timepicker label="Time" value="13:32:35"></six-timepicker>';

    // act
    await page.setContent(content);

    // assert
    await expect(page.getByRole('textbox')).toHaveValue('13:32:35');
  });

  test('should display a value assigned before the component is loaded', async ({ page }) => {
    // arrange
    await page.setContent('<div id="container"></div>');

    // act
    await page.evaluate(() => {
      const timepicker = document.createElement('six-timepicker') as HTMLElement & { value: string };
      timepicker.value = '08:15:00';
      document.getElementById('container')?.appendChild(timepicker);
    });

    // assert
    await expect(page.getByRole('textbox')).toHaveValue('08:15:00');
  });

  test('should display a value assigned after the component is loaded', async ({ page }) => {
    // arrange
    await page.setContent('<six-timepicker label="Time"></six-timepicker>');
    await expect(page.getByRole('textbox')).toHaveValue('');

    // act
    await page.locator('six-timepicker').evaluate((el: HTMLElement & { value: string }) => (el.value = '22:13:00'));

    // assert
    await expect(page.getByRole('textbox')).toHaveValue('22:13:00');
  });

  test('should emit change events when a valid time is typed', async ({ page }) => {
    // arrange
    await page.setContent('<six-timepicker label="Time"></six-timepicker>');
    const changeSpy = await page.spyOnEvent('six-timepicker-change');
    const debouncedSpy = await page.spyOnEvent('six-timepicker-change-debounced');
    const standardChangeSpy = await page.spyOnEvent('change');

    // act
    await page.getByRole('textbox').fill('20:30:15');

    // assert
    await expect.poll(() => changeSpy.lastEvent?.detail.valueAsString).toBe('20:30:15');
    await expect.poll(() => debouncedSpy.lastEvent?.detail.valueAsString).toBe('20:30:15');
    await expect.poll(() => standardChangeSpy.length).toBeGreaterThan(0);
  });

  test('should emit change events when a valid time is typed after being detached and re-attached', async ({
    page,
  }) => {
    // arrange
    await page.setContent('<six-timepicker label="Time"></six-timepicker>');
    await expect(page.getByRole('textbox')).toBeVisible();
    await page.locator('six-timepicker').evaluate((el) => {
      const parent = el.parentElement;
      el.remove();
      parent?.appendChild(el);
    });
    const changeSpy = await page.spyOnEvent('six-timepicker-change');
    const debouncedSpy = await page.spyOnEvent('six-timepicker-change-debounced');
    const standardChangeSpy = await page.spyOnEvent('change');

    // act
    await page.getByRole('textbox').fill('20:30:15');

    // assert
    await expect.poll(() => changeSpy.lastEvent?.detail.valueAsString).toBe('20:30:15');
    await expect.poll(() => debouncedSpy.lastEvent?.detail.valueAsString).toBe('20:30:15');
    await expect.poll(() => standardChangeSpy.length).toBeGreaterThan(0);
  });

  test('should close the popup on outside click after being detached and re-attached', async ({ page }) => {
    // arrange
    await page.setContent('<six-timepicker label="Time"></six-timepicker>');
    await page.getByRole('textbox').click();
    await expect(page.locator('six-timepicker .timepicker__popup')).toBeVisible();
    await page.locator('six-timepicker').evaluate((el) => {
      const parent = el.parentElement;
      el.remove();
      parent?.appendChild(el);
    });

    // act
    await page.mouse.click(200, 600);

    // assert
    await expect(page.locator('six-timepicker .timepicker__popup')).toHaveCount(0);
  });

  test('should apply the typed time and close the popup when Enter is pressed', async ({ page }) => {
    // arrange
    await page.setContent('<six-timepicker label="Time" debounce="60000"></six-timepicker>');
    const changeSpy = await page.spyOnEvent('six-timepicker-change');
    await page.getByRole('textbox').click();
    await expect(page.locator('six-timepicker .timepicker__popup')).toBeVisible();
    await page.getByRole('textbox').fill('20:30:15');

    // act
    await page.getByRole('textbox').press('Enter');

    // assert
    await expect(page.locator('six-timepicker .timepicker__popup')).toHaveCount(0);
    await expect.poll(() => changeSpy.lastEvent?.detail.valueAsString).toBe('20:30:15');
    expect(changeSpy.length).toBe(1);
    await expect(page.locator('six-timepicker')).toHaveJSProperty('value', '20:30:15');
  });
});
