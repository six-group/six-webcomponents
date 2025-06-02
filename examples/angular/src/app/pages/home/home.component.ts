import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  formControl = new FormControl<string>('');

  addValidator() {
    this.formControl.addValidators(Validators.required);
    console.log(this.formControl.hasValidator(Validators.required));
    this.formControl.updateValueAndValidity();
  }

  removeValidator() {
    this.formControl.removeValidators(Validators.required);
    console.log(this.formControl.hasValidator(Validators.required));
    this.formControl.updateValueAndValidity();
  }
}
