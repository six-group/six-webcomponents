import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-datepicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatepickerValueAccessor,
      multi: true,
    },
  ],
})
export class DatepickerValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('change', ['$event.target'])
  handleChangeEvent(el: HTMLSixDatepickerElement): void {
    this.handleValueChange(el, el.value);
  }
}
