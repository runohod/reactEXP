import { useState } from 'react';
import SearchField from '../../ui/SearchField/SearchField.jsx'
import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import TodoItem from '../../ui/TodoItem/TodoItem.jsx';
import './index.scss';

const Home = () => { 
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = [
    { id: 'task-1', text: 'NOTE #1' },
    { id: 'task-2', text: 'NOTE #2' },
    { id: 'task-3', text: 'NOTE #3' },
  ];

  const handleDelete = (id) => console.log('Delete:', id);
  const handleEdit = (id) => console.log('Edit:', id);

    return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <form className="todo__field field">
        <SearchField placeholder="Search note..." iconColor="#6C63FF" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button className="button__all">ALL</Button>
        <Button className="button__theme"><MoonIcon color="#F7F7F7" /></Button>
      </form>

      <ul className="todo__list"> 
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            id={task.id} 
            text={task.text} 
            onDelete={handleDelete} 
            onEdit={handleEdit} 
          />
        ))}
      </ul>
    </div>
  )
}

export default Home




