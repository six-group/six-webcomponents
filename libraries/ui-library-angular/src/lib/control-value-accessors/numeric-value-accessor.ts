import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-input[type=number]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessor,
      multi: true,
    },
  ],
})
export class NumericValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('input', ['$event.target'])
  handleInputEvent(el: HTMLSixInputElement): void {
    this.handleValueChange(el, el.value);
  }

  override registerOnChange(fn: (_: number | null) => void): void {
    super.registerOnChange((value: string) => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
