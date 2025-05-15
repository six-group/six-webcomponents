import { newSpecPage } from '@stencil/core/testing';
import { SixPicto } from '../six-picto';

describe('six-picto', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url) => {
      if (url.includes('copy.svg')) {
        return Promise.resolve({
          ok: true,
          text: () => Promise.resolve('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>'),
        });
      } else if (url.includes('search.svg')) {
        return Promise.resolve({
          ok: true,
          text: () => Promise.resolve('<svg><circle cx="12" cy="12" r="10"/></svg>'),
        });
      }
      return Promise.reject(new Error('Icon not found'));
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders correct pictogram', async () => {
    const page = await newSpecPage({
      components: [SixPicto],
      html: `<six-picto>copy</six-picto>`,
    });

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <six-picto>
        <mock:shadow-root>
          <div class="is-size-medium" part="icon">
            <svg>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </svg>
          </div>
        </mock:shadow-root>
        copy
      </six-picto>
    `);
  });

  it('renders picto in correct size', async () => {
    const page = await newSpecPage({
      components: [SixPicto],
      html: `<six-picto size="xxLarge">search</six-picto>`,
    });

    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <six-picto size="xxLarge">
        <mock:shadow-root>
          <div class="is-size-xxLarge" part="icon">
            <svg>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
        </mock:shadow-root>
        search
      </six-picto>
    `);
  });
});
