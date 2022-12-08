export default new class {

  async fetchTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
  }

  async fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }

}
