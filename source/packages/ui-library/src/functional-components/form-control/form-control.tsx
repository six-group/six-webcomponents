import { h } from '@stencil/core';

export interface FormControlProps {
  /** The input id, used to map the input to the label */
  inputId: string;

  /** The size of the form control */
  size: 'small' | 'medium' | 'large';

  /** The label id, used to map the label to the input */
  labelId?: string;

  /** The label text (if the label slot isn't used) */
  label?: string;

  /** Whether or not a label slot has been provided. */
  hasLabelSlot?: boolean;

  /** The help text id, used to map the input to the help text */
  helpTextId?: string;

  /** The help text (if the help-text slot isn't used) */
  helpText?: string;

  /** Whether or not a help text slot has been provided. */
  hasHelpTextSlot?: boolean;

  /** The error text id, used to map the input to the help text */
  errorTextId?: string;

  /** The error text (if the error-text slot isn't used) */
  errorText?: string;

  /** Whether or not a error text slot has been provided. */
  hasErrorTextSlot?: boolean;

  /** Set to true to disable the input. */
  disabled?: boolean;

  /** Set if the value is required. */
  required?: boolean;

  /** Set if the error text is displayed. */
  displayError?: boolean;

  /** A function that gets called when the label is clicked. */
  onLabelClick?: (event: MouseEvent) => void;
}

const FormControl = (props: FormControlProps, children) => {
  const hasLabel = props.label ? true : props.hasLabelSlot;
  const hasHelpText = props.helpText ? true : props.hasHelpTextSlot;
  /** ErrorTextAttribute has precedence if non empty value is provided or if slot is not set */
  const useErrorTextAttribute = (props.errorText && props.errorText !== '') || !props.hasErrorTextSlot;

  return (
    <div
      part="form-control"
      class={{
        'form-control': true,
        'form-control--small': props.size === 'small',
        'form-control--medium': props.size === 'medium',
        'form-control--large': props.size === 'large',
        'form-control--has-label': hasLabel,
        'form-control--has-help-text': hasHelpText,
        'form-control--has-error-text': props.displayError,
        'form-control--disabled': props.disabled,
        'form-control--invalid': props.displayError && !props.disabled,
      }}
    >
      <label
        part="label"
        id={props.labelId}
        class={{
          'form-control__label': true,
          'form-control__label__required': props.required,
        }}
        htmlFor={props.inputId}
        aria-hidden={hasLabel ? 'false' : 'true'}
        onClick={props.onLabelClick}
      >
        <slot name="label">{props.label}</slot>
      </label>

      <div class="form-control__input">{children}</div>

      <div
        part="error-text"
        id={props.errorTextId}
        class="form-control__error-text"
        aria-hidden={props.displayError ? 'false' : 'true'}
      >
        {useErrorTextAttribute ? props.errorText : <slot name="error-text" />}
      </div>

      <div
        part="help-text"
        id={props.helpTextId}
        class="form-control__help-text"
        aria-hidden={hasHelpText ? 'false' : 'true'}
      >
        <slot name="help-text">{props.helpText}</slot>
      </div>
    </div>
  );
};

export default FormControl;
