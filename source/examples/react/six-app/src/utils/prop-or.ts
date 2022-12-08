// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const byKey = (k: string) => <T extends unknown>(o = {}, defaults: T): T => (o as any)[k] || defaults;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const propOr = <T extends unknown>(o = {}, defaults: T) => (k: string): T => (o as any)[k] || defaults;
