import { Component, Input } from '@angular/core';
import { changeDetection, encapsulation } from '~/app/shared';
import { AsyncInput } from '~/app/utils/async-input';

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
  @Input() loading: AsyncInput<boolean>;
  @Input() count: AsyncInput<number>;
}
