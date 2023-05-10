import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// feature
import { components } from './components';
import { directives } from './directives';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@NgModule({
  imports: [CommonModule, UiLibraryAngularModule],
  declarations: [...components, ...directives],
  exports: [...components, ...directives],
})
export class SharedModule {}
