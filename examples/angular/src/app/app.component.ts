import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TasksService } from './services/tasks.service';
import { SixDialog } from '@six-group/ui-library-angular';
import { SixMenuItemSelectedPayload } from '@six-group/ui-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @ViewChild('dialog') dialog!: SixDialog;

  leftSidebarOpen = true;
  rightSidebarOpen = false;
  tasks$!: Observable<Task[]>;
  dialogContent: { label: string; text: any } = { label: '', text: '' };

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks$ = this.tasksService.fetchAll();
  }

  showEvent(event: CustomEvent<SixMenuItemSelectedPayload>) {
    this.dialogContent = { label: event.type, text: event.detail };
    return this.dialog.show();
  }

  closeDialog() {
    return this.dialog.hide();
  }
}
