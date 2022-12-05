import { propOr } from './prop-or';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getValueExtractor: (el: any) => (el: any) => unknown = propOr(
  {
    'six-input': (el: HTMLSixInputElement) => el.value,
    'six-textarea': (el: HTMLSixTextareaElement) => el.value,
    'six-radio': (el: HTMLSixRadioElement) => el.value,
    'six-select': (el: HTMLSixSelectElement) => el.value,
    'six-checkbox': (el: HTMLSixCheckboxElement) => el.getAttribute('checked') === null,
  },
  () => undefined
);

export const getControlValue = (target: EventTarget | null) => {
  const tag = (target as HTMLElement)?.tagName?.toLowerCase();
  const valueExtractor = getValueExtractor(tag);
  return valueExtractor(target);
};
