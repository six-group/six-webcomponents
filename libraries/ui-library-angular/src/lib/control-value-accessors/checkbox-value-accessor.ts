import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'six-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxValueAccessor,
      multi: true,
    },
  ],
})
export class CheckboxValueAccessor extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('change', ['$event.target'])
  handleChangeEvent(el: HTMLSixCheckboxElement): void {
    this.handleValueChange(el, el.checked);
  }

  override writeValue(value: any): void {
    this.el.nativeElement.checked = value === true;
    this.updateValidation();
  }
}
