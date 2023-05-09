import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// feature
import { DashboardRoutingModule } from './dashboard-routing.module';
import { components } from './components';
import { providers } from './providers';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, UiLibraryAngularModule],
  declarations: [...components],
  providers,
})
export class DashboardModule {}
