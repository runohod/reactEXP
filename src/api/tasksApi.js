class tasksApi {

_url = import.meta.env.VITE_API_URL;
_headers = {'Content-Type': 'application/json',};

  async getAll () {
    try {
      const response = await fetch(this._url);
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Не удалось загрузить задачи:", error.message);
      throw error;
    }
  }

  async add (task) {
    try {
      const response = await fetch(this._url, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(task)
      });
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Не удалось загрузить задачи:", error.message);
      throw error;
    }
  }

  async delete (id) {
    try {
      const response = await fetch(`${this._url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Не удалось загрузить задачи:", error.message);
      throw error;
    }
  }

  async toggleComplete (id, isDone) {
    try {
      const response = await fetch(`${this._url}/${id}`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ isDone })
      });
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Не удалось загрузить задачи:", error.message);
      throw error;
    }
  }

  async updateText (id, newText) {
    try {
      const response = await fetch(`${this._url}/${id}`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ text: newText })
      });
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Не удалось загрузить задачи:", error.message);
      throw error;
    }
  }
}

const api = new tasksApi();
export default api;

