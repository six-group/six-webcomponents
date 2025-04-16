import { ContentChildren, Directive, HostBinding, HostListener, inject, QueryList } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { SixSidebarItem, SixSidebarItemGroup } from '../stencil-generated/components';

/**
 * This directive opens the six-sidbar-item-group bases on the active route
 */
@Directive({
  selector: 'six-sidebar-item-group',
  hostDirectives: [RouterLinkActive],
})
export class ActiveSidebarItemGroupDirective {
  private routerLinkActive = inject(RouterLinkActive);
  private sidebarItemGroup = inject(SixSidebarItemGroup);

  @ContentChildren(SixSidebarItem) private sidebarItems!: QueryList<SixSidebarItem>;

  @HostBinding('open')
  get open() {
    if (this.sidebarItems?.length > 0) {
      return this.routerLinkActive.isActive ? true : this.sidebarItemGroup.open;
    } else {
      return this.routerLinkActive.isActive;
    }
  }
}
