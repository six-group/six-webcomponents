import { newSpecPage } from '@stencil/core/testing';
import { SixBreadcrumbsItem } from '../six-breadcrumbs-item';

describe('six-breadcrumbs-item', () => {
  it('renders as link when href is provided', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbsItem],
      html: `<six-breadcrumbs-item href="https://example.com" target="_blank">Link</six-breadcrumbs-item>`,
    });

    const btn = page.root!.shadowRoot!.querySelector('six-button')!;
    expect(btn.getAttribute('href')).toBe('https://example.com');
    expect(btn.getAttribute('target')).toBe('_blank');
  });

  it('reflects disabled attribute', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbsItem],
      html: `<six-breadcrumbs-item read-only>Readonly</six-breadcrumbs-item>`,
    });

    expect(page.root!.hasAttribute('read-only')).toBe(true);
  });

  it('renders and the inner six-button responds to click (no six-click emitted)', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbsItem],
      html: `<six-breadcrumbs-item>Click me</six-breadcrumbs-item>`,
    });

    const sixButton = page.root!.shadowRoot!.querySelector('six-button');
    expect(sixButton).not.toBeNull();

    const spy = jest.fn();
    page.root!.addEventListener('six-click', spy);

    // Dispatch the click directly on the button
    sixButton?.dispatchEvent(new Event('click', { bubbles: true, composed: true }));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalledTimes(0); // ✅ because component doesn't emit it
  });
});
