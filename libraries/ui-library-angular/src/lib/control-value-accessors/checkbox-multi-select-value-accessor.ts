import { Directive, ElementRef, HostListener, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: '[sixMultiple]',
  standalone: false,
})
export class SixMultipleDirective {}

// Accessor applies only when the SixMultipleDirective attribute is present
@Directive({
  selector: 'six-checkbox[sixMultiple]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxMultiSelectValueAccessor,
      multi: true,
    },
  ],
  standalone: false,
})
export class CheckboxMultiSelectValueAccessor<T extends string = string> extends ValueAccessor {
  @Input({ required: true }) value!: T;

  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('change', ['$event.target'])
  onHostChange(el: HTMLSixCheckboxElement) {
    const checked = el.checked;
    const current = this.ngControl?.value;
    if (!current) return;

    const set = new Set<T>(current);
    if (checked) {
      set.add(this.value);
    } else {
      set.delete(this.value);
    }

    this.handleValueChange(el, Array.from(set));
  }

  override writeValue(values: T[]): void {
    const arr = Array.isArray(values) ? (values as T[]) : [];
    const checkbox = this.el.nativeElement as HTMLSixCheckboxElement;
    checkbox.checked = arr.includes(this.value);
    this.updateValidation();
  }

  override setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }
}
