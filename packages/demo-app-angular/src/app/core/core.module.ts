import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// feature
import { TasksModule } from './tasks/tasks.module';
import { components } from './components';
import { providers } from './providers';
import { root } from './store';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@NgModule({
  imports: [
    CommonModule,
    UiLibraryAngularModule,
    RouterModule,
    StoreModule.forRoot(root, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'angular-demo',
    }),
    TasksModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers,
    };
  }
}
