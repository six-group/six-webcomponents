export const byKey =
  (k: string) =>
  <T>(o = {}, defaults: T): T =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (o as any)[k] || defaults;

export const propOr =
  <T>(o = {}, defaults: T) =>
  (k: string): T =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (o as any)[k] || defaults;
