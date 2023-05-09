import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { User } from '~/app/users/providers/users.service';
import { UsersFacade } from '~/app/users/providers';

@Component({
  selector: 'app-users-table-static',
  templateUrl: './users-table-static.component.html',
  styleUrls: ['users-table-static.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UsersTableStaticComponent {
  constructor(readonly usersFacade: UsersFacade) {}
  @Input() users?: User[] = [];
  @Input() loading = false;
}
