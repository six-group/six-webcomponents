/**
 * If the popup is hoisted we popup is hoisted its position will change to fix to not be clipped of by a containing container.
 * To render the popup correctly we render it normally, and then assign this screenposition to the fixed popup
 */
export function adjustPopupForHoisting(
  hoist: boolean,
  popup: HTMLElement | undefined,
  inputElement: HTMLElement | undefined,
  wrapper: HTMLElement | undefined,
  minPopupHeight: number,
  dropdownDirectionChanged: (isUp: boolean) => void
) {
  if (!hoist || popup == null || inputElement == null || wrapper == null) {
    return;
  }
  // take a snapshot of normally rendered popup
  const popupDimensions = setPopupAsFixPosition(popup);
  const inputDimensions = inputElement.getBoundingClientRect();
  const inputTop = inputDimensions.top;
  const popupTop = popupDimensions.top;

  const isUp = calcIsDropDownContentUp(inputElement, wrapper, minPopupHeight);
  // check screen position to check whether the popup should be moved above or below the trigger element
  if (isUp && inputTop < popupTop) {
    //  move popup above input field if datepicker is at bottom of screen
    popup.style.top = `${popupTop - popupDimensions.height - inputDimensions.height}px`;
  }
  dropdownDirectionChanged(isUp);
}

/*
 * For small screens the datepicker popup could be cut-off even though there might still be space within the viewport.
 * This is because the popup is always aligned with the trigger input field. However in the scenario of small screens
 * we should reposition the popup to use the space available.
 */
export function adjustPopupForSmallScreens(popup?: HTMLElement) {
  // execute after dropdown has been rendered to make sure the popup reference is correctly set
  setTimeout(() => {
    if (popup == null) {
      return;
    }
    const popupDimensions = popup.getBoundingClientRect();
    if (
      popupDimensions.y < 0 &&
      window.innerHeight - popupDimensions.height > 0 &&
      Math.abs(popupDimensions.y) <= popupDimensions.height
    ) {
      // handle case where popup is cut-off on top but there is still space available
      setPopupAsFixPosition(popup);
      popup.style.top = '0px';
    } else if (
      window.innerHeight < popupDimensions.y + popupDimensions.height &&
      window.innerHeight > popupDimensions.height &&
      Math.abs(popupDimensions.y - window.innerHeight) <= popupDimensions.height
    ) {
      // handle case where popup is cut-off at the bottom but there is still space available above
      // apply screen position to fixed popup
      setPopupAsFixPosition(popup);
      popup.style.top = `${window.innerHeight - popupDimensions.height}px`;
    }

    if (
      window.innerWidth < popupDimensions.x + popupDimensions.width &&
      window.innerWidth > popupDimensions.width &&
      Math.abs(popupDimensions.x - window.innerWidth) <= popupDimensions.width
    ) {
      // handle case where popup is cut-off to the right
      setPopupAsFixPosition(popup);
      popup.style.left = `${window.innerWidth - popupDimensions.width}px`;
    }
  }, 0);
}

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

export function setPopupAsFixPosition(popup: HTMLElement): DOMRect {
  const popupDimensions = popup.getBoundingClientRect();
  popup.style.position = 'fixed';
  popup.style.top = popupDimensions['top'] + 'px';
  popup.style.left = popupDimensions['left'] + 'px';
  popup.style.width = popupDimensions['width'] + 'px';
  popup.style.height = popupDimensions['height'] + 'px';
  return popupDimensions;
}

/*
 * The position of the hoisted datepicker needs to be correctly calculated since the position changes to fixed.
 * Thus if the user scrolls or adjusts the screen size we need to recalculate the datepicker position.
 */
export function movePopup(
  hoist: boolean,
  open: boolean,
  popup: HTMLElement | undefined,
  inputElement: HTMLElement | undefined,
  wrapper: HTMLElement | undefined,
  minPopupHeight: number
) {
  if (!hoist || !open || popup == null || inputElement == null || wrapper == null) {
    return;
  }
  const popupBoundingClientRect = popup.getBoundingClientRect();
  const popupHeight = popupBoundingClientRect.height;
  const inputBoundingClientRect = inputElement.getBoundingClientRect();
  const inputTop = inputBoundingClientRect.top;
  const inputHeight = inputBoundingClientRect.height;

  const isUp = calcIsDropDownContentUp(inputElement, wrapper, minPopupHeight);

  if (isUp) {
    popup.style.top = `${inputTop - popupHeight}px`;
  } else {
    popup.style.top = `${inputTop + inputHeight}px`;
  }
}
