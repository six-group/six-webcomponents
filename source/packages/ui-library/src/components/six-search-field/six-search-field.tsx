import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { debounce, DEFAULT_DEBOUNCE_FAST } from '../../utils/execution-control';
import { EventListeners } from '../../utils/event-listeners';

export interface SixSearchFieldChangePayload {
  value: string;
}

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Used to define the results below the search component.
 */

@Component({
  tag: 'six-search-field',
  styleUrl: 'six-search-field.scss',
  shadow: true,
})
export class SixSearchField {
  /** The input's placeholder text. */
  @Prop() placeholder: string;

  /** Debounce time in milliseconds, default is 300 ms */
  @Prop({ reflect: true }) debounce = DEFAULT_DEBOUNCE_FAST;

  /** Set to true to disable the input. */
  @Prop({ reflect: true }) disabled = false;

  /** The input's value attribute. */
  @Prop({ reflect: true }) value = '';

  /** Set to true to add a clear button when the input is populated. */
  @Prop() clearable = false;

  /** Emitted when a search is triggered */
  @Event({ eventName: 'six-search-field-change' }) searchFieldChange: EventEmitter<SixSearchFieldChangePayload>;

  inputElement: HTMLSixInputElement;

  readonly eventListeners = new EventListeners();

  handleInputChange = () => {
    this.searchFieldChange.emit({ value: this.inputElement.value });
  };

  @Watch('value')
  handleValueChange() {
    if (this.inputElement) {
      this.inputElement.value = this.value;
    }
  }

  componentDidLoad() {
    this.eventListeners.add(this.inputElement, 'six-input-input', debounce(this.handleInputChange, this.debounce));
    this.eventListeners.add(this.inputElement, 'keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        // emit immediately
        this.handleInputChange();
      }
    });
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  render() {
    return (
      <div class="search-box">
        <six-input
          ref={(el) => (this.inputElement = el)}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          clearable={this.clearable}
        >
          <six-icon class="search-box__icon" slot="prefix" size="small" onClick={this.handleInputChange}>
            search
          </six-icon>
        </six-input>
        <slot />
      </div>
    );
  }
}
