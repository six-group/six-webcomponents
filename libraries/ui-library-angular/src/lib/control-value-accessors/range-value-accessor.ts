import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-range',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RangeValueAccessor,
      multi: true,
    },
  ],
  standalone: false,
})
export class RangeValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('input', ['$event.target'])
  handleInputEvent(el: EventTarget | null): void {
    if (el) {
      this.handleValueChange(el as HTMLElement, (el as HTMLSixRangeElement).value);
    }
  }

  override registerOnChange(fn: (_: number | null) => void): void {
    super.registerOnChange((value: string) => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
