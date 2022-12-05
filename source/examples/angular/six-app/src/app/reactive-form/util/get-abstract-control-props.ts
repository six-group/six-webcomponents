import { AbstractControl } from '@angular/forms';

const props: Array<keyof AbstractControl> = ['errors', 'pristine', 'status', 'value'];

export const getAbstractControlProps = (control: AbstractControl) => {
  return props.reduce((acc, key) => {
    return { ...acc, [key]: control[key] };
  }, {});
};
