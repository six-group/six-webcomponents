import { Component, Output, EventEmitter } from '@angular/core';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { CoreFacade } from '../../providers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection,
  encapsulation,
})
export class HeaderComponent {
  @Output() toggleLeftSidebar = new EventEmitter();

  constructor(readonly coreFacade: CoreFacade) {}
}
