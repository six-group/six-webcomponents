import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { getTextContent, hasSlot } from '../../utils/slot';
import FormControl from '../../functional-components/form-control/form-control';
import { EmptyPayload } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';
import { debounce, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { SixMenuItemData } from '../six-menu/six-menu';

export interface SixSelectChangePayload {
  value: string | string[];
  isSelected: boolean;
}

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The select's options in the form of menu items.
 * @slot label - The select's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the select.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 *
 * @part base - The component's base wrapper.
 * @part clear-button - The input's clear button, exported from six-input.
 * @part form-control - The form control that wraps the label, input, and help text.
 * @part help-text - The select's help text.
 * @part icon - The select's icon.
 * @part label - The select's label.
 * @part menu - The select menu, a six-menu element.
 * @part tag - The multiselect option, a six-tag element.
 * @part tags - The container in which multiselect options are rendered.
 */

@Component({
  tag: 'six-select',
  styleUrl: 'six-select.scss',
  shadow: true,
})
export class SixSelect {
  box: HTMLElement;
  dropdown: HTMLSixDropdownElement;
  input: HTMLSixInputElement;
  inputId = `select-${++id}`;
  labelId = `select-label-${id}`;
  helpTextId = `select-help-text-${id}`;
  errorTextId = `select-error-text-${id}`;
  menu: HTMLSixMenuElement;
  resizeObserver: ResizeObserver;
  touched: boolean;
  customErrorText = '';
  customValidation = false;

  readonly eventListeners = new EventListeners();

  @Element() host: HTMLSixSelectElement;

  @State() hasFocus = false;
  @State() hasHelpTextSlot = false;
  @State() hasErrorTextSlot = false;
  @State() hasLabelSlot = false;
  @State() isOpen = false;
  @State() displayLabel = '';
  @State() displayTags = [];

  /** Set to true to enable multiselect. */
  @Prop() multiple = false;

  /**
   * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
   * number of additional items that are selected. Set to -1 to remove the limit.
   */
  @Prop() maxTagsVisible = 3;

  /** Set to true to disable the select control. */
  @Prop() disabled = false;

  /** The select's name. */
  @Prop() name = '';

  /** The select's placeholder text. */
  @Prop() placeholder = '';

  /** The filter's placeholder text. */
  @Prop() filterPlaceholder: string;

  /** The debounce for the filter callbacks. */
  @Prop() filterDebounce = DEFAULT_DEBOUNCE_FAST;

  /** The select's size. */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @Prop() hoist = false;

  /** The value of the control. This will be a string or an array depending on `multiple`. */
  @Prop({ mutable: true }) value: string | string[] = '';

  /** Set to true to draw a pill-style select with rounded edges. */
  @Prop() pill = false;

  /** The select's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The select's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** The select's error text. Alternatively, you can use the error-text slot. */
  @Prop() errorText = '';

  /** The select's required attribute. */
  @Prop() required = false;

  /** Set to true to add a clear button when the select is populated. */
  @Prop() clearable = false;

  /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
  @Prop({ mutable: true }) invalid = false;

  /** Set to render as line */
  @Prop() line = false;

  /** Set to display the error text on blur and not when typing */
  @Prop() errorOnBlur = false;

  /** Set to true to allow filtering for entries in the dropdown */
  @Prop() filter = false;

  /**
   * Set to true to allow async filtering.
   * When you enter something in the search field the component will only emit an event but not filter any elements itself.
   * You can then simply listen to the 'six-async-filter-fired' event to manage the shown menu-items yourself
   */
  @Prop() asyncFilter = false;

  /**
   * Set to true to turn the six-select into an autocomplete.
   */
  @Prop() autocomplete = false;

  /** The debounce for when the input changes for autocompletes should be emitted */
  @Prop() inputDebounce = DEFAULT_DEBOUNCE_FAST;

  /** Set the options to be shown in the dropdown (alternative to setting the elements via html) */
  @Prop() options: SixMenuItemData[] | null = null;

  /** Defines whether the menu list will be rendered virtually i.e. only the elements actually shown (and a couple around)
   *  are actually rendered in the DOM. If you use virtual scrolling pass the elements via prop instead of via slot. */
  @Prop() virtualScroll = false;

  /** The default value the select will be reverted to when reset is executed */
  @Prop() defaultValue: string | string[] | undefined;

  @Watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.isOpen) {
      this.dropdown.hide();
    }
  }

  @Watch('helpText')
  @Watch('errorText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  @Watch('multiple')
  handleMultipleChange() {
    // Cast to array | string based on `this.multiple`
    const value = this.getValueAsArray();
    this.value = this.multiple ? value : value[0] || '';
    this.syncItemsFromValue();
  }

  @Watch('value')
  handleValueChange() {
    this.syncItemsFromValue();
    if (this.input) {
      this.sixChange.emit({ value: this.value, isSelected: true });
      this.host.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, composed: true }));
    }
  }

  /** Emitted when the control's value changes. */
  @Event({ eventName: 'six-select-change' }) sixChange: EventEmitter<SixSelectChangePayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-select-focus' }) sixFocus: EventEmitter<EmptyPayload>;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-select-blur' }) sixBlur: EventEmitter<EmptyPayload>;

  connectedCallback() {
    if (this.virtualScroll && this.options === null) {
      console.error('Options must be defined when using virtual scrolling');
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
    this.handleMenuHide = this.handleMenuHide.bind(this);
    this.handleMenuShow = this.handleMenuShow.bind(this);
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.handleInvalid = this.handleInvalid.bind(this);
    this.handleTagInteraction = this.handleTagInteraction.bind(this);

    this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    this.handleSlotChange();
    if (this.multiple && this.value) {
      this.value = this.getValueAsArray();
    }
  }

  componentDidLoad() {
    this.resizeObserver = new ResizeObserver(() => this.resizeMenu());

    // We need to do an initial sync after the component has rendered, so this will suppress the re-render warning
    requestAnimationFrame(() => this.syncItemsFromValue());

    this.eventListeners.add(this.input, 'invalid', async (event) => {
      if (this.customValidation || (!this.hasErrorTextSlot && !this.errorText && !this.customErrorText)) {
        this.customErrorText = await this.input.getValidationMessage();
      }
      event.preventDefault();
    });

    this.eventListeners.add(
      this.input,
      'six-input-input',
      debounce((event) => {
        const enteredValue = this.input.value;
        this.clearValues();
        this.sixChange.emit({ value: enteredValue, isSelected: false });
        this.host.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, composed: true }));
        event.stopPropagation();
      }, this.inputDebounce)
    );

    this.input.value = this.hasSelection() ? this.displayLabel : '';
  }

  disconnectedCallback() {
    this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  @Method()
  async reportValidity() {
    return this.input.reportValidity();
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    return this.input.isValid();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  @Method()
  async setCustomValidity(message: string) {
    this.customErrorText = '';
    this.customValidation = message !== '';
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /** Resets the formcontrol */
  @Method()
  async reset() {
    this.clearValues();
    this.customErrorText = '';
    this.customValidation = false;
    this.input.setCustomValidity('');
    this.invalid = false;
  }

  getItemLabel(item: HTMLSixMenuItemElement) {
    const slot = item.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    if (slot) {
      return getTextContent(slot);
    } else {
      // bugfix/COMSLI-203-six-select-value-is-not-updated-if-the-slot-is-changed
      return item.textContent;
    }
  }

  getItems() {
    if (this.options !== null) {
      return this.options.map((option) => <six-menu-item value={option.value}>{option.label}</six-menu-item>);
    }

    return [...this.host.querySelectorAll('six-menu-item')];
  }

  hasMenuItems() {
    return this.getItems().length > 0;
  }

  getValueAsStringArray() {
    const values = this.getValueAsArray();
    // enforce that the values are converted to 'string' before the value is compared
    return values.map(String);
  }

  getValueAsArray() {
    return Array.isArray(this.value) ? this.value : [this.value];
  }

  handleBlur() {
    this.hasFocus = false;
    this.sixBlur.emit();
    this.host.dispatchEvent(new FocusEvent('blur', { bubbles: true, cancelable: true, composed: true }));
  }

  handleFocus() {
    this.hasFocus = true;
    this.sixFocus.emit();
    this.host.dispatchEvent(new FocusEvent('focus', { bubbles: true, cancelable: true, composed: true }));
  }

  handleInvalid() {
    this.invalid = true;
  }

  handleClearClick(event: MouseEvent) {
    event.stopPropagation();
    this.clearValues();
  }

  clearValues() {
    this.value = this.defaultValue ?? (this.multiple ? [] : '');
    this.syncItemsFromValue();
  }

  handleSelectAll(event: KeyboardEvent) {
    const nonFilteredItems = this.getItems().filter((item) => item.style.display !== 'none');
    const keyName = event.key;
    const keyCode = event.code;

    if (keyName === 'Control') {
      return;
    }

    if (this.isOpen && this.multiple && keyCode === 'KeyA' && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = nonFilteredItems.some((opt) => !opt.disabled && !opt.checked);

      nonFilteredItems
        .filter((option) => !option.disabled)
        .forEach((option) => (option.checked = hasDeselectedOptions));
      const checkedItems = nonFilteredItems.filter((option) => option.checked).map((option) => option.value);
      this.value = hasDeselectedOptions ? checkedItems : [];
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;

    const items = this.getItems();
    const firstItem = items[0];
    const lastItem = items[items.length - 1];

    // Ignore key presses on tags
    if (target.tagName.toLowerCase() === 'six-tag') {
      return;
    }

    // Tabbing out of the control closes it
    if (event.key === 'Tab') {
      if (this.isOpen) {
        this.dropdown.hide();
      }
      return;
    }

    // Up/down opens the menu
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();

      // Show the menu if it's not already open
      if (!this.isOpen) {
        this.dropdown.show();
      }

      // Focus on a menu item
      if (event.key === 'ArrowDown' && firstItem) {
        firstItem.setFocus();
        return;
      }

      if (event.key === 'ArrowUp' && lastItem) {
        lastItem.setFocus();
        return;
      }
    }

    // All other keys open the menu and initiate type to select
    if (!this.isOpen) {
      event.stopPropagation();
      event.preventDefault();
      this.dropdown.show();
      this.menu.typeToSelect(event.key);
    }
  }

  handleLabelClick() {
    this.box.focus();
  }

  handleMenuSelect(event: CustomEvent) {
    const item = event.detail.item;
    if (this.multiple) {
      if (this.value == null || this.value === '') {
        this.value = [];
      } else if (!Array.isArray(this.value)) {
        this.value = [this.value];
      }
      this.value = this.value.includes(item.value)
        ? this.value.filter((v) => v !== item.value)
        : [...this.value, item.value];
    } else {
      this.value = item.value;
    }
    this.syncItemsFromValue();
  }

  handleMenuShow(event: CustomEvent) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.resizeMenu();
    this.resizeObserver.observe(this.host);
    this.isOpen = true;
  }

  handleMenuHide() {
    this.resizeObserver.unobserve(this.host);
    this.isOpen = false;
  }

  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
    this.hasLabelSlot = hasSlot(this.host, 'label');
    this.syncItemsFromValue();
  }

  handleTagInteraction(event: KeyboardEvent | MouseEvent) {
    // Don't toggle the menu when a tag's clear button is activated
    const path = event.composedPath() as EventTarget[];
    const clearButton = path.find((el) => {
      if (el instanceof HTMLElement) {
        const element = el as HTMLElement;
        return element.classList.contains('tag__clear');
      }
    });

    if (clearButton) {
      event.stopPropagation();
    }
  }

  resizeMenu() {
    this.menu.style.minWidth = `${this.box.clientWidth}px`;

    if (this.dropdown) {
      this.dropdown.reposition();
    }
  }

  syncItemsFromValue() {
    const items = this.getItems();
    const value = this.getValueAsStringArray();

    // Sync checked states
    items.forEach((item) => (item.checked = value.includes(item.value)));

    // Sync display label
    if (this.multiple) {
      const checkedItems = [];
      value.forEach((val) => items.map((item) => (item.value === val ? checkedItems.push(item) : null)));

      this.displayTags = checkedItems.map((item) => {
        return (
          <six-tag
            exportparts="base:tag"
            type="primary"
            size={this.size}
            pill={this.pill}
            clearable
            onClick={this.handleTagInteraction}
            onKeyDown={this.handleTagInteraction}
            onSix-tag-clear={(event) => {
              event.stopPropagation();
              if (!this.disabled) {
                item.checked = false;
                this.syncValueFromItems();
              }
            }}
          >
            {this.getItemLabel(item)}
          </six-tag>
        );
      });

      if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
        const total = this.displayTags.length;
        this.displayLabel = '';
        this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
        this.displayTags.push(
          <six-tag exportparts="base:tag" type="info" size={this.size}>
            +{total - this.maxTagsVisible}
          </six-tag>
        );
      }
    } else {
      this.displayLabel = this.extractLabelForSelectedItem(value, items);
      this.displayTags = [];
    }

    const hasSelection = this.hasSelection();
    if (hasSelection) {
      this.touched = true;
    }
    if (this.input && this.touched) {
      if (!this.autocomplete) {
        this.input.value = hasSelection ? this.displayLabel : '';
      } else if (hasSelection) {
        this.input.value = Array.isArray(this.value) ? this.value.join(',') : this.value;
      }
      this.invalid = !this.input.checkValidity();
    }
  }

  private extractLabelForSelectedItem(value: string[], items: HTMLSixMenuItemElement[]) {
    if (value.length === 0 || (value.length === 1 && value[0] === '')) {
      return '';
    }

    if (this.options !== null) {
      const selectedOption = this.options.find((item) => item.value === value[0]);
      return selectedOption?.value || '';
    }

    const checkedItem = items.find((item) => item.value === value[0]);
    return checkedItem ? this.getItemLabel(checkedItem) : '';
  }

  syncValueFromItems() {
    const items = this.getItems();
    const checkedItems = items.filter((item) => item.checked);
    const checkedValues = checkedItems.map((item) => item.value);
    this.value = this.multiple
      ? this.getValueAsStringArray().filter((val) => checkedValues.includes(val))
      : checkedValues.length > 0
      ? checkedValues[0]
      : '';
  }

  displayError() {
    return this.invalid && (!this.errorOnBlur || (!this.hasFocus && !this.isOpen));
  }

  render() {
    const hasSelection = this.hasSelection();

    return (
      <FormControl
        inputId={this.inputId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={this.hasLabelSlot}
        helpTextId={this.helpTextId}
        helpText={this.helpText}
        hasHelpTextSlot={this.hasHelpTextSlot}
        errorTextId={this.errorTextId}
        errorText={this.customErrorText ? this.customErrorText : this.errorText}
        hasErrorTextSlot={this.hasErrorTextSlot}
        size={this.size}
        onLabelClick={this.handleLabelClick}
        disabled={this.disabled}
        required={this.required}
        displayError={this.displayError()}
      >
        <six-dropdown
          part="base"
          ref={(el) => (this.dropdown = el)}
          hoist={this.hoist}
          closeOnSelect={!this.multiple}
          containingElement={this.host}
          disableHideOnEnterAndSpace={this.autocomplete}
          class={{
            select: true,
            'select--open': this.isOpen,
            'select--empty': this.value?.length === 0,
            'select--focused': this.hasFocus,
            'select--clearable': this.clearable,
            'select--disabled': this.disabled,
            'select--multiple': this.multiple,
            'select--has-tags': this.multiple && hasSelection,
            'select--placeholder-visible': this.displayLabel === '',
            'select--small': this.size === 'small',
            'select--medium': this.size === 'medium',
            'select--large': this.size === 'large',
            'select--pill': this.pill,
            'select--invalid': this.invalid,
          }}
          onKeyDown={this.handleSelectAll}
          onSix-dropdown-show={this.handleMenuShow}
          onSix-dropdown-hide={this.handleMenuHide}
          filterPlaceholder={this.filterPlaceholder}
          filterDebounce={this.filterDebounce}
          filter={this.filter}
          asyncFilter={this.asyncFilter}
        >
          <div
            slot="trigger"
            ref={(el) => (this.box = el)}
            id={this.inputId}
            class={{
              select__box: true,
              'select__box--line': this.line,
              'select__box--autocomplete': this.autocomplete,
            }}
            role="combobox"
            aria-labelledby={this.labelId}
            aria-describedby={this.helpTextId}
            aria-haspopup="true"
            aria-expanded={this.isOpen ? 'true' : 'false'}
            tabIndex={this.disabled ? -1 : 0}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
          >
            <span class="select__label">
              {this.displayTags.length ? (
                <span part="tags" class="select__tags">
                  {this.displayTags}
                </span>
              ) : (
                this.displayLabel || this.placeholder
              )}
            </span>

            {this.clearable && hasSelection && (
              <six-icon-button
                exportparts="base:clear-button"
                class="select__clear"
                name="clear"
                size="small"
                onClick={this.handleClearClick}
                tabindex="-1"
              />
            )}

            {this.hasMenuItems() && (
              <span part="icon" class="select__icon">
                <six-icon size="medium">expand_more</six-icon>
              </span>
            )}

            {/*
              The hidden input tricks the browser's built-in validation so it works as expected. We use an input instead
              of a select because, otherwise, iOS will show a list of options during validation.
            */}
            <six-input
              ref={(el) => (this.input = el)}
              class={{
                select__input: true,
                'select__hidden-select': !this.autocomplete,
              }}
              aria-hidden="true"
              required={this.required}
              onInvalid={this.handleInvalid}
              onFocus={this.handleFocus}
              clearable={this.clearable}
              placeholder={this.placeholder}
              pill={this.pill}
              disabled={this.disabled}
              size={this.size}
              tabIndex={-1}
            />
          </div>

          <six-menu
            ref={(el) => (this.menu = el)}
            part="menu"
            class={{
              select__menu: true,
              'select__menu--filtered': this.filter || this.asyncFilter,
              'select__menu--hidden': !this.hasMenuItems(),
            }}
            onSix-menu-item-selected={this.handleMenuSelect}
            items={this.options}
            virtualScroll={this.virtualScroll}
            remove-box-shadow
          >
            <slot onSlotchange={this.handleSlotChange} />
          </six-menu>
        </six-dropdown>
      </FormControl>
    );
  }

  private hasSelection() {
    if (this.multiple) {
      return Array.isArray(this.value) ? this.value.length > 0 : false;
    }
    return this.value !== '';
  }
}
