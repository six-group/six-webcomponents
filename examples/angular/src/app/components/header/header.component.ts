import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Language, languages } from '@six-group/ui-library';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeaderComponent {
  @Input() taskCount: number = 0;
  @Input() open = false;

  @Output() leftSidebarToggled = new EventEmitter();
  @Output() rightSidebarToggled = new EventEmitter();

  language: Language;
  languages: Language[] = [...languages];
  apps = ['Application 1', 'Application 2', 'Application 3', 'Application 4'];
  currentApp = 'Application 1';

  constructor() {
    let lang = localStorage.getItem('six-lang') as Language;
    if (lang == null || !this.languages.includes(lang)) {
      lang = 'de';
    }
    this.language = lang;
    document.documentElement.lang = lang;
  }

  changeLanguage(event: Event) {
    const lang = (event as CustomEvent).detail;
    localStorage.setItem('six-lang', lang);
    location.reload();
  }
}
