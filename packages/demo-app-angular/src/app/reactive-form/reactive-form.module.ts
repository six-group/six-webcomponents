import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// feature
import { ReactiveFormFacade } from './reactive-form.facade';
import { MockService } from './mock.service';
import { AsyncFormComponent, components } from './components';
import { pipes } from './pipes';
import { SharedModule } from '~/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AsyncFormComponent,
  },
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [ReactiveFormFacade, MockService, ...pipes],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReactiveFormModule {}
