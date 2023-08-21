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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightSidebarComponent,
    HeaderComponent,
    LeftSidebarComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    UiLibraryAngularModule.forRoot(CustomValidationMessagesService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
