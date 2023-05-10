import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { SixTextarea } from '../six-textarea';

interface TypedSpecPage<T> extends Omit<SpecPage, 'root'> {
  root?: HTMLElement & T;
}

describe('six-textarea', () => {
  let page: TypedSpecPage<SixTextarea>;
  let textarea: HTMLTextAreaElement;

  beforeEach(async () => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    page = (await newSpecPage({
      components: [SixTextarea],
      html: `<six-textarea></six-textarea>`,
      supportsShadowDom: true,
    })) as TypedSpecPage<SixTextarea>;

    textarea = page.root.shadowRoot.querySelector('textarea');

    textarea.checkValidity = jest.fn();
  });

  it('renders', async () => {
    // then
    expect(page.root).toEqualHtml(`
      <six-textarea size="medium" value="">
        <mock:shadow-root>
         <div class="form-control form-control--medium" part="form-control">
           <label aria-hidden="true" class="form-control__label" htmlfor="textarea-1" id="textarea-label-1" part="label">
             <slot name="label"></slot>
           </label>
           <div class="form-control__input">
             <div class="textarea textarea--empty textarea--medium textarea--resize-vertical" part="base"><textarea aria-labelledby="textarea-label-1" class="textarea__control" id="textarea-1" part="textarea" rows="4" value=""></textarea>
             </div>
           </div>
           <div aria-hidden="true" class="form-control__error-text" id="input-error-text-1" part="error-text"></div>
           <div aria-hidden="true" class="form-control__help-text" id="textarea-help-text-1" part="help-text">
             <slot name="help-text"></slot>
           </div>
         </div>
       </mock:shadow-root>
     </six-textarea>
    `);
  });

  it('should properly dispatch blur event', async () => {
    const spy = jest.fn();
    page.root.addEventListener('six-textarea-blur', spy);
    await page.waitForChanges();

    // when
    textarea.dispatchEvent(new Event('blur'));
    await page.waitForChanges();

    // then
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: undefined,
        type: 'six-textarea-blur',
      })
    );

    // when
    page.root.value = 'some new value';
    await page.waitForChanges();
    textarea.dispatchEvent(new Event('blur'));
    await page.waitForChanges();

    // then
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: undefined,
        type: 'six-textarea-blur',
      })
    );
  });

  it('should properly dispatch focus event', async () => {
    const spy = jest.fn();
    page.root.addEventListener('six-textarea-focus', spy);
    await page.waitForChanges();

    // when
    textarea.dispatchEvent(new Event('focus'));
    await page.waitForChanges();

    // then
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: undefined,
        type: 'six-textarea-focus',
      })
    );

    // when
    page.root.value = 'some new value';
    await page.waitForChanges();
    textarea.dispatchEvent(new Event('focus'));
    await page.waitForChanges();

    // then
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: undefined,
        type: 'six-textarea-focus',
      })
    );
  });

  it('should properly dispatch input event', async () => {
    const spy = jest.fn();
    page.root.addEventListener('six-textarea-input', spy);
    await page.waitForChanges();

    // when
    textarea.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    // then
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: undefined,
        type: 'six-textarea-input',
      })
    );

    // when
    page.root.value = 'some new value';
    await page.waitForChanges();
    textarea.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    // then
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: undefined,
        type: 'six-textarea-input',
      })
    );
  });
});
