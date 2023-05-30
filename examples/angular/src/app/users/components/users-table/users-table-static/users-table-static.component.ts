import { Component, Input } from '@angular/core';
import { User } from '~/app/users/providers/users.service';
import { UsersFacade } from '~/app/users/providers';
import { AsyncInput } from '~/app/utils/async-input';
import { changeDetection, encapsulation } from '~/app/shared';

@Component({
  selector: 'app-users-table-static',
  templateUrl: './users-table-static.component.html',
  styleUrls: ['users-table-static.component.scss'],
  changeDetection,
  encapsulation,
})
export class UsersTableStaticComponent {
  constructor(readonly usersFacade: UsersFacade) {}

  @Input() users: AsyncInput<User[]>;
  @Input() loading: AsyncInput<boolean>;
}
