export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default new (class {
  async fetchTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
  }

  async fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }
})();
