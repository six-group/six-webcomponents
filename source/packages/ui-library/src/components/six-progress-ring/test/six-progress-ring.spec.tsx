import { newSpecPage } from '@stencil/core/testing';
import { SixProgressRing } from '../six-progress-ring';

describe('six-progress-ring', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixProgressRing],
      html: `<six-progress-ring></six-progress-ring>`,
    });
    expect(page.root).toEqualHtml(`
      <six-progress-ring>
        <mock:shadow-root>
         <div class="progress-ring" part="base">
          <svg class="progress-ring__image" height="128" width="128">
           <circle class="progress-ring__track" cx="64" cy="64" fill="transparent" r="56" stroke-linecap="round" stroke-width="4"></circle>
           <circle class="progress-ring__indicator" cx="64" cy="64" fill="transparent" r="56" stroke-linecap="round" stroke-width="4"></circle>
          </svg>
          <span class="progress-ring__label" part="label">
           <slot></slot>
          </span>
         </div>
        </mock:shadow-root>
      </six-progress-ring>
    `);
  });
});
