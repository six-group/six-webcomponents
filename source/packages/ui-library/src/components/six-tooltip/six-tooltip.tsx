import { Component, Element, Event, EventEmitter, Host, Method, Prop, Watch, h } from '@stencil/core';
import Popover from '../../utils/popover';
import { EmptyPayload } from '../../utils/types';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The tooltip's target element. Only the first element will be used as the target.
 * @slot content - The tooltip's content. Alternatively, you can use the content prop.
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'six-tooltip',
  styleUrl: 'six-tooltip.scss',
  shadow: true,
})
export class SixTooltip {
  componentId = `tooltip-${++id}`;
  isVisible = false;
  popover: Popover;
  tooltipPositioner: HTMLElement;
  target: HTMLElement;
  tooltip: any;

  @Element() host: HTMLSixTooltipElement;

  /** The tooltip's content. Alternatively, you can use the content slot. */
  @Prop() content = '';

  /**
   * The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip
   * inside of the viewport.
   */
  @Prop() placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'top';

  /** Set to true to disable the tooltip so it won't show when triggered. */
  @Prop() disabled = false;

  /** The distance in pixels from which to offset the tooltip away from its target. */
  @Prop() distance = 10;

  /** Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** The distance in pixels from which to offset the tooltip along its target. */
  @Prop() skidding = 0;

  /**
   * Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple
   * options can be passed by separating them with a space. When manual is used, the tooltip must be activated
   * programmatically.
   */
  @Prop() trigger = 'hover focus';

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /** Emitted when the tooltip begins to show. Calling `event.preventDefault()` will prevent it from being shown. */
  @Event({ eventName: 'six-tooltip-show' }) sixShow: EventEmitter<EmptyPayload>;

  /** Emitted after the tooltip has shown and all transitions are complete. */
  @Event({ eventName: 'six-tooltip-after-show' }) sixAfterShow: EventEmitter<EmptyPayload>;

  /** Emitted when the tooltip begins to hide. Calling `event.preventDefault()` will prevent it from being hidden. */
  @Event({ eventName: 'six-tooltip-hide' }) sixHide: EventEmitter<EmptyPayload>;

  /** Emitted after the tooltip has hidden and all transitions are complete. */
  @Event({ eventName: 'six-tooltip-after-hide' }) sixAfterHide: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  componentDidLoad() {
    this.target = this.getTarget();
    this.popover = new Popover(this.target, this.tooltipPositioner);
    this.syncOptions();

    this.host.addEventListener('blur', this.handleBlur, true);
    this.host.addEventListener('click', this.handleClick, true);
    this.host.addEventListener('focus', this.handleFocus, true);

    // Show on init if open
    this.tooltipPositioner.hidden = !this.open;
    if (this.open) {
      this.show();
    }
  }

  componentDidUpdate() {
    this.syncOptions();
  }

  disconnectedCallback() {
    this.popover.destroy();

    this.host.removeEventListener('blur', this.handleBlur, true);
    this.host.removeEventListener('click', this.handleClick, true);
    this.host.removeEventListener('focus', this.handleFocus, true);
  }

  /** Shows the tooltip. */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isVisible || this.disabled) {
      return;
    }

    const sixShow = this.sixShow.emit();
    if (sixShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.isVisible = true;
    this.open = true;
    this.popover.show();
  }

  /** Shows the tooltip. */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isVisible || this.disabled) {
      return;
    }

    const sixHide = this.sixHide.emit();
    if (sixHide.defaultPrevented) {
      this.open = true;
      return;
    }

    this.isVisible = false;
    this.open = false;
    this.popover.hide();
  }

  getTarget() {
    // Get the first child that isn't a <style> or content slot
    const target = [...this.host.children].find(
      (el) => el.tagName.toLowerCase() !== 'style' && el.getAttribute('slot') !== 'content',
    ) as HTMLElement;

    if (!target) {
      throw new Error('Invalid tooltip target: no child element was found.');
    }

    return target;
  }

  handleBlur() {
    if (this.hasTrigger('focus')) {
      this.hide();
    }
  }

  handleClick() {
    if (this.hasTrigger('click')) {
      this.open ? this.hide() : this.show();
    }
  }

  handleFocus() {
    if (this.hasTrigger('focus')) {
      this.show();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    // Pressing escape when the target element has focus should dismiss the tooltip
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.hide();
    }
  }

  handleMouseOver() {
    if (this.hasTrigger('hover')) {
      this.show();
    }
  }

  handleMouseOut() {
    if (this.hasTrigger('hover')) {
      this.hide();
    }
  }

  handleSlotChange() {
    const oldTarget = this.target;
    const newTarget = this.getTarget();

    if (newTarget !== oldTarget) {
      if (oldTarget) {
        oldTarget.removeAttribute('aria-describedby');
      }
      newTarget.setAttribute('aria-describedby', this.componentId);
    }
  }

  hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(' ');
    return triggers.includes(triggerType);
  }

  syncOptions() {
    this.popover.setOptions({
      placement: this.placement,
      distance: this.distance,
      skidding: this.skidding,
      transitionElement: this.tooltip,
      onAfterHide: () => this.sixAfterHide.emit(),
      onAfterShow: () => this.sixAfterShow.emit(),
    });
  }

  render() {
    return (
      <Host onKeyDown={this.handleKeyDown} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <slot onSlotchange={this.handleSlotChange} />
        <div ref={(el) => (this.tooltipPositioner = el)} class="tooltip-positioner">
          <div
            part="base"
            ref={(el) => (this.tooltip = el)}
            id={this.componentId}
            class={{
              tooltip: true,
              'tooltip--open': this.open,
            }}
            role="tooltip"
            aria-hidden={this.open ? 'false' : 'true'}
          >
            <slot name="content">{this.content}</slot>
          </div>
        </div>
      </Host>
    );
  }
}
