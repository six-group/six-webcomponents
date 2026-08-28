import { InjectionToken } from '@angular/core';

export interface UiLibraryConfig {
  showAsteriskOnRequiredValidator?: boolean;
  disableValidationService?: boolean;
}

export const DEFAULT_UI_LIBRARY_CONFIG: UiLibraryConfig = {
  showAsteriskOnRequiredValidator: false,
  disableValidationService: false,
};

/**
 * Injection token holding the {@link UiLibraryConfig}.
 *
 * The token provides {@link DEFAULT_UI_LIBRARY_CONFIG} by default, so that components and
 * directives of this library can be used without calling `UiLibraryAngularModule.forRoot()`
 * (e.g. in unit tests). Provide the token explicitly to override single options:
 *
 * ```ts
 * TestBed.configureTestingModule({
 *   providers: [{ provide: UI_LIBRARY_CONFIG, useValue: { showAsteriskOnRequiredValidator: true } }],
 * });
 * ```
 */
export const UI_LIBRARY_CONFIG = new InjectionToken<UiLibraryConfig>('UiLibraryConfig', {
  providedIn: 'root',
  factory: () => DEFAULT_UI_LIBRARY_CONFIG,
});
