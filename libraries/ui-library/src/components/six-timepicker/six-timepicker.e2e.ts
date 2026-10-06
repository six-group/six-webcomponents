import { test } from '../../test-utils/fixtures';
import { expect, Page } from '@playwright/test';

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

  test('should emit six-timepicker-change when a valid time is typed', async ({ page }) => {
    // arrange
    await page.setContent('<six-timepicker label="Time"></six-timepicker>');
    const changeSpy = await page.spyOnEvent('six-timepicker-change');

    // act
    await page.getByRole('textbox').fill('20:30:15');

    // assert
    await expect.poll(() => changeSpy.length).toBeGreaterThan(0);
    expect(changeSpy.lastEvent.detail.valueAsString).toBe('20:30:15');
  });

  test('should emit six-timepicker-change when a valid time is typed after being detached and re-attached', async ({
    page,
  }) => {
    // arrange
    await page.setContent('<div id="container"><six-timepicker label="Time"></six-timepicker></div>');
    await expect(page.getByRole('textbox')).toBeVisible();
    await detachAndReattach(page, 'six-timepicker');
    const changeSpy = await page.spyOnEvent('six-timepicker-change');

    // act
    await page.getByRole('textbox').fill('20:30:15');

    // assert
    await expect.poll(() => changeSpy.length).toBeGreaterThan(0);
    expect(changeSpy.lastEvent.detail.valueAsString).toBe('20:30:15');
  });

  test('should emit six-timepicker-change-debounced when a valid time is typed after being detached and re-attached', async ({
    page,
  }) => {
    // arrange
    await page.setContent('<div id="container"><six-timepicker label="Time"></six-timepicker></div>');
    await expect(page.getByRole('textbox')).toBeVisible();
    await detachAndReattach(page, 'six-timepicker');
    const debouncedSpy = await page.spyOnEvent('six-timepicker-change-debounced');

    // act
    await page.getByRole('textbox').fill('20:30:15');

    // assert
    await expect.poll(() => debouncedSpy.length).toBeGreaterThan(0);
  });

  test('should forward typed time to the standard change event after being detached and re-attached', async ({
    page,
  }) => {
    // arrange
    await page.setContent('<div id="container"><six-timepicker label="Time"></six-timepicker></div>');
    await expect(page.getByRole('textbox')).toBeVisible();
    await detachAndReattach(page, 'six-timepicker');
    const standardChangeSpy = await page.spyOnEvent('change');

    // act
    await page.getByRole('textbox').fill('20:30:15');

    // assert
    await expect.poll(() => standardChangeSpy.length).toBeGreaterThan(0);
  });
});

/** Simulates a framework (e.g. a dialog) that takes the element out of the document and puts it back. */
async function detachAndReattach(page: Page, selector: string) {
  await page.locator(selector).evaluate((el) => {
    const parent = el.parentElement as HTMLElement;
    el.remove();
    parent.appendChild(el);
  });
}
