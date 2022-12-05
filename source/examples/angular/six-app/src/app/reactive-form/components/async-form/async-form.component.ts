import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, first, map, switchMap, tap } from 'rxjs/operators';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
// feature
import { Is, validatorWithCustomMessage } from '~/app/reactive-form/util';
import { ReactiveFormFacade } from '~/app/reactive-form/reactive-form.facade';
import { MockTranslatePipe } from '~/app/reactive-form/pipes/mock-translate.pipe';
import { CreateUserDto } from '~/app/reactive-form/models';
import { compareAsc } from 'date-fns';

const initialFormState: CreateUserDto = {
  username: 'username',
  password: '',
  notes: 'some initial value',
  startDate: null,
  endDate: null,
};

const isValidationErrors = (value?: unknown): value is ValidationErrors =>
  Is.Object(value) && Object.keys(value).every((key) => Object.keys(initialFormState).includes(key));

const isPastDate = (date: Date) => {
  return compareAsc(new Date(), date) === 1;
};

const areUnorderedDates = (startDate: Date, endDate: Date) => {
  return compareAsc(startDate, endDate) === 1;
};

@Component({
  styleUrls: ['./async-form.component.scss'],
  templateUrl: './async-form.component.html',
  changeDetection,
  encapsulation,
})
export class AsyncFormComponent {
  readonly loading$ = this.formTestFacade.loading$;
  readonly lastError$ = this.formTestFacade.lastError$;

  readonly CustomValidators = {
    required: validatorWithCustomMessage(Validators.required, this.translatePipe.transform('This field is required.')),
    minLength: (minLength: number) =>
      validatorWithCustomMessage(
        Validators.minLength(minLength),
        this.translatePipe.transform(`This field should be at least ${minLength} characters long.`)
      ),
    existAsync: (control: AbstractControl): Observable<ValidationErrors | null> => {
      return control.valueChanges.pipe(
        switchMap((value) => {
          return this.formTestFacade.getByUsername(value).pipe(
            map((exist) => {
              if (exist) {
                const message = this.translatePipe.transform(`Username '${exist?.username}' already exist.`);
                return {[message]: true};
              }
              return null;
            })
          );
        }),
        first()
      );
    },
    minStartDate: validatorWithCustomMessage((control: AbstractControl) => {
      if (!control.value) {
        return null;
      }

      if (isPastDate(control.value)) {
        return {pastDate: true};
      }

      return null;
    }, this.translatePipe.transform(`Date should be later than today!`)),
    minDate: (form: FormGroup) => {
      if (!(form?.controls?.startDate && form?.controls?.endDate)) {
        return;
      }

      const areInvalidDates = areUnorderedDates(form.controls.startDate.value, form.controls.endDate.value);
      if (areInvalidDates) {
        form.controls.endDate.setErrors({'End date should not be before start date': true});
      }
    },
  };

  readonly form = this.fb.group(
    {
      username: [
        initialFormState.username,
        [this.CustomValidators.required, this.CustomValidators.minLength(2)],
        [this.CustomValidators.existAsync],
      ],
      password: [initialFormState.password, [this.CustomValidators.required, this.CustomValidators.minLength(8)]],
      notes: [initialFormState.notes],
      startDate: [initialFormState.startDate, [Validators.required, this.CustomValidators.minStartDate]],
      endDate: [initialFormState.endDate, [Validators.required]],
    },
    {
      validators: [this.CustomValidators.minDate],
    }
  );

  constructor(
    readonly formTestFacade: ReactiveFormFacade,
    readonly fb: FormBuilder,
    readonly translatePipe: MockTranslatePipe
  ) {
    // trigger async validators to update form `PENDING` state
    setTimeout(() => this.form.patchValue(initialFormState));
  }

  get submitDisabled() {
    return this.form.invalid || this.form.pending;
  }

  submitForm = () => {
    if (this.submitDisabled) {
      return;
    }

    this.formTestFacade
      .createOne(this.form.value)
      .pipe(
        // on success
        tap(() => {
          this.resetForm();
        }),
        // on failure
        catchError((err) => {
          // mark control when the response is validation errors
          if (isValidationErrors(err)) {
            for (const [name, error] of Object.entries(err)) {
              const message = this.translatePipe.transform(error);
              this.form.get(name)?.setErrors({[message]: true});
            }
          }
          return throwError(err);
        })
      )
      .subscribe();
  };

  resetForm = () => {
    this.form.setValue(initialFormState);
    this.form.reset(initialFormState);

    // We have to reset the last error, otherwise we would show it even when the form was reset
    this.formTestFacade.resetError();
  };
}
