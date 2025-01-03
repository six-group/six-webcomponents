import { Component, h, Prop } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @part base - The component's base wrapper.
 * @part svg - The spinner icon.
 */
@Component({
  tag: 'six-spinner',
  styleUrl: 'six-spinner.scss',
  shadow: true,
})
export class SixSpinner {
  /** Indicates if the spinner is shown as animated SIX or BME logo or a simple spinner. */
  @Prop() logo?: 'six' | 'bme';
  /**
   * **@deprecated** Use `logo="six"` instead.
   *
   * If set to true, the spinner displays the SIX logo.
   */
  @Prop() six?: boolean;

  /**
   * Renders a container with a given SVG content.
   */
  private renderWrapper(content: SVGElement) {
    return (
      <span class="six-spinner" aria-busy="true" aria-live="polite">
        <div class="six-spinner__container">{content}</div>
      </span>
    );
  }

  /**
   * Renders the SIX logo spinner.
   */
  private renderSIXLogo() {
    const sixLogo = (
      <svg viewBox="0 0 40 40" part="svg">
        <path
          fill="none"
          stroke="#de3919"
          stroke-width="5"
          stroke-linecap="round"
          d="M 35 5 V 35 H 5 T 5 5 H 35 V 35 H 5 V 5 H 35 V 35 H -34 V 30 H 7 A 9 8 0 0 0 14 27 L 27 14 A 8 6 0 0 1 33 12 H 42"
        ></path>
      </svg>
    );
    return this.renderWrapper(sixLogo);
  }

  /**
   * Renders the BME logo spinner.
   */
  private renderBMELogo() {
    const bmeLogo = (
      <svg viewBox="0 0 45 55" part="svg">
        <polygon
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          points="4.42 51.96 17.02 31.473 2 31.473 2 22.486 17.02 22.486 4.42 2 15.404 2 30.289 26.98 14.763 51.96 4.42 51.96"
        />
        <polygon
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          points="42 51.96 31.655 51.96 24.598 40.498 29.831 32.073 42 51.96"
        />
        <polygon
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          points="24.518 12.719 31.014 2 42 2 29.831 21.637 24.518 12.719"
        />
      </svg>
    );
    return this.renderWrapper(bmeLogo);
  }

  /**
   * Renders a simple spinner.
   */
  private renderSimpleSpinner() {
    return <span part="base" class="spinner" aria-busy="true" aria-live="polite" />;
  }

  render() {
    // Check the deprecated `six` property first
    if (this.six) {
      console.warn('The "six" prop is deprecated. Use "logo=\'six\'" instead.');
      return this.renderSIXLogo();
    }

    switch (this.logo) {
      case 'six':
        return this.renderSIXLogo();
      case 'bme':
        return this.renderBMELogo();
      default:
        return this.renderSimpleSpinner();
    }
  }
}
