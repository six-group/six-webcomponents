import { InjectionToken } from '@angular/core';

export interface UiLibraryConfig {
  showAsteriskOnRequiredValidator?: boolean;
}

export const DEFAULT_UI_LIBRARY_CONFIG: UiLibraryConfig = {
  showAsteriskOnRequiredValidator: false,
};

export const UI_LIBRARY_CONFIG = new InjectionToken<UiLibraryConfig>('UiLibraryConfig');
