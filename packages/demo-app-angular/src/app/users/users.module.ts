import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// feature
import { UsersRoutingModule } from './users-routing.module';
import { usersReducer, FEATURE_KEY, UsersEffects } from './store';
import { components } from './components';
import { providers } from './providers';

import { UserPipe } from './components/users/user.pipe';
import { SharedModule } from '~/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_KEY, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    UsersRoutingModule,
    SharedModule,
  ],
  declarations: [...components, UserPipe],
  providers,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
