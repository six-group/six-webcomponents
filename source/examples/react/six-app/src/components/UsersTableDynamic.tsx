import { useCallback, useEffect, useRef, useState } from 'react';
import { SixTable } from '@six/ui-library-react/dist/components';
// feature
import { User } from '../types/user';

interface UsersTableDynamicProps {
  loading: boolean;
  users: User[];
  search: string;
  selectUser: (user: User) => void;
}

const UsersTableDynamic = ({ loading, users, search, selectUser }: UsersTableDynamicProps) => {
  const tableRef = useRef<HTMLSixTableElement>(null);

  const [sortModel, setSortModel] = useState(User.sort);
  const [filterModel, setFilterModel] = useState(User.filter);

  const updateTable = useCallback(() => {
    tableRef.current?.setData({
      columns: User.columns,
      rows: users,
      quickFilter: search,
      sort: sortModel,
      filter: filterModel,
    });
  }, [tableRef, users, search, sortModel, filterModel]);

  useEffect(() => {
    updateTable();
  }, [updateTable]);

  const rowClicked = ({ detail }: CustomEvent) => {
    selectUser(detail.item);
  };

  const updateSort = ({ detail }: CustomEvent) => {
    setSortModel({ ...sortModel, ...detail });
  };

  const updateFilter = ({ detail }: CustomEvent) => {
    setFilterModel({ ...filterModel, ...detail });
  };

  return (
    <SixTable
      loading={loading || undefined}
      onSix-table-ready={updateTable}
      onSix-table-header-cell-sort-updated={updateSort}
      onSix-table-header-cell-filter-updated={updateFilter}
      onSix-table-row-clicked={rowClicked}
      ref={tableRef}
    />
  );
};

export default UsersTableDynamic;
