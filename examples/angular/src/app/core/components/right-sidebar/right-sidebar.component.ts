import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RightSidebarComponent {
  @Input() open?: boolean | null;
  @Input() tasks?: Task[] | null;
}
