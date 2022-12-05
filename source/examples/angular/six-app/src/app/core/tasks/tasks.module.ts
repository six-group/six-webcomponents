import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// feature
import { tasksReducer, FEATURE_KEY, TasksEffects } from './store';
import { providers } from './providers';

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, tasksReducer), EffectsModule.forFeature([TasksEffects])],
  providers,
})
export class TasksModule {}
