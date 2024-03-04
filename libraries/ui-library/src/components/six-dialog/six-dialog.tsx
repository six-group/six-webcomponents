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
 * @slot - The dialog's content.
 * @slot label - The dialog's label. Alternatively, you can use the label prop.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 *
 * @part base - The component's base wrapper.
 * @part overlay - The overlay.
 * @part panel - The dialog panel (where the dialog and its content is rendered).
 * @part header - The dialog header.
 * @part title - The dialog title.
 * @part close-button - The close button.
 * @part body - The dialog body.
 * @part footer - The dialog footer.
 *
 */
@Component({
  tag: 'six-dialog',
  styleUrl: 'six-dialog.scss',
  shadow: true,
})
export class SixDialog {
  private componentId = `dialog-${++id}`;
  private dialog?: HTMLElement;
  private modal?: Modal;
  private panel?: HTMLElement;
  private willShow = false;
  private willHide = false;

  @Element() host!: HTMLSixDialogElement;

  @State() hasFooter = false;
  @State() isVisible = false;

  /** Indicates whether the dialog is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * The dialog's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @Prop() label = '';

  /**
   * Set to true to disable the header. This will also remove the default close button, so please ensure you provide an
   * easy, accessible way for users to dismiss the dialog.
   */
  @Prop() noHeader = false;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  /** Emitted when the dialog opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-dialog-show' }) sixShow!: EventEmitter<EmptyPayload>;

  /** Emitted after the dialog opens and all transitions are complete. */
  @Event({ eventName: 'six-dialog-after-show' }) sixAfterShow!: EventEmitter<EmptyPayload>;

  /** Emitted when the dialog closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-dialog-hide' }) sixHide!: EventEmitter<EmptyPayload>;

  /** Emitted after the dialog closes and all transitions are complete. */
  @Event({ eventName: 'six-dialog-after-hide' }) sixAfterHide!: EventEmitter<EmptyPayload>;

  /**
   * Emitted when the dialog opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
   * allow you to set it on a different element in the dialog, such as an input or button.
   */
  @Event({ eventName: 'six-dialog-initial-focus' }) sixInitialFocus!: EventEmitter<EmptyPayload>;

  /** Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the dialog from closing. */
  @Event({ eventName: 'six-dialog-overlay-dismiss' }) sixOverlayDismiss!: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.modal = new Modal(this.host, {
      onFocusOut: () => this.panel?.focus(),
    });
  }

  componentWillLoad() {
    this.handleSlotChange();
  }

  componentDidLoad() {
    // Show on init if open
    if (this.open) {
      this.show();
    }
  }

  disconnectedCallback() {
    unlockBodyScrolling(this.host);
  }

  /** Shows the dialog */
  @Method()
  async show() {
    if (this.willShow || this.modal == null || this.panel == null || this.dialog == null) {
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
    this.modal.activate();

    lockBodyScrolling(this.host);

    if (this.open) {
        requestAnimationFrame(() => {
          const sixInitialFocus = this.sixInitialFocus.emit();
          if (!sixInitialFocus.defaultPrevented) {
            panel.focus({ preventScroll: true });
          }
        });
    }
  }

  /** Hides the dialog */
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
    if (event.propertyName === 'opacity' && target.classList.contains('dialog__panel')) {
      this.isVisible = this.open;
      this.willShow = false;
      this.willHide = false;
      this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
    }
  };

  render() {
    return (
      <div
        ref={(el) => (this.dialog = el)}
        part="base"
        class={{
          dialog: true,
          'dialog--open': this.open,
          'dialog--visible': this.isVisible,
          'dialog--has-footer': this.hasFooter,
        }}
        onKeyDown={this.handleKeyDown}
        onTransitionEnd={this.handleTransitionEnd}
      >
        <div part="overlay" class="dialog__overlay" onClick={this.handleOverlayClick} />

        <div
          ref={(el) => (this.panel = el)}
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden={this.open ? 'false' : 'true'}
          aria-label={this.noHeader ? this.label : null}
          aria-labelledby={!this.noHeader ? `${this.componentId}-title` : null}
          tabIndex={0}
        >
          {!this.noHeader && (
            <header part="header" class="dialog__header">
              <span part="title" class="dialog__title" id={`${this.componentId}-title`}>
                <slot name="label">
                  {/* If there's no label, use an invisible character to prevent the heading from collapsing */}
                  {this.label || String.fromCharCode(65279)}
                </slot>
              </span>
              <six-icon-button
                exportparts="base:close-button"
                class="dialog__close"
                name="close"
                onClick={this.handleCloseClick}
              />
            </header>
          )}

          <div part="body" class="dialog__body">
            <slot />
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" onSlotchange={this.handleSlotChange} />
          </footer>
        </div>
      </div>
    );
  }
}
