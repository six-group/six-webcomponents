import { APP_INITIALIZER, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@six-group/ui-library/loader';
import { TextValueAccessor } from './control-value-accessors/text-value-accessor';
import { NumericValueAccessor } from './control-value-accessors/numeric-value-accessor';
import { RadioValueAccessor } from './control-value-accessors/radio-value-accessor';
import { DatepickerValueAccessor } from './control-value-accessors/datepicker-value-accessor';
import { SixFormDirective, SixFormUtilDirective } from './form/six-form.directive';
import {
  AllowedDatesValidator,
  AllowedDatesValidatorIso,
  MaxDateValidator,
  MaxDateValidatorIso,
  MaxValidator,
  MinDateValidator,
  MinDateValidatorIso,
  MinValidator,
} from './validators/six-ui-library-validators';
import { SelectValueAccessor } from './control-value-accessors/select-value-accessor';
import { CheckboxValueAccessor } from './control-value-accessors/checkbox-value-accessor';
import { RangeValueAccessor } from './control-value-accessors/range-value-accessor';
import { SwitchValueAccessor } from './control-value-accessors/switch-value-accessor';
import { TimepickerValueAccessor } from './control-value-accessors/timepicker-value-accessor';
import { ValidationMessagesService } from './services/validation-messages.service';
import { SixRouterLinkDirective } from './link/six-router-link.directive';
import {
  ActiveSidebarDirective,
  ActiveSidebarItemDirective,
  ActiveSidebarItemGroupDirective,
} from './sidebar/active-sidebar.directive';
import { DateValueAccessor } from './control-value-accessors/date-value-accessor';
import { DEFAULT_UI_LIBRARY_CONFIG, UI_LIBRARY_CONFIG, UiLibraryConfig } from './ui-library-angular-config';

@NgModule({
  declarations: [
    // proxies
    ...DIRECTIVES,

    // value accessors
    TextValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    DatepickerValueAccessor,
    DateValueAccessor,
    TimepickerValueAccessor,
    SelectValueAccessor,
    CheckboxValueAccessor,
    SwitchValueAccessor,
    RangeValueAccessor,

    // validators
    MinValidator,
    MaxValidator,
    MinDateValidator,
    MaxDateValidator,
    AllowedDatesValidator,
    MinDateValidatorIso,
    MaxDateValidatorIso,
    AllowedDatesValidatorIso,

    // form helpers
    SixFormDirective,
    SixFormUtilDirective,

    // router link directive
    SixRouterLinkDirective,

    // sidebar helpers
    ActiveSidebarItemDirective,
    ActiveSidebarItemGroupDirective,
    ActiveSidebarDirective,
  ],
  imports: [],
  exports: [
    // proxies
    ...DIRECTIVES,

    // value accessors
    TextValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    DatepickerValueAccessor,
    DateValueAccessor,
    TimepickerValueAccessor,
    SelectValueAccessor,
    CheckboxValueAccessor,
    SwitchValueAccessor,
    RangeValueAccessor,

    // validators
    MinValidator,
    MaxValidator,
    MinDateValidator,
    MaxDateValidator,
    AllowedDatesValidator,
    MinDateValidatorIso,
    MaxDateValidatorIso,
    AllowedDatesValidatorIso,

    // form helpers
    SixFormDirective,
    SixFormUtilDirective,

    // router link directive
    SixRouterLinkDirective,

    // sidebar helpers
    ActiveSidebarItemDirective,
    ActiveSidebarItemGroupDirective,
    ActiveSidebarDirective,
  ],
})
export class UiLibraryAngularModule {
  static forRoot<T extends ValidationMessagesService>(
    customValidationMessagesService?: Type<T>,
    config?: UiLibraryConfig
  ): ModuleWithProviders<UiLibraryAngularModule> {
    const mergedConfig: UiLibraryConfig = {
      ...DEFAULT_UI_LIBRARY_CONFIG,
      ...config,
    };

    return {
      ngModule: UiLibraryAngularModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => async () => defineCustomElements(),
          multi: true,
        },
        { provide: ValidationMessagesService, useClass: customValidationMessagesService ?? ValidationMessagesService },
        { provide: UI_LIBRARY_CONFIG, useValue: mergedConfig },
      ],
    };
  }
}
