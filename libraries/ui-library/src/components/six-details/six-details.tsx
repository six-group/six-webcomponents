import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { focusVisible } from '../../utils/focus-visible';
import { EmptyPayload } from '../../utils/types';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The details' content.
 * @slot summary - The details' summary. Alternatively, you can use the summary prop.
 *
 * @part base - The component's base wrapper.
 * @part header - The summary header.
 * @part summary - The details summary.
 * @part summary-icon - The expand/collapse summary icon.
 * @part content - The details content.
 */

@Component({
  tag: 'six-details',
  styleUrl: 'six-details.scss',
  shadow: true,
})
export class SixDetails {
  @Element() readonly host!: HTMLSixDetailsElement;

  @State() animateSummaryIcon = true;

  private body?: HTMLElement;
  private details?: HTMLElement;
  private header?: HTMLElement;
  private componentId = `details-${++id}`;
  private isVisible = false;

  /** Indicates whether the details is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** The summary to show in the details header. If you need to display HTML, use the `summary` slot instead. */
  @Prop() summary = '';

  /** The summary icon to show in the details header. If you need to display HTML, use the `summary-icon` slot instead. */
  @Prop() summaryIcon?: string;

  /** The icon's size. */
  @Prop({ reflect: true }) summaryIconSize:
    | 'inherit'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | 'xxxLarge' = 'inherit';

  /** Set to true to prevent the user from toggling the details. */
  @Prop() disabled = false;

  /** Set to true when you want to use six-details inline e.g. in a sidebar */
  @Prop() inline = false;

  /** Set to true when you want details without content to be selectable. This is important if you e.g. have a toggled sidebar where some menus have no children  */
  @Prop() selectableEmpty = false;

  /** Set to false when you want to hide the summary icon and disable the open/close mechanism. Usually not needed, but used internally by 'six-sidebar-item-group' */
  // eslint-disable-next-line @stencil-community/ban-default-true
  @Prop() hasContent = true;

  @Watch('open')
  handleOpenChange() {
    if (this.body != null) {
      this.open ? this.show() : this.hide();
    }
  }

  /** Emitted when the details opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-details-show' }) sixShow!: EventEmitter<EmptyPayload>;

  /** Emitted after the details opens and all transitions are complete. */
  @Event({ eventName: 'six-details-after-show' }) sixAfterShow!: EventEmitter<EmptyPayload>;

  /** Emitted when the details closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-details-hide' }) sixHide!: EventEmitter<EmptyPayload>;

  /** Emitted after the details closes and all transitions are complete. */
  @Event({ eventName: 'six-details-after-hide' }) sixAfterHide!: EventEmitter<EmptyPayload>;

  componentDidLoad() {
    if (this.details == null || this.body == null) return;

    focusVisible.observe(this.details);
    this.body.hidden = !this.open;

    // Show on init if open
    if (this.open) {
      this.show();
    }
  }

  disconnectedCallback() {
    if (this.details != null) {
      focusVisible.unobserve(this.details);
    }
  }

  /** Shows the detail body */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isVisible || this.body == null) return;

    const sixShow = this.sixShow.emit();
    if (sixShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.body.hidden = false;

    if (this.body.scrollHeight === 0) {
      // When the scroll height can't be measured, use auto. This prevents a borked open state when the details is open
      // initially, but not immediately visible (i.e. in a tab panel).
      this.body.style.height = 'auto';
      this.body.style.overflow = 'visible';
    } else {
      this.body.style.height = `${this.body.scrollHeight}px`;
      this.body.style.overflow = 'hidden';
    }
    this.isVisible = true;
    this.open = true;
  }

  /** Hides the detail body */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isVisible || this.body == null) return;
    const body = this.body;

    const sixHide = this.sixHide.emit();
    if (sixHide.defaultPrevented) {
      this.open = true;
      return;
    }

    // We can't transition out of `height: auto`, so let's set it to the current height first
    body.style.height = `${body.scrollHeight}px`;
    body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      // tslint:disable-next-line: no-unused-expression
      body.clientWidth; // force a reflow
      body.style.height = '0';
    });

    this.isVisible = false;
    this.open = false;
  }

  private handleBodyTransitionEnd = (event: TransitionEvent) => {
    if (this.body == null) return;
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'height' && target.classList.contains('details__body')) {
      this.body.style.overflow = this.open ? 'visible' : 'hidden';
      this.body.style.height = this.open ? 'auto' : '0';
      this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
      this.body.hidden = !this.open;
    }
  };

  private handleSummaryClick = () => {
    if (!this.disabled && (this.hasContent || this.selectableEmpty)) {
      this.open ? this.hide() : this.show();
      this.header?.focus();
    }
  };

  private handleSummaryKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.open ? this.hide() : this.show();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  };

  render() {
    const summaryIcon = this.hasContent && (this.summaryIcon || 'expand_more');

    return (
      <div
        ref={(el) => (this.details = el)}
        part="base"
        class={{
          details: true,
          'details--open': this.open,
          'details--disabled': this.disabled,
          inline: this.inline,
        }}
      >
        <header
          ref={(el) => (this.header = el)}
          part="header"
          id={`${this.componentId}-header`}
          class="details__header"
          role="button"
          aria-expanded={this.open ? 'true' : 'false'}
          aria-controls={`${this.componentId}-content`}
          aria-disabled={this.disabled ? 'true' : 'false'}
          tabIndex={this.disabled ? -1 : 0}
          onClick={this.handleSummaryClick}
          onKeyDown={this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">{this.summary}</slot>
          </div>

          <span
            part="summary-icon"
            class={{
              'details__summary-icon': true,
              'details__summary-icon--animate': this.animateSummaryIcon,
            }}
          >
            <slot name="summary-icon" onSlotchange={() => (this.animateSummaryIcon = false)}>
              {summaryIcon && <six-icon size={this.summaryIconSize}>{summaryIcon}</six-icon>}
            </slot>
          </span>
        </header>

        <div ref={(el) => (this.body = el)} class="details__body" onTransitionEnd={this.handleBodyTransitionEnd}>
          <div
            part="content"
            id={`${this.componentId}-content`}
            class="details__content"
            role="region"
            aria-labelledby={`${this.componentId}-header`}
          >
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
