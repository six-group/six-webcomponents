import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Language, languages } from '@six-group/ui-library';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-header',
  imports: [UiLibraryAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  // inputs
  taskCount = input.required<number>();
  open = input(false);

  // outputs
  leftSidebarToggled = output();
  rightSidebarToggled = output();

  // local state
  language = signal<Language>('de');
  languages: Language[] = [...languages];
  apps = ['Application 1', 'Application 2', 'Application 3', 'Application 4'];
  currentApp = signal('Application 1');

  constructor() {
    let lang = localStorage.getItem('six-lang') as Language;
    if (lang == null || !this.languages.includes(lang)) {
      lang = 'de';
    }
    this.language.set(lang);
    document.documentElement.lang = lang;
  }

  changeLanguage(event: Event) {
    const lang = (event as CustomEvent).detail;
    localStorage.setItem('six-lang', lang);
    location.reload();
  }
}
