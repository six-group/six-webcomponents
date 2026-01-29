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
import { SixSelectChangePayload } from '@six-group/ui-library';

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
  countryOptions = signal<string[]>([]);

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],
    country: ['', Validators.required],
    email: ['', Validators.email],
    username: ['', [Validators.required, usernameValidator, Validators.minLength(3)]],
    iban: ['', Validators.pattern(/[A-Z]{2}\d{2}[A-Z ]+/)],
    age: [null as number | null, Validators.min(18)],
    userGroup: ['user' as UserGroup, Validators.required],
    privileges: [['read'] as Privilege[]],
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

  onSubmit() {
    this.alertService.showAlert('Form submitted successfully!');
  }

  constructor() {
    this.countryOptions.set(countries(''));
  }

  countryQueryChanged(event: CustomEvent<SixSelectChangePayload>) {
    setTimeout(() => {
      this.countryOptions.set(countries(event.detail.value as string));
    }, 300);
  }

  protected fillValues() {
    this.countryOptions.set(['Switzerland']);
    this.form.setValue({
      firstName: 'John',
      lastName: 'Doe',
      country: 'Switzerland',
      email: 'john.doe@example.com',
      username: 'johndoe',
      iban: 'CH93 0076 2011 6238 5295 7',
      age: 30,
      userGroup: 'developer',
      privileges: ['read', 'write'],
      status: 'enabled',
      internal: true,
      date: new Date().toISOString().split('T')[0],
      startTime: '09:00',
      interests: ['sport', 'movies'],
      height: 180,
      description: 'This is a valid description that is at least 20 characters long.',
      acceptsTerms: true,
    });
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

function countries(filter: string): string[] {
  if (!filter) {
    return [];
  }

  const lowerFilter = filter.toLowerCase();
  return allCountries.filter((country) => country.toLowerCase().startsWith(lowerFilter));
}

type Status = 'enabled' | 'disabled' | 'temporary';
type Interest = 'sport' | 'music' | 'movies';
type Privilege = 'read' | 'write' | 'delete';
type UserGroup = 'user' | 'developer' | 'admin';

const allCountries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
