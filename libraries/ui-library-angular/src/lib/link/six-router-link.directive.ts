import {
  Attribute,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, QueryParamsHandling, Router, RouterLink } from '@angular/router';
import { LocationStrategy } from '@angular/common';

/**
 * Forked from  https://github.com/ionic-team/ionic-framework/blob/main/packages/angular/common/src/directives/navigation/router-link-delegate.ts.
 */
@Directive({
  selector: 'six-sidebar-item[routerLink],six-sidebar-item-group[routerLink],six-button[routerLink]',
})
export class SixRouterLinkDirective implements OnInit, OnChanges {
  constructor(
    private locationStrategy: LocationStrategy,
    private elementRef: ElementRef,
    private router: Router,
    @Optional() private routerLinkDirective?: RouterLink
  ) {}

  @Input() routerLink?: any;
  @Input() queryParams?: any;
  @Input() fragment?: any;
  @Input() queryParamsHandling?: any;
  @Input() relativeTo?: any;

  ngOnInit(): void {
    this.updateTargetUrlAndHref();
  }

  ngOnChanges(): void {
    this.updateTargetUrlAndHref();
  }

  private updateTargetUrlAndHref(): void {
    if (this.routerLinkDirective?.urlTree) {
      this.elementRef.nativeElement.href = this.locationStrategy.prepareExternalUrl(
        this.router.serializeUrl(this.routerLinkDirective.urlTree)
      );
    }
  }
}
