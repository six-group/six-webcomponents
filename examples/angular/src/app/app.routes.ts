import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './pages/alert/alert.component';
import { DialogComponent } from './pages/dialog/dialog.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'alert',
    component: AlertComponent,
  },
  {
    path: 'dialog',
    component: DialogComponent,
  },
];
