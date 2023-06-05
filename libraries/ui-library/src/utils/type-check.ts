export const isString = (value: unknown): value is string => typeof value === 'string';

// only use '==' instead of '===' to also catch undefined and void
export const isNil = (value: unknown): value is undefined | null => value == null;

export const isDate = (value: unknown): value is Date => value instanceof Date;

export const isNumber = (value: unknown): value is number => value === 'number';
