export const equal = <T extends Record<string, unknown>>(a: T, b: T) => {
  const keys = Array.from(new Set([...Object.keys(a), ...Object.keys(b)]));
  return keys.every((key) => a[key] === b[key]);
};
