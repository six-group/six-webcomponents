import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// feature
import { DashboardRoutingModule } from './dashboard-routing.module';
import { components } from './components';
import { providers } from './providers';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [...components],
  providers,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
