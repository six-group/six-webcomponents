import React, { useEffect, useState } from 'react';
import { SixCard, SixDialog, SixDrawer } from '@six-group/ui-library-react/dist/components';
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
import UsersTableDynamic from './UsersTableDynamic';

interface UsersProps {
  search: string;
  setSearch: (value: string) => void;
}

const Users = ({ search, setSearch }: UsersProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const drawer = useModal(SixDrawer);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dialog = useModal(SixDialog);

  const [fetchServerModel, setFetchServerModel] = useState(false);
  const [sortModel, setSortModel] = useState(User.sort);
  const [filterModel, setFilterModel] = useState(User.filter);

  const { users, loading } = useUsers({ sortModel, filterModel, search });

  useEffect(() => {
    if (!fetchServerModel) {
      setSortModel(User.sort);
      setFilterModel(User.filter);
      setSearch('');
    }
  }, [fetchServerModel, setSortModel, setFilterModel, setSearch]);

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

  const toggleTableType = () => {
    setFetchServerModel(!fetchServerModel);
  };

  const table = fetchServerModel ? (
    <UsersTableStatic
      users={users}
      loading={loading}
      sortModel={sortModel}
      filterModel={filterModel}
      selectUser={selectUser}
      setSortModel={setSortModel}
      setFilterModel={setFilterModel}
    />
  ) : (
    <UsersTableDynamic users={users} loading={loading} search={search} selectUser={selectUser} />
  );

  return (
    <div className="users">
      <UsersHeader fetchServerModel={fetchServerModel} toggleTableType={toggleTableType} />
      <SixCard className={`users__table ${loading ? 'users__table--loading' : ''}`}>{table}</SixCard>
      <drawer.Component />
      <dialog.Component />
    </div>
  );
};

export default Users;
