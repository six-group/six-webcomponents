import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Type } from '@angular/core';

export const valueAccessorOf = <ValueAccessor extends ControlValueAccessor>(valueAccessor: Type<ValueAccessor>) => {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => valueAccessor),
    multi: true,
  };
};
