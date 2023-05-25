import { Control, Controller, FieldValues } from 'react-hook-form';
import React, { ReactNode } from 'react';
import { propOr } from '../utils/prop-or';
import { FieldPath } from 'react-hook-form/dist/types/path/eager';

interface FormControlProps<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  value: string;
  onInput: (event: unknown) => void;
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
              render={({ field: { value, onChange } }) => {
                return React.cloneElement(child, { label, value, onInput: onChange });
              }}
            />
          );
        }
      })}
    </form>
  );
};
