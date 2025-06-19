import { newSpecPage } from '@stencil/core/testing';
import { SixBreadcrumbs } from '../six-breadcrumbs';

describe('six-breadcrumbs', () => {
  it('renders with no data', async () => {
    const page = await newSpecPage({
      components: [SixBreadcrumbs],
      html: `<six-breadcrumbs></six-breadcrumbs>`,
    });
    expect(page?.root)?.toEqualHtml(`
  <six-breadcrumbs>
    <mock:shadow-root>
      <host class="six-breadcrumbs">
        <div part="base">
          <slot></slot>
        </div>
      </host>
    </mock:shadow-root>
  </six-breadcrumbs>
`);
  });

  it('renders breadcrumb items from data prop', async () => {
    const mockData = [
      { name: 'Home', disabled: false, onSixClick: jest.fn() },
      { name: 'About', disabled: true, onSixClick: jest.fn() },
    ];

    const page = await newSpecPage({
      components: [SixBreadcrumbs],
      html: `<six-breadcrumbs></six-breadcrumbs>`,
    });

    page.rootInstance.data = mockData;
    await page?.waitForChanges();

    expect(page?.root?.shadowRoot?.querySelectorAll('six-breadcrumbs-item').length).toBe(2);
  });
});
