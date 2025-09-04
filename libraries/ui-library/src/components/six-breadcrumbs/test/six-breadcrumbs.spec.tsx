import { newSpecPage } from '@stencil/core/testing';
import { SixBreadcrumbs } from '../six-breadcrumbs';
import { SixBreadcrumbsItem } from '../../six-breadcrumbs-item/six-breadcrumbs-item';

describe('six-breadcrumbs', () => {
  it('adds separators and disables the last item', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbs, SixBreadcrumbsItem],
      html: `
        <six-breadcrumbs>
          <six-breadcrumbs-item>Home</six-breadcrumbs-item>
          <six-breadcrumbs-item>Docs</six-breadcrumbs-item>
          <six-breadcrumbs-item>API</six-breadcrumbs-item>
          <span slot="separator">/</span>
        </six-breadcrumbs>
      `,
    });

    // force slot processing
    page?.root?.shadowRoot!.querySelector('slot')!.dispatchEvent(new Event('slotchange'));
    await page.waitForChanges();

    const items = page.root!.querySelectorAll('six-breadcrumbs-item');
    expect(items.length).toBe(3);
  });
});
