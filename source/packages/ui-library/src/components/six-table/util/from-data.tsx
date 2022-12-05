import { Data, isData, Item } from '../types';
import { filterBy } from './filter-by';
import { Fragment, h } from '@stencil/core';
import { sortBy } from './sort-by';
import { quickFilterBy } from './quick-filter-by';
import { FilterMode } from '../../six-table-header-cell/types';

interface FromDataProps<T extends Item> {
  data: Data<T>;
  handleRowClick: (item: T) => (event: MouseEvent) => void;
  handleCellClick: (item: T, key: string) => (event: MouseEvent) => void;
}

const propOr =
  (k: string) =>
  <T extends unknown>(o = {}, defaults: T): T =>
    o[k] || defaults;

export const fromData = <T extends Item>({ data, handleRowClick, handleCellClick }: FromDataProps<T>) => {
  if (!isData(data)) {
    return;
  }

  const keys = Object.keys(data.columns);

  const columns = keys.map((key) => {
    const byKey = propOr(key);

    const sort = byKey(data.sort, undefined);
    const [[filter, value] = []] = Object.entries<string>(byKey(data.filter, {}));

    return (
      <six-table-header-cell name={key} sort={sort} filter={filter as FilterMode} value={value}>
        {data.columns[key]}
      </six-table-header-cell>
    );
  });

  const quickFilter = quickFilterBy(Object.keys(data.columns), data.quickFilter);
  const filter = filterBy(data.filter);
  const sort = sortBy(data.sort, data.compare);

  const rows = sort(data.rows.filter(quickFilter).filter(filter)).map((item, index) => {
    const cells = keys.map((key) => {
      const renderer = data.render && data.render[key];
      // HTML is not escaped, responsibility lays on the caller
      const html = typeof renderer === 'function' ? renderer(item) : String(item[key]);

      return (
        <six-table-cell
          onClick={handleCellClick(item, key)}
          data-testid={`table-cell-${key}-${index}`}
          innerHTML={html}
        />
      );
    });

    return (
      <six-table-row onClick={handleRowClick(item)} data-testid={`table-row-${index}`}>
        {cells}
      </six-table-row>
    );
  });

  return (
    <Fragment>
      <six-table-header data-testid="table-header">{columns}</six-table-header>
      {rows}
    </Fragment>
  );
};
