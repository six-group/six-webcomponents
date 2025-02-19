import { Component, h, Prop } from '@stencil/core';

/**
 * @since 4.2.7
 * @status stable
 */

@Component({
  tag: 'six-header-menu-button',
  styleUrl: 'six-header-menu-button.scss',
  shadow: true,
})
export class SixHeaderMenuButton {
  /** Set to true to draw the button with a caret for use with dropdowns, popovers, etc. */
  @Prop() caret = false;

  /** Set to true to disable the button. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to draw the button in a loading state. */
  @Prop({ reflect: true }) loading = false;

  /** Indicates if activating the button should submit the form. Ignored when `href` is set. */
  @Prop({ reflect: true }) submit = false;

  /** Indicates if activating the button should reset the form. */
  @Prop({ reflect: true }) reset = false;

  render() {
    return (
      <six-button
        type="secondary"
        caret={this.caret}
        disabled={this.disabled}
        loading={this.loading}
        submit={this.submit}
        reset={this.reset}
      >
        <slot name="suffix" slot="suffix"></slot>
        <slot name="prefix" slot="prefix"></slot>
        <slot />
      </six-button>
    );
  }
}
