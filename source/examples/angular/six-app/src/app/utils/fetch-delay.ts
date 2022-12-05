import { MonoTypeOperatorFunction } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '~/environments/environment';

export const fetchDelay = <T>(): MonoTypeOperatorFunction<T> => delay(environment.delay || 0);
