import { APP_INITIALIZER, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@six-group/ui-library/loader';
import { TextValueAccessor } from './control-value-accessors/text-value-accessor';
import { NumericValueAccessor } from './control-value-accessors/numeric-value-accessor';
import { RadioValueAccessor } from './control-value-accessors/radio-value-accessor';
import { DatepickerValueAccessor } from './control-value-accessors/datepicker-value-accessor';
import { SixFormUtilDirective } from './util/six-form-util.directive';
import {
  AllowedDatesValidator,
  MaxDateValidator,
  MaxValidator,
  MinDateValidator,
  MinValidator,
} from './validators/six-ui-library-validators';
import { SelectValueAccessor } from './control-value-accessors/select-value-accessor';
import { CheckboxValueAccessor } from './control-value-accessors/checkbox-value-accessor';
import { RangeValueAccessor } from './control-value-accessors/range-value-accessor';
import { SwitchValueAccessor } from './control-value-accessors/switch-value-accessor';
import { TimepickerValueAccessor } from './control-value-accessors/timepicker-value-accessor';
import { ValidationMessagesService } from './services/validation-messages.service';

@NgModule({
  declarations: [
    // proxies
    ...DIRECTIVES,

    // value accessors
    TextValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    DatepickerValueAccessor,
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

    // form helpers
    SixFormUtilDirective,
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

    // form helpers
    SixFormUtilDirective,
  ],
})
export class UiLibraryAngularModule {
  static forRoot<T extends ValidationMessagesService>(
    customValidationMessagesService?: Type<T>
  ): ModuleWithProviders<UiLibraryAngularModule> {
    return {
      ngModule: UiLibraryAngularModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => {
            return defineCustomElements();
          },
        },

        { provide: ValidationMessagesService, useClass: customValidationMessagesService ?? ValidationMessagesService },
      ],
    };
  }
}
