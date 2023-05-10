import { SixIcon } from '@six-group/ui-library-react/dist/components';
// feature
import './UsersHeader.css';

const UsersHeader = () => {
  return (
    <header className="users-header">
      <SixIcon size="large">supervisor_account</SixIcon>
      <span className="users-header__title">Users</span>
    </header>
  );
};

export default UsersHeader;
