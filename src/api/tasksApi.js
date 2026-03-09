class tasksApi {

_url = import.meta.env.VITE_API_URL;
_headers = {'Content-Type': 'application/json',};

  getAll () {
    return fetch(this._url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Не удалось загрузить задачи:", error.message);
        throw error;
      });
  }

  add (task) {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(task)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Не удалось загрузить задачи:", error.message);
        throw error;
      });
  }

  delete (id) {
    return fetch(`${this._url}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Не удалось загрузить задачи:", error.message);
        throw error;
      });
  }

  toggleComplete (id, isDone) {
    return fetch(`${this._url}/${id}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ isDone })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Не удалось загрузить задачи:", error.message);
        throw error;
      });
  }

  updateText (id, newText) {
    return fetch(`${this._url}/${id}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ text: newText }) 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Не удалось загрузить задачи:", error.message);
        throw error;
      });
  }
}

const api = new tasksApi();
export default api;
