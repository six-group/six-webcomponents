/**
 * - [ ] Nur Datum, ohne Zeit
 *   - (https://confluence.six-group.net/display/COMSLI/Meetings: In a first step we should have six-date in a usable state (for dates only, time is excluded). )
 *   - https://confluence.six-group.net/display/COMSLI/Date+and+DateTime+Picker
 *
 * - [x] TODO handleInputChange
 * - [x] datepicker-improvement -> feature/six-date
 * - [x] rebase on main
 * - [x] fix unwanted text selections
 * - [x] use Language interface
 * - [ ] Default placeholder- https://vuetifyjs.com/en/components/date-inputs/#usage
 * - [ ] Integration in Framework Wrappers (Angular, vue, react)
 * - [x] string anstatt Date als value
 * - [x] css cleanup (use webcomponents design tokens)
 * - [ ] value accessor kombinieren
 * - [ ] angular beispiel
 * - [ ] Datepicker shouldn't be able to open when disabled
 *
 * - [ ] date-util loswerden und ersetzen mit https://github.com/dmtrKovalenko/date-io?
 *   - get rid of date formats
 */
import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import {
  createNewCalendarGrid,
  day,
  formatDate,
  getCurrentDateAsPointer,
  getFirstDayOfTheWeekNew,
  hours,
  i18nDate,
  isValidDate,
  isValidDateString,
  minutes,
  month,
  now,
  parseDate,
  rangeAround,
  removeTime,
  seconds,
  TDateISODate,
  toDate,
  year,
} from '../../utils/date-util';
import { EventListeners } from '../../utils/event-listeners';
import { debounce, debounceEvent, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { SixDateFormats } from './six-date-formats';
import { MonthSelection } from './components/month-selection';
import { DaySelection } from './components/day-selection';
import { YearSelection } from './components/year-selection';
import { Language } from '../../utils/error-messages';

const NUMBER_OF_YEARS_SHOWN = 25;

export type SixDateSelectPayload = string | undefined | null;

export interface CalendarCell {
  date: Date;
  dateString: string;
  display: string;
  isDisabled: boolean;
  isOutdated: boolean;
  isSelected: boolean;
  isToday: boolean;
  label: string;
}

type SelectionMode = 'day' | 'month' | 'year';

/**
 * @since 1.0 TODO: replace with correct version
 * @status stable
 *
 * @slot - Used to define a footer for the date picker.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 */
@Component({
  tag: 'six-date',
  styleUrl: 'six-date.scss',
  shadow: true,
})
export class SixDate {
  private eventListeners = new EventListeners();
  private inputElement?: HTMLSixInputElement;
  private wrapper?: HTMLElement;
  private selectedDate?: string;

  @Element() host!: HTMLSixDateElement;

  @State() private pointerDate = getCurrentDateAsPointer();
  @State() selectionMode: SelectionMode = 'day';
  @State() isDropDownContentUp = false;

  /**
   * The language used to render the weekdays and months.
   */
  @Prop() locale: Language = 'en';

  /** Indicates whether the calendar dropdown is open on startup. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Indicates whether the calendar should be shown as an inline (always open) component */
  @Prop({ reflect: true }) inline = false;

  /**
   * If `true` the user can only select a date via the component in the popup, but not directly edit the input field.
   */
  @Prop() readonly = false;

  /**
   * If `true` the component is disabled.
   */
  @Prop() disabled = false;

  /**
   * Callback to determine which date in the datepicker should be selectable.
   * the callback function will get a datestring as an argument, e.g. '2021-07-04'
   *
   * Usage e.g.:
   * const datepicker = document.getElementById('allowed-date-picker');
   * datepicker.allowedDates = datestring => parseInt(datestring.split('-')[2], 10) % 2 === 0;
   */
  @Prop() allowedDates: (date: string) => boolean = () => true;

  /**
   * The minimum date allowed. Value must be an iso-date string.
   */
  @Prop() min?: TDateISODate;

  /**
   * The maximum date allowed.Value must be an iso-date string.
   */
  @Prop() max?: TDateISODate;

  /**
   * The enforced placement of the dropdown panel.
   */
  @Prop() placement?: 'top' | 'bottom';

  /** Datepicker size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /**
   * The date to defines where the datepicker popup starts. The prop accepts ISO 8601 date strings (YYYY-MM-DD).
   */
  @Prop() defaultDate?: string;

  /**
   * The placeholder defines what text to be shown on the input element
   */
  @Prop() placeholder?: string = 'dd.mm.yyyy';

  /**
   * The value of the form field, which accepts a date object.
   */
  @Prop({ mutable: true }) value?: string;

  /** The label text. */
  @Prop() label = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText: string | string[] = '';

  /** The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1 */
  @Prop() errorTextCount?: number;

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  @Prop() containingElement?: HTMLElement;

  /** Define the dateFormat. Valid formats are:
   * 'dd.mm.yyyy'
   * 'yyyy-mm-dd'
   * 'dd-mm-yyyy'
   * 'dd/mm/yyyy'
   * 'yyyy/mm/dd'
   * 'dd.mm.yy'
   * 'yy-mm-dd'
   * 'dd-mm-yy'
   * 'dd/mm/yy'
   * 'yy/mm/dd'
   * */
  @Prop() dateFormat: SixDateFormats = SixDateFormats.DDMMYYY_DOT;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `dateChange` event after each keystroke.
   */
  @Prop() debounce = DEFAULT_DEBOUNCE_FAST;

  /** The input's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  /** Set the position of the icon */
  @Prop() iconPosition: 'left' | 'right' = 'left';

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @Prop() hoist = false;

  @Watch('debounce')
  protected debounceChanged() {
    this.sixSelect = debounceEvent(this.sixSelect, this.debounce);
  }

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    if (this.value != null && !isValidDate(new Date(this.value))) {
      console.warn('invalid date value: ', this.value);
      this.value = undefined;
      this.sixSelect.emit(this.value);
    }
    this.selectedDate = this.value;
    this.updatePointerDates();
  }

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'six-date-select' }) sixSelect!: EventEmitter<SixDateSelectPayload>;

  /**
   * Emitted when the clear button is activated.
   */
  @Event({ eventName: 'six-date-clear' }) sixClear!: EventEmitter<EmptyPayload>;

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'six-date-blur' }) sixBlur!: EventEmitter<SixDateSelectPayload>;

  get container() {
    return this.containingElement || this.host;
  }

  get firstDateOfBox(): string {
    const date = new Date(this.pointerDate.year, this.pointerDate.month, 1);
    return getFirstDayOfTheWeekNew(date.toISOString());
  }

  /** Sets focus on the datepicker input. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.inputElement?.setFocus(options);
  }

  get calendarGrid() {
    return createNewCalendarGrid({
      firstDateOfBox: this.firstDateOfBox,
      allowedDates: this.allowedDates,
      dateFormat: this.dateFormat,
      locale: this.locale,
      selectedDate: this.selectedDate,
      minDate: this.min,
      maxDate: this.max,
      pointerDate: this.pointerDate,
    });
  }

  private getMonthStringForIndex(index: number) {
    return i18nDate[this.locale].months[index];
  }

  private previousUnit = () => {
    if (this.selectionMode === 'day') {
      this.previousMonth();
    } else if (this.selectionMode === 'month') {
      this.previousYear();
    } else if (this.selectionMode === 'year') {
      this.previousYearGroup();
    }
  };

  private previousYear() {
    this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year - 1 };
  }

  private previousYearGroup() {
    this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year - NUMBER_OF_YEARS_SHOWN };
  }

  private previousMonth() {
    if (this.pointerDate.month === 0) {
      this.pointerDate = { year: this.pointerDate.year - 1, month: 11, day: 1, hours: 0, minutes: 0, seconds: 0 };
    } else {
      this.pointerDate = {
        year: this.pointerDate.year,
        month: this.pointerDate.month - 1,
        day: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  private nextUnit = () => {
    if (this.selectionMode === 'day') {
      this.nextMonth();
    } else if (this.selectionMode === 'month') {
      this.nextYear();
    } else if (this.selectionMode === 'year') {
      this.nextYearGroup();
    }
  };

  private nextMonth() {
    if (this.pointerDate.month === 11) {
      this.pointerDate = { year: this.pointerDate.year + 1, month: 0, day: 1, hours: 0, minutes: 0, seconds: 0 };
    } else {
      this.pointerDate = {
        year: this.pointerDate.year,
        month: this.pointerDate.month + 1,
        day: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  private nextYear() {
    this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year + 1 };
  }

  private nextYearGroup() {
    this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year + NUMBER_OF_YEARS_SHOWN };
  }

  private openCalendar() {
    if (!this.open && !this.disabled) {
      this.open = true;
      this.setupEventListenersForOpenPopup();
    }
  }

  private setupEventListenersForOpenPopup() {
    this.eventListeners.add(document, 'keydown', this.handleDocumentKeyDown);
    this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
  }

  private handleDocumentKeyDown = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;
    // Close when escape is pressed
    if (this.open && keyboardEvent.key === 'Escape') {
      keyboardEvent.stopPropagation();
      this.closePopup();
      void this.inputElement?.setFocus();
    }

    // Handle tabbing
    if (keyboardEvent.key === 'Tab') {
      this.closePopup();
    }
  };

  private handleDocumentMouseDown = (event: Event) => {
    // Close when clicking outside the containing element
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.container)) {
      this.closePopup();
      return;
    }
  };

  private handleClearClick = async (event: MouseEvent) => {
    event.stopPropagation();
    await this.select(undefined);
    this.sixClear.emit();
  };

  private closePopup() {
    if (this.inline) {
      return;
    }

    this.open = false;
    this.eventListeners.remove(document, 'keydown', this.handleDocumentKeyDown);
    this.eventListeners.remove(document, 'mousedown', this.handleDocumentMouseDown);
    this.selectionMode = 'day';
  }

  private updatePointerDates() {
    const date = new Date(this.getPointerDate() || new Date());
    if (this.differsFromPointerDate(date)) {
      this.pointerDate = {
        year: year(date),
        month: month(date),
        day: day(date),
        hours: hours(date),
        minutes: minutes(date),
        seconds: seconds(date),
      };
    }
  }

  private differsFromPointerDate(date?: Date): boolean {
    return (
      this.pointerDate.day !== day(date) ||
      this.pointerDate.month !== month(date) ||
      this.pointerDate.year !== year(date) ||
      this.pointerDate.hours !== hours(date) ||
      this.pointerDate.minutes !== minutes(date) ||
      this.pointerDate.seconds !== seconds(date)
    );
  }

  private getPointerDate(): string | undefined {
    if (this.selectedDate !== undefined && this.selectedDate !== null) {
      return this.selectedDate;
    }
    if (this.defaultDate == null) {
      return removeTime(now()).toISOString();
    } else {
      return this.defaultDate;
    }
  }

  private updateValue(newDate?: string) {
    this.updateIfChanged(newDate);
  }

  private updateIfChanged(newDate?: string) {
    if (new Date(this.value || new Date()).getTime() === new Date(newDate || new Date()).getTime()) {
      return;
    }
    if (
      this.min !== undefined &&
      newDate &&
      parseDate(this.min, this.dateFormat, this.locale).getTime() > new Date(newDate || new Date()).getTime()
    ) {
      return;
    }
    if (
      this.max !== undefined &&
      newDate &&
      parseDate(this.max, this.dateFormat, this.locale).getTime() < new Date(newDate || new Date()).getTime()
    ) {
      return;
    }
    this.value = newDate;
    this.sixSelect.emit(this.value);
  }

  /**
   * Selects an option
   */
  @Method()
  async select(datestring?: string) {
    if (datestring == null) {
      this.updateValue(undefined);
    } else {
      const newDate = new Date(datestring);
      newDate?.setHours(this.pointerDate.hours, this.pointerDate.minutes, this.pointerDate.seconds);
      this.updateValue(newDate.toISOString());
    }

    this.updatePointerDates();
    this.closePopup();
  }

  private onClickDateCell = (cell: CalendarCell) => {
    if (!cell.isDisabled) {
      void this.select(cell.dateString);
    }
  };

  private onClickMonthCell = (selectedMonth: string) => {
    const month = i18nDate[this.locale].monthsShort.findIndex((monthShort) => monthShort === selectedMonth);
    this.pointerDate = { ...this.pointerDate, month };
    this.selectionMode = 'day';
  };

  private onClickYearCell = (year: number) => {
    this.pointerDate = { ...this.pointerDate, year };
    this.selectionMode = 'day';
  };

  private handleInputChange = (event: Event) => {
    if (this.inputElement == null) {
      return;
    }
    event.stopPropagation();

    const inputValue = this.inputElement.value;
    if (!isValidDateString(inputValue, this.dateFormat)) {
      return;
    }

    if (inputValue === undefined) {
      return;
    }

    this.updateIfChanged(inputValue);

    this.selectedDate = toDate(inputValue, this.dateFormat)?.toISOString();
    this.updatePointerDates();
  };

  private handleOnBlur = (event: Event) => {
    // clear the value if the user deleted the date
    if (this.inputElement?.value === '' && isValidDate(this.value)) {
      this.value = undefined;
      this.sixSelect.emit(this.value);
    }

    event.stopPropagation();
    const inputValue = this.inputElement?.value;
    const inputValueDate = new Date(inputValue || new Date());
    const formattedDate =
      this.value != null && this.value !== '' ? this.getFormattedDateString(new Date(this.value), this.dateFormat) : '';

    if (this.inputElement != null && inputValueDate != null && inputValue !== formattedDate) {
      // TODO: Is setting the date here even necessary? Don't we already do that below in the input?
      this.inputElement.value = formattedDate;
      // console.log(Intl.DateTimeFormat('de-CH').format(inputValueDate));
    }

    this.sixBlur.emit(this.value);
  };

  componentWillLoad() {
    this.selectedDate = this.value;
    this.updatePointerDates();
    this.updateValue(this.value);

    if (this.inline) {
      this.open = true;
    }

    if (this.open) {
      this.setupEventListenersForOpenPopup();
    }
  }

  componentDidLoad() {
    if (this.inputElement != null) {
      this.eventListeners.add(this.inputElement, 'six-input-input', debounce(this.handleInputChange, this.debounce));
      this.eventListeners.add(this.inputElement, 'six-input-blur', this.handleOnBlur);
    }
  }

  private renderHeader() {
    return (
      <header class="date-header" part="header">
        <div class="date-header__btn prev" onClick={this.previousUnit}>
          <svg viewBox="0 5 13 13" width="14" height="23">
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </div>

        <div class="date-header__label">
          {this.selectionMode === 'day' && (
            <div onClick={() => (this.selectionMode = 'month')}>
              <span class="date-header__label-month">{this.getMonthStringForIndex(this.pointerDate.month)}</span>
              <span>
                <svg viewBox="-3 -4 24 24" width="20" height="20">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          )}

          {this.selectionMode !== 'year' && (
            <div onClick={() => (this.selectionMode = 'year')}>
              <span class="date-header__label-year">{this.pointerDate.year}</span>
              <span>
                <svg viewBox="-3 -4 24 24" width="20" height="20">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          )}

          {this.selectionMode === 'year' && (
            <div>
              {this.pointerDate.year - Math.floor(NUMBER_OF_YEARS_SHOWN / 2)} –{' '}
              {this.pointerDate.year + Math.floor(NUMBER_OF_YEARS_SHOWN / 2)}
            </div>
          )}
        </div>

        <div class="date-header__btn next" onClick={this.nextUnit}>
          <svg viewBox="5 5 13 13" width="14" height="23">
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
          </svg>
        </div>
      </header>
    );
  }

  private renderBody() {
    switch (this.selectionMode) {
      case 'day':
        return (
          <DaySelection
            locale={i18nDate[this.locale]}
            calendarGrid={this.calendarGrid}
            onClickDateCell={this.onClickDateCell}
          />
        );
      case 'month':
        return (
          <MonthSelection
            locale={i18nDate[this.locale]}
            selectedDate={new Date(this.selectedDate || new Date())}
            onClickMonthCell={this.onClickMonthCell}
          />
        );
      case 'year':
        return (
          <YearSelection
            selectedDate={new Date(this.selectedDate || new Date())}
            yearSelection={rangeAround(this.pointerDate.year, NUMBER_OF_YEARS_SHOWN)}
            onClickYearCell={this.onClickYearCell}
          />
        );
    }
  }

  private renderCustomIcon() {
    const icon = hasSlot(this.host, 'custom-icon') ? (
      <slot name="custom-icon"></slot>
    ) : (
      <six-icon size={this.size === 'large' ? 'medium' : this.size}>today</six-icon>
    );

    return (
      <span
        slot="prefix"
        part="icon"
        class={{
          prefix: true,
          'prefix--right': this.iconPosition === 'right',
        }}
      >
        {icon}
      </span>
    );
  }

  private renderClearable() {
    return (
      this.clearable && (
        <button
          slot="suffix"
          class={{
            'date-clear': true,
            'date-clear--right': this.iconPosition === 'left',
            'date-clear--left': this.iconPosition === 'right',
          }}
          type="button"
          onClick={this.handleClearClick}
          tabindex="-1"
        >
          <six-icon size="small">clear</six-icon>
        </button>
      )
    );
  }

  private getFormattedDateString(value: Date | undefined, format: SixDateFormats) {
    return value ? formatDate(value, format) : '';
  }

  render() {
    return (
      <div ref={(el) => (this.wrapper = el)} class="date__container">
        <six-dropdown style={{ height: 'auto', width: '400px' }} hoist={true} showOverflow={true} open={this.open}>
          <six-input
            slot={'trigger'}
            value={this.getFormattedDateString(
              Boolean(this.value) ? new Date(this.value as string) : undefined,
              this.dateFormat
            )}
            ref={(el) => (this.inputElement = el)}
            placeholder={this.placeholder}
            readonly={this.readonly}
            disabled={this.disabled}
            name={this.name}
            label={this.label}
            required={this.required}
            errorText={this.errorText}
            errorTextCount={this.errorTextCount}
            invalid={this.invalid}
            onClick={() => this.openCalendar()}
            size={this.size}
            class={{ 'input--empty': this.value == null, 'input--disabled': this.disabled }}
          >
            {this.renderCustomIcon()}
            {this.renderClearable()}
            {hasSlot(this.host, 'label') ? (
              <span slot="label">
                <slot name="label" />
              </span>
            ) : null}
            {hasSlot(this.host, 'error-text') ? (
              <span slot="error-text">
                <slot name="error-text"></slot>
              </span>
            ) : null}
          </six-input>
          <div>
            <six-menu class="date__panel">{[this.renderHeader(), this.renderBody()]}</six-menu>

            <div class="date__footer">
              <slot />
            </div>
          </div>
        </six-dropdown>
      </div>
    );
  }

  connectedCallback() {
    this.eventListeners.forward('six-date-select', 'change', this.host);
    this.eventListeners.forward('six-date-blur', 'blur', this.host);
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }
}
