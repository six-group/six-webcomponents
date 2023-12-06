import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Optional, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
    private renderer: Renderer2,
    @Optional() private routerLinkDirective?: RouterLink
  ) {}

  @HostListener('click', ['$event'])
  onClick(event: UIEvent): void {
    // Prevents the browser from performing a page reload when pressing a SIX-component with routerLink.
    event.preventDefault();
  }

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
      const url = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLinkDirective.urlTree));
      this.renderer.setAttribute(this.elementRef.nativeElement, 'href', url);
    }
  }
}
