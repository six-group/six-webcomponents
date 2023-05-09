import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SixRootCollapsedPayload } from '@six-group/ui-library/dist/types/components/six-root/six-root';
import { changeDetection } from '../change-detection-strategy';
import { encapsulation } from '../view-encapsulation';
import { CoreFacade } from './core/providers';

const isSixRootCollapsedEvent = (e?: unknown): e is CustomEvent<SixRootCollapsedPayload> =>
  typeof (e as CustomEvent<SixRootCollapsedPayload>)?.detail?.collapsed === 'boolean';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection,
  encapsulation,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dialog') dialog?: ElementRef<HTMLSixDialogElement>;

  onSixRootCollapsed = (e: Event) => {
    if (isSixRootCollapsedEvent(e)) {
      this.coreFacade.setLeftSidebar(!e.detail.collapsed);
    }
  };

  constructor(readonly coreFacade: CoreFacade) {}

  ngAfterViewInit() {
    if (this.dialog) {
      this.coreFacade.dialog = this.dialog.nativeElement;
    }
  }
}
