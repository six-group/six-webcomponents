import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

/**
 * This directive intercepts the ngSubmit event of an Angular form and introduces
 * a supplementary event named sixSubmit. The sixSubmit event is triggered exclusively
 * when the form is valid. In cases where the form is considered invalid, this directive
 * takes proactive actions by marking all form controls as touched and dirty. Additionally,
 * it shifts the focus to the initial invalid form element, facilitating quick error
 * resolution.
 *
 * To utilize this directive, apply it to an Angular form.
 * ```html
 * <form [formGroup]="form" sixForm (sixSubmit)="onSubmit($event)">
 *   <!-- form content -->
 * </form>
 * ```
 *
 * For users needing greater flexibility in determining when error messages are displayed,
 * or for those who prefer not to rely solely on the form submission event,
 * an alternative is to use the SixFormUtilDirective.
 */
@Directive({
  selector: 'form[sixForm]',
})
export class SixFormDirective {
  /**
   * Emits an event when the form is valid and the form submission has been triggered.
   */
  @Output() sixSubmit = new EventEmitter<SubmitEvent>();

  @HostListener('ngSubmit', ['$event'])
  onNgSubmit(event: SubmitEvent): void {
    if (this.formGroupDirective.invalid) {
      focusInvalidField(this.formGroupDirective, this.elementRef);
    } else {
      this.sixSubmit.emit(event);
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>, private formGroupDirective: FormGroupDirective) {}
}

/**
 * This directive provides a utility method, that marks all form controls
 * as touched and dirty, and focuses the first invalid form element.
 *
 * To utilize this directive, apply it to an Angular form.
 * ```html
 * <form [formGroup]="form" sixFormUtil (ngSubmit)="onSubmit($event)">
 *   <!-- form content -->
 * </form>
 * ```
 *
 * Then, get a reference to the directive and invoke `focusInvalidField()` if the
 * form is invalid:
 * ```ts
 * @ViewChild(SixFormUtilDirective) sixFormUtil!: SixFormUtilDirective;
 * // ...
 * onSubmit() {
 *   if (this.form.invalid) {
 *     this.sixFormUtil.focusInvalidField();
 *   } else {
 *      // ...
 *   }
 * }
 * ```
 */
@Directive({
  selector: '[sixFormUtil]',
})
export class SixFormUtilDirective {
  constructor(private elementRef: ElementRef<HTMLElement>, private formGroupDirective: FormGroupDirective) {}

  /** markAllControlsAsDirty(Object.values(formGroup.controls));
   * Marks all form controls as touched and dirty, and focuses the first
   * invalid form element.
   */
  public focusInvalidField() {
    focusInvalidField(this.formGroupDirective, this.elementRef);
  }
}

function focusInvalidField(formGroupDirective: FormGroupDirective, formElement: ElementRef<HTMLElement>) {
  formGroupDirective.form.markAllAsTouched();
  markAllAsDirty([formGroupDirective.form]);

  const invalidElement = getInvalidElement(formElement.nativeElement);
  if ('setFocus' in invalidElement && typeof invalidElement?.setFocus === 'function') {
    invalidElement.setFocus();
  }
  if ('focus' in invalidElement && typeof invalidElement?.focus === 'function') {
    invalidElement.focus();
  }
}

function getInvalidElement(parent: Element): Element {
  const invalidElement = parent.querySelector('.ng-invalid');
  if (invalidElement == null) {
    return parent;
  }
  return getInvalidElement(invalidElement);
}

function markAllAsDirty(controls: AbstractControl[]): void {
  controls.forEach((control) => {
    if (control instanceof FormControl) {
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      control.markAsDirty({ onlySelf: true });
      markAllAsDirty(Object.values(control.controls));
    } else if (control instanceof FormArray) {
      control.markAsDirty({ onlySelf: true });
      markAllAsDirty(control.controls);
    }
  });
}
