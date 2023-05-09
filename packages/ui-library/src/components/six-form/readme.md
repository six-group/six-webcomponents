# six-form

<!-- EXAMPLES -->

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                | Type      | Default |
| ------------ | ------------ | ---------------------------------------------------------- | --------- | ------- |
| `novalidate` | `novalidate` | Prevent the form from validating inputs before submitting. | `boolean` | `false` |


## Events

| Event             | Description                                                                                                                                                                                                                                                                                                                                                                                                | Type                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `six-form-change` | Emitted when the control's value changes.                                                                                                                                                                                                                                                                                                                                                                  | `CustomEvent<SixFormChangePayload>` |
| `six-form-reset`  | Emitted when the forms values are reset.                                                                                                                                                                                                                                                                                                                                                                   | `CustomEvent<undefined>`            |
| `six-form-submit` | Emitted when the form is submitted. This event will not be emitted if any form control inside of it is in an invalid state, unless the form has the `novalidate` attribute. Note that there is never a need to prevent this event, since it doen't send a GET or POST request like native forms. To "prevent" submission, use a conditional around the XHR request you use to submit the form's data with. | `CustomEvent<SixFormSubmitPayload>` |


## Methods

### `checkValidity() => Promise<boolean>`

Checks for validity.

#### Returns

Type: `Promise<boolean>`



### `getFormControls() => Promise<HTMLFormElement[]>`

Gets all form control elements (native and custom).

#### Returns

Type: `Promise<HTMLFormElement[]>`



### `getFormData() => Promise<FormData>`

Serializes all form controls elements and returns a `FormData` object.

#### Returns

Type: `Promise<FormData>`



### `reset() => Promise<void>`

Resets the form and resets the value of all descendants

#### Returns

Type: `Promise<void>`



### `submit() => Promise<boolean>`

Submits the form. If all controls are valid, the `six-form-submit` event will be emitted and the promise will resolve
with `true`. If any form control is invalid, the promise will resolve with `false` and no event will be emitted.

#### Returns

Type: `Promise<boolean>`




## Slots

| Slot | Description         |
| ---- | ------------------- |
|      | The form's content. |


## Shadow Parts

| Part     | Description                   |
| -------- | ----------------------------- |
| `"base"` | The component's base wrapper. |


----------------------------------------------

Copyright © 2021-present SIX-Group
