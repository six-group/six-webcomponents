import { Component, OnDestroy, OnInit } from '@angular/core';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { UsersFacade } from '../../providers';
import { CoreFacade } from '~/app/core/providers';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from './custom-validation';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { getAbstractControlProps } from '~/app/reactive-form/util';

export const initialUserFormValues = {
  id: '',
  name: '',
  email: '',
  birthdate: null,
  username: '',
  role: 'user',
  important: true,
  password: '',
  passwordConfirmation: '',
  radio: '2',
};

const equals = <T>(a: T, b: T) => JSON.stringify(a) === JSON.stringify(b);

@Component({
  selector: 'app-users-view',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection,
  encapsulation,
})
export class UsersComponent implements OnInit, OnDestroy {
  readonly destroy$ = new Subject();

  readonly form = this.fb.group({
    id: [initialUserFormValues.id],
    name: [initialUserFormValues.name], // <-- required attribute and error message are provided on the input
    email: [initialUserFormValues.email, [CustomValidators.required, CustomValidators.email]],
    birthdate: [initialUserFormValues.birthdate],
    username: [initialUserFormValues.username],
    role: [initialUserFormValues.role],
    important: [initialUserFormValues.important, [CustomValidators.requiredTrue]],
    password: [initialUserFormValues.password, [CustomValidators.required]],
    passwordConfirmation: [
      initialUserFormValues.passwordConfirmation,
      [CustomValidators.required, CustomValidators.match('password')],
    ],
    radio: [initialUserFormValues.radio, [CustomValidators.undefined]],
  });

  readonly info$ = combineLatest([this.form.statusChanges, this.form.valueChanges]).pipe(
    map(() => {
      return {
        form: getAbstractControlProps(this.form),
        controls: Object.keys(this.form.controls).reduce(
          (acc, name) => ({
          ...acc,
            [name]: getAbstractControlProps(this.form.controls[name]),
          }),
          {}
        ),
      };
    })
  );

  constructor(readonly usersFacade: UsersFacade, readonly coreFacade: CoreFacade, readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        distinctUntilChanged(equals),
        tap(() => {
          ['name', 'email', 'username'].forEach((name) => {
            this.form.controls.role.value ? this.form.controls[name].enable() : this.form.controls[name].disable();
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
