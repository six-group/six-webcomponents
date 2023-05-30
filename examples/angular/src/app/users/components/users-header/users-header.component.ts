import { Component } from '@angular/core';
import { changeDetection, encapsulation } from '~/app/shared';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss'],
  changeDetection,
  encapsulation,
})
export class UsersHeaderComponent {}
