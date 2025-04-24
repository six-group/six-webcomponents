export function calcIsDropDownContentUp(
  inputElement: HTMLElement,
  wrapper: HTMLElement,
  minPopupHeight: number
): boolean {
  const inputBoundingRect = inputElement.getBoundingClientRect();
  const wrapperBoundingRect = wrapper.getBoundingClientRect();
  const popupHeight = Math.max(wrapperBoundingRect.height, minPopupHeight);
  const moreSpaceInTop = inputBoundingRect.y > window.innerHeight / 2;
  return moreSpaceInTop && window.innerHeight < inputBoundingRect.bottom + popupHeight;
}
