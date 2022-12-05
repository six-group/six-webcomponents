import { newE2EPage } from '@stencil/core/testing';

describe('six-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-icon-button></six-icon-button>');

    const element = await page.find('six-icon-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with tooltip', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tooltip content="Settings"><six-icon-button></six-icon-button></six-tooltip>');

    const tooltip = await page.find('six-tooltip');
    expect(await tooltip.getProperty('open')).toBe(false);

    const button = await page.find('six-icon-button >>> button');
    await button.click();
    expect(await tooltip.getProperty('open')).toBe(true);
  });

  it('renders with tooltip disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tooltip content="Settings"><six-icon-button disabled></six-icon-button></six-tooltip>');

    const tooltip = await page.find('six-tooltip');
    expect(await tooltip.getProperty('open')).toBe(false);

    const button = await page.find('six-icon-button >>> div');
    await button.click();
    expect(await tooltip.getProperty('open')).toBe(true);
  });
});
