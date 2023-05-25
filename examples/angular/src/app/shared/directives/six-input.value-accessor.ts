import { Directive, forwardRef } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { valueAccessorOf } from '~/app/shared/directives/value-accessor-of';

const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SixInputValueAccessor),
  multi: true,
};

@Directive({
  selector: 'six-input,six-select,six-datepicker,six-checkbox',
  providers: [valueAccessorOf(SixInputValueAccessor)],
})
export class SixInputValueAccessor extends DefaultValueAccessor {}
