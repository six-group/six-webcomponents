//
// Determines if the browser supports focus({ preventScroll })
//
export const isPreventScrollSupported = () => {
  let supported = false;

  const element = document.createElement('div');
  element.focus &&
    element.focus({
      get preventScroll() {
        supported = true;
        return false;
      },
    });

  return supported;
};
