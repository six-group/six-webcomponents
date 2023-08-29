import { Fragment, useMemo } from 'react';
import { useForm } from 'react-hook-form';
// feature
import '../types/six-components';
import { User } from '../types/user';
import { deepEquals } from '../utils/deep-equals';
import './UserForm.css';
import { Debug } from './Debug';
import { Form } from './Form';

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
    important: 'VIP',
  };
}

type FormState = User & AdditionalProperties;

const FormNames = { ...User.columns, ...AdditionalProperties.columns };

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
  const defaultValues = useMemo(() => getInitialState(user), [user]);
  const { control, watch } = useForm({ defaultValues });

  const value = watch();
  const handleUpdate = () => updateUser(value);

  return (
    <Fragment>
      <h3>Form</h3>
      <Form control={control} names={FormNames}>
        <six-input required type="text" name="name" />
        <six-input required type="email" name="email" />
        <six-input name="username" />
        <six-select name="role">
          <six-menu-item value="admin">Administrator</six-menu-item>
          <six-menu-item value="user">User</six-menu-item>
          <six-menu-item>Not defined</six-menu-item>
        </six-select>
        <six-checkbox name="important">Important</six-checkbox>
        <six-input required type="password" name="password" />
        <six-input required type="password" name="passwordConfirmation" />
        {['1', '2', '3'].map((value) => {
          return (
            <six-radio name="radio" key={value} value={value}>
              {'Option ' + value}
            </six-radio>
          );
        })}
      </Form>
      <br />
      <Debug value={value} />
      <footer slot="footer">
        <six-button disabled={deepEquals(defaultValues, value)} onClick={handleUpdate}>
          Update
        </six-button>
      </footer>
    </Fragment>
  );
};

export default UserForm;
