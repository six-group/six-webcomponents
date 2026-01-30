import { Directive, ElementRef, HostListener, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: '[six-checkbox-group]',
  standalone: false,
})
export class SixCheckboxGroupDirective {}

// Accessor applies only when the SixCheckboxGroupDirective attribute is present
@Directive({
  selector: 'six-checkbox[six-checkbox-group]',
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
  onHostChange(el: EventTarget | null) {
    if (!el) return;
    const checkbox = el as HTMLSixCheckboxElement;
    const checked = checkbox.checked;
    const current = this.ngControl?.value;
    if (!current) return;

    const set = new Set<T>(current);
    checked ? set.add(this.value) : set.delete(this.value);

    this.handleValueChange(el as HTMLElement, Array.from(set));
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
