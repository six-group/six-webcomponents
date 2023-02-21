import { FormControl, Validators } from '@angular/forms';
import { customMessage } from '../../utils/custom-message';

export const CustomValidators = {
  requiredTrue: customMessage(Validators.requiredTrue, 'This field should be checked.'),
  required: customMessage(Validators.required, 'This field is required.'),
  email: customMessage(Validators.email, 'Email is not valid.'),
  match: (name: string) => (control: FormControl) => {
    if (control.parent?.value[name] !== control.value) {
      return { 'Password does not match.': true };
    }
    return null;
  },
  undefined: () => null,
};
