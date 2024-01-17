import { newSpecPage } from '@stencil/core/testing';
import { SixSpinner } from '../six-spinner';

describe('six-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixSpinner],
      html: `<six-spinner></six-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <six-spinner>
        <mock:shadow-root>
          <span aria-busy="true" aria-live="polite" class="spinner" part="base"></span>
        </mock:shadow-root>
      </six-spinner>
    `);
  });

  it('renders as SIX logo when set', async () => {
    const page = await newSpecPage({
      components: [SixSpinner],
      html: `<six-spinner six="true"></six-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <six-spinner six="true">
        <mock:shadow-root>
          <span aria-busy="true" aria-live="polite" class="six-spinner">
            <div class="six-spinner__container">
              <svg part="svg" viewBox="0 0 40 40">
                <path d="M 35 5 V 35 H 5 T 5 5 H 35 V 35 H 5 V 5 H 35 V 35 H -34 V 30 H 7 A 9 8 0 0 0 14 27 L 27 14 A 8 6 0 0 1 33 12 H 42" fill="none" stroke="#de3919" stroke-linecap="round" stroke-width="5"></path>
              </svg>
            </div>
          </span>
        </mock:shadow-root>
      </six-spinner>
    `);
  });
});
