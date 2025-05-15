import { scrollIntoView } from './scroll';

describe('scrollIntoView', () => {
  describe('vertical scrolling', () => {
    it('should scroll vertically if element is out of view', async () => {
      // given
      const element: Partial<HTMLElement> = {
        clientWidth: 320,
        clientHeight: 56,
        getBoundingClientRect: () =>
          ({
            top: 1744,
            left: 16,
          }) as DOMRect,
      };

      const mockScrollTo = jest.fn();
      const container: Partial<HTMLElement> = {
        scrollTop: 0,
        scrollLeft: 0,
        offsetWidth: 320,
        offsetHeight: 754,
        getBoundingClientRect: () =>
          ({
            top: 656,
            left: 16,
          }) as DOMRect,
        scrollTo: mockScrollTo,
      };

      // when
      scrollIntoView(element as HTMLElement, container as HTMLElement);

      // then
      expect(mockScrollTo).toHaveBeenCalledWith({
        top: 390,
        behavior: 'smooth',
      });
    });

    it('should not scroll vertically if element is in view', async () => {
      // given
      const element: Partial<HTMLElement> = {
        clientWidth: 320,
        clientHeight: 56,
        getBoundingClientRect: () =>
          ({
            top: 700,
            left: 16,
          }) as DOMRect,
      };

      const mockScrollTo = jest.fn();
      const container: Partial<HTMLElement> = {
        scrollTop: 0,
        scrollLeft: 0,
        offsetWidth: 320,
        offsetHeight: 754,
        getBoundingClientRect: () =>
          ({
            top: 656,
            left: 16,
          }) as DOMRect,
        scrollTo: mockScrollTo,
      };

      // when
      scrollIntoView(element as HTMLElement, container as HTMLElement);

      // then
      expect(mockScrollTo).not.toHaveBeenCalled();
    });
  });

  describe('horizontal scrolling', () => {
    it('should scroll horizontally if element is out of view', async () => {
      // given
      const element: Partial<HTMLElement> = {
        clientWidth: 320,
        clientHeight: 56,
        getBoundingClientRect: () =>
          ({
            top: 500,
            left: 330,
          }) as DOMRect,
      };

      const mockScrollTo = jest.fn();
      const container: Partial<HTMLElement> = {
        scrollTop: 0,
        scrollLeft: 0,
        offsetWidth: 320,
        offsetHeight: 754,
        getBoundingClientRect: () =>
          ({
            top: 656,
            left: 16,
          }) as DOMRect,
        scrollTo: mockScrollTo,
      };

      // when
      scrollIntoView(element as HTMLElement, container as HTMLElement, 'horizontal');

      // then
      expect(mockScrollTo).toHaveBeenCalledWith({
        left: 314,
        behavior: 'smooth',
      });
    });

    it('should not scroll vertically if element is in view', async () => {
      // given
      const element: Partial<HTMLElement> = {
        clientWidth: 320,
        clientHeight: 56,
        getBoundingClientRect: () =>
          ({
            top: 500,
            left: 16,
          }) as DOMRect,
      };

      const mockScrollTo = jest.fn();
      const container: Partial<HTMLElement> = {
        scrollTop: 0,
        scrollLeft: 0,
        offsetWidth: 320,
        offsetHeight: 754,
        getBoundingClientRect: () =>
          ({
            top: 656,
            left: 16,
          }) as DOMRect,
        scrollTo: mockScrollTo,
      };

      // when
      scrollIntoView(element as HTMLElement, container as HTMLElement, 'horizontal');

      // then
      expect(mockScrollTo).not.toHaveBeenCalled();
    });
  });
});
