import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { lockBodyScrolling, unlockBodyScrolling } from '../../utils/scroll';
import { hasSlot } from '../../utils/slot';
import Modal from '../../utils/modal';
import { EmptyPayload } from '../../utils/types';

let id = 0;

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The drawer's content.
 * @slot label - The drawer's label. Alternatively, you can use the label prop.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @part base - The component's base wrapper.
 * @part overlay - The overlay.
 * @part panel - The drawer panel (where the drawer and its content is rendered).
 * @part header - The drawer header.
 * @part title - The drawer title.
 * @part close-button - The close button.
 * @part body - The drawer body.
 * @part footer - The drawer footer.
 */

@Component({
  tag: 'six-drawer',
  styleUrl: 'six-drawer.scss',
  shadow: true,
})
export class SixDrawer {
  private componentId = `drawer-${++id}`;
  private drawer?: HTMLElement;
  private modal?: Modal;
  private panel?: HTMLElement;
  private willShow = false;
  private willHide = false;

  @Element() host!: HTMLSixDrawerElement;

  @State() hasFooter = false;
  @State() isVisible = false;

  /** Indicates whether the drawer is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * The drawer's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @Prop() label = '';

  /** The direction from which the drawer will open. */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'right';

  /**
   * By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
   * its parent element, set this prop and add `position: relative` to the parent.
   */
  @Prop() contained = false;

  /**
   * Removes the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the drawer.
   */
  @Prop() noHeader = false;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /** Emitted when the drawer opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-drawer-show' }) sixShow!: EventEmitter<EmptyPayload>;

  /** Emitted after the drawer opens and all transitions are complete. */
  @Event({ eventName: 'six-drawer-after-show' }) sixAfterShow!: EventEmitter<EmptyPayload>;

  /** Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-drawer-hide' }) sixHide!: EventEmitter<EmptyPayload>;

  /** Emitted after the drawer closes and all transitions are complete. */
  @Event({ eventName: 'six-drawer-after-hide' }) sixAfterHide!: EventEmitter<EmptyPayload>;

  /**
   * Emitted when the drawer opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
   * allow you to set it on a different element in the drawer, such as an input or button.
   */
  @Event({ eventName: 'six-drawer-initial-focus' }) sixInitialFocus!: EventEmitter<EmptyPayload>;

  /** Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the drawer from closing. */
  @Event({ eventName: 'six-drawer-overlay-dismiss' }) sixOverlayDismiss!: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.modal = new Modal(this.host, {
      onFocusOut: () => (this.contained ? null : this.panel?.focus()),
    });
  }

  componentWillLoad() {
    this.handleSlotChange();

    // Show on init if open
    if (this.open) {
      this.show();
      // if the sidebar is open by default we need to manually reset the
      // transition variables since there will be no transition event
      this.resetTransitionVariables();
    }
  }

  disconnectedCallback() {
    unlockBodyScrolling(this.host);
  }

  /** Shows the drawer */
  @Method()
  async show() {
    if (this.willShow || this.modal == null || this.panel == null || this.drawer == null) {
      return;
    }
    const panel = this.panel;

    const sixShow = this.sixShow.emit();
    if (sixShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.willShow = true;
    this.isVisible = true;
    this.open = true;

    // Lock body scrolling only if the drawer isn't contained
    if (!this.contained) {
      this.modal.activate();
      lockBodyScrolling(this.host);
    }

    if (this.open) {
        // Wait for the next frame before setting initial focus so the dialog is technically visible
        requestAnimationFrame(() => {
          const sixInitialFocus = this.sixInitialFocus.emit();
          if (!sixInitialFocus.defaultPrevented) {
            panel.focus({ preventScroll: true });
          }
        });
    }
  }

  /** Hides the drawer */
  @Method()
  async hide() {
    if (this.willHide || this.modal == null) {
      return;
    }

    const sixHide = this.sixHide.emit();
    if (sixHide.defaultPrevented) {
      this.open = true;
      return;
    }

    this.willHide = true;
    this.open = false;
    this.modal.deactivate();

    unlockBodyScrolling(this.host);
  }

  private handleCloseClick = () => {
    this.hide();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.hide();
    }
  };

  private handleOverlayClick = () => {
    const sixOverlayDismiss = this.sixOverlayDismiss.emit();

    if (!sixOverlayDismiss.defaultPrevented) {
      this.hide();
    }
  };

  private handleSlotChange = () => {
    this.hasFooter = hasSlot(this.host, 'footer');
  };

  private handleTransitionEnd = (event: TransitionEvent) => {
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'transform' && target.classList.contains('drawer__panel')) {
      this.resetTransitionVariables();
    }
  };

  private resetTransitionVariables() {
    this.isVisible = this.open;
    this.willShow = false;
    this.willHide = false;
    this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
  }

  render() {
    return (
      <div
        ref={(el) => (this.drawer = el)}
        part="base"
        class={{
          drawer: true,
          'drawer--open': this.open,
          'drawer--visible': this.isVisible,
          'drawer--top': this.placement === 'top',
          'drawer--right': this.placement === 'right',
          'drawer--bottom': this.placement === 'bottom',
          'drawer--left': this.placement === 'left',
          'drawer--contained': this.contained,
          'drawer--fixed': !this.contained,
          'drawer--has-footer': this.hasFooter,
        }}
        onKeyDown={this.handleKeyDown}
        onTransitionEnd={this.handleTransitionEnd}
      >
        <div part="overlay" class="drawer__overlay" onClick={this.handleOverlayClick} tabIndex={-1} />

        <div
          ref={(el) => (this.panel = el)}
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden={this.open ? 'false' : 'true'}
          aria-label={this.noHeader ? this.label : null}
          aria-labelledby={!this.noHeader ? `${this.componentId}-title` : null}
          tabIndex={0}
        >
          {!this.noHeader && (
            <header part="header" class="drawer__header">
              <span part="title" class="drawer__title" id={`${this.componentId}-title`}>
                <slot name="label">
                  {/* If there's no label, use an invisible character to prevent the heading from collapsing */}
                  {this.label || String.fromCharCode(65279)}
                </slot>
              </span>
              <six-icon-button
                exportparts="base:close-button"
                class="drawer__close"
                name="close"
                onClick={this.handleCloseClick}
              />
            </header>
          )}

          <div part="body" class="drawer__body">
            <slot />
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer" onSlotchange={this.handleSlotChange} />
          </footer>
        </div>
      </div>
    );
  }
}
