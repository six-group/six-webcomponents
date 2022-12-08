import { Component, Input } from '@angular/core';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { UsersFacade } from '../../providers';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss'],
  changeDetection,
  encapsulation,
})
export class UsersHeaderComponent {
  @Input() fetchServerModel?: boolean | null;

  constructor(readonly usersFacade: UsersFacade) {}
}
