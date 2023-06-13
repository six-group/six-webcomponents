import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSidebarComponent {
  @Input() open = false;
}
