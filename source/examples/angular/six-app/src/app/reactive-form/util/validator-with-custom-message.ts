import { AbstractControl, ValidationErrors } from '@angular/forms';

export const validatorWithCustomMessage =
  (validator: (control: AbstractControl) => ValidationErrors | null, message: string) =>
  (control: AbstractControl): ValidationErrors | null => {
    return validator(control) ? { [message]: true } : null;
  };
