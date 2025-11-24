import { InjectionToken } from '@angular/core';

export interface UiLibraryConfig {
  showAsteriskOnRequiredValidator?: boolean;
  disableValidationService?: boolean;
}

export const DEFAULT_UI_LIBRARY_CONFIG: UiLibraryConfig = {
  showAsteriskOnRequiredValidator: false,
  disableValidationService: false,
};

export const UI_LIBRARY_CONFIG = new InjectionToken<UiLibraryConfig>('UiLibraryConfig');
