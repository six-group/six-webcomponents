import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Language, languages, SixMenuItemSelectedPayload } from '@six-group/ui-library';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeaderComponent {
  @Input() taskCount: number = 0;
  @Input() open = false;

  @Output() leftSidebarToggled = new EventEmitter();
  @Output() rightSidebarToggled = new EventEmitter();
  @Output() itemClicked = new EventEmitter<CustomEvent<SixMenuItemSelectedPayload>>();

  language: Language;
  languages: Language[] = [...languages];

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

  profileClicked(event: Event) {
    const customEvent = event as CustomEvent<SixMenuItemSelectedPayload>;
    const name = customEvent.detail.name;
    if (name === 'change-password' || name === 'logout') {
      this.itemClicked.emit(customEvent);
    }
  }

  appSwitcherClicked(event: Event) {
    this.itemClicked.emit(event as CustomEvent<SixMenuItemSelectedPayload>);
  }
}
