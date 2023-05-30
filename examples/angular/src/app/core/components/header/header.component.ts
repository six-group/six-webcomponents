import { Component, EventEmitter, Output } from '@angular/core';
import { CoreFacade } from '../../providers';
import { changeDetection, encapsulation } from '~/app/shared';

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
