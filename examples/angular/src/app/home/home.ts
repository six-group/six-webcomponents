import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-home',
  imports: [UiLibraryAngularModule, UiLibraryAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
