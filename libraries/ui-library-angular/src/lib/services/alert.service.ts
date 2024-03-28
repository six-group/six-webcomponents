import { inject, Injectable, NgZone } from '@angular/core';
import { AlertType, showAlert } from '@six-group/ui-library';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private ngZone = inject(NgZone);

  /**
   * Displays an alert as a toast notification.
   */
  public showAlert(message: string, alertType?: AlertType, duration?: number, iconName?: string): void {
    this.ngZone.runOutsideAngular(() => showAlert(message, alertType, duration, iconName));
  }
}
