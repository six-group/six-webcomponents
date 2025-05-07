import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SixUiLibraryValidators } from '@six-group/ui-library-angular';

type UserGroup = 'admin' | 'developer' | 'user';
type Status = 'enabled' | 'disabled' | 'temporary';
type Interest = 'sport' | 'music' | 'movies';

const weekendDateFilter = (isoDate: string) => {
  const day = new Date(isoDate).getDay();
  // Prevent Saturday and Sunday from being selected.
  return day !== 0 && day !== 6;
};

const allowAllDateFilter = () => true;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnDestroy {
  private subscriptions?: Subscription;

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
    email: ['', Validators.email],
    username: ['', [Validators.required, usernameValidator, Validators.minLength(3)]],
    iban: ['', Validators.pattern(/[A-Z]{2}\d{2}[A-Z ]+/)],
    age: [null as number | null, Validators.min(18)],
    userGroup: ['user' as UserGroup | null, Validators.required],
    status: ['enabled' as Status | null, Validators.required],
    internal: [false, Validators.requiredTrue],
    allowWeekends: [false],
    futureDatesOnly: [false],
    date: [null as string | null, [Validators.required]],
    startTime: ['', [Validators.required]],
    interests: [[] as Interest[], Validators.required],
    height: [0, Validators.min(10)],
    description: ['', [Validators.required, Validators.minLength(20)]],
    acceptsTerms: [false, Validators.requiredTrue],
  });

  minDate: string | null = addDays(today(), 1);
  maxDate: string | null = addDays(today(), 40);
  dateFilter = (isoDate: string): boolean => {
    const day = new Date(isoDate).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  formDebug$: BehaviorSubject<{ controls: Record<string, any>; form: Record<string, any> }>;

  constructor(private fb: FormBuilder) {
    this.formDebug$ = new BehaviorSubject(getFormDebug(this.userForm));
    this.userForm.valueChanges.subscribe(() => this.formDebug$.next(getFormDebug(this.userForm)));
    this.userForm.statusChanges.subscribe(() => this.formDebug$.next(getFormDebug(this.userForm)));
    this.subscriptions = this.userForm.controls.futureDatesOnly.valueChanges.subscribe((futureDatesOnly) => {
      if (futureDatesOnly) {
        this.minDate = addDays(today(), 1);
        this.userForm.controls.date.setValidators([
          Validators.required,
          SixUiLibraryValidators.minDateIso(this.minDate),
        ]);
      } else {
        this.minDate = null;
        this.userForm.controls.date.setValidators([Validators.required]);
      }
      this.userForm.controls.date.updateValueAndValidity();
    });

    this.subscriptions.add(
      this.userForm.controls.allowWeekends.valueChanges.subscribe((allowWeekends) => {
        this.dateFilter = allowWeekends ? allowAllDateFilter : weekendDateFilter;
        this.userForm.controls.date.setValidators([
          Validators.required,
          SixUiLibraryValidators.allowedDatesIso(this.dateFilter),
        ]);
        this.userForm.controls.date.updateValueAndValidity();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
  }

  resetForm() {
    this.userForm.reset();
  }

  fillIn() {
    this.userForm.setValue({
      firstName: 'SIX',
      lastName: 'Components',
      username: 'six-components',
      email: 'six@webcomponents.com',
      iban: 'CH21 BBBB BCCC CCCC CCCC C',
      age: 20,
      userGroup: 'user',
      status: 'enabled',
      internal: true,
      allowWeekends: true,
      futureDatesOnly: true,
      interests: ['music'],
      height: 10,
      description: 'A description about the user',
      acceptsTerms: true,
      date: addDays(today(), 1),
      startTime: '09:15:00',
    });
  }

  onSubmit(event: SubmitEvent) {
    console.log('form submitted', event);
    console.log('valid:', this.userForm.valid);
    console.log('form data:', this.userForm.value);
  }
}

function getFormDebug(form: FormGroup) {
  const { controls } = form;
  return {
    form: getAbstractControlProps(form),
    controls: Object.keys(controls).reduce((acc, name) => {
      return { ...acc, [name]: getAbstractControlProps(controls[name]) };
    }, {}),
  };
}

function today(): string {
  return toIsoDate(new Date());
}

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(date: string, days: number): string {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return toIsoDate(result);
}

function usernameValidator(control: AbstractControl): ValidationErrors | null {
  /**
   * Returns the current date as an ISO date string without the time component.
   * The local timezone is taken into account for the output.
   */

  if (isEmptyInputValue(control.value)) {
    return null;
  }

  const lowercaseCharsOnly = /^[a-z\-]+$/.test(control.value);
  if (lowercaseCharsOnly) {
    return null;
  }

  return { custom: { text: 'Username may only contain lowercase ascii characters.' } };
}

function isEmptyInputValue(value: any): boolean {
  return value == null || ((typeof value === 'string' || Array.isArray(value)) && value.length === 0);
}

const props: Array<keyof AbstractControl> = ['errors', 'pristine', 'status', 'value'];

const getAbstractControlProps = (control: AbstractControl) => {
  return props.reduce((acc, key) => {
    return { ...acc, [key]: control[key] };
  }, {});
};
