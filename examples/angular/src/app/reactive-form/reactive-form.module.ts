import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// feature
import { ReactiveFormFacade } from './reactive-form.facade';
import { MockService } from './mock.service';
import { AsyncFormComponent, components } from './components';
import { pipes } from './pipes';
import { SharedModule } from '~/app/shared/shared.module';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

const routes: Routes = [
  {
    path: '',
    component: AsyncFormComponent,
  },
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    UiLibraryAngularModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [ReactiveFormFacade, MockService, ...pipes],
})
export class ReactiveFormModule {}
