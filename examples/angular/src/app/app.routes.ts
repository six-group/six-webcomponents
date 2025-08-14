import { Routes } from '@angular/router';
import { Dialog } from './dialog/dialog';
import { Form } from './form/form';
import { Alert } from './alert/alert';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'form', component: Form },
  { path: 'alert', component: Alert },
  { path: 'dialog', component: Dialog },
];
