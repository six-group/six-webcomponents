import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-dialog',
  imports: [UiLibraryAngularModule],
  templateUrl: 'dialog.html',
  styleUrl: 'dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {}
