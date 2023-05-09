import { newE2EPage } from '@stencil/core/testing';

describe('six-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-tooltip></six-tooltip>');

    const element = await page.find('six-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
