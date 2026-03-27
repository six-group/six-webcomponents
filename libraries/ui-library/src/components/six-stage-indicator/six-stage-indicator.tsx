import { Component, h, Prop } from '@stencil/core';

export type StageType = 'LOCAL' | 'DEV' | 'ITU' | 'ETU' | 'ACCEPTANCE' | 'PROD' | null;

@Component({
  tag: 'six-stage-indicator',
  styleUrl: 'six-stage-indicator.scss',
  shadow: true,
})
export class SixStageIndicator {
  /** The indicators value attribute */
  @Prop() stage: StageType = null;

  render() {
    return this.stage == null || this.stage == 'PROD' ? null : (
      <div class={`indicator--${this.stage.toLowerCase()}`}>
        <div class="center-content">
          <six-icon class="align-item" size="small">
            error_outline
          </six-icon>
          <span class={'align-item'}>
            <slot />
          </span>
        </div>
      </div>
    );
  }
}
