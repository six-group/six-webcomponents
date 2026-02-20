import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { SixSelectChangePayload } from '../six-select/six-select';

export interface ResultsPerPageChangedPayload {
  resultsPerPage: number;
}

export interface PageChangedPayload {
  page: number;
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

  /** The total amount of pages */
  @Prop() totalPages: number = 20;

  /** The possible results per page. Must be a list of integers. At least one value is required!*/
  @Prop() resultsPerPage: number[] = [12, 24, 48];

  /** current page */
  @Prop({ mutable: true }) currentPage: number = 0;

  /** Emitted after the user selects a value from the results per page select. */
  @Event({ eventName: 'six-paginator-results-per-page-changed' })
  sixResultsPerPageChanged!: EventEmitter<ResultsPerPageChangedPayload>;

  /** Emitted either when the user explicitly clicks on a number, or when a back/forward button is pressed.
   * The page number emitted is an index which is zero-based
   */
  @Event({ eventName: 'six-paginator-page-changed' })
  sixPageChanged!: EventEmitter<PageChangedPayload>;

  private resultsPerPageChangedHandler = (event: CustomEvent<SixSelectChangePayload>) => {
    console.log('Event: ', event.detail.value);
    const parsed = parseInt(event.detail.value as string);
    console.log('Parsed: ', parsed);

    if (isNaN(parsed)) {
      console.error('Could not parse results per page value');
      return;
    }

    const payload = { resultsPerPage: parsed } as ResultsPerPageChangedPayload;

    console.log('Emitting payload: ', payload, '');

    this.sixResultsPerPageChanged.emit(payload);
  };
  private range(from: number, to: number): number[] {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }

  private clamp(value: number, min: number, max: number): number {
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
    const { currentPage, totalPages } = this;
    const shownElements = 9;

    if (totalPages <= shownElements) {
      return this.range(0, totalPages - 1).map((p) => this.pageItem(p));
    }

    const windowSize = shownElements - 2;
    const half = Math.floor(windowSize / 2);

    const start = this.clamp(currentPage - half, 1, totalPages - windowSize - 1);

    const end = start + windowSize - 1;

    const requiresStartGap = start > 1;
    const requiresEndGap = end < totalPages - 2;

    const middleStart = requiresStartGap ? start + 1 : start;
    const middleEnd = requiresEndGap ? end - 1 : end;

    return [
      this.pageItem(0),
      ...(requiresStartGap ? [this.gapItem()] : []),
      ...this.range(middleStart, middleEnd).map((p) => this.pageItem(p)),
      ...(requiresEndGap ? [this.gapItem()] : []),
      this.pageItem(totalPages - 1),
    ];
  }

  private navigateToPage(page: number | undefined) {
    if (page === undefined) {
      console.log('Page is undefined');
      return;
    }

    if (page > this.totalPages) {
      console.log('Page is greater than total pages');
      return;
    }

    if (page < 0) {
      console.log('Page is less than 1');
      return;
    }

    this.currentPage = page;
    this.sixPageChanged.emit({ page: this.currentPage });
  }

  private increasePage() {
    this.navigateToPage(this.currentPage + 1);
  }
  private decreasePage() {
    this.navigateToPage(this.currentPage - 1);
  }

  render() {
    return (
      <div class="paginator-parent">
        <div class="paginator-side-child">Total Pages: {this.totalPages}</div>
        <div class="paginator-center-child">
          <div class="paginator-values-container">
            <six-icon-button
              name="chevron_left"
              onClick={() => this.decreasePage()}
              disabled={this.currentPage === 0}
            ></six-icon-button>
            {this.computeSelectorValues()!.map((value) => {
              return (
                <div
                  class={{
                    'paginator-value-selector': true,
                  }}
                  onClick={() => this.navigateToPage(value.clickValue)}
                >
                  <span
                    class={{
                      'paginator-value-selector--current': value.clickValue === this.currentPage,
                      'paginator-value-selector--disabled': value.displayValue === this.PLACEHOLDER,
                    }}
                  >
                    {value.displayValue}
                  </span>
                </div>
              );
            })}
            <six-icon-button
              name="chevron_right"
              onClick={() => this.increasePage()}
              disabled={this.currentPage === this.totalPages - 1}
            ></six-icon-button>
          </div>
        </div>
        <div class="paginator-side-child">
          Results per page:
          <six-select value={this.resultsPerPage[0].toString()} onSix-select-change={this.resultsPerPageChangedHandler}>
            {this.resultsPerPage.map((rpp) => (
              <six-menu-item value={rpp.toString()}>{rpp}</six-menu-item>
            ))}
          </six-select>
        </div>
      </div>
    );
  }
}
