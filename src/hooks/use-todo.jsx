import { useState, useMemo, useCallback, useEffect } from "react";
import tasksApi from '../api/tasksApi.js'

export const useTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState('');
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = useCallback(() => {
    if (!newTaskText.trim()) return;

    tasksApi.add({
      text: newTaskText,
      isDone: false
    })
    .then((addedTask) => {
      setTasks(prev => [...prev, addedTask]);
      setNewTaskText('');
    });
  }, [newTaskText]);

  const filteredTasks = useMemo(() => {
      return tasks.filter((task) => {
        const search = task?.text.toLowerCase().includes(searchQuery.toLowerCase());
        if (!search) return false;
        if (filter === "all") return true;
        if (filter === "true") return task.isDone;
        if (filter === "false") return !task.isDone;
        return true;
      });
  }, [tasks, filter, searchQuery]);

  const handleEdit = useCallback((id) => {setEditId(id);}, []);
  const handleDelete = useCallback((id) => {tasksApi.delete(id) .then(() => {setTasks(prev => prev.filter(task => task.id !== id));});}, []);

  const handleToggle = useCallback((id) => {
    const taskToToggle = tasks.find(task => task.id === id);
    tasksApi.toggleComplete(id, !taskToToggle.isDone) 
      .then(() => {
        setTasks(prev => prev.map(task => 
          task.id === id ? { ...task, isDone: !task.isDone } : task
        ));
      });
  }, [tasks]);

  const handleUpdateText = useCallback((id, newText) => {
    if (newText.trim() === "") {
      handleDelete(id);
      setEditId(null);
    } else {
      tasksApi.updateText(id, newText)
        .then(() => {
          setTasks(prev => prev.map(task => 
            task.id === id ? { ...task, text: newText } : task
          ));
          setEditId(null); 
        });
    }
  }, [handleDelete, setTasks, setEditId]); 
  
  useEffect(() => {tasksApi.getAll().then(setTasks)}, []);

  return {
    tasks,
    filter,
    searchQuery,
    editId,
    newTaskText,
    filteredTasks,
    addTask,
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