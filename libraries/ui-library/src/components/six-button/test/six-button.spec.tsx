import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { SixButton } from '../six-button';

interface TypedSpecPage<T> extends Omit<SpecPage, 'root'> {
  root?: HTMLElement & T;
}

describe('six-button', () => {
  it('should create a component instance', () => {
    expect(new SixButton()).toBeInstanceOf(SixButton);
  });

  describe('rendering', () => {
    let page: TypedSpecPage<SixButton>;
    let button: HTMLButtonElement;

    beforeEach(async () => {
      page = (await newSpecPage({
        components: [SixButton],
        html: `<six-button></six-button>`,
        supportsShadowDom: true,
      })) as TypedSpecPage<SixButton>;
      const queryResult = page.root?.shadowRoot?.querySelector('[data-testid="button"]');
      if (queryResult != null) {
        button = queryResult as HTMLButtonElement;
      }
    });

    it('renders', async () => {
      expect(page.root).toEqualHtml(`
      <six-button size="medium" type="primary">
        <mock:shadow-root>
         <div>
          <button class="button button--primary button--medium" part="base" type="button" data-testid="button" value="">
            <span part="prefix" class="button__prefix">
              <slot name="prefix"></slot>
            </span>
            <span part="label" class="button__label">
              <slot></slot>
            </span>
            <span part="suffix" class="button__suffix">
              <slot name="suffix"></slot>
            </span>
          </button>
         </div>
        </mock:shadow-root>
      </six-button>
    `);
    });

    describe('custom events', () => {
      it(`should propagate custom 'six-button-blur' event`, async () => {
        const spy = jest.fn();
        page.root?.addEventListener('six-button-blur', spy);
        await page.waitForChanges();

        // when
        button.dispatchEvent(new Event('blur'));
        await page.waitForChanges();

        // then
        expect(spy).toHaveBeenCalled();
      });

      it(`should propagate custom 'six-button-focus' event`, async () => {
        const spy = jest.fn();
        page.root?.addEventListener('six-button-focus', spy);
        await page.waitForChanges();

        // when
        button.dispatchEvent(new Event('focus'));
        await page.waitForChanges();

        // then
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
