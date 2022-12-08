import { newSpecPage } from '@stencil/core/testing';
import { SixDatepicker } from '../six-datepicker';

describe('six-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixDatepicker],
      html: `<six-datepicker></six-datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <six-datepicker>
        <mock:shadow-root>
        <div class="datepicker__container">
          <six-input class="input--empty" error-text="" label="" part="base" size="medium" value="">
            <span class="prefix" part="icon" slot="prefix">
              <six-icon size="medium">
                today
              </six-icon>
            </span>
          </six-input>
          </div>
        </mock:shadow-root>
      </six-datepicker>
    `);
  });
});
