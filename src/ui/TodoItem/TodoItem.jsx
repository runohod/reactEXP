import { memo } from 'react';
import Button from '../Button/Button.jsx';
import DeleteIcons from '../Icons/DeleteIcons.jsx';
import EditIcons from '../Icons/EditIcons.jsx';
import './TodoItem.scss';

const EditIcon = () => <EditIcons />;
const DeleteIcon = () => <DeleteIcons />;

const TodoItem = ({ 
  text, 
  id, 
  isDone, 
  onDelete, 
  onEdit, 
  onToggle, 
  isEditing, 
  setEditId, 
  onUpdateText 
}) => {
 
  const handleToggle = () => onToggle(id);
  const handleEdit = () => onEdit(id);
  const handleDelete = () => onDelete(id);
  const handleUpdate = (e) => onUpdateText(id, e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') setEditId(null);
  };

  return (
    <li className={`todo__item ${isDone ? 'todo-item--completed' : ''}`}>
      <input 
        className="todo-item__checkbox" 
        id={id} 
        type="checkbox" 
        checked={isDone} 
        onChange={handleToggle}
      />
      
      {isEditing ? (
        <input 
          autoFocus 
          type="text"
          className="todo-item__edit" 
          value={text} 
          onChange={handleUpdate}
          onKeyDown={handleKeyDown} 
          onBlur={() => setEditId(null)} 
        />
      ) : (
        <label className="todo-item__label" htmlFor={id}>{text}</label>
      )}

      <div className="todo-item__actions">
        <Button className="button--icon" onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button className="button--icon" onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
};

export default memo(TodoItem);
