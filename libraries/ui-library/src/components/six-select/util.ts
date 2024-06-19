export interface MenuItem {
  value: string;
}

export function getValue(value: unknown, multiple: boolean, menuItems: MenuItem[]): string | string[] {
  if (multiple) {
    if (Array.isArray(value)) {
      return getSelectedValues(value, menuItems);
    } else {
      return getSelectedValuesFromString(value, menuItems);
    }
  }

  return getSelectedMenuItem(value, menuItems)?.value ?? '';
}

export function isValidValue(value: unknown, multiple: boolean, menuItems: MenuItem[]): boolean {
  if (value === '') {
    return true;
  }

  if (multiple) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true;
      }
      return getSelectedValues(value, menuItems).length === value.length;
    }
    return getSelectedValuesFromString(value, menuItems).length > 0;
  }

  return getSelectedMenuItem(value, menuItems) != null;
}

export function convertToValidValue(value: unknown, multiple: boolean): string | string[] {
  if (multiple) {
    if (Array.isArray(value)) {
      return value.filter((element) => typeof element === 'string');
    } else if (typeof value === 'string' && value.length > 0) {
      return [value];
    } else {
      return [];
    }
  } else {
    if (typeof value === 'string') {
      return value;
    } else {
      return '';
    }
  }
}

export function convertToValidArrayValue(value: unknown): string[] {
  return convertToValidValue(value, true) as string[];
}

export function valueEquals(a: string | string[], b: string | string[]): boolean {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((element, index) => element === b[index]);
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }
  return false;
}

export function isValueEmpty(value: string | string[]): boolean {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return value === '';
}

function getSelectedValues(values: unknown[], menuItems: MenuItem[]): string[] {
  return menuItems.filter((menuItem) => values.includes(menuItem.value)).map((menuItem) => menuItem.value);
}

function getSelectedValuesFromString(value: unknown, menuItems: MenuItem[]): string[] {
  return menuItems.filter((menuItem) => value === menuItem.value).map((menuItem) => menuItem.value);
}

function getSelectedMenuItem(value: unknown, menuItems: MenuItem[]): MenuItem | undefined {
  return menuItems.find((item) => value === item.value);
}
