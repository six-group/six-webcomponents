import { Component, h, Prop } from '@stencil/core';

export type DividerSpacing = 'small' | 'medium' | 'large';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Not used. The divider is a simple horizontal line.
 *
 * @part divider - The divider line element
 */
@Component({
  tag: 'six-divider',
  styleUrl: 'six-divider.scss',
  shadow: true,
})
export class SixDivider {
  /** Spacing size: small (24px), medium (28px), or large (36px) */
  @Prop() spacing: DividerSpacing = 'small';

  /**
   * Get the spacing value in pixels
   */
  private getSpacing(): number {
    const spacingMap: Record<DividerSpacing, number> = {
      small: 24,
      medium: 28,
      large: 36,
    };
    return spacingMap[this.spacing];
  }

  render() {
    const spacingValue = this.getSpacing();

    return (
      <hr
        class={`divider divider--spacing-${this.spacing}`}
        part="divider"
        style={{
          marginTop: `${spacingValue}px`,
          marginBottom: `${spacingValue}px`,
        }}
      />
    );
  }
}
