import { memo, useCallback } from 'react';
import Button from '../Button/Button.jsx';
import DeleteIcons from '../Icons/DeleteIcons.jsx';
import EditIcons from '../Icons/EditIcons.jsx';
import './TodoItem.scss';

const EditIcon = memo(() => <EditIcons />);
const DeleteIcon = memo(() => <DeleteIcons />);

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
  const handleToggle = useCallback(() => onToggle(id), [onToggle, id]);
  const handleEdit = useCallback(() => onEdit(id), [onEdit, id]);
  const handleDelete = useCallback(() => onDelete(id), [onDelete, id]);
  const handleUpdate = useCallback((e) => onUpdateText(id, e.target.value), [onUpdateText, id]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === 'Escape') setEditId(null);
  }, [setEditId]);

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
        />
      ) : (
        <label className="todo-item__label" htmlFor={id}>{text}</label>
      )}

      <div className="todo-item__actions">
        <Button className="button--icon" onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button className="button--icon" onClick={handleDelete} iconColor="#E50000">
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
};

export default memo(TodoItem);




