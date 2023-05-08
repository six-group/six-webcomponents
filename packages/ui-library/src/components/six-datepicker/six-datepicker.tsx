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
  seconds,
  toDate,
  year,
} from '../../utils/date-util';
import { EventListeners } from '../../utils/event-listeners';
import { isNil } from '../../utils/type-check';
import { debounce, debounceEvent, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { hasSlot } from '../../utils/slot';
import { EmptyPayload } from '../../utils/types';
import { SixDateFormats } from './six-date-formats';
import { MonthSelection } from './components/month-selection';
import { DaySelection } from './components/day-selection';
import { YearSelection } from './components/year-selection';
import { SixTimepickerChange } from '../six-timepicker/six-timepicker';
import { SixTimePropertyName } from '../six-timepicker/six-timepicker.types';

const NUMBER_OF_YEARS_SHOWN = 25;

const MIN_POPUP_HEIGHT = 400;

export type SixDatepickerSelectPayload = Date | undefined | null;

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

enum SelectionMode {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
}

const getYearSelectionAroundYear = (year: number): number[][] => {
  const numberOfElementsPerRow = 5;
  return Array.from(new Array(NUMBER_OF_YEARS_SHOWN).keys())
    .map((n) => n + year - Math.floor(NUMBER_OF_YEARS_SHOWN / 2))
    .reduce((curr, item, index) => {
      if (index % numberOfElementsPerRow === 0) {
        curr.push([]);
      }

      curr[curr.length - 1].push(item);

      return curr;
    }, []);
};

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define a footer for the date picker.
 */
@Component({
  tag: 'six-datepicker',
  styleUrl: 'six-datepicker.scss',
  shadow: true,
})
export class SixDatepicker {
  private readonly eventListeners = new EventListeners();

  private inputElement: HTMLSixInputElement;

  private popup: HTMLElement;

  private wrapper: HTMLElement;

  @Element()
  readonly host: HTMLSixDatepickerElement;

  private selectedDate: Date | null = null;

  @State() private pointerDate = SixDatepicker.getCurrentDateAsPointer();
  @State() selectionMode: SelectionMode = SelectionMode.DAY;
  @State() isDropDownContentUp = false;

  /**
   * Set the type.
   */
  @Prop() type: 'date' | 'date-time' = 'date';

  /**
   * The language used to render the weekdays and months.
   */
  @Prop() locale: 'en' | 'de' | 'fr' | 'it' = 'en';

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
   * The minimum datetime allowed. Value must be a date object
   */
  @Prop() min?: Date | null = null;

  /**
   * The maximum datetime allowed. Value must be a date object
   */
  @Prop() max?: Date | null = null;

  /**
   * Closes the datepicker dropdown after selection
   */
  @Prop() closeOnSelect = this.type === 'date';

  /**
   * The enforced placement of the dropdown panel.
   */
  @Prop() placement: 'top' | 'bottom';

  /** Datepicker size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to make the input a required field. */
  @Prop({ reflect: true }) required: boolean;

  /**
   * The date to defines where the datepicker popup starts. The prop accepts ISO 8601 date strings (YYYY-MM-DD).
   */
  @Prop() defaultDate?: string | null;

  /**
   * The placeholder defines what text to be shown on the input element
   */
  @Prop() placeholder?: string | null;

  /**
   * The value of the form field, which accepts a date object.
   */
  @Prop({ mutable: true }) value?: Date | null = null;

  /** The dropdown will close when the user interacts outside of this element (e.g. clicking). */
  @Prop() containingElement: HTMLElement;

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

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** The input's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** The input's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

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
    // map unreadable values to undefined to make the datepicker fault-tolerant
    if (this.isValidValue()) {
      console.warn('Encountered unreadable date, will map to undefined. Received value', this.value);
      this.value = undefined;
      return;
    }

    this.selectedDate = this.value;
    this.updatePointerDates();
    this.sixSelect.emit(this.value);
  }

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'six-datepicker-select' }) sixSelect: EventEmitter<SixDatepickerSelectPayload>;

  /**
   * Emitted when the clear button is activated.
   */
  @Event({ eventName: 'six-datepicker-clear' }) sixClear: EventEmitter<EmptyPayload>;

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'six-datepicker-blur' }) sixBlur: EventEmitter<SixDatepickerSelectPayload>;

  @Listen('resize', { target: 'window' })
  async resizeHandler() {
    this.calcIsDropDownContentUp();
    this.moveOpenHoistedPopup();
    this.adjustPopupPosition();
  }

  @Listen('scroll', { target: 'window' })
  async scrollHandler() {
    this.calcIsDropDownContentUp();
    this.moveOpenHoistedPopup();
  }

  private defaultValue: Date = null;

  get container() {
    return this.containingElement || this.host;
  }

  get firstDateOfBox(): Date {
    const date = new Date(this.pointerDate.year, this.pointerDate.month, 1);
    return getFirstDayOfTheWeek(date);
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.inputElement.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    return this.inputElement.checkValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    await this.inputElement.setCustomValidity(message);
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.value = this.defaultValue;
    this.inputElement.value = formatDate(this.defaultValue, this.dateFormat);
    await this.inputElement.reset();
  }

  private isValidValue() {
    if (this.value === undefined || this.value === null) {
      return false;
    }

    if (!(this.value instanceof Date)) {
      return true;
    }

    return this.value instanceof Date && isNaN(this.value as any);
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

  private calcIsDropDownContentUp() {
    if (!this.inputElement || !this.wrapper) {
      return;
    }

    const inputBoundingRect = this.inputElement.getBoundingClientRect();
    const wrapperBoundingRect = this.wrapper.getBoundingClientRect();
    const minPopupHeight = Math.max(wrapperBoundingRect.height, MIN_POPUP_HEIGHT);

    const moreSpaceInTop = inputBoundingRect.y > window.innerHeight / 2;
    this.isDropDownContentUp = moreSpaceInTop && window.innerHeight < inputBoundingRect.bottom + minPopupHeight;
  }

  private getMonthStringForIndex(index: number) {
    return i18nDate[this.locale].months[index];
  }

  private previousUnit() {
    if (this.selectionMode === SelectionMode.DAY) {
      this.previousMonth();
    } else if (this.selectionMode === SelectionMode.MONTH) {
      this.previousYear();
    } else if (this.selectionMode === SelectionMode.YEAR) {
      this.previousYearGroup();
    }
  }

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

  private nextUnit() {
    if (this.selectionMode === SelectionMode.DAY) {
      this.nextMonth();
    } else if (this.selectionMode === SelectionMode.MONTH) {
      this.nextYear();
    } else if (this.selectionMode === SelectionMode.YEAR) {
      this.nextYearGroup();
    }
  }

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

  openCalendar() {
    if (!this.open && !this.disabled) {
      this.open = true;
      this.setupEventListenersForOpenPopup();
    }
  }

  private setupEventListenersForOpenPopup() {
    this.eventListeners.add(document, 'keydown', this.handleDocumentKeyDown);
    this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
  }

  handleDocumentKeyDown = (event: KeyboardEvent) => {
    // Close when escape is pressed
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.closePopup();
      void this.inputElement.setFocus();
    }

    // Handle tabbing
    if (event.key === 'Tab') {
      this.closePopup();
    }
  };

  handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the containing element
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.container)) {
      this.closePopup();
      return;
    }
  };

  handleClearClick(event: MouseEvent) {
    event.stopPropagation();
    void this.select(undefined);
    this.sixClear.emit();
  }

  private closePopup() {
    if (this.inline) {
      return;
    }

    this.open = false;
    this.eventListeners.remove(document, 'keydown', this.handleDocumentKeyDown);
    this.eventListeners.remove(document, 'mousedown', this.handleDocumentMouseDown);
    this.selectionMode = SelectionMode.DAY;
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

  private differsFromPointerDate(date: Date): boolean {
    return (
      this.pointerDate.day !== day(date) ||
      this.pointerDate.month !== month(date) ||
      this.pointerDate.year !== year(date) ||
      this.pointerDate.hours !== hours(date) ||
      this.pointerDate.minutes !== minutes(date) ||
      this.pointerDate.seconds !== seconds(date)
    );
  }

  private getPointerDate() {
    if (this.selectedDate !== undefined && this.selectedDate !== null) {
      return this.selectedDate;
    }

    if (isNil(this.defaultDate)) {
      return now();
    } else {
      return this.defaultDate && toDate(this.defaultDate, this.dateFormat);
    }
  }

  private updateValue(newDate: Date | undefined | null) {
    this.displayCustomMessage(true);
    this.updateIfChanged(newDate);
  }

  updateIfChanged(newDate: Date) {
    if (this.value?.getTime() === newDate?.getTime()) {
      return;
    }

    this.value = newDate;
  }

  /**
   * Selects an option
   */
  @Method()
  async select(datestring: string) {
    if (!datestring) {
      this.updateValue(undefined);
    } else {
      const newDate = toDate(datestring, this.dateFormat);
      newDate.setHours(this.pointerDate.hours, this.pointerDate.minutes, this.pointerDate.seconds);
      this.updateValue(newDate);
    }

    this.updatePointerDates();

    if (this.closeOnSelect) {
      this.closePopup();
    }
  }

  onTimepickerChange = (sixTimepickerChange: CustomEvent<SixTimepickerChange>) => {
    const time = sixTimepickerChange.detail.value;
    const newDate = new Date();

    if (this.selectedDate) {
      newDate.setFullYear(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate());
    }

    newDate.setHours(
      time[SixTimePropertyName.HOURS],
      time[SixTimePropertyName.MINUTES],
      time[SixTimePropertyName.SECONDS],
    );

    this.updateValue(newDate);
    this.updatePointerDates();
  };

  onClickDateCell = (cell: CalendarCell) => {
    if (!cell.isDisabled) {
      void this.select(cell.dateString);
    }
  };

  onClickMonthCell = (selectedMonth: string) => {
    const month = i18nDate[this.locale].monthsShort.findIndex((monthShort) => monthShort === selectedMonth);
    this.pointerDate = { ...this.pointerDate, month };
    this.selectionMode = SelectionMode.DAY;
  };

  onClickYearCell = (year: number) => {
    this.pointerDate = { ...this.pointerDate, year };
    this.selectionMode = SelectionMode.DAY;
  };

  handleInputChange = (event: Event) => {
    const inputValue = this.inputElement.value;

    if (!isValidDateString(inputValue, this.dateFormat)) {
      return;
    }

    const inputValueDate = toDate(inputValue, this.dateFormat);

    if (inputValueDate === undefined) {
      return;
    }

    if (this.min && this.min.getTime() > inputValueDate.getTime()) {
      return;
    }

    if (this.max && this.max.getTime() < inputValueDate.getTime()) {
      return;
    }

    this.updateIfChanged(inputValueDate);
    event.stopPropagation();

    const datesOnly = inputValue.replace(/[^\d]/g, '');

    let isDateValid = !inputValue;

    if (inputValue && datesOnly.length >= 6) {
      const date = toDate(inputValue, this.dateFormat);
      const datestring = formatDate(date, this.dateFormat);
      if (isValidDateString(datestring, this.dateFormat)) {
        this.selectedDate = toDate(datestring, this.dateFormat);
        this.updatePointerDates();
        this.updateValue(this.selectedDate);
        isDateValid = true;
      }
    }
    this.displayCustomMessage(isDateValid);
  };

  handleOnBlur = (event: Event) => {
    // clear the value if the user deleted the date
    if (this.inputElement.value === '' && isValidDate(this.value)) {
      this.value = undefined;
    }

    event.stopPropagation();
    const inputValue = this.inputElement.value;
    const inputValueDate = toDate(inputValue, this.dateFormat);
    const formattedDate = formatDate(this.value, this.dateFormat);

    if (inputValueDate && inputValue !== formattedDate) {
      // properly format date if necessary
      this.inputElement.value = formattedDate;
    }

    this.sixBlur.emit(this.value);
  };

  componentWillLoad() {
    this.validateProps();

    this.defaultValue = this.value;
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

  private validateProps() {
    if (this.value !== null && this.value !== undefined && !(this.value instanceof Date)) {
      throw new Error('Datepicker no longer supports strings as value. Use a date object instead!');
    }

    if (this.min !== null && this.min !== undefined && !(this.min instanceof Date)) {
      throw new Error('Datepicker no longer supports strings as min. Use a date object instead!');
    }

    if (this.max !== null && this.max !== undefined && !(this.max instanceof Date)) {
      throw new Error('Datepicker no longer supports strings as min. Use a date object instead!');
    }
  }

  componentDidLoad() {
    this.eventListeners.add(this.inputElement, 'six-input-input', debounce(this.handleInputChange, this.debounce));
    this.eventListeners.add(this.inputElement, 'six-input-blur', this.handleOnBlur);
  }

  renderHeader() {
    return (
      <header class="datepicker-header" part="header">
        <div class="datepicker-header__btn prev" onClick={() => this.previousUnit()}>
          <svg viewBox="0 5 13 13" width="14" height="23">
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </div>

        <div class="datepicker-header__label">
          {this.selectionMode === SelectionMode.DAY && (
            <div onClick={() => (this.selectionMode = SelectionMode.MONTH)}>
              <span class="datepicker-header__label-month">{this.getMonthStringForIndex(this.pointerDate.month)}</span>
              <span>
                <svg viewBox="-3 -4 24 24" width="20" height="20">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          )}

          {this.selectionMode !== SelectionMode.YEAR && (
            <div onClick={() => (this.selectionMode = SelectionMode.YEAR)}>
              <span class="datepicker-header__label-year">{this.pointerDate.year}</span>
              <span>
                <svg viewBox="-3 -4 24 24" width="20" height="20">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
          )}

          {this.selectionMode === SelectionMode.YEAR && (
            <div>
              {this.pointerDate.year - Math.floor(NUMBER_OF_YEARS_SHOWN / 2)} –{' '}
              {this.pointerDate.year + Math.floor(NUMBER_OF_YEARS_SHOWN / 2)}
            </div>
          )}
        </div>

        <div class="datepicker-header__btn next" onClick={() => this.nextUnit()}>
          <svg viewBox="5 5 13 13" width="14" height="23">
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
          </svg>
        </div>
      </header>
    );
  }

  renderBody() {
    switch (this.selectionMode) {
      case SelectionMode.DAY:
        return (
          <DaySelection
            locale={i18nDate[this.locale]}
            calendarGrid={this.calendarGrid}
            onClickDateCell={this.onClickDateCell}
          />
        );
      case SelectionMode.MONTH:
        return (
          <MonthSelection
            locale={i18nDate[this.locale]}
            selectedDate={this.selectedDate}
            onClickMonthCell={this.onClickMonthCell}
          />
        );
      case SelectionMode.YEAR:
        return (
          <YearSelection
            selectedDate={this.selectedDate}
            yearSelection={getYearSelectionAroundYear(this.pointerDate.year)}
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

  render() {
    this.adjustPopupPosition();

    return (
      <div ref={(el) => (this.wrapper = el)} class="datepicker__container">
        <six-input
          part="base"
          value={formatDate(this.value, this.dateFormat)}
          ref={(el) => (this.inputElement = el)}
          placeholder={this.placeholder}
          readonly={this.readonly}
          disabled={this.disabled}
          name={this.name}
          label={this.label}
          required={this.required}
          error-text={this.errorText}
          error-on-blur={this.errorOnBlur}
          onClick={() => this.openCalendar()}
          size={this.size}
          class={{ 'input--empty': !this.value }}
        >
          {this.renderCustomIcon()}
          {this.renderClearable()}

          {hasSlot(this.host, 'error-text') ? (
            <span slot="error-text">
              <slot name="error-text" />
            </span>
          ) : null}
          {hasSlot(this.host, 'label') ? (
            <span slot="label">
              <slot name="label" />
            </span>
          ) : null}
        </six-input>
        {this.open && (
          <div
            part="popup"
            ref={(el) => (this.popup = el)}
            class={{
              datepicker__popup: true,
              'datepicker__popup--is-up': this.placement ? this.placement === 'top' : this.isDropDownContentUp,
              'datepicker__popup--is-inline': this.inline,
            }}
          >
            {this.renderHeader()}
            {this.renderBody()}
            {this.type === 'date-time' && (
              <six-timepicker
                inline={true}
                onSix-timepicker-change-debounced={(event) => this.onTimepickerChange(event)}
                value={
                  this.selectedDate?.getHours() +
                  ':' +
                  this.selectedDate?.getMinutes() +
                  ':' +
                  this.selectedDate?.getSeconds()
                }
              ></six-timepicker>
            )}
            <div class="datepicker__footer">
              <slot />
            </div>
          </div>
        )}
      </div>
    );
  }

  private adjustPopupPosition() {
    this.adjustPopupForHoisting();
    this.adjustPopupForSmallScreens();
  }

  /*
   * The position of the hoisted datepicker needs to be correctly calculated since the position changes to fixed.
   * Thus if the user scrolls or adjusts the screen size we need to recalculate the datepicker position.
   */
  private moveOpenHoistedPopup() {
    if (!this.hoist || !this.open) {
      return;
    }

    const popupBoundingClientRect = this.popup.getBoundingClientRect();
    const popupHeight = popupBoundingClientRect.height;
    const inputBoundingClientRect = this.inputElement.getBoundingClientRect();
    const inputTop = inputBoundingClientRect.top;
    const inputHeight = inputBoundingClientRect.height;

    this.calcIsDropDownContentUp();

    if (this.isDropDownContentUp) {
      this.popup.style.top = `${inputTop - popupHeight}px`;
    } else {
      this.popup.style.top = `${inputTop + inputHeight}px`;
    }
  }

  /*
   * For small screens the datepicker popup could be cut-off even though there might still be space within the viewport.
   * This is because the popup is always aligned with the trigger input field. However in the scenario of small screens
   * we should reposition the popup to use the space available.
   */
  private adjustPopupForSmallScreens() {
    // execute after dropdown has been rendered to make sure the popup reference is correctly set
    setTimeout(() => {
      if (!this.popup) {
        return;
      }

      const popupBoundingClientRect = this.popup.getBoundingClientRect();

      const setPopupAsFixPosition = () => {
        // apply screen position to fixed popup
        this.popup.style.position = 'fixed';
        ['top', 'left', 'width', 'height'].forEach((property) => {
          this.popup.style[property] = `${popupBoundingClientRect[property]}px`;
        });
      };

      if (
        popupBoundingClientRect.y < 0 &&
        window.innerHeight - popupBoundingClientRect.height > 0 &&
        Math.abs(popupBoundingClientRect.y) <= popupBoundingClientRect.height
      ) {
        // handle case where popup is cut-off on top but there is still space available

        setPopupAsFixPosition();
        this.popup.style.top = '0px';
      } else if (
        window.innerHeight < popupBoundingClientRect.y + popupBoundingClientRect.height &&
        window.innerHeight > popupBoundingClientRect.height &&
        Math.abs(popupBoundingClientRect.y - window.innerHeight) <= popupBoundingClientRect.height
      ) {
        // handle case where popup is cut-off at the bottom but there is still space available above
        // apply screen position to fixed popup
        setPopupAsFixPosition();
        this.popup.style.top = `${window.innerHeight - popupBoundingClientRect.height}px`;
      }

      if (
        window.innerWidth < popupBoundingClientRect.x + popupBoundingClientRect.width &&
        window.innerWidth > popupBoundingClientRect.width &&
        Math.abs(popupBoundingClientRect.x - window.innerWidth) <= popupBoundingClientRect.width
      ) {
        // handle case where popup is cut-off to the right
        setPopupAsFixPosition();
        this.popup.style.left = `${window.innerWidth - popupBoundingClientRect.width}px`;
      }
    }, 0);
  }

  /*
   * If the popup is hoisted we popup is hoisted its position will change to fix to not be clipped of by a containing container.
   * To render the popup correctly we render it normally, and then assign this screenposition to the fixed popup
   */
  private adjustPopupForHoisting() {
    if (!this.hoist) {
      return;
    }

    // execute after dropdown has been rendered to make sure the popup reference is correctly set
    setTimeout(() => {
      if (!this.popup) {
        return;
      }

      // take a snapshot of normally rendered popup
      const popupBoundingClientRect = this.popup.getBoundingClientRect();

      // apply screen position to fixed popup
      this.popup.style.position = 'fixed';
      ['top', 'left', 'width', 'height'].forEach((property) => {
        this.popup.style[property] = `${popupBoundingClientRect[property]}px`;
      });

      const inputBoundingClientRect = this.inputElement.getBoundingClientRect();
      const inputTop = inputBoundingClientRect.top;
      const popupTop = popupBoundingClientRect.top;

      this.calcIsDropDownContentUp();
      // check screen position to check whether the popup should be moved above or below the trigger element
      if (this.isDropDownContentUp && inputTop < popupTop) {
        //  move popup above input field if datepicker is at bottom of screen
        this.popup.style.top = `${popupTop - popupBoundingClientRect.height - inputBoundingClientRect.height}px`;
      }
    }, 0);
  }

  connectedCallback() {
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  private displayCustomMessage(valid: boolean) {
    if (!this.inputElement) {
      return;
    }
    if (valid) {
      void this.setCustomValidity('');
    } else {
      const message = this.errorText ? this.errorText : 'Invalid date format';
      void this.setCustomValidity(message);
    }
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
