import { newSpecPage } from '@stencil/core/testing';
import { SixBreadcrumbItem } from '../six-breadcrumb-item';

describe('six-breadcrumb-item', () => {
  it('renders enabled item with <a>', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbItem],
      html: `<six-breadcrumb-item name="Home"></six-breadcrumb-item>`,
    });
    expect(page?.root?.shadowRoot?.innerHTML).toContain('<a');
    expect(page?.root?.shadowRoot?.textContent).toContain('Home');
  });

  it('renders disabled item without <a>', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbItem],
      html: `<six-breadcrumb-item name="Home" disabled></six-breadcrumb-item>`,
    });
    expect(page?.root?.shadowRoot?.innerHTML).not.toContain('<a');
    expect(page?.root?.shadowRoot?.textContent).toContain('Home');
  });

  it('emits sixClick on click if not disabled', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbItem],
      html: `<six-breadcrumb-item name="Home"></six-breadcrumb-item>`,
    });

    const eventSpy = jest.fn();
    page?.root?.addEventListener('sixClick', eventSpy);

    const anchor = page?.root?.shadowRoot?.querySelector('a');
    anchor?.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
});
