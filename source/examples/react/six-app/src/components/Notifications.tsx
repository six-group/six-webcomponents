import React from 'react';
import { SixIconButton, SixBadge, SixSpinner } from '@six/ui-library-react/dist/components';
// feature
import './Notifications.css';

interface NotificationsProps {
  loading: boolean;
  notifications: number;
  toggleNotifications: () => void;
}

const Notifications = ({ loading, notifications, toggleNotifications }: NotificationsProps) => {
  const badge = loading ? (
    <SixBadge pill>
      <SixSpinner />
    </SixBadge>
  ) : (
    notifications && (
      <SixBadge type="danger" pill>
        {notifications}
      </SixBadge>
    )
  );

  return (
    <SixIconButton slot="notifications" name="notifications_none" onClick={toggleNotifications}>
      {badge}
    </SixIconButton>
  );
};

export default Notifications;
