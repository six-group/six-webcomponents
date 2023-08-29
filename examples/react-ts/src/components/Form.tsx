import { Control, Controller, FieldValues } from 'react-hook-form';
import React, { ReactNode } from 'react';
import { propOr } from '../utils/prop-or';
import { FieldPath } from 'react-hook-form/dist/types/path/eager';

interface FormControlProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  value: string;
  checked?: boolean;
  onInput: (event: Event) => void;
}

interface WrapperProps<T extends FieldValues> {
  control: Control<T>;
  names: Record<string, string>;
  children: ReactNode;
}

export const Form = <T extends FieldValues>({ control, names, children }: WrapperProps<T>) => {
  return (
    <form>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<FormControlProps<T>>(child)) {
          const label = propOr(names, child.props.name)(child.props.name);
          return (
            <Controller
              control={control}
              name={child.props.name}
              render={({ field: { value, onChange: onInput } }) => {
                if (child.props.value) {
                  return React.cloneElement(child, {
                    label,
                    // for radio keep value and set checked
                    value: child.props.value,
                    checked: value === child.props.value,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onInput,
                  });
                } else {
                  return React.cloneElement(child, {
                    label,
                    value: value,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onInput,
                  });
                }
              }}
            />
          );
        }
      })}
    </form>
  );
};
