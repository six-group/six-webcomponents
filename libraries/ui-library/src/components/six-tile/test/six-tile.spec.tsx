import { newSpecPage } from '@stencil/core/testing';
import { SixTile } from '../six-tile';

describe('six-tile', () => {
  it('renders six-tile with props', async () => {
    const page = await newSpecPage({
      components: [SixTile],
      html: `<six-tile label="Medium" icon-name="home"></six-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tile label="Medium" icon-name="home" size="medium">
        <mock:shadow-root>
          <six-tooltip disabled="" content="Medium">
            <div class="tile tile--medium tile--visible" part="base">
              <div class="tile__header" part="header">
                <six-icon-button name="close" size="medium"></six-icon-button>
              </div>
              <div class="tile__body" part="body">
                <six-icon size="xxLarge">
                  home
                </six-icon>
              </div>
              <div class="tile__footer--medium" part="footer">
                <div class=".label__footer">
                  Medium
                </div>
              </div>
            </div>
          </six-tooltip>
        </mock:shadow-root>
      </six-tile>
    `);
  });

  it('renders six-tile with slot', async () => {
    const page = await newSpecPage({
      components: [SixTile],
      html: `
      <six-tile>
        <six-icon slot="icon">delete</six-icon>
        <div slot="label">short label</div>
      </six-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <six-tile size="medium">
        <mock:shadow-root>
          <six-tooltip content="" disabled="">
            <div class="tile tile--medium tile--visible" part="base">
              <div class="tile__header" part="header">
                <six-icon-button name="close" size="medium"></six-icon-button>
              </div>
              <div class="tile__body" part="body">
                <slot name="icon"></slot>
              </div>
              <div class="tile__footer--medium" part="footer">
                <slot name="label"></slot>
              </div>
            </div>
          </six-tooltip>
        </mock:shadow-root>
        <six-icon slot="icon">
          delete
        </six-icon>
        <div slot="label">
          short label
        </div>
      </six-tile>
    `);
  });
});
