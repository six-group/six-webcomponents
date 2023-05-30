import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersFacade } from '../../providers';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from './custom-validation';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { User } from '~/app/users/providers/users.service';
import { changeDetection, encapsulation } from '~/app/shared';

interface UserForm extends User {
  birthdate: Date | null;
  role: string;
  important: boolean;
  password: string;
  passwordConfirmation: string;
  radio: string;
}

export const initialUserFormValues: UserForm = {
  id: '',
  name: '',
  email: '',
  birthdate: new Date(),
  phone: '',
  username: '',
  role: 'user',
  important: true,
  password: '',
  passwordConfirmation: '',
  radio: '2',
  website: '',
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

  constructor(readonly usersFacade: UsersFacade, readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        distinctUntilChanged(equals),
        tap(() => {
          ['name', 'email', 'username'].forEach((name) => {
            // @ts-ignore
            this.form.controls.role.value ? this.form.controls[name].enable() : this.form.controls[name].disable();
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(0);
  }
}
