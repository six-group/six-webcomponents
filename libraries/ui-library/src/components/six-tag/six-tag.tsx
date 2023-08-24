import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { getTextContent } from '../../utils/slot';
import { debounce } from '../../utils/execution-control';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The tag's content.
 *
 * @part base - The component's base wrapper.
 * @part content - The tag content.
 * @part clear-button - The clear button.
 */

@Component({
  tag: 'six-tag',
  styleUrl: 'six-tag.scss',
  shadow: true,
})
export class SixTag {
  /** The tag's type. */
  @Prop({ reflect: true }) type: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'action' | 'text' = 'primary';

  /** The tag's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to draw a pill-style tag with rounded edges. */
  @Prop({ reflect: true }) pill = false;

  /** Set to true to make the tag clearable. */
  @Prop({ reflect: true }) clearable = false;

  /** Emitted when the clear button is activated. */
  @Event({ eventName: 'six-tag-clear' }) sixClear!: EventEmitter<EmptyPayload>;

  private contentSlotElement: HTMLSlotElement | undefined;
  private tooltipElement: HTMLSixTooltipElement | undefined;
  private contentElement: HTMLElement | undefined;
  private resizeObserver = new ResizeObserver(debounce(() => this.updateTooltip()));

  connectedCallback() {
    if (this.contentElement != null) {
      this.resizeObserver.observe(this.contentElement);
    }
  }

  componentDidLoad() {
    if (this.contentElement != null) {
      this.resizeObserver.observe(this.contentElement);
    }
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }

  private updateTooltip = () => {
    if (this.tooltipElement != null && this.contentSlotElement != null && this.contentElement != null) {
      this.tooltipElement.content = getTextContent(this.contentSlotElement);
      this.tooltipElement.disabled = !(this.contentElement.offsetWidth < this.contentElement.scrollWidth);
    }
  };

  private handleClearClick = () => {
    this.sixClear.emit();
  };

  render() {
    return (
      <span
        part="base"
        class={{
          tag: true,

          // Types
          'tag--primary': this.type === 'primary',
          'tag--success': this.type === 'success',
          'tag--info': this.type === 'info',
          'tag--warning': this.type === 'warning',
          'tag--danger': this.type === 'danger',
          'tag--action': this.type === 'action',
          'tag--text': this.type === 'text',

          // Sizes
          'tag--small': this.size === 'small',
          'tag--medium': this.size === 'medium',
          'tag--large': this.size === 'large',

          // Modifers
          'tag--pill': this.pill,
          'tag--clear': this.clearable,
        }}
      >
        <six-tooltip ref={(el) => (this.tooltipElement = el)}>
          <span ref={(el) => (this.contentElement = el)} part="content" class="tag__content">
            <slot ref={(el) => (this.contentSlotElement = el as HTMLSlotElement)} />
          </span>
        </six-tooltip>

        {this.clearable && (
          <six-icon-button
            exportparts="base:clear-button"
            size="xSmall"
            name="clear"
            class="tag__clear"
            onClick={this.handleClearClick}
          />
        )}
      </span>
    );
  }
}
