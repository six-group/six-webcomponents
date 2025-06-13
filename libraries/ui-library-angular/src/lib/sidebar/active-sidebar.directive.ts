import { ContentChildren, Directive, HostBinding, HostListener, inject, QueryList } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { SixSidebarItem, SixSidebarItemGroup } from '../stencil-generated/components';

/**
 * Enables Angular router integration for the six-sidebar component.
 *
 * When this directive is added to a six-sidebar component using the 'sixRouterLinkActive' attribute,
 * it activates automatic route-based selection for sidebar items and groups.
 *
 * @recommended Add this directive to enable automatic route-based navigation in sidebars.
 *
 * @example
 * ```html
 * <six-sidebar sixRouterLinkActive>
 *   <six-sidebar-item routerLink="/home">Home</six-sidebar-item>
 *   <six-sidebar-item-group>
 *     <six-sidebar-item routerLink="/settings/profile">Profile</six-sidebar-item>
 *   </six-sidebar-item-group>
 * </six-sidebar>
 * ```
 */
@Directive({
  selector: 'six-sidebar[sixRouterLinkActive]',
  standalone: false,
})
export class ActiveSidebarDirective {}

/**
 * Enhances six-sidebar-item with Angular router integration.
 *
 * This directive automatically manages the 'selected' state of sidebar items based on the current route.
 * When used with ActiveSidebarDirective, it switches from manual selection to route-based selection.
 *
 * @requires RouterLinkActive
 * @optional ActiveSidebarDirective - If present, enables route-based selection
 */
@Directive({
  selector: 'six-sidebar-item',
  hostDirectives: [RouterLinkActive],
  standalone: false,
})
export class ActiveSidebarItemDirective {
  private routerLinkActive = inject(RouterLinkActive);

  private sidebarItem = inject(SixSidebarItem);
  private activeSidebarDirective = inject(ActiveSidebarDirective, { optional: true });

  @HostBinding('selected')
  get selected() {
    if (this.activeSidebarDirective == null) {
      return this.sidebarItem.selected;
    } else {
      return this.routerLinkActive.isActive;
    }
  }
}

/**
 * Enhances six-sidebar-item-group with Angular router integration.
 *
 * This directive automatically manages the 'open' state of sidebar groups based on the active route.
 * When a child route is active, the group automatically expands to show the active item.
 *
 * @requires RouterLinkActive
 * @optional ActiveSidebarDirective - If present, enables route-based expansion
 */
@Directive({
  selector: 'six-sidebar-item-group',
  hostDirectives: [RouterLinkActive],
  standalone: false,
})
export class ActiveSidebarItemGroupDirective {
  private routerLinkActive = inject(RouterLinkActive);
  private sidebarItemGroup = inject(SixSidebarItemGroup);
  private activeSidebarDirective = inject(ActiveSidebarDirective, { optional: true });

  @ContentChildren(SixSidebarItem) private sidebarItems!: QueryList<SixSidebarItem>;

  @HostBinding('open')
  get open() {
    if (this.activeSidebarDirective == null) {
      return this.sidebarItemGroup.open;
    }

    if (this.sidebarItems?.length > 0) {
      return this.routerLinkActive.isActive ? true : this.sidebarItemGroup.open;
    }

    return this.routerLinkActive.isActive;
  }
}
