import { useState } from 'react';
import TodoList from '../../ui/TodoList/TodoList.jsx'
import PageTitle from '../../ui/PageTitle/PageTitle';
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

  const handleDelete = (id) => console.log('Delete logic here:', id);
  const handleEdit = (id) => console.log('Edit logic here:', id);

    return (
    <div className="todo">
      <PageTitle>TODO LIST</PageTitle>
      <form className="todo__field field">
        <SearchField placeholder="Search note..." iconColor="#6C63FF" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button className="button__all">ALL</Button>
        <Button className="button__theme"><MoonIcon color="#F7F7F7" /></Button>
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




