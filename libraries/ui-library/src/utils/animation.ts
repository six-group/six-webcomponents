/**
 * Animates a given `element` from the position and dimension of `fromElement` to
 * its current position and dimension. Can be useful to implement the FLIP animation technique.
 *
 * @see {@link https://css-tricks.com/animating-layouts-with-the-flip-technique/} for details on the FLIP technique.
 *
 * @param {Element} element - The element to animate.
 * @param {Element} fromElement - The element representing the initial position and dimensions.
 * @param {KeyframeAnimationOptions} [options={ duration: 150, easing: 'ease', fill: 'both' }] - Optional animation parameters.
 *
 */
export function flipAnimate(
  element: Element,
  fromElement: Element,
  options: KeyframeAnimationOptions = {
    duration: 150,
    easing: 'ease',
    fill: 'both',
  }
) {
  const dimensionsTo = fromElement.getBoundingClientRect();
  const dimensionsFrom = element.getBoundingClientRect();

  const deltaX = dimensionsTo.left - dimensionsFrom.left;
  const deltaY = dimensionsTo.top - dimensionsFrom.top;
  const deltaW = dimensionsTo.width / dimensionsFrom.width;
  const deltaH = dimensionsTo.height / dimensionsFrom.height;

  element.animate(
    [
      {
        transformOrigin: 'top left',
        transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`,
      },
      {
        transformOrigin: 'top left',
        transform: 'none',
      },
    ],
    options
  );
}
