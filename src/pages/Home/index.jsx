import { useState, useEffect, useMemo, useCallback } from 'react';
import { ThemeContext } from '../../ui/context/themeContext.jsx';
import Select from '../../ui/Select/Select.jsx'
import ModalOpen from '../../ui/ModalOpen/ModalOpen.jsx'
import TodoList from '../../ui/TodoList/TodoList.jsx'
import SearchField from '../../ui/SearchField/SearchField.jsx'
import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import './index.scss';
//dvcfffdv
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

const Home = () => { 

  const [tasks, setTasks] = useState(getTodosFromStorage);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState('');
  const [newTaskText, setNewTaskText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, toggleTheme] = useState(false);

  const handleToggleTheme = (event) => {event.preventDefault(); toggleTheme(prev => !prev);};

  const themeClass = theme ? 'dark-theme' : 'light-theme';

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
  const openModal = useCallback(() => {setIsModalOpen(true);}, []);
  const handleDelete = useCallback((id) => {setTasks(prev => prev.filter(task => task.id !== id));}, []);
  const handleToggle = useCallback((id) => {setTasks(prev => prev.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));}, []);
  const handleCancel = useCallback (() => {setIsModalOpen(false);setNewTaskText('');}, []);

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

  const addTask = useCallback(() => {
    if (!newTaskText.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      text: newTaskText,
      isDone: false
    };

    setTasks(prev => [...prev, newTask]);
    handleCancel();
  }, [newTaskText]);

  useEffect ( () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleToggleTheme}}> 
      <div className={`todo ${themeClass}`}>
        <h1 className="todo__title">TODO LIST</h1>
        <form className="todo__field field">
          <SearchField placeholder="Search note..." iconColor="#6C63FF" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <Select className="select__all" value={filter} onChange={setFilter}/>        
          <Button type="button" className="button__theme" onClick={handleToggleTheme}><MoonIcon color="#F7F7F7"/></Button>
        </form>

        <TodoList 
          tasks={filteredTasks}
          onDelete={handleDelete} 
          onEdit={handleEdit} 
          onToggle={handleToggle}
          editId={editId} 
          setEditId={setEditId} 
          onUpdateText={handleUpdateText}
        /> 

        <Button className="button__add" onClick={openModal}>+</Button>
        
        {isModalOpen && (
          <ModalOpen 
            autoFocus={true}
            value={newTaskText} 
            onChange={(e) => setNewTaskText(e.target.value)} 
            onKeyDown={(e) => { if (e.key === 'Enter') { addTask(e);}}}
            onCancel={handleCancel} 
            onApply={addTask} 
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default Home