import { Component, Host, h, Prop, Event, EventEmitter, State, Listen, Method, Element } from '@stencil/core';
import { Data, isData, TableReadyPayload, TableRowClickedPayload, TableCellClickedPayload, Item } from './types';
import { fromData } from './util/from-data';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define header and the rows of the table.
 * @Deprecated - six-table will be removed with the next table. Use fate table instead.
 */

@Component({
  tag: 'six-table',
  styleUrl: 'six-table.scss',
  shadow: true,
})
export class SixTable {
  @Element() host: HTMLSixTableElement;

  /** Set to true to stripe the table. */
  @Prop() striped = false;
  /** Set to true to display loading indicator. */
  @Prop() loading = false;

  /** Emitted when table is ready. */
  @Event({ eventName: 'six-table-ready' }) tableReady: EventEmitter<TableReadyPayload>;
  /** Emitted when table row is clicked. */
  @Event({ eventName: 'six-table-row-clicked' }) tableRowClicked: EventEmitter<TableRowClickedPayload<Item>>;
  /** Emitted when table cell is clicked. */
  @Event({ eventName: 'six-table-cell-clicked' }) tableCellClicked: EventEmitter<TableCellClickedPayload<Item>>;

  @Listen('data')
  handleData<T extends Item>({ detail }: CustomEvent<Data<T>>) {
    if (!isData(detail)) {
      return;
    }

    this.data = detail;
  }

  @Method()
  async setData<T extends Item>(value: Data<T>) {
    if (!isData(value)) {
      return;
    }

    this.data = value;
  }

  @State() data: Data<Item> = {
    columns: {},
    rows: [],
  };

  componentDidLoad() {
    this.tableReady.emit();
  }

  handleRowClick =
    <T extends Item>(item: T) =>
    (event: MouseEvent) => {
      this.tableRowClicked.emit({ event, item });
    };

  handleCellClick =
    <T extends Item>(item: T, key: string) =>
    (event: MouseEvent) => {
      this.tableCellClicked.emit({ event, item, key });
    };

  constructor() {
    console.warn(
      'six-table will be removed with the next table. Use fate table instead. In case of any question contact Daniel Häusler',
    );
  }

  render() {
    const loading = this.loading && (
      <div class="loading">
        <six-spinner data-testid="loading-spinner" />
      </div>
    );

    return (
      <Host>
        <slot>{fromData(this)}</slot>
        {loading}
      </Host>
    );
  }
}
