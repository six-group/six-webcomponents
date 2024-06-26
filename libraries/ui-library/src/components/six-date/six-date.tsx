/**
 * - [ ] Nur Datum, ohne Zeit
 *   - (https://confluence.six-group.net/display/COMSLI/Meetings: In a first step we should have six-date in a usable state (for dates only, time is excluded). )
 *   - https://confluence.six-group.net/display/COMSLI/Date+and+DateTime+Picker
 *
 * - [ ] TODO handleInputChange
 * - [x] datepicker-improvement -> feature/six-date
 * - [x] rebase on main
 * - [ ] fix unwanted text selections
 * - [ ] use Language interface
 * - [ ] Default placeholder- https://vuetifyjs.com/en/components/date-inputs/#usage
 * - [ ] Integration in Framework Wrappers (Angular, vue, react)
 * - [ ] string anstatt Date als value
 * - [ ] css cleanup (use webcomponents design tokens)
 *
 * - [ ] date-util loswerden und ersetzen mit https://github.com/dmtrKovalenko/date-io?
 *   - get rid of date formats
 */
import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, State, Watch } from '@stencil/core';
import {
  createCalendarGrid,
  day,
  formatDate,
  getFirstDayOfTheWeek,
  hours,
  i18nDate,
  isValidDate,
  isValidDateString,
  minutes,
  month,
  now,
  PointerDate,
  rangeAround,
  removeTime,
  seconds,
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
import { calcIsDropDownContentUp } from '../../utils/popover-util';

const NUMBER_OF_YEARS_SHOWN = 25;

const MIN_POPUP_HEIGHT = 400;

export type SixDateSelectPayload = Date | undefined | null;

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
  private selectedDate?: Date;

  @Element() host!: HTMLSixDateElement;

  @State() private pointerDate = SixDate.getCurrentDateAsPointer();
  @State() selectionMode: SelectionMode = 'day';
  @State() isDropDownContentUp = false;

  /**
   * The language used to render the weekdays and months.
   */
  @Prop() locale: 'en' | 'de' | 'fr' | 'it' | 'es' = 'en';

  /** Indicates whether or not the calendar dropdown is open on startup. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Indicates whether or not the calendar should be shown as an inline (always open) component */
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
  @Prop() allowedDates: (date: Date) => boolean = () => true;

  /**
   * The minimum date allowed. Value must be a date object
   */
  @Prop() min?: Date;

  /**
   * The maximum date allowed. Value must be a date object
   */
  @Prop() max?: Date;

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
  @Prop() placeholder?: string;

  /**
   * The value of the form field, which accepts a date object.
   */
  @Prop({ mutable: true }) value?: Date;

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
    if (this.value != null && !isValidDate(this.value)) {
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

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.updateDropdownDirection();
  }

  @Listen('scroll', { target: 'window' })
  async scrollHandler() {
    this.updateDropdownDirection();
  }

  get container() {
    return this.containingElement || this.host;
  }

  get firstDateOfBox(): Date {
    const date = new Date(this.pointerDate.year, this.pointerDate.month, 1);
    return getFirstDayOfTheWeek(date);
  }

  /** Sets focus on the datepickers input. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.inputElement?.setFocus(options);
  }

  get calendarGrid() {
    return createCalendarGrid({
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

  private updateDropdownDirection() {
    if (this.inputElement == null || this.wrapper == null) {
      return;
    }

    // TODO: check if this is needed (it gets the input without label and help-text
    if (this.inputElement.shadowRoot?.children[1]) {
      this.isDropDownContentUp = calcIsDropDownContentUp(
        this.inputElement!.shadowRoot!.children[1]!.children[1] as HTMLElement,
        this.wrapper,
        MIN_POPUP_HEIGHT
      );
    }
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
    const date = this.getPointerDate();
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

  private getPointerDate(): Date | undefined {
    if (this.selectedDate !== undefined && this.selectedDate !== null) {
      return this.selectedDate;
    }
    if (this.defaultDate == null) {
      return removeTime(now());
    } else {
      return toDate(this.defaultDate, this.dateFormat);
    }
  }

  private updateValue(newDate?: Date) {
    this.updateIfChanged(newDate);
  }

  private updateIfChanged(newDate?: Date) {
    if (this.value?.getTime() === newDate?.getTime()) {
      return;
    }
    if (this.min && newDate && this.min.getTime() > newDate.getTime()) {
      return;
    }
    if (this.max && newDate && this.max.getTime() < newDate.getTime()) {
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
      const newDate = toDate(datestring, this.dateFormat);
      newDate?.setHours(this.pointerDate.hours, this.pointerDate.minutes, this.pointerDate.seconds);
      this.updateValue(newDate);
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

    const inputValueDate = toDate(inputValue, this.dateFormat);

    if (inputValueDate === undefined) {
      return;
    }

    this.updateIfChanged(inputValueDate);
    const datesOnly = inputValue.replace(/[^\d]/g, '');
    console.log(datesOnly);
    if (datesOnly.length >= 6) {
      const date = toDate(inputValue, this.dateFormat);
      const dateAsString = formatDate(date, this.dateFormat);
      if (isValidDateString(dateAsString, this.dateFormat)) {
        this.selectedDate = toDate(dateAsString, this.dateFormat);
        this.updatePointerDates();
        this.updateValue(this.selectedDate);
      }
    }
  };

  private handleOnBlur = (event: Event) => {
    // clear the value if the user deleted the date
    if (this.inputElement?.value === '' && isValidDate(this.value)) {
      this.value = undefined;
      this.sixSelect.emit(this.value);
    }

    event.stopPropagation();
    const inputValue = this.inputElement?.value;
    const inputValueDate = toDate(inputValue, this.dateFormat);
    const formattedDate = formatDate(this.value, this.dateFormat);

    if (this.inputElement != null && inputValueDate != null && inputValue !== formattedDate) {
      // properly format date if necessary
      this.inputElement.value = formattedDate;
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
      <header class="datepicker-header" part="header">
        <div class="datepicker-header__btn prev" onClick={this.previousUnit}>
          <svg viewBox="0 5 13 13" width="14" height="23">
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </div>

        <div class="datepicker-header__label">
          {this.selectionMode === 'day' && (
            <div onClick={() => (this.selectionMode = 'month')}>
              <span class="datepicker-header__label-month">{this.getMonthStringForIndex(this.pointerDate.month)}</span>
              <span>
                <svg viewBox="-3 -4 24 24" width="20" height="20">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          )}

          {this.selectionMode !== 'year' && (
            <div onClick={() => (this.selectionMode = 'year')}>
              <span class="datepicker-header__label-year">{this.pointerDate.year}</span>
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

        <div class="datepicker-header__btn next" onClick={this.nextUnit}>
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
            selectedDate={this.selectedDate}
            onClickMonthCell={this.onClickMonthCell}
          />
        );
      case 'year':
        return (
          <YearSelection
            selectedDate={this.selectedDate}
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
            'datepicker-clear': true,
            'datepicker-clear--right': this.iconPosition === 'left',
            'datepicker-clear--left': this.iconPosition === 'right',
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
    return formatDate(value, format);
  }

  render() {
    return (
      <div ref={(el) => (this.wrapper = el)} class="datepicker__container">
        <six-dropdown style={{ height: 'auto', width: '400px' }} hoist={true} showOverflow={true} open={this.open}>
          <six-input
            slot={'trigger'}
            value={this.getFormattedDateString(this.value, this.dateFormat)}
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
            class={{ 'input--empty': this.value == null }}
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
            <six-menu class="datepicker__panel">{[this.renderHeader(), this.renderBody()]}</six-menu>

            <div class="datepicker__footer">
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

  private static getCurrentDateAsPointer(): PointerDate {
    return {
      year: year(now()),
      month: month(now()),
      day: day(now()),
      hours: hours(now()),
      minutes: minutes(now()),
      seconds: seconds(now()),
    };
  }
}
