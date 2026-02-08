import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import SearchIcon from '../../ui/Icons/SearchIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import TodoItem from '../../ui/TodoItem/TodoItem.jsx';
import './index.scss';

const Home = () => { 

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
        <div className="field__search-wrapper">
          <input className="field__input" placeholder="Search note..." />
          <SearchIcon className="field__search-icon" color="#6C63FF" />    
        </div>
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




