import { newSpecPage } from '@stencil/core/testing';
import { SixStepper } from '../six-stepper';

describe('six-stepper', () => {
  const mockSteps = [
    { title: 'Step 1', description: 'First step' },
    { title: 'Step 2', description: 'Second step' },
    { title: 'Step 3', description: 'Third step' },
  ];

  it('renders empty stepper when no steps provided', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });

    expect(page.root).toEqualHtml(`
      <six-stepper>
        <mock:shadow-root>
          <div class="stepper-empty">
            No steps provided
          </div>
        </mock:shadow-root>
      </six-stepper>
    `);
  });

  it('renders basic stepper with steps', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 0;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <six-stepper>
        <mock:shadow-root>
          <div class="stepper stepper--blue" part="stepper">
            <div class="step step--process" part="step">
              <div class="step__icon-wrapper">
                <div class="step__circle" part="step-circle">
                  <span class="step__number">1</span>
                </div>
              </div>
              <div class="step__content" part="step-content">
                <div class="step__title">Step 1</div>
                <div class="step__description">First step</div>
              </div>
            </div>
            <div class="step step--wait" part="step">
              <div class="step__icon-wrapper">
                <div class="step__circle" part="step-circle">
                  <span class="step__number">2</span>
                </div>
              </div>
              <div class="step__content" part="step-content">
                <div class="step__title">Step 2</div>
                <div class="step__description">Second step</div>
              </div>
            </div>
            <div class="step step--last step--wait" part="step">
              <div class="step__icon-wrapper">
                <div class="step__circle" part="step-circle">
                  <span class="step__number">3</span>
                </div>
              </div>
              <div class="step__content" part="step-content">
                <div class="step__title">Step 3</div>
                <div class="step__description">Third step</div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </six-stepper>
    `);
  });

  it('renders stepper with current step set to 1', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');
    expect(steps?.[0]).toHaveClass('step--finish');
    expect(steps?.[1]).toHaveClass('step--process');
    expect(steps?.[2]).toHaveClass('step--wait');
  });

  it('renders green theme stepper', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper color="green"></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    await page.waitForChanges();

    const stepper = page.root?.shadowRoot?.querySelector('.stepper');
    expect(stepper).toHaveClass('stepper--green');
  });

  it('renders clickable stepper', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper clickable></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');
    steps?.forEach((step) => {
      expect(step).toHaveClass('step--clickable');
    });
  });

  it('emits six-stepper-change event when current changes', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 0;
    await page.waitForChanges();

    const stepperChangeSpy = jest.fn();
    page.root?.addEventListener('six-stepper-change', stepperChangeSpy);

    page.rootInstance.current = 1;
    await page.waitForChanges();

    expect(stepperChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: 1,
      })
    );
  });

  it('handles step click when clickable is true', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper clickable></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 0;
    await page.waitForChanges();

    const secondStep = page.root?.shadowRoot?.querySelectorAll('.step')?.[1] as HTMLElement;
    secondStep?.click();
    await page.waitForChanges();

    expect(page.rootInstance.current).toBe(1);
  });

  it('does not handle step click when clickable is false', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 0;
    await page.waitForChanges();

    const secondStep = page.root?.shadowRoot?.querySelectorAll('.step')?.[1] as HTMLElement;
    secondStep?.click();
    await page.waitForChanges();

    expect(page.rootInstance.current).toBe(0);
  });

  it('renders steps with custom icons', async () => {
    const stepsWithIcons = [
      { title: 'Login', icon: 'person' },
      { title: 'Verify', icon: 'email' },
      { title: 'Complete', icon: 'check_circle' },
    ];

    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = stepsWithIcons;
    await page.waitForChanges();

    const icons = page.root?.shadowRoot?.querySelectorAll('six-icon.step__custom-icon');
    expect(icons?.length).toBe(3);
    expect(icons?.[0].textContent?.trim()).toBe('person');
    expect(icons?.[1].textContent?.trim()).toBe('email');
    expect(icons?.[2].textContent?.trim()).toBe('check_circle');
  });

  it('renders checkmark icon for finished steps', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 2;
    await page.waitForChanges();

    const checkIcons = page.root?.shadowRoot?.querySelectorAll('six-icon.step__check');
    expect(checkIcons?.length).toBe(2); // Steps 0 and 1 are finished
    expect(checkIcons?.[0].textContent?.trim()).toBe('check');
  });

  it('renders error icon for error status', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper status="error"></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const errorIcon = page.root?.shadowRoot?.querySelector('six-icon.step__error');
    expect(errorIcon).toBeTruthy();
    expect(errorIcon?.textContent?.trim()).toBe('close');
  });

  it('renders steps with subtitles', async () => {
    const stepsWithSubtitles = [
      { title: 'Step 1', subTitle: '00:00:05' },
      { title: 'Step 2', subTitle: '00:01:02' },
      { title: 'Step 3', subTitle: 'waiting' },
    ];

    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = stepsWithSubtitles;
    await page.waitForChanges();

    const subtitles = page.root?.shadowRoot?.querySelectorAll('.step__subtitle');
    expect(subtitles?.length).toBe(3);
    expect(subtitles?.[0].textContent).toBe('00:00:05');
    expect(subtitles?.[1].textContent).toBe('00:01:02');
    expect(subtitles?.[2].textContent).toBe('waiting');
  });

  it('applies disabled state to steps', async () => {
    const stepsWithDisabled = [{ title: 'Step 1' }, { title: 'Step 2', disabled: true }, { title: 'Step 3' }];

    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper clickable></six-stepper>`,
    });
    page.rootInstance.steps = stepsWithDisabled;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');
    expect(steps?.[1]).toHaveClass('step--disabled');
  });

  it('does not change to disabled step on click', async () => {
    const stepsWithDisabled = [{ title: 'Step 1' }, { title: 'Step 2', disabled: true }, { title: 'Step 3' }];

    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper clickable></six-stepper>`,
    });
    page.rootInstance.steps = stepsWithDisabled;
    page.rootInstance.current = 0;
    await page.waitForChanges();

    const disabledStep = page.root?.shadowRoot?.querySelectorAll('.step')?.[1] as HTMLElement;
    disabledStep?.click();
    await page.waitForChanges();

    expect(page.rootInstance.current).toBe(0);
  });

  it('renders progress circle when percent is set', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper percent="50"></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const progressCircle = page.root?.shadowRoot?.querySelector('.step__progress');
    expect(progressCircle).toBeTruthy();

    const progressBar = progressCircle?.querySelector('.step__progress-bar');
    expect(progressBar?.getAttribute('stroke-dasharray')).toContain('141.35'); // 50% of 282.7
  });

  it('sets initial step correctly', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper initial="2"></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    await page.waitForChanges();

    expect(page.rootInstance.current).toBe(2);
  });

  it('overrides auto status with explicit step status', async () => {
    const stepsWithStatus = [
      { title: 'Step 1', status: 'finish' },
      { title: 'Step 2', status: 'error' },
      { title: 'Step 3', status: 'wait' },
    ];

    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = stepsWithStatus;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');
    expect(steps?.[0]).toHaveClass('step--finish');
    expect(steps?.[1]).toHaveClass('step--error');
    expect(steps?.[2]).toHaveClass('step--wait');
  });

  it('applies correct status classes based on current step', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');

    // Step 0: finished (index < current)
    expect(steps?.[0]).toHaveClass('step--finish');

    // Step 1: in process (index === current)
    expect(steps?.[1]).toHaveClass('step--process');

    // Step 2: waiting (index > current)
    expect(steps?.[2]).toHaveClass('step--wait');
  });

  it('renders last step with step--last class', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');
    const lastStep = steps?.[steps.length - 1];

    expect(lastStep).toHaveClass('step--last');
  });

  it('renders without description when not provided', async () => {
    const stepsWithoutDescription = [{ title: 'Step 1' }, { title: 'Step 2' }];

    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = stepsWithoutDescription;
    await page.waitForChanges();

    const descriptions = page.root?.shadowRoot?.querySelectorAll('.step__description');
    expect(descriptions?.length).toBe(0);
  });

  it('renders without subtitle when not provided', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    await page.waitForChanges();

    const subtitles = page.root?.shadowRoot?.querySelectorAll('.step__subtitle');
    expect(subtitles?.length).toBe(0);
  });

  it('applies finish status to all steps before current', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });

    const fourSteps = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }, { title: 'Step 4' }];

    page.rootInstance.steps = fourSteps;
    page.rootInstance.current = 3;
    await page.waitForChanges();

    const steps = page.root?.shadowRoot?.querySelectorAll('.step');
    expect(steps?.[0]).toHaveClass('step--finish');
    expect(steps?.[1]).toHaveClass('step--finish');
    expect(steps?.[2]).toHaveClass('step--finish');
    expect(steps?.[3]).toHaveClass('step--process');
  });

  it('uses custom status prop for current step', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper status="finish"></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const currentStep = page.root?.shadowRoot?.querySelectorAll('.step')?.[1];
    expect(currentStep).toHaveClass('step--finish');
  });

  it('does not render progress when percent is undefined', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const progressCircle = page.root?.shadowRoot?.querySelector('.step__progress');
    expect(progressCircle).toBeFalsy();
  });

  it('only renders progress on current step in process status', async () => {
    const page = await newSpecPage({
      components: [SixStepper],
      html: `<six-stepper percent="75"></six-stepper>`,
    });
    page.rootInstance.steps = mockSteps;
    page.rootInstance.current = 1;
    await page.waitForChanges();

    const allProgress = page.root?.shadowRoot?.querySelectorAll('.step__progress');
    expect(allProgress?.length).toBe(1); // Only on current step
  });
});
