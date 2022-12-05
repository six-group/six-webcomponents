import { newSpecPage } from '@stencil/core/testing';
import { SixAvatar } from '../six-avatar';

describe('six-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixAvatar],
      html: `<six-avatar></six-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <six-avatar>
        <mock:shadow-root>
          <div aria-label="" class="avatar avatar--circle" part="base" role="image" tabindex="0">
          <div class="avatar__icon" part="icon">
            <slot name="icon">
              <six-icon>
                person
              </six-icon>
            </slot>
          </div>
        </div>
        </mock:shadow-root>
      </six-avatar>
    `);
  });
});
