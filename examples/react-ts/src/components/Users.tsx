import { SixDialog, SixDrawer } from '@six-group/ui-library-react';
// types
import { User } from '../types/user';
// hooks
import { useModal } from '../hooks/use-modal';
import { useUsers } from '../hooks/use-users';
// styles
import './Users.css';
// components
import UserForm from './UserForm';
import UsersTableStatic from './UsersTableStatic';
import UsersHeader from './UsersHeader';

const Users = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const drawer = useModal(SixDrawer);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dialog = useModal(SixDialog);

  const { users, loading } = useUsers();

  const handleUpdateUser = (update: Partial<User>) => {
    drawer.close();
    dialog.open({
      header: 'Update',
      children: <pre>{JSON.stringify(update, null, 2)}</pre>,
    });
  };

  const selectUser = (user: User) => {
    drawer.open({
      header: `User #${user.id}`,
      children: <UserForm user={user} updateUser={handleUpdateUser} />,
    });
  };

  return (
    <div className="users">
      <UsersHeader />
      <six-card className={`users__table ${loading ? 'users__table--loading' : ''}`}>
        <UsersTableStatic users={users} loading={loading} selectUser={selectUser} />
      </six-card>
      <drawer.Component />
      <dialog.Component />
    </div>
  );
};

export default Users;
