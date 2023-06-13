import { Is } from './type-of';
import { propOr } from './prop-or';

export const deepEquals = <A extends Object, B extends Object>(a: A, b: B): boolean => {
  const keys = Array.from(new Set([...Object.keys(a), ...Object.keys(b)]));
  return keys.every((key) => {
    const as = propOr(a, undefined)(key);
    const bs = propOr(b, undefined)(key);
    if (Is.Object(as) && Is.Object(bs)) {
      return deepEquals(as, bs);
    } else {
      return as === bs;
    }
  });
};
