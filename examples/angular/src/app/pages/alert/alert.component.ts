import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertType } from '@six-group/ui-library';
import { FormBuilder } from '@angular/forms';
import { AlertService } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  constructor(
    private fb: FormBuilder,
    private alertService: AlertService
  ) {}

  form = this.fb.group({
    message: 'Your Message',
    alertType: ['primary' as AlertType | null],
  });

  onSubmit() {
    this.alertService.showAlert(this.form.value.message ?? '', this.form.value.alertType ?? 'primary');
  }
}
