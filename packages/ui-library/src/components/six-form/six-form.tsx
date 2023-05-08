import { Component, Event, EventEmitter, h, Method, Prop } from '@stencil/core';
import { EventListeners } from '../../utils/event-listeners';
import { EmptyPayload } from '../../utils/types';

export interface SixFormSubmitPayload {
  formData: FormData;
  formControls: HTMLFormElement[];
}

export interface SixFormChangePayload {
  formControl: HTMLFormElement;
  valid: boolean;
}

interface FormControl {
  tag: string;

  serialize(el: HTMLFormElement | HTMLElement, formData: FormData): void;

  click?(event: MouseEvent): any;

  keyDown?(event: KeyboardEvent): any;

  changeEventName?: string;
}

/**
 * @since 1.0
 * @status stable
 *
 * Forked from https://github.com/shoelace-style/shoelace version v2.0.0-beta27.
 *
 * @slot - The form's content.
 *
 * @part base - The component's base wrapper.
 */
@Component({
  tag: 'six-form',
  styleUrl: 'six-form.scss',
  shadow: true,
})
export class SixForm {
  form: HTMLElement;
  formControls: FormControl[];

  readonly eventListeners = new EventListeners();

  /** Prevent the form from validating inputs before submitting. */
  @Prop() novalidate = false;

  /**
   * Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an
   * invalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this
   * event, since it doen't send a GET or POST request like native forms. To "prevent" submission, use a conditional
   * around the XHR request you use to submit the form's data with.
   */
  @Event({ eventName: 'six-form-submit' }) sixSubmit: EventEmitter<SixFormSubmitPayload>;

  /** Emitted when the control's value changes. */
  @Event({ eventName: 'six-form-change' }) sixChange: EventEmitter<SixFormChangePayload>;

  /** Emitted when the forms values are reset. */
  @Event({ eventName: 'six-form-reset' }) sixReset: EventEmitter<EmptyPayload>;

  connectedCallback() {
    this.formControls = [
      {
        tag: 'six-button',
        serialize: (el: HTMLSixButtonElement, formData) =>
          el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: (event) => {
          const target = event.target as HTMLSixButtonElement;
          if (target.submit) {
            this.submit();
          }

          if (target.reset) {
            this.reset();
          }
        },
      },
      {
        tag: 'six-checkbox',
        serialize: (el: HTMLSixCheckboxElement, formData) =>
          el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null,
        changeEventName: 'six-checkbox-change',
      },
      {
        tag: 'six-color-picker',
        serialize: (el: HTMLSixCheckboxElement, formData) =>
          el.name && !el.disabled ? formData.append(el.name, el.value) : null,
      },
      {
        tag: 'six-input',
        serialize: (el: HTMLSixInputElement, formData) =>
          el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        keyDown: (event) => {
          if (event.key === 'Enter' && !event.defaultPrevented) {
            this.submit();
          }
        },
        changeEventName: 'six-input-change',
      },
      {
        tag: 'six-datepicker',
        serialize: (el: HTMLSixDatepickerElement, formData) =>
          el.name && !el.disabled ? formData.append(el.name, el.value?.toISOString()) : null,
        keyDown: (event) => {
          if (event.key === 'Enter' && !event.defaultPrevented) {
            this.submit();
          }
        },
        changeEventName: 'six-datepicker-select',
      },
      {
        tag: 'six-radio',
        serialize: (el: HTMLSixRadioElement, formData) =>
          el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null,
        changeEventName: 'six-radio-change',
      },
      {
        tag: 'six-range',
        serialize: (el: HTMLSixRangeElement, formData) => {
          if (el.name && !el.disabled) {
            formData.append(el.name, el.value + '');
          }
        },
        changeEventName: 'six-range-change',
      },
      {
        tag: 'six-select',
        serialize: (el: HTMLSixSelectElement, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.value];
              if (selectedOptions.length) {
                selectedOptions.map((value) => formData.append(el.name, value));
              } else {
                formData.append(el.name, '');
              }
            } else {
              formData.append(el.name, el.value + '');
            }
          }
        },
        changeEventName: 'six-select-change',
      },
      {
        tag: 'six-switch',
        serialize: (el: HTMLSixSwitchElement, formData) =>
          el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null,
        changeEventName: 'six-switch-change',
      },
      {
        tag: 'six-textarea',
        serialize: (el: HTMLSixTextareaElement, formData) =>
          el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        changeEventName: 'six-textarea-change',
      },
      {
        tag: 'six-timepicker',
        serialize: (el: HTMLSixTimepickerElement, formData) =>
          el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        keyDown: (event) => {
          if (event.key === 'Enter' && !event.defaultPrevented) {
            this.submit();
          }
        },
        changeEventName: 'six-timepicker-change',
      },
    ];

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  disconnectedCallback() {
    this.eventListeners.removeAll();
  }

  componentDidLoad() {
    this.getFormControls().then((controls) => controls.forEach((control) => this.appendChangeListener(control)));
  }

  private appendChangeListener(el: HTMLFormElement) {
    const tag = el.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.changeEventName) {
        this.eventListeners.add(el as HTMLElement, formControl.changeEventName, () => this.handleChange(el));
      }
    }
  }

  /** Serializes all form controls elements and returns a `FormData` object. */
  @Method()
  async getFormData() {
    const formData = new FormData();
    const formControls = await this.getFormControls();

    formControls.map((el) => this.serializeElement(el, formData));

    return formData;
  }

  /** Gets all form control elements (native and custom). */
  @Method()
  async getFormControls() {
    const slot = this.form.querySelector('slot');
    const tags = this.formControls.map((control) => control.tag);
    return slot
      .assignedElements({ flatten: true })
      .reduce((all, el) => all.concat(el, [...el.querySelectorAll('*')]), [])
      .filter((el) => tags.includes(el.tagName.toLowerCase())) as HTMLFormElement[];
  }

  /**
   * Submits the form. If all controls are valid, the `six-form-submit` event will be emitted and the promise will resolve
   * with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.
   */
  @Method()
  async submit() {
    const formData = await this.getFormData();
    const formControls = await this.getFormControls();
    const formControlsThatReport = formControls.filter(
      (el: HTMLFormElement) => typeof el.reportValidity === 'function'
    ) as any;

    if (!this.novalidate) {
      let isValid = true;
      for (const el of formControlsThatReport) {
        if (!(await el.reportValidity())) {
          isValid = false;
        }
      }
      if (!isValid) {
        return false;
      }
    }

    this.sixSubmit.emit({ formData, formControls });

    return true;
  }

  /** Checks for validity. */
  @Method()
  async checkValidity() {
    const formControls = await this.getFormControls();
    const validationTasks = formControls
      .filter((el: HTMLFormElement) => typeof el.checkValidity === 'function')
      .map((el: HTMLFormElement) => el.checkValidity());
    const invalidControls = await Promise.all(validationTasks).then((results) =>
      results.filter((valid) => valid === false)
    );
    return invalidControls.length == 0;
  }

  /** Resets the form and resets the value of all descendants*/
  @Method()
  async reset() {
    const formControls = await this.getFormControls();

    formControls
      .filter((control) => control?.reset && typeof control?.reset === 'function')
      .forEach((formControl) => formControl.reset());

    this.sixReset.emit();
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLFormElement;
    const tag = target.tagName.toLowerCase();

    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.click) {
        formControl.click(event);
      }
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLFormElement;
    const tag = target.tagName.toLowerCase();

    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.keyDown) {
        formControl.keyDown(event);
      }
    }
  }

  handleChange(el: HTMLFormElement) {
    this.checkValidity().then((isValid) =>
      this.sixChange.emit({
        valid: isValid,
        formControl: el,
      })
    );
  }

  serializeElement(el: HTMLFormElement, formData: FormData) {
    const tag = el.tagName.toLowerCase();

    for (const formControl of this.formControls) {
      if (formControl.tag === tag) {
        return formControl.serialize(el, formData);
      }
    }

    return null;
  }

  render() {
    return (
      <div
        ref={(el) => (this.form = el)}
        part="base"
        class="form"
        role="form"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <slot />
      </div>
    );
  }
}
