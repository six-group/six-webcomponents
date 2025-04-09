import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-date',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateValueAccessor,
      multi: true,
    },
  ],
})
export class DateValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('change', ['$event.target'])
  handleInputEvent(el: HTMLSixInputElement): void {
    this.handleValueChange(el, el.value);
  }

  override writeValue(value: any): void {
    this.el.nativeElement.value = value == null ? '' : value;
    this.updateValidation();
  }
}
