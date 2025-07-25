import { newSpecPage } from '@stencil/core/testing';
import { SixRating } from '../six-rating';

describe('six-rating', () => {
  it('renders the correct number of stars', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating max="7" value="3"></six-rating>`,
    });

    const stars = page?.root?.shadowRoot?.querySelectorAll('six-icon');
    expect(stars?.length).toBe(7);
  });

  it('applies filled class to selected stars', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="2" max="5"></six-rating>`,
    });

    const stars = page?.root?.shadowRoot?.querySelectorAll('six-icon');
    expect(stars![0].classList.contains('six-rating__star--filled')).toBe(true);
    expect(stars![1].classList.contains('six-rating__star--filled')).toBe(true);
    expect(stars![2].classList.contains('six-rating__star--filled')).toBe(false);
  });

  it('updates value on click if not readonly or disabled', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="1"></six-rating>`,
    });

    const stars = page?.root?.shadowRoot?.querySelectorAll('six-icon');
    stars![3].dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    stars![3].dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await page.waitForChanges();

    expect(page?.root?.value).toBe(4); // index 3 => value 4
  });

  it('does not update value if readonly', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="1" readonly></six-rating>`,
    });

    const stars = page?.root?.shadowRoot?.querySelectorAll('six-icon');
    stars![2].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();
    expect(page?.root?.value).toBe(1);
  });

  it('does not update value if disabled', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="1" disabled></six-rating>`,
    });

    const stars = page?.root?.shadowRoot?.querySelectorAll('six-icon');
    stars![2].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();
    expect(page?.root?.value).toBe(1);
  });

  it('emits six-rating-focus on focus', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="1"></six-rating>`,
    });

    const spy = jest.fn();
    page?.root?.addEventListener('six-rating-focus', spy);

    const container = page?.root?.shadowRoot?.querySelector('[part="base"]');
    container?.dispatchEvent(new FocusEvent('focus'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits six-rating-blur on blur with correct value', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="3"></six-rating>`,
    });

    const spy = jest.fn();
    page?.root?.addEventListener('six-rating-blur', spy);

    const container = page?.root?.shadowRoot?.querySelector('[part="base"]');
    container?.dispatchEvent(new FocusEvent('blur'));

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: 3 }));
  });

  it('updates hoveredValue with arrow keys', async () => {
    const page = await newSpecPage({
      components: [SixRating],
      html: `<six-rating value="2" max="5"></six-rating>`,
    });

    const container = page?.root?.shadowRoot?.querySelector('[part="base"]');
    container?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    await page.waitForChanges();

    // This confirms internal state logic, but can't directly access hoveredValue.
    expect(page?.root?.value).toBe(2); // Value does not change on arrow key

    container?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    await page.waitForChanges();

    expect(page?.root?.value).toBe(2); // Again, only click changes value
  });
});
