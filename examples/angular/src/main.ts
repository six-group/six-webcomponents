import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { setDefaultIconLibrary } from '@six-group/ui-library';

setDefaultIconLibrary('material-symbols');
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
