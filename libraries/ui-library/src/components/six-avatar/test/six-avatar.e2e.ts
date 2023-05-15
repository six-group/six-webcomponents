import { newE2EPage } from '@stencil/core/testing';

describe('six-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-avatar></six-avatar>');

    const element = await page.find('six-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
