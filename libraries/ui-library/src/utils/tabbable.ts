export function isTabbable(el: HTMLElement) {
  const tabIndex = el.tabIndex;
  return tabIndex > -1;
}

export function getNearestTabbableElement(el: HTMLElement): HTMLElement | undefined {
  // Check the element
  if (isTabbable(el)) {
    return el;
  }

  // Check the element's shadow root
  if (el.shadowRoot != null) {
    const tabbableShadowChild = [...el.shadowRoot.children].find((e) => isTabbable(e as HTMLElement)) as HTMLElement;
    if (tabbableShadowChild != null) {
      return tabbableShadowChild;
    }
  }

  // Check the element's children
  if (el.children != null) {
    return [...el.children].map((e) => getNearestTabbableElement(e as HTMLElement)).at(0);
  }

  return undefined;
}
