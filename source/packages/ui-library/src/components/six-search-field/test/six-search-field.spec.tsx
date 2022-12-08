import { newSpecPage } from '@stencil/core/testing';
import { SixSearchField } from '../six-search-field';

describe('six-search-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixSearchField],
      html: `<six-search-field clearable></six-search-field>`,
    });
    expect(page.root).toEqualHtml(`
      <six-search-field clearable="" debounce="300" value="" clearable>
        <mock:shadow-root>
          <div class="search-box">
            <six-input clearable="" value="">
             <six-icon class="search-box__icon" size="small" slot="prefix">search</six-icon></six-input>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </six-search-field>
    `);
  });
});
