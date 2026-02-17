import { memo } from 'react'; 
import TodoItem from '../TodoItem/TodoItem';
import EmptyIcon from '../Icons/EmptyIcon.jsx';
import './TodoList.scss'

const TodoList = ({ tasks, onDelete, onEdit, onToggle, editId, setEditId, onUpdateText }) => {
    if (tasks.length === 0) {
      return (
        <div className="no-found">
          <EmptyIcon />
          <p className="not-found">Empty...</p>
        </div>
      );
    }
  return (
    <ul className="todo__list"> 
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            isDone={task.isDone}
            id={task.id} 
            text={task.text} 
            isEditing={task.id === editId}
            onDelete={onDelete} 
            onEdit={onEdit} 
            onToggle={onToggle}
            setEditId={setEditId} 
            onUpdateText={onUpdateText}
          />
        ))}
    </ul>
  );
};

export default memo(TodoList);