import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { User } from '../../providers/users.service';
import { initialUserFormValues } from '~/app/users/components/users/users.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection,
  encapsulation,
})
export class UserFormComponent {
  readonly errorText = 'This field is required!';

  @Input() set user(user: User | null | undefined) {
    if (this.form) {
      this.form.reset();
      this.form.patchValue(Object.assign(initialUserFormValues, user || {}));
    }
  }

  @Input() form?: FormGroup;
}
