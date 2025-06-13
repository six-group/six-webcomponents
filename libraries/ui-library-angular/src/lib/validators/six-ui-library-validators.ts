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

  static minDateIso(mindate: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === '') return null;
      const actualDate = control.value as string;
      return actualDate >= mindate ? null : { mindate: { mindate, actual: actualDate } };
    };
  }

  static maxDateIso(maxdate: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === '') return null;
      const actualDate = control.value as string;
      return actualDate <= maxdate ? null : { maxdate: { maxdate, actual: actualDate } };
    };
  }

  static allowedDatesIso(allowedDates: (date: string) => boolean = () => true): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === '') return null;

      const allowed = allowedDates(control.value);
      return allowed ? null : { invaliddate: { actual: control.value } };
    };
  }
}

@Directive({
  selector: 'six-datepicker[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDateValidator, multi: true }],
  standalone: false,
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
  standalone: false,
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
  standalone: false,
})
export class AllowedDatesValidator implements Validator {
  @Input() allowedDates: (date: Date) => boolean = () => true;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return SixUiLibraryValidators.allowedDates(this.allowedDates)(control);
  }
}

@Directive({
  selector: 'six-date[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDateValidatorIso, multi: true }],
  standalone: false,
})
export class MinDateValidatorIso implements Validator {
  @Input() min?: string | null;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.min != null) {
      return SixUiLibraryValidators.minDateIso(this.min)(control);
    }
    return null;
  }
}

@Directive({
  selector: 'six-date[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDateValidatorIso, multi: true }],
  standalone: false,
})
export class MaxDateValidatorIso implements Validator {
  @Input() max?: string | null;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.max != null) {
      return SixUiLibraryValidators.maxDateIso(this.max)(control);
    }
    return null;
  }
}

@Directive({
  selector: 'six-date[allowedDates]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AllowedDatesValidatorIso, multi: true }],
  standalone: false,
})
export class AllowedDatesValidatorIso implements Validator {
  @Input() allowedDates: (date: string) => boolean = () => true;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return SixUiLibraryValidators.allowedDatesIso(this.allowedDates)(control);
  }
}

@Directive({
  selector: 'six-input[type=number][min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidator, multi: true }],
  standalone: false,
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
  standalone: false,
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
