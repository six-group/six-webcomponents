import React from 'react';
import {
  SixTable,
  SixTableCell,
  SixTableHeader,
  SixTableHeaderCell,
  SixTableRow,
} from '@six-group/ui-library-react/dist/components';
// types
import { User } from '../types/user';
import { FilterMode } from '@six-group/ui-library/dist/types/components/six-table-header-cell/types';
import { FilterModel, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';
import { byKey } from '../utils/prop-or';

interface UsersTableStaticProps {
  users: User[];
  loading: boolean;
  sortModel: SortModel<User>;
  filterModel: FilterModel<User>;
  selectUser: (user: User) => void;
  setSortModel: (sort: SortModel<User>) => void;
  setFilterModel: (filter: FilterModel<User>) => void;
}

const UsersTableStatic = ({
  users,
  loading,
  sortModel,
  filterModel,
  selectUser,
  setSortModel,
  setFilterModel,
}: UsersTableStaticProps) => {
  const handleRowClick = (user: User) => () => {
    selectUser(user);
  };

  const updateSort = ({ detail }: CustomEvent) => {
    setSortModel({ ...sortModel, ...detail });
  };

  const updateFilter = ({ detail }: CustomEvent) => {
    setFilterModel({ ...filterModel, ...detail });
  };

  const header = Object.entries(User.columns).map(([name, description]) => {
    const byName = byKey(name);

    const sort = byName(sortModel, undefined);
    const [[filter, value] = []] = Object.entries<string>(byName(filterModel, {}));

    return (
      <SixTableHeaderCell
        key={name}
        name={name}
        sort={sort}
        filter={filter as FilterMode}
        value={value}
        onSix-table-header-cell-sort-updated={updateSort}
        onSix-table-header-cell-filter-updated={updateFilter}
      >
        {description}
      </SixTableHeaderCell>
    );
  });

  const rows = users.map((user) => {
    const cells = Object.keys(User.columns).map((name) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <SixTableCell key={name}>{user[name]}</SixTableCell>;
    });

    return (
      <SixTableRow key={user.id} onClick={handleRowClick(user)}>
        {cells}
      </SixTableRow>
    );
  });

  return (
    <SixTable loading={loading || undefined}>
      <SixTableHeader>{header}</SixTableHeader>
      {rows}
    </SixTable>
  );
};

export default UsersTableStatic;
