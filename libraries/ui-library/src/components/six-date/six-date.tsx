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
 * - [x] Datepicker shouldn't be able to open when disabled
 *
 * - [ ] date-util loswerden und ersetzen mit https://github.com/dmtrKovalenko/date-io?
 *   - get rid of date formats
 */
import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { debounce, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { hasSlot } from '../../utils/slot';
import { MonthSelection } from './components/month-selection';
import { YearSelection } from './components/year-selection';
import { DaySelection } from './components/day-selection';
import { Language } from '../../utils/error-messages';
import {
  formatDate,
  fromFormattedString,
  IsoDate,
  isValidIsoDate,
  todayAsPointerDate,
  toPointerDate,
} from './iso-date';
import { createCalendarGrid } from './calendar-grid';
import { translateMonth, translateFormatHelp } from './translations';
import Popover from '../../utils/popover';

const NUMBER_OF_YEARS_SHOWN = 25;

/**
 * @since 1.0 TODO: replace with correct version
 * @status stable
 *
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
  private popover?: Popover;
  private panel?: HTMLElement;
  private positioner?: HTMLElement;

  @Element() host!: HTMLSixDateElement;

  /**
   * Current state of the date picker for day, month, or year selection.
   * Independent of the currently selected date value.
   */
  @State() pointerDate = todayAsPointerDate();

  @State() selectionMode: 'day' | 'month' | 'year' = 'day';

  /**
   * The language used to render the weekdays and months.
   */
  @Prop() language: Language = 'en';

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
  @Prop() allowedDates: (date: IsoDate) => boolean = () => true;

  /**
   * The minimum date allowed. Value must be an iso-date string.
   */
  @Prop() min?: IsoDate;

  /**
   * The maximum date allowed.Value must be an iso-date string.
   */
  @Prop() max?: IsoDate;

  /** Datepicker size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /**
   * The placeholder defines what text to be shown on the input element
   */
  @Prop() placeholder?: string = 'dd.mm.yyyy';

  /**
   * The value of the form field, which accepts a date object.
   */
  @Prop({ mutable: true }) value: IsoDate | '' = '';

  /** The label text. */
  @Prop() label = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText: string | string[] = '';

  /** The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1 */
  @Prop() errorTextCount?: number;

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** Define the dateFormat. Defaults to "dd.MM.yyyy".
   *
   * Available patterns:
   * - Year: "yyyy" (e.g., "2021")
   * - Month: "MM" (e.g., "01" for January, "12" for December)
   * - Day: "dd" (e.g., "08" for the 8th day of the month)
   * */
  @Prop() dateFormat = 'dd.MM.yyyy';

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `dateChange` event after each keystroke.
   */
  @Prop() debounce = DEFAULT_DEBOUNCE_FAST;

  /** The input's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  @Watch('value')
  valueChanged() {
    this.updateValueAndPointerDate();
  }

  /** Emitted when the control's value changes. */
  @Event() sixChange!: EventEmitter<IsoDate | ''>;

  /** Emitted when the control loses focus. */
  @Event() sixBlur!: EventEmitter;

  /** Sets focus on the datepicker input. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.inputElement?.setFocus(options);
  }

  private updateValueAndPointerDate() {
    if (typeof this.value !== 'string') {
      this.value = '';
      this.pointerDate = todayAsPointerDate();
      console.warn(`The specified value ${this.value} does not conform to the required format, "yyyy-MM-dd" `);
    } else if (isValidIsoDate(this.value)) {
      this.pointerDate = toPointerDate(this.value);
    } else if (this.value === '') {
      this.pointerDate = todayAsPointerDate();
    } else {
      this.value = '';
      this.pointerDate = todayAsPointerDate();
      console.warn(`The specified value ${this.value} does not conform to the required format, "yyyy-MM-dd" `);
    }
  }

  private show() {
    if (this.disabled) return;
    this.popover?.show();
    this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
  }

  private hide() {
    if (this.inputElement) {
      this.inputElement.value = this.value === '' ? '' : formatDate(this.value, this.dateFormat);
    }
    this.selectionMode = 'day';
    this.popover?.hide();
    this.eventListeners.remove(document, 'mousedown', this.handleDocumentMouseDown);
  }

  private handlePreviousClick = () => {
    switch (this.selectionMode) {
      case 'day':
        if (this.pointerDate.month === 0) {
          this.pointerDate = { year: this.pointerDate.year - 1, month: 11, day: 1 };
        } else {
          this.pointerDate = { year: this.pointerDate.year, month: this.pointerDate.month - 1, day: 1 };
        }
        break;
      case 'month':
        this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year - 1 };
        break;
      case 'year':
        this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year - NUMBER_OF_YEARS_SHOWN };
        break;
    }
  };

  private handleNextClick = () => {
    if (this.selectionMode === 'day') {
      if (this.pointerDate.month === 11) {
        this.pointerDate = { year: this.pointerDate.year + 1, month: 0, day: 1 };
      } else {
        this.pointerDate = { year: this.pointerDate.year, month: this.pointerDate.month + 1, day: 1 };
      }
    } else if (this.selectionMode === 'month') {
      this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year + 1 };
    } else if (this.selectionMode === 'year') {
      this.pointerDate = { ...this.pointerDate, year: this.pointerDate.year + NUMBER_OF_YEARS_SHOWN };
    }
  };

  private handleDocumentMouseDown = (event: Event) => {
    // Close when clicking outside
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.host)) {
      this.hide();
      this.sixBlur.emit();
    }
  };

  private handleClearClick = () => {
    this.hide();
    this.value = '';
    this.pointerDate = todayAsPointerDate();
    this.sixChange.emit(this.value);
  };

  private handleDayClick = (date: IsoDate) => {
    this.value = date;
    this.pointerDate = toPointerDate(this.value);
    this.hide();
    this.inputElement?.setFocus();
    this.sixChange.emit(this.value);
  };

  private handleMonthClicked = (month: number) => {
    this.pointerDate = { ...this.pointerDate, month };
    this.selectionMode = 'day';
  };

  private handleYearClicked = (year: number) => {
    this.pointerDate = { ...this.pointerDate, year };
    this.selectionMode = 'day';
  };

  private handleInputChange = (event: Event) => {
    if (this.inputElement == null) return;

    event.stopPropagation();
    const isoDate = fromFormattedString(this.inputElement.value, this.dateFormat);
    if (isoDate != null) {
      this.value = isoDate;
      this.pointerDate = toPointerDate(this.value);
      this.sixChange.emit(this.value);
    }
  };

  private handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      this.hide();
      this.sixBlur.emit();
    }
    if (event.key === 'Escape') {
      this.hide();
    }
  };

  private initPopover() {
    if (this.inputElement == null || this.positioner == null || this.panel == null) return;

    this.popover = new Popover(this.inputElement, this.positioner, {
      strategy: 'fixed',
      placement: 'bottom-start',
      transitionElement: this.panel,
      distance: 4,
      skidding: 0,
    });
  }
  componentDidLoad() {
    this.initPopover();
  }

  connectedCallback() {
    this.updateValueAndPointerDate();
    this.eventListeners.forward('sixChange', 'change', this.host);
    this.eventListeners.forward('sixBlur', 'blur', this.host);
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  render() {
    return (
      <div class="container">
        {/* INPUT */}
        <six-input
          value={this.value === '' ? '' : formatDate(this.value, this.dateFormat)}
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
          onClick={() => this.show()}
          onKeyDown={this.handleInputKeyDown}
          onInput={debounce(this.handleInputChange, this.debounce)}
          onSix-input-clear={this.handleClearClick}
          size={this.size}
          clearable={this.clearable}
          aria-describedby="date-format"
        >
          <six-icon slot="prefix" size={this.size === 'large' ? 'medium' : this.size}>
            today
          </six-icon>
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

        <span id="date-format" class="sr-only">
          {translateFormatHelp(this.language, this.dateFormat)}
        </span>

        {/* PANEL */}
        <div ref={(el) => (this.positioner = el)} class="positioner">
          <div class="panel" ref={(el) => (this.panel = el)}>
            {/* PANEL HEADER */}
            <header class="panel__header">
              <six-icon-button
                tabindex="-1"
                class="previous"
                onClick={this.handlePreviousClick}
                name="arrow_back_ios"
              />

              {this.selectionMode === 'day' && (
                <div class="selector" onClick={() => (this.selectionMode = 'month')}>
                  {translateMonth(this.pointerDate.month, this.language)}
                  <six-icon>arrow_drop_down</six-icon>
                </div>
              )}

              {this.selectionMode !== 'year' && (
                <div class="selector" onClick={() => (this.selectionMode = 'year')}>
                  {this.pointerDate.year}
                  <six-icon>arrow_drop_down</six-icon>
                </div>
              )}

              {this.selectionMode === 'year' && (
                <div class="selector">
                  {this.pointerDate.year - Math.floor(NUMBER_OF_YEARS_SHOWN / 2)} –{' '}
                  {this.pointerDate.year + Math.floor(NUMBER_OF_YEARS_SHOWN / 2)}
                </div>
              )}

              <six-icon-button tabindex="-1" class="next" onClick={this.handleNextClick} name="arrow_forward_ios" />
            </header>

            {/* PANEL BODY */}
            {this.selectionMode === 'day' && (
              <DaySelection
                language={this.language}
                calendarGrid={createCalendarGrid({
                  year: this.pointerDate.year,
                  month: this.pointerDate.month,
                  selected: this.value || undefined,
                  minDate: this.min,
                  maxDate: this.max,
                  dateFormat: this.dateFormat,
                  allowedDates: this.allowedDates,
                })}
                dayClicked={this.handleDayClick}
              />
            )}

            {this.selectionMode === 'month' && (
              <MonthSelection language={this.language} selected={this.value} monthClicked={this.handleMonthClicked} />
            )}

            {this.selectionMode === 'year' && (
              <YearSelection
                selected={this.value}
                pointerYear={this.pointerDate.year}
                yearCount={NUMBER_OF_YEARS_SHOWN}
                yearClicked={this.handleYearClicked}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
