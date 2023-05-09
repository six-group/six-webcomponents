import React, { useState, Fragment, useRef } from 'react';
import {
  SixInput,
  SixForm,
  SixButton,
  SixSelect,
  SixMenuItem,
  SixCheckbox,
  SixRadio,
} from '@six-group/ui-library-react/dist/components';
// feature
import { getControlValue } from '../utils/forms';
import { User } from '../types/user';
import { equal } from '../utils/equal';
import './UserForm.css';

interface UserFormProps {
  user: User;
  updateUser: (update: Partial<User>) => void;
}

interface AdditionalProperties {
  role: string;
  password: string;
  passwordConfirmation: string;
  radio: string;
  important: boolean;
}

namespace AdditionalProperties {
  export const columns: Record<keyof AdditionalProperties, string> = {
    role: 'Role',
    password: 'Password',
    passwordConfirmation: 'Confirm password',
    radio: 'radio',
    important: 'checkbox',
  };
}

type FormState = User & AdditionalProperties;

const getInitialState = (user: User): FormState => {
  return Object.assign(
    {
      role: 'user',
      password: '',
      passwordConfirmation: '',
      radio: '2',
      important: false,
    },
    user
  );
};

const UserForm = ({ user, updateUser }: UserFormProps) => {
  const formRef = useRef<HTMLSixFormElement>(null);

  const [form, setForm] = useState<FormState>(getInitialState(user));

  const handleChange =
    (key: keyof FormState) =>
    ({ target }: CustomEvent) => {
      setForm({ ...form, [key]: getControlValue(target) });
    };

  const handleUpdate = async () => {
    if (await formRef.current?.submit()) {
      updateUser(form);
    }
  };

  const isChecked = (name: keyof FormState) => (value: unknown) => form[name] === value;
  const isRadio = isChecked('radio');

  return (
    <Fragment>
      <SixForm ref={formRef}>
        <SixInput label={User.columns.name} value={form.name} required onSix-input-input={handleChange('name')} />
        <SixInput
          label={User.columns.email}
          type="email"
          value={form.email}
          required
          onSix-input-input={handleChange('email')}
        />
        <SixInput label={User.columns.username} value={form.username} onSix-input-input={handleChange('username')} />
        <SixSelect
          label={AdditionalProperties.columns.role}
          value={form.role}
          onSix-select-change={handleChange('role')}
        >
          <SixMenuItem value="admin">Administrator</SixMenuItem>
          <SixMenuItem value="user">User</SixMenuItem>
          <SixMenuItem>Not defined</SixMenuItem>
        </SixSelect>
        <SixCheckbox onSix-checkbox-change={handleChange('important')}>Important</SixCheckbox>
        <SixInput
          label={AdditionalProperties.columns.password}
          type="password"
          required
          onSix-input-input={handleChange('password')}
        />
        <SixInput
          label={AdditionalProperties.columns.passwordConfirmation}
          type="password"
          required
          onSix-input-input={handleChange('passwordConfirmation')}
        />
        {['1', '2', '3'].map((value) => {
          return (
            <SixRadio
              key={value}
              name="radio"
              value={value}
              checked={isRadio(value)}
              onSix-radio-change={handleChange('radio')}
            >
              {'Option ' + value}
            </SixRadio>
          );
        })}
      </SixForm>
      <footer slot="footer">
        <SixButton disabled={equal(getInitialState(user), form)} onClick={handleUpdate}>
          Update
        </SixButton>
      </footer>
    </Fragment>
  );
};

export default UserForm;
