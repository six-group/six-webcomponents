import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// feature
import { components } from './components';
import { directives } from './directives';

@NgModule({
  imports: [CommonModule],
  declarations: [...components, ...directives],
  exports: [...components, ...directives],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
