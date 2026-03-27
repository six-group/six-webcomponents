import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-input:not([type=number]),six-textarea',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true,
    },
  ],
  standalone: false,
})
export class TextValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('input', ['$event.target'])
  handleInputEvent(el: EventTarget | null): void {
    if (el) {
      this.handleValueChange(el as HTMLElement, (el as HTMLSixInputElement).value);
    }
  }
}
