import { newE2EPage } from '@stencil/core/testing';

describe('six-group-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-group-label></six-group-label>');

    const element = await page.find('six-group-label');
    expect(element).toHaveClass('hydrated');
  });
});
