import { AfterViewInit, Directive, ElementRef, HostListener, inject, Injector, OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Language, languages, ValidationError } from '@six-group/ui-library';
import { ValidationMessagesService } from '../services/validation-messages.service';

@Directive()
export class ValueAccessor implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private statusChanges?: Subscription;
  private ngControl?: NgControl;
  private initialErrorText?: string;
  private validationMessagesService = inject(ValidationMessagesService);

  constructor(protected injector: Injector, protected el: ElementRef) {}

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
    this.updateValidation();
  }

  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the input event is fired. For select components this is called
   * when the change event is fired.
   *
   * This also updates the form status on the element by setting the 'invalid' property to true/false.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el: HTMLElement, value: any): void {
    if (el === this.el.nativeElement) {
      this.onChange(value);
      this.updateValidation();
    }
  }

  @HostListener('blur', ['$event.target'])
  _handleBlurEvent(el: any): void {
    if (el === this.el.nativeElement) {
      this.onTouched();
      this.updateValidation();
    }
  }

  updateValidation() {
    nextTick(() => {
      if (this.ngControl?.control == null) return;

      const element = this.el.nativeElement as HTMLSixInputElement;
      const control = this.ngControl?.control;

      const invalid = !control.valid && control.dirty && control.touched;
      let errorTexts;
      if (invalid) {
        errorTexts = this.initialErrorText || this.getErrorTexts(control);
      }
      element.invalid = invalid;
      element.errorText = errorTexts ?? '';
    });
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  ngOnDestroy(): void {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.initialErrorText = this.el.nativeElement?.errorText?.trim() || undefined;
    try {
      this.ngControl = this.injector.get<NgControl>(NgControl);
    } catch {
      /* No FormControl or ngModel binding */
    }
    if (!this.ngControl) {
      return;
    }

    // Listen for changes in validity, disabled, or pending states
    if (this.ngControl.statusChanges) {
      this.statusChanges = this.ngControl.statusChanges.subscribe(() => this.updateValidation());
    }

    /**
     * TODO FW-2787: Remove this in favor of https://github.com/angular/angular/issues/10887
     * whenever it is implemented.
     */
    const formControl = this.ngControl.control as any;
    if (formControl) {
      const methodsToPatch = ['markAsTouched', 'markAllAsTouched', 'markAsUntouched', 'markAsDirty', 'markAsPristine'];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== 'undefined') {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params: any[]) => {
            oldFn(...params);
            this.updateValidation();
          };
        }
      });
    }
  }

  getErrorTexts(control: AbstractControl): string[] {
    if (control.errors == null) {
      console.warn('no errors for invalid control', control);
      return [];
    }

    const errorList = Object.entries(control.errors);
    if (errorList.length <= 0) {
      console.warn('no errors for invalid control', control);
      return [];
    }

    return errorList.map((error) => {
      const [key, value] = error;
      return (
        this.validationMessagesService.getErrorMessage(getLanguage(), { key: key, ...value } as ValidationError) ?? key
      );
    });
  }
}

function getLanguage(): Language {
  const documentLang = document.documentElement.lang as Language;
  if (languages.includes(documentLang)) {
    return documentLang;
  }
  return 'de';
}

declare const __zone_symbol__requestAnimationFrame: any;
declare const requestAnimationFrame: any;
const nextTick = (h: any): any => {
  if (typeof __zone_symbol__requestAnimationFrame === 'function') {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
