import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components';
import { UsersGuard } from './providers/users.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [UsersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
