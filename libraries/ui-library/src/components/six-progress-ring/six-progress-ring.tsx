import { Component, h, Prop, Watch } from '@stencil/core';

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - A label to show inside the ring.
 *
 * @part base - The component's base wrapper.
 * @part label - The progress ring label.
 */

@Component({
  tag: 'six-progress-ring',
  styleUrl: 'six-progress-ring.scss',
  shadow: true,
})
export class SixProgressRing {
  indicator?: SVGCircleElement;

  /** The size of the progress ring in pixels. */
  @Prop() size = 128;

  /** The stroke width of the progress ring in pixels. */
  @Prop() strokeWidth = 4;

  /** The current progress percentage, 0 - 100. */
  @Prop() percentage = 0;

  @Watch('percentage')
  handlePercentageChange() {
    this.updateProgress();
  }

  componentDidLoad() {
    this.updateProgress();
  }

  private updateProgress() {
    if (this.indicator?.r == null) return;

    const radius = this.indicator.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (this.percentage / 100) * circumference;

    this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
    this.indicator.style.strokeDashoffset = `${offset}`;
  }

  render() {
    return (
      <div part="base" class="progress-ring">
        <svg class="progress-ring__image" width={this.size} height={this.size}>
          <circle
            class="progress-ring__track"
            stroke-width={this.strokeWidth}
            stroke-linecap="round"
            fill="transparent"
            r={this.size / 2 - this.strokeWidth * 2}
            cx={this.size / 2}
            cy={this.size / 2}
          />

          <circle
            ref={(el) => (this.indicator = el as SVGCircleElement)}
            class="progress-ring__indicator"
            stroke-width={this.strokeWidth}
            stroke-linecap="round"
            fill="transparent"
            r={this.size / 2 - this.strokeWidth * 2}
            cx={this.size / 2}
            cy={this.size / 2}
          />
        </svg>

        <span part="label" class="progress-ring__label">
          <slot />
        </span>
      </div>
    );
  }
}
