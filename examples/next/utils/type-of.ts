const typeOf = (value?: unknown) => Object.prototype.toString.call(value).slice(8, -1);

const typeIs =
  <T>(expected: string) =>
  (value?: unknown): value is T =>
    typeOf(value) === expected;

export const Is = {
  Object: typeIs<Object>('Object'),
};
