import { useState, useMemo, useCallback } from "react";

  const getTodosFromStorage = () => {
    try {
      const savedTasks = localStorage.getItem('tasks');
       if (savedTasks) {
        return JSON.parse(savedTasks)
       }
      return [
        { id: 'task-1', text: 'NOTE #1', isDone: true},
        { id: 'task-2', text: 'NOTE #2', isDone: false},
        { id: 'task-3', text: 'NOTE #3', isDone: false},
      ]
    }
    catch (error) {
      console.error(error);
      return [];
    }
  };

export const useTodo = () => {
  const [tasks, setTasks] = useState(getTodosFromStorage);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState('');
  const [newTaskText, setNewTaskText] = useState('');

  const filteredTasks = useMemo(() => {
      return tasks.filter((task) => {
        const search = task.text.toLowerCase().includes(searchQuery.toLowerCase());
        if (!search) return false;
        if (filter === "all") return true;
        if (filter === "true") return task.isDone;
        if (filter === "false") return !task.isDone;
        return true;
      });
  }, [tasks, filter, searchQuery]);

  const handleEdit = useCallback((id) => {setEditId(id);}, []);
  const handleDelete = useCallback((id) => {setTasks(prev => prev.filter(task => task.id !== id));}, []);
  const handleToggle = useCallback((id) => {setTasks(prev => prev.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));}, []);

    const handleUpdateText = useCallback((id, newText) => {
    if (newText.trim() === "") {
      handleDelete(id);
      setEditId(null)
    } else {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
    }
  }, [handleDelete]);
  

  return {
    tasks,
    filter,
    searchQuery,
    editId,
    newTaskText,
    filteredTasks,
    handleEdit,
    setTasks,
    setFilter,
    setSearchQuery,
    setEditId,
    setNewTaskText,
    handleDelete,
    handleToggle,
    handleUpdateText,
  };
};