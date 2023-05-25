import { Directive } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms';
import { valueAccessorOf } from '~/app/shared/directives/value-accessor-of';

@Directive({
  selector: 'six-radio',
  providers: [valueAccessorOf(SixRadioValueAccessor)],
})
export class SixRadioValueAccessor extends RadioControlValueAccessor {}
