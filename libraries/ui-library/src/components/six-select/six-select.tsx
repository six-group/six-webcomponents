import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { getTextContent, hasSlot } from '../../utils/slot';
import FormControl from '../../functional-components/form-control/form-control';
import { EmptyPayload } from '../../utils/types';
import { EventListeners } from '../../utils/event-listeners';
import { debounce, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { SixMenuItemData } from '../six-menu/six-menu';
import { getLanguage } from '../../utils/error-messages';

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
  private box?: HTMLElement;
  private menu?: HTMLElement;
  private dropdown?: HTMLSixDropdownElement;
  private displayValuesContainer?: HTMLElement;
  private overflowCount?: HTMLElement;
  private autocompleteInput?: HTMLSixInputElement;
  private inputId = `select-${++id}`;
  private labelId = `select-label-${id}`;
  private helpTextId = `select-help-text-${id}`;
  private errorTextId = `select-error-text-${id}`;
  private eventListeners = new EventListeners();
  private activeItemIndex = -1;
  private resizeObserver = new ResizeObserver(() => this.updateDisplayedValues());

  @Element() host!: HTMLSixSelectElement;

  @State() hasFocus = false;
  @State() hasHelpTextSlot = false;
  @State() hasLabelSlot = false;
  @State() hasErrorTextSlot = false;
  @State() isOpen = false;
  @State() displayedValues: string[] = [];

  /** Menu items shown in the selection container.  */
  @State() selectionContainerItems: HTMLSixMenuItemElement[] = [];

  /** Set to true to enable multiselect. */
  @Prop() multiple = false;

  /** Enables the select all button. */
  @Prop() selectAllButton = false;

  /**
   * Custom text for the "select all" button. Defaults to "Select all" and equivalents in supported languages.
   */
  @Prop() selectAllText?: string;

  /**
   * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
   * number of additional items that are selected. Set to -1 to remove the limit.
   *
   * @deprecated: This property is ignored. The component now displays as many items as possible and computes the "+n" dynamically.
   */
  @Prop() maxTagsVisible = 3;

  /** Set to true to disable the select control. */
  @Prop() disabled = false;

  /** The select's name. */
  @Prop() name = '';

  /** The select's placeholder text. */
  @Prop() placeholder = '';

  /** The filter's placeholder text. */
  @Prop() filterPlaceholder?: string;

  /** The debounce for the filter callbacks. */
  @Prop() filterDebounce?: number;

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

  /** The select's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /** Set to true to add a clear button when the select is populated. */
  @Prop() clearable = false;

  /** The label text. */
  @Prop() label = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText: string | string[] = '';

  /** The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1 */
  @Prop() errorTextCount?: number;

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** Set to render as line */
  @Prop() line = false;

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

  @Watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.isOpen) {
      this.dropdown?.hide();
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
  async handleValueChange() {
    if (this.multiple && !Array.isArray(this.value)) {
      this.value = [];
    }

    if (!this.multiple && typeof this.value !== 'string') {
      this.value = '';
    }
    await this.syncItemsFromValue();
  }

  /** Emitted when the control's value changes. */
  @Event({ eventName: 'six-select-change' }) sixChange!: EventEmitter<SixSelectChangePayload>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-select-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-select-blur' }) sixBlur!: EventEmitter<EmptyPayload>;

  connectedCallback() {
    if (this.virtualScroll && this.options === null) {
      console.error('Options must be defined when using virtual scrolling');
    }
    this.init();
  }

  componentWillLoad() {
    this.handleValueChange();
    this.handleSlotChange();
    if (this.multiple && this.value != null) {
      this.value = this.getValueAsArray();
    }
  }

  componentDidLoad() {
    this.init();

    // We need to do an initial sync after the component has rendered, so this will suppress the re-render warning
    requestAnimationFrame(() => this.syncItemsFromValue());

    if (this.autocomplete && this.autocompleteInput != null) {
      const autocompleteInput = this.autocompleteInput;
      this.eventListeners.add(
        autocompleteInput,
        'six-input-input',
        debounce((event) => {
          this.value = autocompleteInput.value;
          this.sixChange.emit({ value: this.value, isSelected: false });
          event.stopPropagation();
        }, this.inputDebounce)
      );
      autocompleteInput.value = Array.isArray(this.value) ? this.value.join(',') : this.value;
    }
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
    this.host.shadowRoot?.removeEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.removeAll();
  }

  /** Sets focus on the select. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.hasFocus = true;
    this.box?.focus(options);
  }

  private init() {
    this.host.shadowRoot?.addEventListener('slotchange', this.handleSlotChange);
    this.eventListeners.forward('six-select-change', 'change', this.host);
    this.eventListeners.forward('six-select-blur', 'blur', this.host);
    this.eventListeners.forward('six-select-focus', 'focus', this.host);
    if (this.displayValuesContainer) {
      this.resizeObserver.observe(this.displayValuesContainer);
    }
  }

  private getItemLabel(item: HTMLSixMenuItemElement): string {
    const slot = item.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    if (slot != null) {
      return getTextContent(slot);
    } else {
      // bugfix/COMSLI-203-six-select-value-is-not-updated-if-the-slot-is-changed
      return item.textContent ?? '';
    }
  }

  private getItems(): HTMLSixMenuItemElement[] {
    if (this.options !== null && this.menu != null && this.menu.shadowRoot != null) {
      return [...this.menu.shadowRoot.querySelectorAll('six-menu-item')];
    }

    return [...this.host.querySelectorAll('six-menu-item')];
  }

  private getVisibleItems(): HTMLSixMenuItemElement[] {
    const selectionContainerItems = this.getSelectionContainerItems();
    const mainItems = this.getItems();
    return [...selectionContainerItems, ...mainItems].filter((i) => i.style.display !== 'none');
  }

  private getSelectionContainerItems() {
    return [...(this.host.shadowRoot?.querySelectorAll('six-menu-item') || [])];
  }

  private getValueAsArray() {
    const values = Array.isArray(this.value) ? this.value : this.value === '' ? [] : [this.value];
    // enforce that the values are converted to 'string' before the value is compared
    return values.map(String);
  }

  private handleBlur = () => {
    this.hasFocus = false;
    this.sixBlur.emit();
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.sixFocus.emit();
  };

  private handleClearClick = async (event: MouseEvent) => {
    event.stopPropagation();
    await this.clearValues();
    await this.dropdown?.hide();
    this.sixChange.emit({ value: this.value, isSelected: true });
  };

  private async clearValues() {
    this.value = this.multiple ? [] : '';
    this.selectionContainerItems = [];
    await this.syncItemsFromValue();
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (this.virtualScroll || this.autocomplete) {
      return;
    }

    if (['Control', 'Escape'].includes(event.key)) {
      return;
    }

    const items = this.getVisibleItems();

    // Ctrl-A selects all items
    if (this.isOpen && this.multiple && event.code === 'KeyA' && event.ctrlKey) {
      event.preventDefault();
      this.selectAll();
      return;
    }

    // Tabbing out of the control closes it
    if (event.key === 'Tab') {
      if (this.isOpen) {
        this.dropdown?.hide();
      }
      return;
    }

    if (event.key === ' ' && !this.multiple) {
      return;
    }

    // Enter and Space selects the active item
    if (this.activeItemIndex >= 0 && ['Enter', ' '].includes(event.key)) {
      const activeItem = items.at(this.activeItemIndex);
      event.preventDefault();
      activeItem?.click();
      return;
    }

    // Move the selection when pressing up or down
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      // Show the menu if it's not already open
      if (!this.isOpen) {
        this.dropdown?.show();
      }

      if (items.length > 0) {
        event.preventDefault();

        if (event.key === 'ArrowDown') {
          this.activeItemIndex++;
        } else if (event.key === 'ArrowUp') {
          this.activeItemIndex--;
        } else if (event.key === 'Home') {
          this.activeItemIndex = 0;
        } else if (event.key === 'End') {
          this.activeItemIndex = items.length - 1;
        }

        if (this.activeItemIndex < 0) this.activeItemIndex = 0;
        if (this.activeItemIndex > items.length - 1) this.activeItemIndex = items.length - 1;

        items.at(this.activeItemIndex)?.setFocus();
      }
    }

    // All other keys open the menu
    if (!this.isOpen) {
      event.stopPropagation();
      event.preventDefault();
      this.dropdown?.show();
    }
  };

  private selectAll() {
    const visibleItems = this.getVisibleItems();
    const hasDeselectedOptions = this.hasDeselectedOptions();
    visibleItems.filter((option) => !option.disabled).forEach((option) => (option.checked = hasDeselectedOptions));
    const checkedItems = visibleItems.filter((option) => option.checked).map((option) => option.value);
    this.value = hasDeselectedOptions ? checkedItems : [];
    this.sixChange.emit({ value: this.value, isSelected: true });
  }

  private handleLabelClick = () => {
    this.box?.focus();
  };

  private handleMenuSelect = (event: CustomEvent) => {
    const currentItem = event.detail.item as HTMLSixMenuItemElement;
    if (this.multiple) {
      currentItem.checked = !currentItem.checked;
    } else {
      this.getItems().forEach((i) => (i.checked = false));
      currentItem.checked = true;
    }
    this.syncValueFromItems();
    this.sixChange.emit({ value: this.value, isSelected: true });
  };

  private handleMenuShow = (event: CustomEvent) => {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.activeItemIndex = -1;

    // reset display style of main items
    const mainItems = this.getItems();
    mainItems.forEach((item) => (item.style.display = 'unset'));

    // show selected menu items in the selection container and hide them in the main container
    const checkedItems = getCheckedItems(this.getValueAsArray(), mainItems);
    if (!this.virtualScroll && this.multiple) {
      checkedItems.forEach((i) => (i.style.display = 'none'));
      this.selectionContainerItems = checkedItems.map((item) => {
        return (
          <six-menu-item
            key={item.value} // key makes sure the node is not re-used: https://stenciljs.com/docs/templating-jsx#conditionals
            checked={true}
            value={item.value}
            checkType={this.multiple ? 'checkbox' : 'check'}
            onClick={(event) => {
              event.stopPropagation();
              if (!this.disabled) {
                const menuItem = event.target as HTMLSixMenuItemElement;
                const isChecked = menuItem.checked;
                menuItem.checked = !isChecked;
                item.checked = !isChecked;
                this.syncValueFromItems();
                this.sixChange.emit({ value: this.value, isSelected: true });
              }
            }}
          >
            {this.getItemLabel(item)}
          </six-menu-item>
        );
      });
    }

    this.isOpen = true;
  };

  private handleMenuHide = () => {
    this.isOpen = false;
  };

  private handleSlotChange = () => {
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
    this.hasLabelSlot = hasSlot(this.host, 'label');
    this.hasErrorTextSlot = hasSlot(this.host, 'error-text');
    this.syncItemsFromValue();
  };

  /**
   * Sets the checked state of menu items and renders the displayed values.
   */
  private async syncItemsFromValue() {
    const selectionContainerItems = this.getSelectionContainerItems();
    const mainItems = this.getItems();
    const value = this.getValueAsArray();

    selectionContainerItems.forEach((item) => {
      item.checkType = this.multiple ? 'checkbox' : 'check';
      item.checked = value.includes(item.value);
    });
    mainItems.forEach((item) => {
      item.checkType = this.multiple ? 'checkbox' : 'check';
      item.checked = value.includes(item.value);
    });

    const checkedItems = getCheckedItems(this.getValueAsArray(), mainItems);
    this.displayedValues = checkedItems.map((i) => this.getItemLabel(i));

    if (this.autocomplete && this.autocompleteInput != null) {
      this.autocompleteInput.value = Array.isArray(this.value) ? this.value.join(',') : this.value;
    }

    requestAnimationFrame(() => {
      this.updateDisplayedValues();
    });
  }

  private syncValueFromItems() {
    const items = this.getItems();
    const checkedValues = items.filter((item) => item.checked).map((item) => item.value);
    if (this.multiple) {
      this.value = checkedValues;
    } else {
      this.value = checkedValues.length > 0 ? checkedValues[0] : '';
    }
  }

  private updateDisplayedValues() {
    const displayValueOptions = [...(this.displayValuesContainer?.querySelectorAll('.display-value') ?? [])];
    if (this.displayValuesContainer == null || displayValueOptions.length === 0 || this.overflowCount == null) {
      return;
    }

    // Show all options and separators to properly measure all widths.
    displayValueOptions.forEach((d) => {
      showDisplayValue(d);
      showSeparator(d);
    });

    // Measure available width. The last separator is added to the available width, because it will be hidden later on.
    const separator = displayValueOptions[displayValueOptions.length - 1].querySelector('.separator');
    if (separator == null) return;
    let availableWidth = getWidth(this.displayValuesContainer) + getWidth(separator);

    // Compute how many display value elements fit in the available width
    let { fitCount, overflowCount } = computeFitCount(displayValueOptions, availableWidth);

    if (overflowCount === 0) {
      // All items fit, hide overflow count and show all values.
      hideOverflowCount(this.overflowCount);
      showFittingValues(displayValueOptions, fitCount);
    } else {
      // Not all items fit in the available width. Recompute the available width with the overflow-count visible.

      // Increment overflow count by one to make sure the elements fit, even if the overflow count increases to the
      // next higher power of ten, e.g. from 9 to 10 or 99 to 100.
      setOverflowCount(this.overflowCount, overflowCount + 1);
      showOverflowCount(this.overflowCount);

      // Subtract the overflow count from the available width
      availableWidth = availableWidth - getWidth(this.overflowCount);

      // Compute how many display value elements fit in the new available width
      ({ fitCount, overflowCount } = computeFitCount(displayValueOptions, availableWidth));

      // Show overflow count and items that fit.
      setOverflowCount(this.overflowCount, overflowCount);
      showFittingValues(displayValueOptions, fitCount);
    }
  }

  render() {
    const hasSelection = this.hasSelection();
    const items = this.getItems();
    const hasMenuItems = items.length > 0;
    const hasDeselectedOptions = this.hasDeselectedOptions();
    let showClear = false;
    let showExpand = hasMenuItems;
    if (this.clearable && hasSelection) {
      showClear = true;
      showExpand = false;
    }

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
        errorText={this.errorText}
        errorTextCount={this.errorTextCount}
        hasErrorTextSlot={this.hasErrorTextSlot}
        size={this.size}
        onLabelClick={this.handleLabelClick}
        disabled={this.disabled}
        required={this.required}
        displayError={this.invalid}
      >
        <six-dropdown
          part="base"
          ref={(el) => (this.dropdown = el)}
          hoist={this.hoist}
          matchTriggerWidth={true}
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
            'select--placeholder-visible': this.displayedValues.length === 0,
            'select--small': this.size === 'small',
            'select--medium': this.size === 'medium',
            'select--large': this.size === 'large',
            'select--pill': this.pill,
            'select--invalid': this.invalid,
          }}
          onKeyDown={this.handleKeyDown}
          onSix-dropdown-show={this.handleMenuShow}
          onSix-dropdown-hide={this.handleMenuHide}
          filterPlaceholder={this.filterPlaceholder}
          filterDebounce={this.filterDebounce}
          filter={this.filter}
          asyncFilter={this.asyncFilter}
          virtualScroll={this.virtualScroll}
        >
          {/* Trigger */}
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
          >
            {/* Display values */}
            <div class="display__values" ref={(el) => (this.displayValuesContainer = el)}>
              {this.displayedValues.length > 0 ? (
                <span class="display__values-and-counter">
                  <span class="display__values-values">
                    {this.displayedValues.map((value) => (
                      <span key={value} class="display-value">
                        {value}
                        <span class={{ separator: true }}>, </span>
                      </span>
                    ))}
                  </span>
                  <span ref={(el) => (this.overflowCount = el)} class="overflow-count">
                    +10
                  </span>
                </span>
              ) : (
                <span class="placeholder">{this.placeholder}</span>
              )}
            </div>

            {/* Clear */}
            {showClear && (
              <six-icon-button
                exportparts="base:clear-button"
                class="select__clear"
                name="clear"
                size="small"
                onClick={this.handleClearClick}
                tabindex="-1"
              />
            )}

            {/* Expand */}
            {showExpand && (
              <span part="icon" class="select__icon">
                <six-icon size="medium">expand_more</six-icon>
              </span>
            )}

            {/* Autocomplete */}
            <six-input
              ref={(el) => (this.autocompleteInput = el)}
              class={{
                select__input: true,
                'select__hidden-select': !this.autocomplete,
              }}
              aria-hidden="true"
              required={this.required}
              onFocus={this.handleFocus}
              clearable={this.clearable}
              placeholder={this.placeholder}
              pill={this.pill}
              disabled={this.disabled}
              size={this.size}
              tabIndex={-1}
            />
          </div>

          {/* Selection container */}
          <div
            class={{
              'selection-container': true,
              'selection-container--border':
                this.selectionContainerItems.length > 0 && items.length !== this.selectionContainerItems.length,
            }}
          >
            {this.selectionContainerItems}
          </div>

          {/* Menu */}
          <six-menu
            ref={(el) => (this.menu = el)}
            part="menu"
            class={{
              select__menu: true,
              'select__menu--hidden': !hasMenuItems,
            }}
            onSix-menu-item-selected={this.handleMenuSelect}
            items={this.options}
            virtualScroll={this.virtualScroll}
            remove-box-shadow={true}
            disable-keyboard-handling={true}
          >
            <slot onSlotchange={this.handleSlotChange} />
          </six-menu>

          {/* Select all */}
          {this.multiple && this.selectAllButton && (
            <div class="select-all" slot="dropdown-footer">
              <six-button type="link" onClick={() => this.selectAll()}>
                {this.selectAllText == null ? selectAllDefaultText(hasDeselectedOptions) : this.selectAllText}
              </six-button>
            </div>
          )}
        </six-dropdown>
      </FormControl>
    );
  }

  private hasSelection() {
    return this.multiple ? this.value.length > 0 : this.value !== '';
  }

  private hasDeselectedOptions() {
    return this.getVisibleItems().some((opt) => !opt.disabled && !opt.checked);
  }
}

function getCheckedItems(value: string[], items: HTMLSixMenuItemElement[]): HTMLSixMenuItemElement[] {
  return items.filter((item) => value.includes(item.value));
}

function getWidth(element: Element) {
  return element.getBoundingClientRect().width;
}

function computeFitCount(options: Element[], availableWidth: number): { fitCount: number; overflowCount: number } {
  let accumulatedWidth = 0;
  let fitCount = 0;

  for (let i = 0; i < options.length; i++) {
    const displayOption = options[i];
    const width = getWidth(displayOption);
    if (i === 0 && width > availableWidth) {
      fitCount = 1;
      break;
    }
    accumulatedWidth += width;
    if (accumulatedWidth > availableWidth) {
      break;
    } else {
      fitCount += 1;
    }
  }
  const overflowCount = options.length - fitCount;
  return { fitCount, overflowCount };
}

function showFittingValues(displayValueOptions: Element[], fitCount: number) {
  if (displayValueOptions.length > 0) {
    // show items that fit
    displayValueOptions.slice(0, fitCount).forEach((displayValue, index, list) => {
      showDisplayValue(displayValue);
      const isLast = index === list.length - 1;
      if (isLast) {
        hideSeparator(displayValue);
      } else {
        showSeparator(displayValue);
      }
    });

    // hide the rest
    displayValueOptions.slice(fitCount).forEach((displayValue) => {
      hideDisplayValue(displayValue);
      showSeparator(displayValue);
    });
  }
}

function hideSeparator(displayValueOption: Element) {
  displayValueOption.querySelector('.separator')?.classList.add('separator--hidden');
}

function showSeparator(displayValueOption: Element) {
  displayValueOption.querySelector('.separator')?.classList.remove('separator--hidden');
}

function showDisplayValue(displayValueOption: Element) {
  displayValueOption.classList.remove('display-value--hidden');
}

function hideDisplayValue(displayValueOption: Element) {
  displayValueOption.classList.add('display-value--hidden');
}

function setOverflowCount(overflowCount: Element, count: number) {
  overflowCount.textContent = `+${count}`;
}

function showOverflowCount(overflowCount: Element) {
  overflowCount.classList.remove('overflow-count-hidden');
}

function hideOverflowCount(overflowCount: Element) {
  overflowCount.classList.add('overflow-count-hidden');
}

function selectAllDefaultText(hasDeselectedOptions: boolean) {
  const lang = getLanguage();
  switch (lang) {
    case 'de':
      return hasDeselectedOptions ? 'Alle auswählen' : 'Alle abwählen';
    case 'fr':
      return hasDeselectedOptions ? 'Tout sélectionner' : 'Tout désélectionner';
    case 'it':
      return hasDeselectedOptions ? 'Seleziona tutto' : 'Deseleziona tutto';
    case 'en':
      return hasDeselectedOptions ? 'Select all' : 'Deselect all';
    case 'es':
      return hasDeselectedOptions ? 'Seleccionar todo' : 'Deseleccionar todo';
  }
}
