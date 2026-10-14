import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { SixTimepickerChange } from '@six-group/ui-library';

@Component({
  selector: 'app-dialog',
  imports: [UiLibraryAngularModule, ReactiveFormsModule, JsonPipe],
  templateUrl: 'dialog.html',
  styleUrl: 'dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {
  fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    startTime: ['10:09:08', [Validators.required]],
  });

  lastTimeChange = signal('');
  lastTimeChangeDebounced = signal('');

  onTimeChange(event: CustomEvent<SixTimepickerChange>) {
    this.lastTimeChange.set(event.detail.valueAsString);
  }

  onTimeChangeDebounced(event: CustomEvent<SixTimepickerChange>) {
    this.lastTimeChangeDebounced.set(event.detail.valueAsString);
  }

  detachAndReattach(element: HTMLElement) {
    const parent = element.parentElement;
    if (parent == null) return;
    const nextSibling = element.nextSibling;
    element.remove();
    parent.insertBefore(element, nextSibling);
  }
}
