import { E2EPage } from '@stencil/core/testing';

export const selectByTestId = async (page: E2EPage, testId: string) => {
  const found = await page.evaluateHandle((testId: string) => {
    const isSlotElement = (value?: unknown): value is HTMLSlotElement =>
      value && (value as Element).tagName.toLowerCase() === 'slot';

    const byTestId = (el: Element) => {
      if (el.getAttribute('data-testid') === testId) {
        return el;
      }
      if (isSlotElement(el)) {
        for (const child of el.assignedElements({ flatten: true })) {
          const found = byTestId(child);
          if (found) {
            return found;
          }
        }
      }
      for (const child of el.children || []) {
        const found = byTestId(child);
        if (found) {
          return found;
        }
      }
      for (const child of el.shadowRoot?.children || []) {
        const found = byTestId(child);
        if (found) {
          return found;
        }
      }
    };

    return byTestId(document.body);
  }, testId);

  if (found) {
    return found.asElement();
  } else {
    return null;
  }
};
