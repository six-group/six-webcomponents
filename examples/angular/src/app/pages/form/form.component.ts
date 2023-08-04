import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SixFormUtilDirective, SixUiLibraryValidators } from '@six-group/ui-library-angular';

type UserGroup = 'admin' | 'developer' | 'user';
type Status = 'enabled' | 'disabled' | 'temporary';
type Interest = 'sport' | 'music' | 'movies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @ViewChild(SixFormUtilDirective) sixFormUtil!: SixFormUtilDirective;
  minDate = addDays(removeTime(new Date()), 1);
  maxDate = addDays(removeTime(new Date()), -1);

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
    email: ['', Validators.email],
    username: ['', [Validators.required, usernameValidator]],
    iban: ['', Validators.pattern(/[A-Z]{2}\d{2}[A-Z ]+/)],
    age: [null as number | null, Validators.min(18)],
    userGroup: ['user' as UserGroup | null, Validators.required],
    status: ['enabled' as Status | null, Validators.required],
    internal: [false, Validators.requiredTrue],
    interests: [[] as Interest[], Validators.required],
    height: [0, Validators.min(10)],
    description: ['', [Validators.required, Validators.minLength(20)]],
    acceptsTerms: [false, Validators.requiredTrue],
    futureDate: [null as Date | null, [Validators.required, SixUiLibraryValidators.minDate(this.minDate)]],
    pastDate: [null as Date | null, [Validators.required, SixUiLibraryValidators.maxDate(this.maxDate)]],
    startTime: ['', [Validators.required]],
  });

  formDebug$: BehaviorSubject<{ controls: Record<string, any>; form: Record<string, any> }>;
  constructor(private fb: FormBuilder) {
    this.formDebug$ = new BehaviorSubject(getFormDebug(this.userForm));
    this.userForm.valueChanges.subscribe(() => this.formDebug$.next(getFormDebug(this.userForm)));
    this.userForm.statusChanges.subscribe(() => this.formDebug$.next(getFormDebug(this.userForm)));
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
      interests: ['music'],
      height: 10,
      description: 'A description about the user',
      acceptsTerms: true,
      futureDate: addDays(new Date(), 1),
      pastDate: addDays(new Date(), -11),
      startTime: '09:15:00',
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      this.sixFormUtil.focusInvalidField();
    }
    console.log('valid:', this.userForm.valid);
    console.log('form data:', this.userForm.value);
  }

  ngOnInit(): void {}
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

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function removeTime(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function usernameValidator(control: AbstractControl): ValidationErrors | null {
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
