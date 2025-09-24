import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { hasSlot } from '../../utils/slot';
import { MonthSelection } from './components/month-selection';
import { YearSelection } from './components/year-selection';
import { DaySelection } from './components/day-selection';
import { Language } from '../../utils/error-messages';
import {
  cleanupValue,
  formatDate,
  fromFormattedString,
  nextPointerDate,
  previousPointerDate,
  todayAsPointerDate,
  toPointerDate,
} from './iso-date';
import { createCalendarGrid } from './calendar-grid';
import { translateFormatHelp, translateMonth } from './translations';
import Popover from '../../utils/popover';

const NUMBER_OF_YEARS_SHOWN = 25;

/**
 * A date picker component that allows users to select dates via a calendar popup or direct input.
 *
 * @since 5.0
 * @status beta
 *
 * @slot label - The date's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes the usage.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text property.
 */
@Component({
  tag: 'six-date',
  styleUrl: 'six-date.scss',
  shadow: true,
})
export class SixDate {
  private eventListeners = new EventListeners();
  private inputElement?: HTMLSixInputElement;
  private popoverHelper?: Popover;
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
   * If `true` the user can only select a date via the component in the popup but not directly edit the input field.
   */
  @Prop() readonly = false;

  /**
   * If `true` the component is disabled.
   */
  @Prop() disabled = false;

  /**
   * Callback to determine which dates in the picker should be selectable.
   */
  @Prop() allowedDates: (date: string) => boolean = () => true;

  /**
   * The minimum allowed selectable date in ISO format (yyyy-MM-dd).
   * Dates before this value will be disabled in the date picker.
   * Example: '2024-01-01'
   */
  @Prop() min?: string;

  /**
   * The maximum allowed selectable date in ISO format (yyyy-MM-dd).
   * Dates after this value will be disabled in the date picker.
   * Example: '2025-01-01'
   */
  @Prop() max?: string;

  /**
   * The size of the date input field.
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /**
   * The placeholder defines what text to be shown on the input element
   */
  @Prop() placeholder?: string;

  /**
   * The value of the form field in ISO 8601 date format (yyyy-MM-dd).
   * Example: '2024-01-01'.
   *
   * When an invalid date is provided, it will be replaced with an empty string (''),
   * matching the behavior of native HTML <input type="date">.
   *
   * The displayed format can be customized using the dateFormat property, but the underlying
   * value will always be stored in ISO format.
   */
  @Prop({ mutable: true }) value: string | '' = '';

  /** Defines the format pattern for displaying dates and how dates can be entered via keyboard.
   *
   * The parser accepts flexible input that doesn't strictly match the format pattern.
   * Input with missing leading zeros or incomplete years will be automatically normalized.
   * For example, with the pattern "dd.MM.yyyy": "1.1.2025" becomes "01.01.2025" and
   * "1.1.225" becomes "01.01.0225".
   *
   * Defaults to "dd.MM.yyyy".
   *
   * Available patterns:
   * - Year: "yyyy" (e.g., "2021")
   * - Month: "MM" (e.g., "01" for January) or "M" (e.g., "1" for January)
   * - Day: "dd" (e.g., "08" for the 8th) or "d" (e.g., "8" for the 8th)
   *
   * Examples:
   * - "dd.MM.yyyy" -> "31.01.2024"
   * - "yyyy-MM-dd" -> "2024-01-31"
   * - "d.M.yyyy" -> "31.1.2024"
   * */
  @Prop() dateFormat = 'dd.MM.yyyy';

  /** The label text. */
  @Prop() label = '';

  /** The input's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText: string | string[] = '';

  /** The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1 */
  @Prop() errorTextCount?: number;

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** The input's name attribute. */
  @Prop({ reflect: true }) name = '';

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  @Watch('value')
  valueChanged() {
    this.updateValueAndPointerDate();
  }

  /**
   * Emitted when the control's value changes.
   * Event detail contains the new date value in ISO format (yyyy-MM-dd) or an empty string if cleared.
   */
  @Event({ eventName: 'six-change' }) sixChange!: EventEmitter<string | ''>;

  /**
   * Emitted when the control loses focus or the date picker popup is closed.
   * Does not contain event details.
   */
  @Event({ eventName: 'six-blur' }) sixBlur!: EventEmitter;

  /** Sets focus on the input. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.inputElement?.setFocus(options);
  }

  private panelHideInProgress = false;

  private updateValueAndPointerDate() {
    const { value, pointerDate, warning } = cleanupValue(this.value);
    this.value = value;
    this.pointerDate = pointerDate;
    if (warning != null) {
      console.warn(warning);
    }
    this.updateInputElementValue();
  }

  private getSixInputBaseElement() {
    return this.inputElement?.shadowRoot?.querySelector('div.input') as HTMLDivElement;
  }

  private show() {
    if (this.popoverHelper?.isVisible === true || this.panelHideInProgress || this.disabled) return;
    this.popoverHelper?.show();
    this.eventListeners.add(document, 'mousedown', this.handleDocumentMouseDown);
  }

  private hide() {
    if (this.popoverHelper?.isVisible === false) return;

    this.updateInputElementValue();
    this.selectionMode = 'day';
    this.eventListeners.remove(document, 'mousedown', this.handleDocumentMouseDown);
    this.panelHideInProgress = true;
    this.popoverHelper?.hide();
  }

  private initPopover() {
    const sixInputBaseElement = this.getSixInputBaseElement();
    if (this.inputElement == null || this.positioner == null || this.panel == null || sixInputBaseElement == null) {
      return;
    }

    this.eventListeners.add(sixInputBaseElement, 'click', () => this.show());

    this.popoverHelper = new Popover(sixInputBaseElement, this.positioner, {
      strategy: 'fixed',
      placement: 'bottom-start',
      transitionElement: this.panel,
      distance: 4,
      skidding: 0,
      onAfterHide: () => {
        this.panelHideInProgress = false;
      },
    });
  }

  private handlePreviousClick = () => {
    this.pointerDate = previousPointerDate(this.selectionMode, this.pointerDate);
  };

  private handleNextClick = () => {
    this.pointerDate = nextPointerDate(this.selectionMode, this.pointerDate);
  };

  private handleDocumentMouseDown = (event: Event) => {
    const baseElement = this.getSixInputBaseElement();
    if (baseElement == null || this.panel == null) return;

    // Close when clicking outside
    const path = event.composedPath() as EventTarget[];
    if (!path.includes(this.panel) && !path.includes(baseElement)) {
      this.hide();
      this.sixBlur.emit();
    }
  };

  private handleDayClick = (date: string) => {
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
    } else if (this.inputElement.value === '') {
      this.value = '';
      this.pointerDate = todayAsPointerDate();
      this.selectionMode = 'day';
    }
    this.sixChange.emit(this.value);
  };

  private handleInputBlur = () => {
    if (this.popoverHelper?.isVisible === false) {
      this.updateInputElementValue();
    }
  };

  private handleInputClearClick = () => {
    this.hide();
    this.value = '';
    this.pointerDate = todayAsPointerDate();
    this.sixChange.emit(this.value);
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

  private updateInputElementValue() {
    if (this.inputElement && document.activeElement !== this.host) {
      this.inputElement.value = this.value === '' ? '' : formatDate(this.value, this.dateFormat);
    }
  }

  connectedCallback() {
    this.initPopover();
    this.updateValueAndPointerDate();
    this.eventListeners.forward('six-change', 'change', this.host);
    this.eventListeners.forward('six-blur', 'blur', this.host);
  }

  componentDidLoad() {
    this.updateInputElementValue();
    this.initPopover();
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
    this.popoverHelper?.destroy();
    this.popoverHelper = undefined;
  }

  render() {
    return (
      <div class="container">
        {/* INPUT */}
        <six-input
          ref={(el) => (this.inputElement = el)}
          placeholder={this.placeholder == null ? this.dateFormat : this.placeholder}
          readonly={this.readonly}
          disabled={this.disabled}
          name={this.name}
          label={this.label}
          required={this.required}
          helpText={this.helpText}
          errorText={this.errorText}
          errorTextCount={this.errorTextCount}
          invalid={this.invalid}
          onKeyDown={this.handleInputKeyDown}
          onInput={this.handleInputChange}
          onBlur={this.handleInputBlur}
          onSix-input-clear={this.handleInputClearClick}
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
          {hasSlot(this.host, 'help-text') ? (
            <span slot="help-text">
              <slot name="help-text"></slot>
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
