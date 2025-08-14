import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AlertService, UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { AlertType } from '@six-group/ui-library';

@Component({
  selector: 'app-alert',
  imports: [UiLibraryAngularModule, ReactiveFormsModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Alert {
  fb = inject(NonNullableFormBuilder);
  alertService = inject(AlertService);

  form = this.fb.group({
    message: 'Your Message',
    alertType: ['primary' as AlertType],
  });

  onSubmit() {
    this.alertService.showAlert(this.form.value.message ?? '', this.form.value.alertType ?? 'primary');
  }
}
