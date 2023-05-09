import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { CoreFacade } from '../../providers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeaderComponent {
  @Output() toggleLeftSidebar = new EventEmitter();

  constructor(readonly coreFacade: CoreFacade) {}
}
