import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { CustomValidationMessagesService } from './services/custom-validation-messages.service';
import { HomeComponent } from './pages/home/home.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './pages/form/form.component';
import { AlertComponent } from './pages/alert/alert.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightSidebarComponent,
    HeaderComponent,
    LeftSidebarComponent,
    FormComponent,
    AlertComponent,
    DialogComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    ReactiveFormsModule,
    UiLibraryAngularModule.forRoot(CustomValidationMessagesService, {
      showAsteriskOnRequiredValidator: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
