import { newE2EPage } from '@stencil/core/testing';

describe('six-table-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-table-header></six-table-header>');

    const element = await page.find('six-table-header');
    expect(element).toHaveClass('hydrated');
  });
});
