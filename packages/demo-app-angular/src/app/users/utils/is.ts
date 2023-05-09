export const Invalid = {
  Term: (value?: unknown): value is undefined => typeof value !== 'string' || value.length < 1,
};
