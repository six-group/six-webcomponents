import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { SixSelectChangePayload } from '../six-select/six-select';

export interface SixPaginatorResultsPerPageChangedPayload {
  resultsPerPage: number;
}

export interface SixPaginatorPageChangedPayload {
  page: number;
  idx: number;
}

type PaginationItem = {
  displayValue: string;
  clickValue?: number;
};

@Component({
  tag: 'six-paginator',
  styleUrl: 'six-paginator.scss',
  shadow: true,
})
export class SixPaginator {
  private readonly PLACEHOLDER = '…';

  @Element() host!: HTMLSixPaginatorElement;

  /** The current page being displayed. This must be 0 based */
  @Prop({ mutable: true, reflect: true }) currentPage?: number;

  /** The total amount of pages. */
  @Prop() totalPages!: number;

  /** The total amount of results. */
  @Prop() totalResults!: number;

  /** The possible results per page. Must be a list of integers. At least one value is required. */
  @Prop() resultsPerPageOptions: Array<number> = [12, 24, 48];

  /** The results per page. Value must be one provided in the resultsPerPageOption. Otherwise the first value from the options will be used. */
  @Prop() resultsPerPage?: number;

  /** The amount of clickable page numbers to show. */
  @Prop() length: number = 9;

  /** Clamp the page numbers when they exceed the specified length. */
  @Prop() clamp: boolean = true;

  /** Disable all controls.  */
  @Prop() disabled: boolean = false;

  /** Emitted after the user selects a value from the results per page select. */
  @Event({ eventName: 'six-paginator-results-per-page-changed' })
  sixResultsPerPageChanged!: EventEmitter<SixPaginatorResultsPerPageChangedPayload>;

  /** Emitted whenever the page changes. This can be either due to one of the arrows bein pressed, or an explicit click on a page number. */
  @Event({ eventName: 'six-paginator-page-changed' })
  sixPageChanged!: EventEmitter<SixPaginatorPageChangedPayload>;

  constructor() {
    this.resultsPerPage =
      this.resultsPerPageOptions.indexOf(this.resultsPerPage ?? 0) > 0
        ? this.resultsPerPage
        : this.resultsPerPageOptions[0];

    this.currentPage = this.currentPage ?? 0;
  }

  private resultsPerPageChangedHandler = (event: CustomEvent<SixSelectChangePayload>) => {
    const parsed = parseInt(event.detail.value as string);

    if (isNaN(parsed)) {
      return;
    }

    this.sixResultsPerPageChanged.emit({ resultsPerPage: parsed } as SixPaginatorResultsPerPageChangedPayload);
  };

  private range(from: number, to: number): number[] {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }

  private computeClamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  private pageItem(pageIndex: number): PaginationItem {
    return {
      displayValue: String(pageIndex + 1),
      clickValue: pageIndex,
    };
  }

  private gapItem(): PaginationItem {
    return { displayValue: this.PLACEHOLDER };
  }

  private computeSelectorValues(): PaginationItem[] {
    if (this.totalPages <= this.length || !this.clamp) {
      return this.range(0, this.totalPages - 1).map((p) => this.pageItem(p));
    }

    const windowSize = this.length - 2;
    const half = Math.floor(windowSize / 2);

    const start = this.computeClamp(this.currentPage! - half, 1, this.totalPages - windowSize - 1);
    const end = start + windowSize - 1;

    const requiresStartGap = start > 1;
    const requiresEndGap = end < this.totalPages - 2;

    const middleStart = requiresStartGap ? start + 1 : start;
    const middleEnd = requiresEndGap ? end - 1 : end;

    return [
      this.pageItem(0),
      ...(requiresStartGap ? [this.gapItem()] : []),
      ...this.range(middleStart, middleEnd).map((p) => this.pageItem(p)),
      ...(requiresEndGap ? [this.gapItem()] : []),
      this.pageItem(this.totalPages - 1),
    ];
  }

  private navigateToPage(page: number | undefined) {
    if (this.disabled || page === undefined || page > this.totalPages || page < 0) {
      return;
    }

    this.currentPage = page;
    this.sixPageChanged.emit({ idx: this.currentPage, page: this.currentPage + 1 });
  }

  private increasePage() {
    this.navigateToPage(this.currentPage! + 1);
  }
  private decreasePage() {
    this.navigateToPage(this.currentPage! - 1);
  }

  get isAtEnd() {
    return this.currentPage === this.totalPages - 1;
  }

  get isAtStart() {
    return this.currentPage === 0;
  }

  render() {
    return (
      <div class="paginator-parent">
        <div class="paginator-side-child">
          <slot name="left">Total Results: {this.totalResults}</slot>
        </div>
        <div class="paginator-center-child">
          <div class="paginator-values-container">
            <six-icon-button
              name="first_page"
              id="six-paginator-navigation-first"
              onClick={() => this.navigateToPage(0)}
              disabled={this.isAtStart || this.disabled}
            ></six-icon-button>
            <six-icon-button
              name="chevron_left"
              id="six-paginator-navigation-prev"
              onClick={() => this.decreasePage()}
              disabled={this.isAtStart || this.disabled}
            ></six-icon-button>
            {this.computeSelectorValues()!.map((value) => {
              return (
                <div
                  class={{
                    'paginator-value-selector': true,
                    'paginator-value-selector--disabled': this.disabled,
                    'paginator-value-selector--clamp': value.displayValue === this.PLACEHOLDER,
                  }}
                  onClick={() => this.navigateToPage(value.clickValue)}
                >
                  <span
                    class={{
                      'paginator-value-selector--current': value.clickValue === this.currentPage,
                    }}
                  >
                    {value.displayValue}
                  </span>
                </div>
              );
            })}
            <six-icon-button
              name="chevron_right"
              id="six-paginator-navigation-next"
              onClick={() => this.increasePage()}
              disabled={this.isAtEnd || this.disabled}
            ></six-icon-button>
            <six-icon-button
              name="last_page"
              id="six-paginator-navigation-last"
              onClick={() => this.navigateToPage(this.totalPages - 1)}
              disabled={this.isAtEnd || this.disabled}
            ></six-icon-button>
          </div>
        </div>
        <div class="paginator-side-child paginator-side-child--right">
          <slot name="right">
            <span>Results per page: </span>
            <six-select
              id="six-paginator-results-per-page-select"
              line
              disabled={this.disabled}
              value={this.resultsPerPage!.toString()}
              onSix-select-change={this.resultsPerPageChangedHandler}
            >
              {this.resultsPerPageOptions.map((rpp) => (
                <six-menu-item value={rpp.toString()}>{rpp}</six-menu-item>
              ))}
            </six-select>
          </slot>
        </div>
      </div>
    );
  }
}
