import { useState } from 'react';
import TodoList from '../../ui/TodoList/TodoList.jsx'
import SearchField from '../../ui/SearchField/SearchField.jsx'
import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import './index.scss';

const Home = () => { 
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState('');

  const [tasks, setTasks ] = useState([
    { id: 'task-1', text: 'NOTE #1', isDone: true},
    { id: 'task-2', text: 'NOTE #2', isDone: false},
    { id: 'task-3', text: 'NOTE #3', isDone: false},
  ]);

  const handleDelete = (id) => {setTasks(tasks.filter(task => task.id !== id));};
  const handleEdit = (id) => {
  const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) {
      setSearchQuery(taskToEdit.text); 
      setEditId(id);
    }
  };

  const addTask = (e) => {
      if (e) e.preventDefault(); 
      if (!searchQuery.trim()) return; 

      if (editId) {
        setTasks(tasks.map(task => 
          task.id === editId ? { ...task, text: searchQuery } : task
        ));
        setEditId(''); 
      } else {
        const newTask = {
          id: crypto.randomUUID(),
          text: searchQuery,
          isDone: false 
        };
        setTasks([...tasks, newTask]); 
      }

      setSearchQuery(''); 
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };



    return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <form className="todo__field field" onSubmit={addTask}>
        <SearchField placeholder="Search note..." iconColor="#6C63FF" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { addTask(e);}}}/>
        <Button type="button" className="button__all" onClick={(e) => {e.preventDefault(); console.log("Выбор всех задач");}}>ALL</Button>
        <Button type="button" className="button__theme" onClick={(e) => {e.preventDefault(); console.log("Тема сменилась");}}><MoonIcon color="#F7F7F7"/></Button>
      </form>

      <TodoList 
        tasks={tasks}
        onDelete={handleDelete} 
        onEdit={handleEdit} 
        onToggle={handleToggle}
      />

      <Button className="button__add" onClick={addTask}>{editId !== '' ? '✓' : '+'}</Button>
    </div>
  )
}

export default Home




