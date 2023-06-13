import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from 'src/app/services/tasks.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSidebarComponent {
  @Input() open = false;
  @Input() tasks: Task[] = [];
}
