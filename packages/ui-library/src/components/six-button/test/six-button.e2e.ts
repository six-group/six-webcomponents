import { E2EPage, newE2EPage, E2EElement, EventSpy } from '@stencil/core/testing';
import { SixButton } from '../six-button';

const not =
  <T>(a: T) =>
  (b: T) =>
    a !== b;
const buttonClass = (x) => `button--${x}`;

const Button = {
  class: (x) => `button--${x}`,
  types: {
    values: ['default', 'primary', 'text', 'success', 'warning', 'danger', 'action'].map(buttonClass),
    but: (x) => Button.types.values.filter(not(x)),
  },
  sizes: {
    values: ['small', 'medium', 'large'].map(buttonClass),
    but: (x) => Button.sizes.values.filter(not(x)),
  },
};

describe('six-button', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    // when
    await page.setContent('<six-button></six-button>');
    const element = await page.find('six-button');

    // then
    expect(element).toHaveClass('hydrated');
  });

  it('should render the different button types correctly', async () => {
    // given
    await page.setContent(`
      <six-button>Default</six-button>
      <six-button type="primary">Primary</six-button>
      <six-button type="success">Success</six-button>
      <six-button type="warning">Warning</six-button>
      <six-button type="danger">Danger</six-button>
      <six-button type="action">Action</six-button>
    `);

    await page.setViewport({ width: 600, height: 60 });

    // when
    const results = await page.compareScreenshot('SIX Button', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  describe('type', () => {
    it('should render as `default` if no type is specified', async () => {
      // given
      await page.setContent(`<six-button></six-button>`);

      // when
      const button = await page.find('six-button >>> button');

      // then
      expect(button).toHaveClass('button--primary');
      expect(button).not.toHaveClasses(Button.types.but('button--primary'));
    });

    it('should render with specified type', async () => {
      // given
      await page.setContent(`<six-button type="success"></six-button>`);

      // when
      const button = await page.find('six-button >>> button');

      // then
      expect(button).toHaveClass('button--success');
      expect(button).not.toHaveClasses(Button.types.but('button--success'));
    });
  });

  describe('size', () => {
    it('should render as `medium` if no size is specified', async () => {
      // given
      await page.setContent(`<six-button></six-button>`);

      // when
      const button = await page.find('six-button >>> button');

      // then
      expect(button).toHaveClass('button--medium');
      expect(button).not.toHaveClasses(Button.sizes.but('button--medium'));
    });

    it('should render with specified size', async () => {
      // given
      await page.setContent(`<six-button size="small"></six-button>`);

      // when
      const button = await page.find('six-button >>> button');

      // then
      expect(button).toHaveClass('button--small');
      expect(button).not.toHaveClasses(Button.sizes.but('button--small'));
    });
  });

  describe('events', () => {
    let button: E2EElement;
    let component: E2EElement;

    beforeEach(async () => {
      await page.setContent(`<six-button></six-button>`);

      component = await page.find('six-button');
      button = await page.find('six-button >>> button');
    });

    describe('click event', () => {
      let spy: EventSpy;

      beforeEach(async () => {
        spy = await page.spyOnEvent('click');
      });

      it('should propagate', async () => {
        // when
        await button.click();
        await page.waitForChanges();

        // then
        expect(spy).toHaveReceivedEvent();
      });

      it(`should NOT propagate when disabled`, async () => {
        // given
        await page.$eval('six-button', (el: Element & SixButton) => {
          el.disabled = true;
        });

        // when
        await button.click();
        await page.waitForChanges();

        // then
        expect(spy).not.toHaveReceivedEvent();
      });

      it(`should NOT propagate when loading`, async () => {
        // given
        await page.$eval('six-button', (el: Element & SixButton) => {
          el.loading = true;
        });

        // when
        await button.click();
        await page.waitForChanges();

        // then
        expect(spy).not.toHaveReceivedEvent();
      });
    });

    describe(`custom 'six-button-focus' event`, () => {
      let spy: EventSpy;

      beforeEach(async () => {
        spy = await page.spyOnEvent('six-button-focus');
      });

      it(`should emit custom 'six-button-focus' event when 'setFocus' method is called`, async () => {
        // when
        await component.callMethod('setFocus');
        await page.waitForChanges();

        // then
        expect(spy).toHaveReceivedEvent();
      });

      it(`should emit custom 'six-button-focus' event`, async () => {
        // when
        await button.focus();
        await page.waitForChanges();

        // then
        expect(spy).toHaveReceivedEvent();
      });
    });

    // TODO: tx4u9 find a way to trigger events on E2EElement
    describe(`custom 'six-button-blur' event`, () => {
      let spy: EventSpy;

      beforeEach(async () => {
        spy = await page.spyOnEvent('six-button-blur');
      });

      it.skip(`should emit custom 'six-button-blur' event when 'removeFocus' method is called`, async () => {
        // when
        await component.callMethod('removeFocus');
        await page.waitForChanges();

        // then
        expect(spy).toHaveReceivedEvent();
      });

      it.skip(`should emit custom 'six-button-blur' event`, async () => {
        // when
        button.triggerEvent('blur');
        await page.waitForChanges();

        // then
        expect(spy).toHaveReceivedEvent();
      });
    });
  });
});
