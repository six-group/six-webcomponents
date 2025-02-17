import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { getSlot } from '../../utils/slot';

let toastStack: any;

if (typeof document !== 'undefined') {
  toastStack = Object.assign(document.createElement('div'), { className: 'six-toast-stack' });
}

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The alert's content.
 * @slot icon - An icon to show in the alert.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the alert icon.
 * @part message - The alert message.
 * @part close-button - The close button.
 */

@Component({
  tag: 'six-alert',
  styleUrl: 'six-alert.scss',
  shadow: true,
})
export class SixAlert {
  private autoHideTimeout?: number;

  @Element() host!: HTMLSixAlertElement;

  @State() isVisible = false;

  /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Set to true to make the alert closable. */
  @Prop({ reflect: true }) closable = false;

  /** The type of alert. */
  @Prop({ reflect: true }) type: AlertType = 'primary';

  /**
   * The length of time, in milliseconds, the alert will show before closing itself.
   * If the user hovers over the toast alert, the timer will pause.
   * On leaving the element with the mouse, the timer resets.
   */
  @Prop() duration = Infinity;

  @Watch('open')
  handleOpenChange() {
    this.open ? this.show() : this.hide();
  }

  @Watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  /** Emitted when the alert opens. Calling `event.preventDefault()` will prevent it from being opened. */
  @Event({ eventName: 'six-alert-show' }) sixShow!: EventEmitter<EmptyPayload>;

  /** Emitted after the alert opens and all transitions are complete. */
  @Event({ eventName: 'six-alert-after-show' }) sixAfterShow!: EventEmitter<EmptyPayload>;

  /** Emitted when the alert closes. Calling `event.preventDefault()` will prevent it from being closed. */
  @Event({ eventName: 'six-alert-hide' }) sixHide!: EventEmitter<EmptyPayload>;

  /** Emitted after the alert closes and all transitions are complete. */
  @Event({ eventName: 'six-alert-after-hide' }) sixAfterHide!: EventEmitter<EmptyPayload>;

  componentWillLoad() {
    // Show on init if open
    if (this.open) {
      this.show();
    }
  }

  /** Shows the alert. */
  @Method()
  async show() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (this.isVisible) {
      return;
    }

    const sixShow = this.sixShow.emit();
    if (sixShow.defaultPrevented) {
      this.open = false;
      return;
    }

    this.isVisible = true;
    this.open = true;

    if (this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  /** Hides the alert */
  @Method()
  async hide() {
    // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
    if (!this.isVisible) {
      return;
    }

    const sixHide = this.sixHide.emit();
    if (sixHide.defaultPrevented) {
      this.open = true;
      return;
    }

    clearTimeout(this.autoHideTimeout);
    this.isVisible = false;
    this.open = false;
  }

  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   * @param adjustPosition  If true, the top and right position of the toast stack is shifted according to the
   *                        six-root header's height and the presence of a vertical scrollbar.
   */
  @Method()
  async toast(adjustPosition = true) {
    return new Promise<void>((resolve) => {
      if (!toastStack.parentElement) {
        document.body.append(toastStack);
      }
      toastStack.append(this.host);

      if (adjustPosition) {
        const sixRoot = document.querySelector('six-root');
        const headerSlot = getSlot(sixRoot, 'header');
        const mainSlot = sixRoot?.shadowRoot?.querySelector('host main');
        if (mainSlot != null && mainSlot instanceof HTMLElement) {
          const scrollbarWidth = mainSlot.offsetWidth - mainSlot.clientWidth;
          toastStack.style.right = `${scrollbarWidth}px`;
        }
        if (headerSlot != null) {
          const rect = headerSlot?.getBoundingClientRect();
          toastStack.style.top = `${rect.top + rect.height}px`;
        }
      } else {
        toastStack.style.top = '0';
        toastStack.style.right = '0';
      }

      requestAnimationFrame(() => this.show());

      this.host.addEventListener(
        'six-alert-after-hide',
        () => {
          this.host.remove();
          resolve();

          // Remove the toast stack from the DOM when there are no more alerts
          if (toastStack.querySelector('six-alert') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  private pauseAutoHide() {
    clearTimeout(this.autoHideTimeout);
  }

  private resetAutoHide() {
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  private restartAutoHide() {
    this.pauseAutoHide();
    this.resetAutoHide();
  }

  private handleCloseClick = () => {
    this.hide();
  };

  private handleMouseEnter = () => {
    this.pauseAutoHide();
  };

  private handleMouseLeave = () => {
    this.resetAutoHide();
  };

  private handleTransitionEnd = (event: TransitionEvent) => {
    const target = event.target as HTMLElement;

    // Ensure we only emit one event when the target element is no longer visible
    if (event.propertyName === 'opacity' && target.classList.contains('alert')) {
      this.isVisible = this.open;
      this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
    }
  };

  render() {
    const asToast = this.host.closest('.six-toast-stack') != null;

    return (
      <div
        part="base"
        class={{
          alert: true,
          'alert--open': this.open,
          'alert--visible': this.isVisible,
          'alert--closable': this.closable,
          'alert--primary': this.type === 'primary',
          'alert--success': this.type === 'success',
          'alert--info': this.type === 'info',
          'alert--warning': this.type === 'warning',
          'alert--danger': this.type === 'danger',
          'alert--shadow': asToast,
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden={this.open ? 'false' : 'true'}
        onTransitionEnd={this.handleTransitionEnd}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon" />
        </span>

        <span part="message" class="alert__message">
          <slot />
        </span>

        {this.closable && (
          <span class="alert__close">
            <six-icon-button
              name="clear"
              exportparts="base:close-button"
              onClick={this.handleCloseClick}
            ></six-icon-button>
          </span>
        )}
      </div>
    );
  }
}

export type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
