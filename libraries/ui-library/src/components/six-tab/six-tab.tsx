import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The tab's label.
 *
 * @part base - The component's base wrapper.
 * @part close-button - The close button, which is the icon button's base wrapper.
 */

@Component({
  tag: 'six-tab',
  styleUrl: 'six-tab.scss',
  shadow: true,
})
export class SixTab {
  private componentId = `tab-${++id}`;
  private tab?: HTMLElement;

  @Element() host!: HTMLSixTabElement;

  /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
  @Prop({ reflect: true }) panel = '';

  /** Set to true to draw the tab in an active state. */
  @Prop({ reflect: true }) active = false;

  /** When true, the tab will be rendered with a close icon. */
  @Prop() closable = false;

  /** Set to true to draw the tab in a disabled state. */
  @Prop({ reflect: true }) disabled = false;

  /** Emitted when the tab is closable and the close button is activated. */
  @Event({ eventName: 'six-tab-close' }) sixClose!: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  /** Sets focus to the tab. */
  @Method()
  async setFocus(options?: FocusOptions) {
    this.tab?.focus(options);
  }

  /** Removes focus from the tab. */
  @Method()
  async removeFocus() {
    this.tab?.blur();
  }

  private handleCloseClick() {
    this.sixClose.emit();
  }

  render() {
    return (
      // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
      <Host id={this.host.id || this.componentId}>
        <div
          part="base"
          ref={(el) => (this.tab = el)}
          class={{
            tab: true,

            // States
            'tab--active': this.active,
            'tab--closable': this.closable,
            'tab--disabled': this.disabled,
          }}
          role="tab"
          aria-disabled={this.disabled ? 'true' : 'false'}
          aria-selected={this.active ? 'true' : 'false'}
          tabindex={this.disabled || !this.active ? '-1' : '0'}
        >
          <slot />
          {this.closable && (
            <six-icon-button
              name="close"
              size="xSmall"
              exportparts="base:close-button"
              class="tab__close-button"
              onClick={this.handleCloseClick}
              tabIndex={-1}
              aria-hidden="true"
            />
          )}
        </div>
      </Host>
    );
  }
}
