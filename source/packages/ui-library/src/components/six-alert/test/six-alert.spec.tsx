import { newSpecPage } from '@stencil/core/testing';
import { SixAlert } from '../six-alert';

describe('six-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixAlert],
      html: `<six-alert></six-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <six-alert type="primary">
        <mock:shadow-root>
          <div aria-atomic="true" aria-hidden="true" aria-live="assertive" class="alert alert--primary" part="base" role="alert">
            <span class="alert__icon" part="icon">
              <slot name="icon"></slot>
            </span>
            <span class="alert__message" part="message">
              <slot></slot>
            </span>
          </div>
        </mock:shadow-root>
      </six-alert>
    `);
  });
});
