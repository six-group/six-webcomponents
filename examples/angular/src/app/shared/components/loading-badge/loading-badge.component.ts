import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading-badge',
  template: `
    <ng-template #loaded>
      <six-badge type="danger" pill>
        {{ count }}
      </six-badge>
    </ng-template>
    <six-badge *ngIf="loading; else loaded">
      <six-spinner></six-spinner>
    </six-badge>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoadingBadgeComponent {
  @Input() loading?: boolean | null;
  @Input() count?: number | null;
}
