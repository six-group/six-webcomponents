import { Directive, HostBinding, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

/**
 * This directive selects the six-sidbar-item bases on the active route
 */
@Directive({
  selector: 'six-sidebar-item',
  hostDirectives: [RouterLinkActive],
})
export class ActiveSidebarItemDirective {
  private routerLinkActive = inject(RouterLinkActive);

  @HostBinding('selected')
  get selected() {
    return this.routerLinkActive.isActive;
  }
}
