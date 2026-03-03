import { useEffect, useState, useCallback } from 'react';
import { useTheme } from '../../ui/context/themeContext.jsx';
import Select from '../../ui/Select/Select.jsx'
import ModalOpen from '../../ui/ModalOpen/ModalOpen.jsx'
import TodoList from '../../ui/TodoList/TodoList.jsx'
import SearchField from '../../ui/SearchField/SearchField.jsx'
import SunIcon from '../../ui/Icons/SunIcon.jsx';
import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import './index.scss';
import { useTodo } from '../../hooks/use-todo.jsx';

const Home = () => { 
  const {
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
  } = useTodo();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => {setIsModalOpen(true);}, []);
  const handleCancel = useCallback (() => {setIsModalOpen(false);setNewTaskText('');}, []);

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

  const theme = useTheme();

    return (
      <div className="todo">
        <h1 className="todo__title">TODO LIST</h1>
        <form className="todo__field field">
          <SearchField placeholder="Search note..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <Select className="select__all" value={filter} onChange={setFilter}/>        
          <Button type="button" className="button__theme" onClick={theme.toggleTheme}>{theme?.isLightTheme ? (<SunIcon color="#F7F7F7"/>) : (<MoonIcon color="#F7F7F7"/>)}</Button>
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
  );
}

export default Home