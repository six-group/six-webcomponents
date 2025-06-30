import { Component, Element, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import FormControl from '../../functional-components/form-control/form-control';
import { EmptyPayload } from '../../utils/types';
import { hasSlot } from '../../utils/slot';

@Component({
  tag: 'six-rating',
  styleUrl: 'six-rating.scss',
  shadow: true,
})
export class SixRating {
  @Element() el!: HTMLSixRatingElement;

  /** The rating's name attribute. */
  @Prop() name = '';

  /** The rating's value attribute. */
  @Prop({ mutable: true }) value: number = 0;

  /** Set to true to disable the rating. */
  @Prop() disabled = false;

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  /** The label text. */
  @Prop() label: string = '';

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText: string | string[] = '';

  /** The number of error texts to be shown (if the error-text slot isn't used). Defaults to 1 */
  @Prop() errorTextCount?: number;

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** Maximum number of stars. Default is 5 */
  @Prop() max: number = 5;

  /** Size of the stars */
  @Prop({ reflect: true }) size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge' = 'medium';

  /** If its readonly */
  @Prop() readonly: boolean = false;

  /** Emitted when the control loses focus. */
  @Event({ eventName: 'six-rating-blur' }) sixBlur!: EventEmitter<number>;

  /** Emitted when the control's checked state changes. */
  @Event({ eventName: 'six-rating-change' }) sixChange!: EventEmitter<number>;

  /** Emitted when the control gains focus. */
  @Event({ eventName: 'six-rating-focus' }) sixFocus!: EventEmitter<EmptyPayload>;

  // --

  @State() hasFocus = false;
  @State() hasErrorTextSlot = false;
  @State() hoveredValue = this.value;

  private static id: number = 0;

  private ratingId = `rating-${++SixRating.id}`;
  private labelId = `rating-label-${SixRating.id}`;
  private errorTextId = `input-error-text-${SixRating.id}`;

  @Watch('value')
  handleValueChange() {
    this.sixChange.emit(this.value);
  }

  connectedCallback() {
    this.el.shadowRoot?.addEventListener('slotchange', this.handleSlotChange);
  }

  disconnectedCallback() {
    this.el.shadowRoot?.removeEventListener('slotchange', this.handleSlotChange);
  }

  private handleSlotChange = () => {
    this.hasErrorTextSlot = hasSlot(this.el, 'error-text');
  };

  private handleBlur = () => {
    this.hasFocus = false;
    this.sixBlur.emit(this.value);
  };

  private handleFocus = () => {
    this.hasFocus = true;
    this.sixFocus.emit();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      if (this.hoveredValue > 0) {
        this.hoveredValue = this.hoveredValue - 1;
        this.value = this.hoveredValue;
      }
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      if (this.hoveredValue < this.max) {
        this.hoveredValue = this.hoveredValue + 1;
      }
    }
  };

  private renderStars() {
    return Array.from({ length: this.max }, (_, i) => {
      const handleEvent = (event: Event) => {
        if (this.readonly || this.disabled) {
          return;
        }
        switch (event.type) {
          case 'mouseover':
            this.hoveredValue = i + 1;
            break;
          case 'mouseout':
            this.hoveredValue = this.value;
            break;
          case 'click':
            this.value = this.hoveredValue;
            break;
        }
      };

      return (
        <six-icon
          class={{
            'six-rating__star': true,
            'six-rating__star--filled': i < this.hoveredValue,
          }}
          filled
          size={this.size}
          onMouseOver={handleEvent}
          onMouseOut={handleEvent}
          onClick={handleEvent}
        >
          star_rate
        </six-icon>
      );
    });
  }

  render() {
    return (
      <FormControl
        inputId={this.ratingId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={false}
        errorTextId={this.errorTextId}
        errorText={this.errorText}
        errorTextCount={this.errorTextCount}
        hasErrorTextSlot={this.hasErrorTextSlot}
        size="medium"
        disabled={this.disabled}
        required={this.required}
        displayError={this.invalid}
      >
        <div
          part="base"
          class={{
            'six-rating': true,
            'six-rating--readonly': this.readonly,
            'six-rating--disabled': this.disabled,
          }}
          role="slider"
          aria-label={this.label}
          aria-disabled={this.disabled ? 'true' : 'false'}
          aria-readonly={this.readonly ? 'true' : 'false'}
          aria-valuenow={this.value}
          aria-valuemin={0}
          aria-valuemax={this.max}
          tabindex={this.disabled ? '-1' : '0'}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
        >
          {this.renderStars()}

          <input
            part="input"
            id={this.ratingId}
            type="hidden"
            max={this.max}
            min={0}
            name={this.name}
            value={this.value}
            disabled={this.disabled}
            required={this.required}
            role="slider"
            aria-labelledby={this.labelId}
          />
        </div>
      </FormControl>
    );
  }
}
