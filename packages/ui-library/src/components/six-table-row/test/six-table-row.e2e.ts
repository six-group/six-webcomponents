import { newE2EPage } from '@stencil/core/testing';

describe('six-table-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-table-row></six-table-row>');

    const element = await page.find('six-table-row');
    expect(element).toHaveClass('hydrated');
  });
});
