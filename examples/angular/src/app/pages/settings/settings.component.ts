import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-settings',
  template: ` <h1>This is the {{ settingsType$ | async }} settings</h1> `,
})
export class SettingsComponent {
  settingsType$ = this.route.url.pipe(map((segments) => segments[segments.length - 1].path));

  constructor(private route: ActivatedRoute) {}
}
