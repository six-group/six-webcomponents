import { Directive, ElementRef, forwardRef, Host, OnDestroy, Optional, Renderer2, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomControlDirective),
  multi: true,
};

type OnChange<T = unknown> = (value?: T) => void;
type OnTouched = () => void;

const isTag = (name: string) => (ref: ElementRef) => ref.nativeElement.tagName.toLowerCase() === name;
const isRadio = isTag('six-radio');
const isCheckbox = isTag('six-checkbox');
const isDatepicker = isTag('six-datepicker');

const getAttribute = (name: string) => (ref: ElementRef) => ref.nativeElement.getAttribute(name);
const getFormControlName = getAttribute('ng-reflect-name');
const getErrorText = getAttribute('error-text');
const getValue = getAttribute('value');
const getSlotErrorText = (ref: ElementRef) => ref.nativeElement.querySelector('[slot=error-text]')?.innerHTML;

const isChecked = (ref: ElementRef) => ref.nativeElement.getAttribute('checked') === null;

const validText = (value?: unknown): value is string => typeof value === 'string' && value.length > 0;

@Directive({
  selector: '[appCustomControl]',
  host: {
    '(six-input-input)': 'onSixInputChange()',
    '(six-input-blur)': 'onBlur()',
    '(six-select-change)': 'onSixSelectChange()',
    '(six-select-blur)': 'onBlur()',
    '(six-radio-change)': 'onSixRadioChange()',
    '(six-radio-blur)': 'onBlur()',
    '(six-checkbox-change)': 'onSixCheckboxChange()',
    '(six-checkbox-blur)': 'onBlur()',
    '(six-datepicker-select)': 'onSixDatepickerSelect()',
    '(six-datepicker-blur)': 'onBlur()',
    '(six-textarea-change)': 'onSixInputChange()',
  },
  providers: [CUSTOM_VALUE_ACCESSOR],
})
export class CustomControlDirective implements ControlValueAccessor, OnDestroy {
  private subscription?: Subscription;

  onSixInputChange = () => {
    this.onChange(this.ref.nativeElement.value);
  };

  onSixSelectChange = () => {
    this.onChange(this.ref.nativeElement.value);
  };

  onSixRadioChange = () => {
    // debounce TODO: tx4u9 consider one way data flow for radio buttons
    if (isChecked(this.ref)) {
      this.onChange(getValue(this.ref));
    }
  };

  onSixCheckboxChange = () => {
    this.onChange(isChecked(this.ref));
  };

  onSixDatepickerSelect = () => {
    this.onChange(this.ref.nativeElement.value);
  };

  onBlur() {
    this.onTouched();
  }

  onChange: OnChange = () => {};

  onTouched = () => {};

  constructor(
    readonly renderer: Renderer2,
    readonly ref: ElementRef,
    @Optional() @Host() @SkipSelf() readonly parent: ControlContainer
  ) {}

  get control(): AbstractControl {
    const name = getFormControlName(this.ref);
    return this.parent.control?.get(name) as any;
  }

  getFirstError = (control: AbstractControl): string | undefined => {
    const [key] = Object.keys(control.errors || {});

    // all valid?
    if (!validText(key)) {
      return undefined;
    }

    // check if custom text is provided
    const customText = control.getError(key);
    if (validText(customText)) {
      return customText;
    }

    // slot error text has precedence
    const slotErrorText = getSlotErrorText(this.ref);
    if (validText(slotErrorText)) {
      return slotErrorText;
    }

    // attribute error text has precedence
    const attributeError = getErrorText(this.ref);
    if (validText(attributeError)) {
      return attributeError;
    }

    // default key itself
    return key;
  };

  updateValidity = () => {
    if (!this.control) {
      throw new Error('[ CustomControlDirective ] control is not defined.');
    }

    if (this.control.pristine) {
      setTimeout(() => this.renderer.removeAttribute(this.ref.nativeElement, 'invalid'), 0);
      this.updateDatepickerInputElement();
      return;
    }

    const error = this.getFirstError(this.control);

    if (error) {
      const setRefInvalid = () => {
        this.ref.nativeElement.setCustomValidity(getErrorText(this.ref) || error);
        this.renderer.setAttribute(this.ref.nativeElement, 'invalid', '');
      };

      setRefInvalid();
    } else {
      console.log(`[ updateValidity remove attribute ]`, { error, element: this.ref.nativeElement });
      this.renderer.removeAttribute(this.ref.nativeElement, 'invalid');
      this.ref.nativeElement.setCustomValidity('');
    }
  };

  private updateDatepickerInputElement() {
    if (!isDatepicker(this.ref)) {
      return;
    }

    const datepickerInput = this.ref.nativeElement.shadowRoot.querySelector('six-input');
    if (datepickerInput) {
      // there seems to be currently a bug which custom-control directive and the datepicker when resetting the form
      // we thus have to add a timeout
      setTimeout(() => this.renderer.removeAttribute(datepickerInput, 'invalid'), 50);
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // writeValue is called by reactive forms
  writeValue(value: unknown) {
    if (isRadio(this.ref)) {
      if (getValue(this.ref) === String(value)) {
        this.renderer.setAttribute(this.ref.nativeElement, 'checked', '');
      }
    } else if (isCheckbox(this.ref)) {
      if (value === 'false' || value === 'null') {
        console.warn(
          `Truthy string '${value}' used for the checked attribute of six-checkbox. Values should be either of type boolean or null.`
        );
      }
      if (value == null || value === false) {
        this.renderer.removeAttribute(this.ref.nativeElement, 'checked');
      } else {
        this.renderer.setAttribute(this.ref.nativeElement, 'checked', '');
      }
    } else {
      const newValue = value ?? (isDatepicker(this.ref) ? null : '');
      this.renderer.setProperty(this.ref.nativeElement, 'value', newValue);
    }
  }

  registerOnChange(callback: OnChange) {
    this.onChange = callback;
  }

  registerOnTouched(callback: OnTouched) {
    this.onTouched = callback;
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.ref.nativeElement, 'disabled', isDisabled);
  }
}
