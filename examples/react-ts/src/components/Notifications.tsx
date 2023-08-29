// feature
import './Notifications.css';

interface NotificationsProps {
  loading: boolean;
  notifications: number;
  toggleNotifications: () => void;
}

const Notifications = ({ loading, notifications, toggleNotifications }: NotificationsProps) => {
  const badge = loading ? (
    <six-badge pill>
      <six-spinner />
    </six-badge>
  ) : (
    notifications && (
      <six-badge type="danger" pill>
        {notifications}
      </six-badge>
    )
  );

  return (
    <six-icon-button slot="notifications" name="notifications_none" onClick={toggleNotifications}>
      {badge}
    </six-icon-button>
  );
};

export default Notifications;
