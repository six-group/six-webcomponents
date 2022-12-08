import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { FilterMode, SortDirection } from './types';
import { FilterModel, Item, SortModel } from '../six-table/types';
import { getNextFilterState, getNextSortState } from './util/get-next-state';
import { createFilterModel, createSortModel } from './util/create-model';
import { FilterIcon, SortIcon } from './icons';

export type SixTableHeaderCellSortUpdatedPayload = SortModel<Item>;
export type SixTableHeaderCellFilterUpdatedPayload = FilterModel<Item>;

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the label of the header field.
 */

@Component({
  tag: 'six-table-header-cell',
  styleUrl: 'six-table-header-cell.scss',
  shadow: true,
})
export class SixTableHeaderCell {
  filterRef: HTMLSixDropdownElement;

  /** Table row property name. Used in the custom events to identify the row. */
  @Prop() name: keyof Item;
  /** Sort direction. Applied only when set. */
  @Prop() sort: SortDirection;
  /** Filter mode. Applied only when set. */
  @Prop() filter: FilterMode;
  /** Filter value. Applied only when filter mode is set. */
  @Prop() value: string;

  /** Emitted when sort model is updated. */
  @Event({ eventName: 'six-table-header-cell-sort-updated' })
  sortUpdated: EventEmitter<SixTableHeaderCellSortUpdatedPayload>;
  /** Emitted when filter model is updated. */
  @Event({ eventName: 'six-table-header-cell-filter-updated' })
  filterUpdated: EventEmitter<SixTableHeaderCellFilterUpdatedPayload>;

  inputElement: HTMLSixInputElement;

  handleSortNext = () => {
    this.sortUpdated.emit(createSortModel(this.name, getNextSortState(this.sort)));
  };

  handleFilterNext = () => {
    this.filterUpdated.emit(createFilterModel(this.name, getNextFilterState(this.filter), this.inputElement.value));
  };

  handleFilterChange = () => {
    this.filterUpdated.emit(createFilterModel(this.name, this.filter, this.inputElement.value));
  };

  handleFilterClear = () => {
    this.filterUpdated.emit(createFilterModel(this.name, this.filter, undefined));
    this.filterRef.hide();
  };

  render() {
    const sort = this.sort && (
      <six-icon
        filled={true}
        class={{ 'header__trigger-icon': this.sort === SortDirection.None }}
        onClick={this.handleSortNext}
        data-testid={`table-sort-${this.name}`}
      >
        {SortIcon[this.sort]}
      </six-icon>
    );

    const filter = this.filter && (
      <six-dropdown ref={(el) => (this.filterRef = el)} hoist data-testid={`table-filter-${this.name}`}>
        <six-icon slot="trigger" class="header__trigger-icon">
          filter_alt
        </six-icon>
        <six-input
          ref={(el) => (this.inputElement = el)}
          value={this.value}
          onSix-input-input={this.handleFilterChange}
        >
          <six-icon-button
            slot="prefix"
            html={FilterIcon[this.filter]}
            onClick={this.handleFilterNext}
            data-testid={`table-filter-prefix-${this.name}`}
          />
          <six-icon-button
            slot="suffix"
            name="clear"
            label="Clear"
            onClick={this.handleFilterClear}
            data-testid={`table-filter-suffix-${this.name}`}
          />
        </six-input>
      </six-dropdown>
    );

    return (
      <Host>
        <div class={{ header: true, 'header--selected': this.value !== undefined }}>
          <slot />
          <div class="header__trigger-icon-box">
            {sort}
            {filter}
          </div>
        </div>
      </Host>
    );
  }
}
