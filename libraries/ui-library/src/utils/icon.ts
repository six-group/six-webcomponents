export type IconLibrary = 'material-icons' | 'material-symbols';

let defaultLibrary: IconLibrary = 'material-icons';

/** Sets the global default for all <six-icon> instances that don't specify `library`. */
export function setDefaultIconLibrary(lib: IconLibrary) {
  defaultLibrary = lib;
}

/** Returns the global default (fallback is 'material-icons'). */
export function getDefaultIconLibrary(): IconLibrary {
  return defaultLibrary;
}
