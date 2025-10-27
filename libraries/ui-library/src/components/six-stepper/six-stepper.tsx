import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export interface StepItem {
  /** Title of the step */
  title: string;
  /** Description of the step (optional) */
  description?: string;
  /** Subtitle of the step (optional) */
  subTitle?: string;
  /** Custom icon name for Material Icons/Symbols (optional) */
  icon?: string;
  /** Status of individual step (optional, will be auto-calculated if not set) */
  status?: StepStatus;
  /** Disable click on this step */
  disabled?: boolean;
}

/**
 * @since 1.0
 * @status stable
 *
 * @slot - Not used. Steps are configured via the `steps` prop.
 *
 * @part stepper - The stepper container
 * @part step - Individual step container
 * @part step-circle - The circle/icon container
 * @part step-content - The content area (title, subtitle, description)
 */
@Component({
  tag: 'six-stepper',
  styleUrl: 'six-stepper.scss',
  shadow: true,
})
export class SixStepper {
  /** Array of steps to display */
  @Prop() steps: StepItem[] = [];

  /** Current active step index (0-based) */
  @Prop({ mutable: true }) current: number = 0;

  /** Initial step index (0-based) */
  @Prop() initial: number = 0;

  /** Color theme */
  @Prop() color: 'blue' | 'green' = 'blue';

  /** Status of the current step */
  @Prop() status: StepStatus = 'process';

  /** Enable clickable steps */
  @Prop() clickable: boolean = false;

  /** Progress percentage for current step (0-100) */
  @Prop() percent?: number;

  /** Emitted when step is changed */
  @Event({ eventName: 'six-stepper-change' }) stepperChange!: EventEmitter<number>;

  @Watch('current')
  handleCurrentChange(newValue: number) {
    this.stepperChange.emit(newValue);
  }

  componentWillLoad() {
    // Set initial step if provided
    if (this.initial !== 0) {
      this.current = this.initial;
    }
  }

  /**
   * Calculate the status of a step based on its index
   */
  private getStepStatus(index: number, step: StepItem): StepStatus {
    // If step has explicit status, use it
    if (step.status) {
      return step.status;
    }

    // Auto-calculate based on current step
    if (index < this.current) {
      return 'finish';
    } else if (index === this.current) {
      return this.status;
    } else {
      return 'wait';
    }
  }

  /**
   * Handle step click (if clickable is enabled)
   */
  private handleStepClick(index: number, step: StepItem) {
    if (this.clickable && !step.disabled) {
      this.current = index;
    }
  }

  /**
   * Render the icon inside the circle
   */
  private renderStepIcon(step: StepItem, stepStatus: StepStatus, index: number) {
    // Custom icon from Material Icons
    if (step.icon) {
      return (
        <six-icon size="medium" class="step__custom-icon">
          {step.icon}
        </six-icon>
      );
    }

    // Checkmark for finished steps
    if (stepStatus === 'finish') {
      return (
        <six-icon size="medium" class="step__check">
          check
        </six-icon>
      );
    }

    // Error icon for error steps
    if (stepStatus === 'error') {
      return (
        <six-icon size="medium" class="step__error">
          close
        </six-icon>
      );
    }

    // Default: show step number
    return <span class="step__number">{index + 1}</span>;
  }

  render() {
    if (!this.steps || this.steps.length === 0) {
      return <div class="stepper-empty">No steps provided</div>;
    }

    const stepperClasses = {
      stepper: true,
      [`stepper--${this.color}`]: true,
    };

    return (
      <div class={stepperClasses} part="stepper">
        {this.steps.map((step, index) => {
          const stepStatus = this.getStepStatus(index, step);
          const isLast = index === this.steps.length - 1;
          const isClickable = this.clickable && !step.disabled;

          const stepClasses = {
            step: true,
            'step--wait': stepStatus === 'wait',
            'step--process': stepStatus === 'process',
            'step--finish': stepStatus === 'finish',
            'step--error': stepStatus === 'error',
            'step--last': isLast,
            'step--clickable': isClickable,
            'step--disabled': step.disabled || false,
          };

          return (
            <div class={stepClasses} part="step" onClick={() => this.handleStepClick(index, step)}>
              {/* Circle/Icon with optional progress ring */}
              <div class="step__icon-wrapper">
                {/* Progress ring (behind the circle) */}
                {stepStatus === 'process' && this.percent !== undefined && (
                  <div class="step__progress">
                    <svg viewBox="0 0 100 100">
                      <circle class="step__progress-bg" cx="50" cy="50" r="45" fill="none" stroke-width="8" />
                      <circle
                        class="step__progress-bar"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke-width="8"
                        stroke-dasharray={`${this.percent * 2.827} 282.7`}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                )}

                {/* Main circle */}
                <div class="step__circle" part="step-circle">
                  {this.renderStepIcon(step, stepStatus, index)}
                </div>
              </div>

              {/* Content */}
              <div class="step__content" part="step-content">
                <div class="step__title">{step.title}</div>
                {step.subTitle && <div class="step__subtitle">{step.subTitle}</div>}
                {step.description && <div class="step__description">{step.description}</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
