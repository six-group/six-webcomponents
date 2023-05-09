import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../providers/users.service';
import { initialUserFormValues } from '~/app/users/components/users/users.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
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
