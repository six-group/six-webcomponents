import { Component, Input } from '@angular/core';
import { changeDetection, encapsulation } from '~/app/shared';
import { AsyncInput } from '~/app/utils/async-input';

@Component({
  selector: 'app-left-sidebar',
  template: `
    <six-sidebar position="left" [open]="open">
      <six-sidebar-item-group icon="home" name="Home" routerLink="/dashboard"></six-sidebar-item-group>
      <six-sidebar-item-group icon="supervisor_account" name="Users" routerLink="/users"></six-sidebar-item-group>
      <six-sidebar-item-group
        icon="dynamic_form"
        name="Reactive Forms"
        routerLink="/reactive-form"
      ></six-sidebar-item-group>
    </six-sidebar>
  `,
  changeDetection,
  encapsulation,
})
export class LeftSidebarComponent {
  @Input() open: AsyncInput<boolean>;
}
