class tasksApi {
  _storageKey = 'todo_tasks';

  _getAllFromStorage() {
    const data = localStorage.getItem(this._storageKey);
    return data ? JSON.parse(data) : [];
  }

  _saveToStorage(tasks) {
    localStorage.setItem(this._storageKey, JSON.stringify(tasks));
  }

  async getAll() {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this._getAllFromStorage());
        }, );
      });
    } catch (error) {
      console.error("Ошибка при получении задач:", error);
      throw error;
    }
  }

  async add(task) {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const tasks = this._getAllFromStorage();
          const newTask = { ...task, id: task.id || Date.now() };
          this._saveToStorage([...tasks, newTask]);
          resolve(newTask);
        }, );
      });
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
      throw error;
    }
  }

  async delete(id) {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const tasks = this._getAllFromStorage();
          const filtered = tasks.filter(t => t.id !== id);
          this._saveToStorage(filtered);
          resolve({ id });
        }, );
      });
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      throw error;
    }
  }

  async toggleComplete(id, isDone) {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const tasks = this._getAllFromStorage();
          const updated = tasks.map(t => t.id === id ? { ...t, isDone } : t);
          this._saveToStorage(updated);
          resolve({ id, isDone });
        }, );
      });
    } catch (error) {
      console.error("Ошибка при обновлении статуса:", error);
      throw error;
    }
  }

  async updateText(id, newText) {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          const tasks = this._getAllFromStorage();
          const updated = tasks.map(t => t.id === id ? { ...t, text: newText } : t);
          this._saveToStorage(updated);
          resolve({ id, text: newText });
        }, );
      });
    } catch (error) {
      console.error("Ошибка при обновлении текста:", error);
      throw error;
    }
  }
}

const api = new tasksApi();
export default api;