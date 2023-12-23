//
// Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
// string. This is useful because we can't use slot.textContent as an alternative.
//
export function getTextContent(slot?: HTMLSlotElement): string {
  const nodes = slot != null ? slot.assignedNodes({ flatten: true }) : [];
  let text = '';

  [...nodes].map((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });

  return text;
}

//
// Determines whether an element has a slot. If name is specified, the function will look for a corresponding named
// slot, otherwise it will look for a "default" slot (e.g. a non-empty text node or an element with no slot attribute).
//
export function hasSlot(el: HTMLElement, name?: string): boolean {
  // Look for a named slot
  if (name != null && name !== '') {
    return el.querySelector(`[slot="${name}"]`) !== null;
  }

  // Look for a default slot
  return Array.from(el.childNodes).some((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent?.trim() !== '') {
      return true;
    }

    if (node.nodeType === node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      if (!el.hasAttribute('slot')) {
        return true;
      }
    }

    return false;
  });
}

export function getSlot(element: ParentNode | null | undefined, slotName: string): HTMLElement | null {
  if (element == null) return null;
  return element.querySelector(`[slot="${slotName}"]`);
}
