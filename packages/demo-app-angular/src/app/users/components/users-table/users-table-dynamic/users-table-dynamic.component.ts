import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import {
  Data,
  SortModel,
  FilterModel,
  TableRowClickedPayload,
} from '@six-group/ui-library/dist/types/components/six-table/types';
import { changeDetection } from '~/change-detection-strategy';
import { encapsulation } from '~/view-encapsulation';
import { User } from '~/app/users/providers/users.service';
import { columns } from '~/app/users/utils/table';
import { UsersFacade } from '~/app/users/providers';

@Component({
  selector: 'app-users-table-dynamic',
  template: `
    <six-table
      [loading]="loading"
      (six-table-ready)="render()"
      (six-table-header-cell-sort-updated)="usersFacade.updateSort($event)"
      (six-table-header-cell-filter-updated)="usersFacade.updateFilter($event)"
      (six-table-row-clicked)="rowClicked($event)"
      #table
    ></six-table>
  `,
  changeDetection,
  encapsulation,
})
export class UsersTableDynamicComponent implements OnChanges {
  @ViewChild('table') table?: ElementRef<HTMLSixTableElement>;

  @Input() users?: User[] | null;
  @Input() loading?: boolean | null;
  @Input() sort?: SortModel<User> | null;
  @Input() filter?: FilterModel<User> | null;
  @Input() quickSearch?: string | null;

  data?: Data<User>;

  constructor(readonly usersFacade: UsersFacade) {}

  ngOnChanges() {
    this.data = {
      columns,
      sort: this.sort ?? {},
      filter: this.filter ?? {},
      quickFilter: this.quickSearch ?? '',
      rows: this.users || [],
    };
    this.render();
  }

  render = () => this.data && this.table?.nativeElement.setData(this.data);

  rowClicked = (e: Event) => {
    const { detail } = e as CustomEvent<TableRowClickedPayload<User>>;
    this.usersFacade.selectUser(detail.item.id);
  };
}
