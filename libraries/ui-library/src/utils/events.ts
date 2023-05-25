const eventInitDict = { bubbles: true, cancelable: true };

export const Events = {
  focus: (el: Element) => el.dispatchEvent(new FocusEvent('focus', eventInitDict)),
  blur: (el: Element) => el.dispatchEvent(new FocusEvent('blur', eventInitDict)),
  input: (el: Element) => el.dispatchEvent(new InputEvent('input', eventInitDict)),
  change: (el: Element) => el.dispatchEvent(new InputEvent('change', eventInitDict)),
};
