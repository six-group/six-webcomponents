export interface MenuItem {
  value: string;
}

export function getValue(value: unknown, multiple: boolean, menuItems: MenuItem[]): string | string[] {
  if (multiple) {
    if (Array.isArray(value)) {
      return menuItems.filter((item) => value.includes(item.value)).map((item) => item.value);
    } else if (typeof value === 'string') {
      return menuItems.filter((item) => value === item.value).map((item) => item.value);
    } else {
      return [];
    }
  } else {
    if (typeof value === 'string') {
      return menuItems.find((item) => value === item.value)?.value ?? '';
    } else {
      return '';
    }
  }
}

export function isValidValue(value: unknown, multiple: boolean, menuItems: MenuItem[]): boolean {
  if (multiple) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true;
      }
      return menuItems.filter((item) => value.includes(item.value)).map((item) => item.value).length == value.length;
    } else if (typeof value === 'string') {
      if (value === '') {
        return true;
      }
      return menuItems.filter((item) => value === item.value).map((item) => item.value).length > 0;
    } else {
      return false;
    }
  }

  if (typeof value === 'string') {
    if (value === '') {
      return true;
    }
    return menuItems.find((item) => value === item.value) != null;
  } else {
    return false;
  }
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
