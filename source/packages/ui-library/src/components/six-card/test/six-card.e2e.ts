import { newE2EPage } from '@stencil/core/testing';

describe('six-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-card></six-card>');

    const element = await page.find('six-card');
    expect(element).toHaveClass('hydrated');
  });
});
