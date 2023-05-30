import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../providers/users.service';
import { initialUserFormValues } from '~/app/users/components/users/users.component';
import { AsyncInput } from '~/app/utils/async-input';
import { changeDetection, encapsulation } from '~/app/shared';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection,
  encapsulation,
})
export class UserFormComponent {
  readonly errorText = 'This field is required!';

  @Input() set user(user: AsyncInput<User>) {
    if (this.form) {
      this.form.reset();
      this.form.patchValue(Object.assign(initialUserFormValues, user || {}));
    }
  }

  @Input() form: AsyncInput<FormGroup>;
}
