import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AlertService, UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-form',
  imports: [UiLibraryAngularModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './form.html',
  styleUrl: './form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {
  fb = inject(NonNullableFormBuilder);
  alertService = inject(AlertService);

  // Stepper state
  currentStep = signal(0);

  // Stepper configuration
  steps = [
    {
      title: 'Personal Details',
      description: 'Basic information',
      icon: 'person',
    },
    {
      title: 'Contact Info',
      description: 'Address & communication',
      icon: 'mail',
    },
    {
      title: 'Preferences',
      description: 'Account settings',
      icon: 'tune',
    },
    {
      title: 'Review',
      description: 'Confirm submission',
      icon: 'fact_check',
    },
  ];

  form = this.fb.group({
    // Step 1: Personal Details
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, usernameValidator, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null as number | null, [Validators.required, Validators.min(18)]],
    height: [170, Validators.min(10)],

    // Step 2: Contact Info
    iban: ['', [Validators.required, Validators.pattern(/[A-Z]{2}\d{2}[A-Z0-9 ]+/)]],
    date: [null as string | null, [Validators.required]],
    startTime: ['', [Validators.required]],

    // Step 3: Preferences
    userGroup: ['user' as UserGroup, Validators.required],
    status: ['enabled' as Status | null, Validators.required],
    internal: [false],
    interests: [[] as Interest[], Validators.required],
    description: ['', [Validators.minLength(20)]],

    // Step 4: Review
    acceptsTerms: [false, Validators.requiredTrue],
  });

  weekendsOnly = (isoDate: string) => {
    const day = new Date(isoDate).getDay();
    return day !== 0 && day !== 6;
  };

  onStepChange(event: CustomEvent<number>) {
    const newStep = event.detail;

    // Validate current step before allowing forward navigation
    if (newStep > this.currentStep()) {
      if (!this.isStepValid(this.currentStep())) {
        this.alertService.showAlert('Please complete all required fields');
      } else {
        this.currentStep.set(newStep);
      }
    }
  }

  nextStep() {
    if (this.isStepValid(this.currentStep())) {
      if (this.currentStep() < this.steps.length - 1) {
        this.currentStep.update((step) => step + 1);
      }
    } else {
      this.alertService.showAlert('Please complete all required fields before proceeding.');
      this.markStepAsTouched(this.currentStep());
    }
  }

  previousStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update((step) => step - 1);
    }
  }

  // Validate specific step
  isStepValid(step: number): boolean {
    switch (step) {
      case 0: // Personal Details
        return (
          this.form.controls.firstName.valid &&
          this.form.controls.lastName.valid &&
          this.form.controls.username.valid &&
          this.form.controls.email.valid &&
          this.form.controls.age.valid
        );
      case 1: // Contact Info
        return this.form.controls.iban.valid && this.form.controls.date.valid && this.form.controls.startTime.valid;
      case 2: // Preferences
        return (
          this.form.controls.userGroup.valid && this.form.controls.status.valid && this.form.controls.interests.valid
        );
      case 3: // Review
        return this.form.controls.acceptsTerms.valid;
      default:
        return true;
    }
  }

  // Mark specific step fields as touched
  markStepAsTouched(step: number) {
    switch (step) {
      case 0:
        this.form.controls.firstName.markAsTouched();
        this.form.controls.lastName.markAsTouched();
        this.form.controls.username.markAsTouched();
        this.form.controls.email.markAsTouched();
        this.form.controls.age.markAsTouched();
        break;
      case 1:
        this.form.controls.iban.markAsTouched();
        this.form.controls.date.markAsTouched();
        this.form.controls.startTime.markAsTouched();
        break;
      case 2:
        this.form.controls.userGroup.markAsTouched();
        this.form.controls.status.markAsTouched();
        this.form.controls.interests.markAsTouched();
        break;
      case 3:
        this.form.controls.acceptsTerms.markAsTouched();
        break;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.alertService.showAlert('Form submitted successfully!');
      console.log('Form data:', this.form.value);

      // Reset form and stepper after submission
      // this.form.reset();
      // this.currentStep.set(0);
    } else {
      this.alertService.showAlert('Please complete all required fields.');
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.form.reset({
      userGroup: 'user',
      status: 'enabled',
      internal: false,
      interests: [],
      height: 170,
    });
    this.currentStep.set(0);
  }
}

// Helpers
function usernameValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  const lowercaseCharsOnly = /^[a-z\-]+$/.test(control.value);
  if (lowercaseCharsOnly) {
    return null;
  }
  return { custom: { text: 'Username may only contain lowercase ascii characters.' } };
}

type UserGroup = 'admin' | 'developer' | 'user';
type Status = 'enabled' | 'disabled' | 'temporary';
type Interest = 'sport' | 'music' | 'movies';
