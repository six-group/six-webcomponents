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
});
