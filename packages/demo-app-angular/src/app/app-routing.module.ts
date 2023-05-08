import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksGuard } from './core/tasks/providers/tasks.guard';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [],
    canActivate: [TasksGuard],
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canLoad: [],
    canActivate: [TasksGuard],
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then((m) => m.ReactiveFormModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      onSameUrlNavigation: 'reload',
    }),
  ],
})
export class AppRoutingModule {}
