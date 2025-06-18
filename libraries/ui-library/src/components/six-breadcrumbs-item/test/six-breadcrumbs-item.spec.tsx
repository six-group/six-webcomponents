import { newSpecPage } from '@stencil/core/testing';
import { SixBreadcrumbsItem } from '../six-breadcrumbs-item';

describe('six-breadcrumbs-item', () => {
  it('renders enabled item with <a>', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbsItem],
      html: `<six-breadcrumbs-item name="Home"></six-breadcrumbs-item>`,
    });
    expect(page?.root?.shadowRoot?.innerHTML).toContain('<a');
    expect(page?.root?.shadowRoot?.textContent).toContain('Home');
  });

  it('renders disabled item without <a>', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbsItem],
      html: `<six-breadcrumbs-item name="Home" disabled></six-breadcrumbs-item>`,
    });
    expect(page?.root?.shadowRoot?.innerHTML).not.toContain('<a');
    expect(page?.root?.shadowRoot?.textContent).toContain('Home');
  });

  it('emits sixClick on click if not disabled', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbsItem],
      html: `<six-breadcrumbs-item name="Home"></six-breadcrumbs-item>`,
    });

    const eventSpy = jest.fn();
    page?.root?.addEventListener('sixClick', eventSpy);

    const anchor = page?.root?.shadowRoot?.querySelector('a');
    anchor?.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
});
