import { newSpecPage } from '@stencil/core/testing';
import { SixItemPicker } from '../six-item-picker';

describe('six-item-picker', () => {
  it('should render default', async () => {
    // given
    const page = await newSpecPage({
      components: [SixItemPicker],
      html: `<six-item-picker></six-item-picker>`,
    });

    // then
    expect(page.root).toEqualHtml(`
      <six-item-picker roundtrip="" step="1" value="0">
        <mock:shadow-root>
          <div class="item_picker__container" part="container" tabindex="0">
            <div class="item_picker__btn" part="up" tabindex="-1">
              <six-icon size="large">
                expand_less
              </six-icon>
            </div>
            <div class="item_picker__content" part="content">
              0
            </div>
            <div class="item_picker__btn" part="down" tabindex="-1">
              <six-icon size="large">
                expand_more
              </six-icon>
            </div>
          </div>
        </mock:shadow-root>
      </six-item-picker>`);
  });

  it('should render number picker with correct attributes', async () => {
    // given
    const page = await newSpecPage({
      components: [SixItemPicker],
      html: `<six-item-picker value="5" step="5" min="3" max="13" roundtrip="false"></six-item-picker>`,
    });

    // then
    expect(page.root).toEqualHtml(`
      <six-item-picker max="13" min="3" roundtrip="false" step="5" value="5">
        <mock:shadow-root>
          <div class="item_picker__container" part="container" tabindex="0">
            <div class="item_picker__btn" part="up" tabindex="-1">
              <six-icon size="large">
                expand_less
              </six-icon>
            </div>
            <div class="item_picker__content" part="content">
              5
            </div>
            <div class="item_picker__btn item_picker__btn--disabled" part="down" tabindex="-1">
              <six-icon size="large">
                expand_more
              </six-icon>
            </div>
          </div>
        </mock:shadow-root>
      </six-item-picker>
    `);
  });

  it('should render letter picker with correct attributes', async () => {
    // given
    const page = await newSpecPage({
      components: [SixItemPicker],
      html: `<six-item-picker type="letter" roundtrip="false" min="c" max="k" value="d"></six-item-picker>`,
    });

    // then
    expect(page.root).toEqualHtml(`
      <six-item-picker max="k" min="c" roundtrip="false" step="1" type="letter" value="d">
        <mock:shadow-root>
          <div class="item_picker__container" part="container" tabindex="0">
            <div class="item_picker__btn" part="up" tabindex="-1">
              <six-icon size="large">
                expand_less
              </six-icon>
            </div>
            <div class="item_picker__content" part="content">
              d
            </div>
            <div class="item_picker__btn" part="down" tabindex="-1">
              <six-icon size="large">
                expand_more
              </six-icon>
            </div>
          </div>
        </mock:shadow-root>
      </six-item-picker>`);
  });
});
