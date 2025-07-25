import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-timepicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimepickerValueAccessor,
      multi: true,
    },
  ],
  standalone: false,
})
export class TimepickerValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('change', ['$event.target'])
  handleChangeEvent(el: HTMLSixTimepickerElement): void {
    this.handleValueChange(el, el.value);
  }
}
