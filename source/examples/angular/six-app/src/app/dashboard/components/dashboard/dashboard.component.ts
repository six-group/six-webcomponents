import { Component } from '@angular/core';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { CoreFacade } from '~/app/core/providers';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <h1>Demo</h1>
      <p>This is an <b>Angular Demo App</b> using <b>@six/ui-library</b></p>
      <p class="dashboard__actions">
        <six-button (click)="coreFacade.toggleLeftSidebar()"> Toggle left sidebar </six-button>
        <six-button [loading]="coreFacade.tasksLoading$ | async" (click)="coreFacade.toggleRightSidebar()">
          Toggle right sidebar
          <six-badge type="danger" pill>{{ coreFacade.tasksCount$ | async }}</six-badge>
        </six-button>
      </p>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection,
  encapsulation,
})
export class DashboardComponent {
  constructor(readonly coreFacade: CoreFacade) {}
}
