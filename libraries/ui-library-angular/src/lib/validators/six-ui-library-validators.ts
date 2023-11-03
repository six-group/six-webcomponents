import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export class SixUiLibraryValidators {
  static minDate(mindate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null) return null;
      const actualDate: Date | null = control.value as Date;
      return actualDate.getTime() >= mindate.getTime() ? null : { mindate: { mindate, actual: actualDate } };
    };
  }

  static maxDate(maxdate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null) return null;
      const actualDate: Date | null = control.value as Date;
      return actualDate.getTime() <= maxdate.getTime() ? null : { maxdate: { maxdate, actual: actualDate } };
    };
  }

  static allowedDates(allowedDates: (date: Date) => boolean = () => true): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null) return null;

      const allowed = allowedDates(control.value);
      return allowed ? null : { invaliddate: { actual: control.value } };
    };
  }
}

@Directive({
  selector: 'six-datepicker[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDateValidator, multi: true }],
})
export class MinDateValidator implements Validator {
  @Input() min?: Date | null;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.min != null) {
      return SixUiLibraryValidators.minDate(this.min)(control);
    }
    return null;
  }
}

@Directive({
  selector: 'six-datepicker[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDateValidator, multi: true }],
})
export class MaxDateValidator implements Validator {
  @Input() max?: Date | null;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.max != null) {
      return SixUiLibraryValidators.maxDate(this.max)(control);
    }
    return null;
  }
}

@Directive({
  selector: 'six-datepicker[allowedDates]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AllowedDatesValidator, multi: true }],
})
export class AllowedDatesValidator implements Validator {
  @Input() allowedDates: (date: Date) => boolean = () => true;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return SixUiLibraryValidators.allowedDates(this.allowedDates)(control);
  }
}

@Directive({
  selector: 'six-input[type=number][min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidator, multi: true }],
})
export class MinValidator implements Validator {
  @Input() min!: number | string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return Validators.min(toFloat(this.min))(control);
  }
}

@Directive({
  selector: 'six-input[type=number][max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidator, multi: true }],
})
export class MaxValidator implements Validator {
  @Input() max!: number | string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return Validators.max(toFloat(this.max))(control);
  }
}

function toFloat(value: string | number): number {
  return typeof value === 'number' ? value : parseFloat(value);
}
