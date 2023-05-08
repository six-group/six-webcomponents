import { FormControl, ValidatorFn } from '@angular/forms';

export const customMessage = (validator: ValidatorFn, message: string) => (control: FormControl) => {
  if (validator(control)) {
    return { [message]: true };
  }
  return null;
};
