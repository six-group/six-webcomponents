import { newSpecPage } from '@stencil/core/testing';
import { SixDate } from '../six-date';

describe('six-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixDate],
      html: `<six-date></six-date>`,
    });
    expect(page.root).toEqualHtml(`
      <six-date>
        <mock:shadow-root>
        <div class="date__container">
          <six-input class="input--empty" errortext="" label="" part="base" size="medium" value="">
            <span class="prefix" part="icon" slot="prefix">
              <six-icon size="medium">
                today
              </six-icon>
            </span>
          </six-input>
          </div>
        </mock:shadow-root>
      </six-date>
    `);
  });
});
