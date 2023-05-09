import React from 'react';
// types
import { User } from '../types/user';

// styles
import './UsersTableStatic.css';

interface UsersTableStaticProps {
  users: User[];
  loading: boolean;
  selectUser: (user: User) => void;
}

const UsersTableStatic = ({ users, selectUser }: UsersTableStaticProps) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.entries(User.columns).map(([name, description]) => (
            <th key={name}>{description}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(users).map(([userId, user]) => (
          <tr onClick={() => selectUser(user)} key={userId}>
            {Object.entries(User.columns).map(([column]) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <td key={column}>{user[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTableStatic;
