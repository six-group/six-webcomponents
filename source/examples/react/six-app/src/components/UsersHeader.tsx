import { SixIcon, SixButton } from '@six/ui-library-react/dist/components';
// feature
import './UsersHeader.css';

interface UsersHeaderProps {
  fetchServerModel: boolean;
  toggleTableType: () => void;
}

const UsersHeader = ({ fetchServerModel, toggleTableType }: UsersHeaderProps) => {
  const text = fetchServerModel
    ? 'Fetch on every sort or filter update.'
    : 'Fetch once and do all sorting and filtering locally.';

  return (
    <header className="users-header">
      <SixIcon size="large">supervisor_account</SixIcon>
      <span className="users-header__title">Users</span>
      <p>
        Table could be constructed either from <code>ui-library</code> building blocks or directly supplying the data to <code>six-table</code> component. Two different fetching models are represented here.
      </p>
      <SixButton onClick={toggleTableType}>{fetchServerModel ? 'Server' : 'UI'}</SixButton>
      <span>{text}</span>
    </header>
  );
};

export default UsersHeader;
