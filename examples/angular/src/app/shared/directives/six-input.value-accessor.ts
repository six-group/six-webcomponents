import { Directive } from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';
import { valueAccessorOf } from '~/app/shared/directives/value-accessor-of';

@Directive({
  selector: 'six-input,six-select,six-datepicker,six-checkbox,six-datepicker',
  providers: [valueAccessorOf(SixInputValueAccessor)],
})
export class SixInputValueAccessor extends DefaultValueAccessor {}
