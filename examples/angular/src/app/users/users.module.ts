import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// feature
import { UsersRoutingModule } from './users-routing.module';
import { FEATURE_KEY, UsersEffects, usersReducer } from './store';
import { components } from './components';
import { providers } from './providers';

import { UserPipe } from './components/users/user.pipe';
import { SharedModule } from '~/app/shared/shared.module';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@NgModule({
  imports: [
    CommonModule,
    UiLibraryAngularModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_KEY, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    UsersRoutingModule,
    SharedModule,
  ],
  declarations: [...components, UserPipe],
  providers,
})
export class UsersModule {}
