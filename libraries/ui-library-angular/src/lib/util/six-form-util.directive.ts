import { Directive, ElementRef, Injector } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[sixFormUtil]',
})
export class SixFormUtilDirective {
  constructor(private elementRef: ElementRef<HTMLElement>, private injector: Injector) {}

  public focusInvalidField() {
    const formGroupDirective = this.injector.get(FormGroupDirective);
    if (formGroupDirective) {
      formGroupDirective.form.markAllAsTouched();
      markAllAsDirty(formGroupDirective.form);
      const invalidField: any = this.elementRef.nativeElement.querySelector('.ng-invalid');
      if (typeof invalidField?.setFocus === 'function') {
        invalidField.setFocus();
      } else if (typeof invalidField?.focus === 'function') {
        invalidField?.focus();
      }
    }
  }
}

function markAllAsDirty(formGroup: FormGroup) {
  function markAllControlsAsDirty(controls: AbstractControl[]): void {
    controls.forEach((control) => {
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        markAllControlsAsDirty(Object.values(control.controls));
      } else if (control instanceof FormArray) {
        markAllControlsAsDirty(control.controls);
      }
    });
  }
  markAllControlsAsDirty(Object.values(formGroup.controls));
}
