import { newSpecPage } from '@stencil/core/testing';
import { SixForm } from '../six-form';
import { MockHTMLElement } from '@stencil/core/mock-doc';

describe('six-form', () => {
  // see: https://github.com/ionic-team/stencil/issues/2830
  // and https://stackoverflow.com/questions/66039992/what-causes-assignedelements-is-not-a-function-in-this-stencil-js-jest-test
  // It seems jsdom does not properly implement assignedElements.
  // one fix would be to change production code, but the this fucntion seems stable, so seems to be rather a testing issue:
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
  beforeAll(() => {
    Object.defineProperty(MockHTMLElement.prototype, 'assignedElements', {
      value: () => [], // `jest.fn()` works as well, but will result in just one shared function for all elements
      configurable: true,
      writable: true,
    });
    Object.defineProperty(MockHTMLElement.prototype, 'assignedNodes', {
      value: () => [],
      configurable: true,
      writable: true,
    });
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [SixForm],
      html: `
        <six-form>
         <six-input name="name" type="text" label="Name" required></six-input>
        </six-form>`,
    });

    expect(page.root).toEqualHtml(`
     <six-form>
      <mock:shadow-root>
        <div class="form" part="base" role="form">
         <slot></slot>
        </div>
       </mock:shadow-root>
       <six-input label="Name" name="name" required="" type="text"></six-input>
      </six-form>
    `);
  });
});
