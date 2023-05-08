import { newE2EPage } from '@stencil/core/testing';

describe('six-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-footer></six-footer>');

    const element = await page.find('six-footer');
    expect(element).toHaveClass('hydrated');
  });
});
