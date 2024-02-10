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

/**
 * Animates an element using keyframes. Returns a promise that resolves after the animation completes or gets canceled.
 */
export function animateTo(el: HTMLElement, keyframes: Keyframe[], options?: KeyframeAnimationOptions) {
  return new Promise((resolve) => {
    if (options?.duration === Infinity) {
      throw new Error('Promise-based animations must be finite.');
    }

    const animation = el.animate(keyframes, {
      ...options,
      duration: prefersReducedMotion() ? 0 : options!.duration,
    });

    animation.addEventListener('cancel', resolve, { once: true });
    animation.addEventListener('finish', resolve, { once: true });
  });
}

/** Parses a CSS duration and returns the number of milliseconds. */
export function parseDuration(delay: number | string) {
  delay = delay.toString().toLowerCase();

  if (delay.indexOf('ms') > -1) {
    return parseFloat(delay);
  }

  if (delay.indexOf('s') > -1) {
    return parseFloat(delay) * 1000;
  }

  return parseFloat(delay);
}

/** Tells if the user has enabled the "reduced motion" setting in their browser or OS. */
export function prefersReducedMotion() {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  return query.matches;
}

/**
 * Stops all active animations on the target element. Returns a promise that resolves after all animations are canceled.
 */
export function stopAnimations(el: HTMLElement) {
  return Promise.all(
    el.getAnimations().map((animation) => {
      return new Promise((resolve) => {
        animation.cancel();
        requestAnimationFrame(resolve);
      });
    })
  );
}

/**
 * We can't animate `height: auto`, but we can calculate the height and shim keyframes by replacing it with the
 * element's scrollHeight before the animation.
 */
export function shimKeyframesHeightAuto(keyframes: Keyframe[], calculatedHeight: number) {
  return keyframes.map((keyframe) => ({
    ...keyframe,
    height: keyframe.height === 'auto' ? `${calculatedHeight}px` : keyframe.height,
  }));
}
