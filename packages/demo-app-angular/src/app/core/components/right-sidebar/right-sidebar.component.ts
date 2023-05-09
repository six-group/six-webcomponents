import { Component, Input } from '@angular/core';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { Task } from '~/app/core/tasks/providers/tasks.service';

@Component({
  selector: 'app-right-sidebar',
  template: `
    <six-sidebar position="right" [open]="open">
      <six-card *ngFor="let task of tasks">
        <h3>Task #{{ task.id }}</h3>
        <p>{{ task.title }}</p>
      </six-card>
    </six-sidebar>
  `,
  styleUrls: ['./right-sidebar.component.scss'],
  changeDetection,
  encapsulation,
})
export class RightSidebarComponent {
  @Input() open?: boolean | null;
  @Input() tasks?: Task[] | null;
}
