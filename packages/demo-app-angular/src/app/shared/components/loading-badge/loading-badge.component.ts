import { Component, Input } from '@angular/core';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';

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
  changeDetection,
  encapsulation,
})
export class LoadingBadgeComponent {
  @Input() loading?: boolean | null;
  @Input() count?: number | null;
}
