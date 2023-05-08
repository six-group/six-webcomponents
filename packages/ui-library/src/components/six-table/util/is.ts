export const Invalid = {
  Term: (value?: unknown) => typeof value !== 'string' || value.length < 1,
};
