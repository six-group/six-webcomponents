import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AlertService, UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { City, CITY_DATA, Country } from './data';

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

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
    email: ['', Validators.email],
    username: ['', [Validators.required, usernameValidator, Validators.minLength(3)]],
    country: ['' as Country | '', Validators.required],
    city: ['' as string, Validators.required],
    iban: ['', Validators.pattern(/[A-Z]{2}\d{2}[A-Z ]+/)],
    age: [null as number | null, Validators.min(18)],
    userGroup: ['user' as UserGroup, Validators.required],
    status: ['enabled' as Status | null, Validators.required],
    internal: [false, Validators.requiredTrue],
    date: [null as string | null, [Validators.required]],
    startTime: ['', [Validators.required]],
    interests: [[] as Interest[], Validators.required],
    height: [0, Validators.min(10)],
    description: ['', [Validators.required, Validators.minLength(20)]],
    acceptsTerms: [false, Validators.requiredTrue],
  });

  weekendsOnly = (isoDate: string) => {
    const day = new Date(isoDate).getDay();
    return day !== 0 && day !== 6;
  };

  selectedCountry = signal<Country | ''>('');
  CITY_DATA: any;

  constructor() {
    effect(() => {
      this.form.controls.country.valueChanges.subscribe((country) => {
        this.selectedCountry.set(country as Country | '');
        this.form.controls.city.reset();
      });
    });
  }

  getCitiesForCountry(): City[] {
    const country = this.selectedCountry();
    if (!country) {
      return [];
    }
    return CITY_DATA[country] || [];
  }

  getCityNoDataText(): string {
    const country = this.selectedCountry();
    if (!country) {
      return 'Please select a country first';
    }
    return 'No cities available';
  }

  onSubmit() {
    this.alertService.showAlert('Form submitted successfully!');
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
