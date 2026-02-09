import { useState } from 'react';
import TodoList from '../../ui/TodoList/TodoList.jsx'
import SearchField from '../../ui/SearchField/SearchField.jsx'
import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import './index.scss';

const Home = () => { 
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = [
    { id: 'task-1', text: 'NOTE #1' },
    { id: 'task-2', text: 'NOTE #2' },
    { id: 'task-3', text: 'NOTE #3' },
  ];

  const handleDelete = (id) => console.log('Задача удалена:', id);
  const handleEdit = (id) => console.log('Редактируем задачу:', id);

    return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <form className="todo__field field">
        <SearchField placeholder="Search note..." iconColor="#6C63FF" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value); console.log("Введено:", e.target.value);}} />
        <Button className="button__all" onClick={(e) => {e.preventDefault(); console.log("Выбор всех задач");}}>ALL</Button>
        <Button className="button__theme" onClick={(e) => {e.preventDefault(); console.log("Тема сменилась");}}><MoonIcon color="#F7F7F7"/></Button>
      </form>

      <TodoList 
        tasks={tasks}
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </div>
  )
}

export default Home




