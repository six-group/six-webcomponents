import { Component, h, Prop } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @part base - The component's base wrapper.
 */
@Component({
  tag: 'six-spinner',
  styleUrl: 'six-spinner.scss',
  shadow: true,
})
export class SixSpinner {
  /** Indicates if the spinner is shown as animated SIX logo or simple spinner. */
  @Prop() six = false;

  private renderSIXLogo() {
    return (
      <span class="six-spinner" aria-busy="true" aria-live="polite">
        <div class="six-spinner__container">
          <svg viewBox="0 0 40 40" part="svg">
            <path
              fill="none"
              stroke="#de3919"
              stroke-width="5"
              stroke-linecap="round"
              d="M 35 5 V 35 H 5 T 5 5 H 35 V 35 H 5 V 5 H 35 V 35 H -34 V 30 H 7 A 9 8 0 0 0 14 27 L 27 14 A 8 6 0 0 1 33 12 H 42"
            ></path>
          </svg>
        </div>
      </span>
    );
  }

  private renderSimple() {
    return <span part="base" class="spinner" aria-busy="true" aria-live="polite" />;
  }

  render() {
    return this.six ? this.renderSIXLogo() : this.renderSimple();
  }
}
