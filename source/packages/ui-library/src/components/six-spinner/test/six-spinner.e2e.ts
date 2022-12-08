import { newE2EPage } from '@stencil/core/testing';

describe('six-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<six-spinner></six-spinner>');

    const element = await page.find('six-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
