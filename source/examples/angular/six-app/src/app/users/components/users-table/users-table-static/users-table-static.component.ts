import { Component, Input, TrackByFunction } from '@angular/core';
import { FilterModel, SortModel } from '@six-group/ui-library/dist/types/components/six-table/types';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { User } from '~/app/users/providers/users.service';
import { keys, columns } from '~/app/users/utils/table';
import { UsersFacade } from '~/app/users/providers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const propOr =
  (k: string) =>
  <T extends unknown>(o = {}, defaults: T): T =>
    (o as any)[k] || defaults;

interface Column {
  key: string;
  name?: string;
  sort?: string;
  filter?: string;
  value?: string;
}

@Component({
  selector: 'app-users-table-static',
  templateUrl: './users-table-static.component.html',
  changeDetection,
  encapsulation,
})
export class UsersTableStaticComponent {
  readonly keys = keys;

  @Input() users?: User[] | null;
  @Input() loading?: boolean | null;
  @Input() sort?: SortModel<User> | null;
  @Input() filter?: FilterModel<User> | null;
  @Input() quickSearch?: string | null;

  constructor(readonly usersFacade: UsersFacade) {}

  get columns() {
    return Object.entries(columns).map(([key, name]) => {
      const byKey = propOr(key);
      const sort = byKey(this.sort ?? {}, undefined);
      const [[filter, value] = []] = Object.entries<string>(byKey(this.filter ?? {}, {}));
      return { key, name, sort, filter, value } as Column;
    });
  }

  byKey: TrackByFunction<Column> = (index: number, { key }: Column) => key;
}
