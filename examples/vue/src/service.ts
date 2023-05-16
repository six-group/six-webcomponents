export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

  role?: Role;
  important?: boolean;
  password?: string;
  option?: UserOption;
}

export type Role = 'Administrator' | 'User';
export type UserOption = 'Option 1' | 'Option 2' | 'Option 3';

export default new (class {
  async fetchTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
  }

  async fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    // Add some fake timeout
    await new Promise((r) => setTimeout(r, 1000));

    return result;
  }
})();
