import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

/**
 * Bindings that change after the web components have loaded.
 * Used to verify that components react to content and properties set late,
 * as Angular does for interpolations and property bindings.
 */
@Component({
  selector: 'app-late-binding',
  imports: [UiLibraryAngularModule],
  templateUrl: './late-binding.html',
  styleUrl: './late-binding.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LateBinding {
  filterEnabled = signal(false);

  fruits = ['Apple', 'Banana', 'Cherry', 'Grape', 'Lemon', 'Mango', 'Orange', 'Peach'];
}
