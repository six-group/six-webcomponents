import { MonoTypeOperatorFunction } from 'rxjs';
import { delay } from 'rxjs/operators';

export const fetchDelay = <T>(): MonoTypeOperatorFunction<T> => delay(0);
