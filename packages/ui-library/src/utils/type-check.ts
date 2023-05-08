export const isString = (value: any): value is string => typeof value === 'string';

// only use '==' instead of '===' to also catch undefined and void
export const isNil = (value) => value == null;

export const isDate = (value): value is Date => value instanceof Date;

export const isNumber = (value): value is number => value === 'number';
