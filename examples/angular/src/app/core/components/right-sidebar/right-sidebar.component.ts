import { Component, Input } from '@angular/core';
import { Task } from '~/app/core/tasks/providers/tasks.service';
import { changeDetection, encapsulation } from '~/app/shared';
import { AsyncInput } from '~/app/utils/async-input';

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
  @Input() open: AsyncInput<boolean>;
  @Input() tasks: AsyncInput<Task[]>;
}
