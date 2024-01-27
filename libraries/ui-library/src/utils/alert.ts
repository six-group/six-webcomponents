import { AlertType } from '../components/six-alert/six-alert';

/**
 * Displays an alert on the toast stack with a specified message and optional configuration.
 *
 * @param message - The message to be displayed in the alert.
 * @param alertType - The type of the alert. Valid values are 'primary', 'info', 'success', 'warning', 'danger'. Default is 'info'.
 * @param duration - The duration in milliseconds for which the alert is displayed. If not provided, a default duration is set based on the alert type.
 * @param iconName - The name of the icon to be displayed in the alert. If not provided, a default icon is set based on the alert type.
 */
export function showAlert(message: string, alertType?: AlertType, duration?: number, iconName?: string): void {
  const type = alertType ?? 'info';
  const icon = iconName ?? getIcon(type);
  const alert = Object.assign(document.createElement('six-alert'), {
    type,
    duration: duration ?? getDuration(type),
    innerHTML: `<six-icon slot="icon">${icon}</six-icon>${escapeHtml(message)}`,
    closable: true,
  });
  document.body.append(alert);
  alert.toast();
}

function escapeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}

function getIcon(messageType: AlertType): string {
  switch (messageType) {
    case 'primary':
      return 'info';
    case 'info':
      return 'info';
    case 'success':
      return 'check_circle';
    case 'warning':
      return 'warning';
    case 'danger':
      return 'report';
  }
}

function getDuration(messageType: AlertType): number {
  switch (messageType) {
    case 'primary':
      return 10000;
    case 'info':
      return 10000;
    case 'success':
      return 10000;
    case 'warning':
      return 20000;
    case 'danger':
      return 20000;
  }
}
