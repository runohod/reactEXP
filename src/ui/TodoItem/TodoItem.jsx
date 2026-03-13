import { memo, useRef } from 'react';
import Button from '../Button/Button.jsx';
import DeleteIcons from '../Icons/DeleteIcons.jsx';
import EditIcons from '../Icons/EditIcons.jsx';
import styles from './TodoItem.module.scss';

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

  const inputRef = useRef(null);
 
  const handleToggle = () => onToggle(id);
  const handleEdit = () => onEdit(id);
  const handleDelete = () => onDelete(id);
  // const handleUpdate = (e) => onUpdateText(id, e.target.value);

  const handleSave = () => {
    const newValue = inputRef.current.value;
    onUpdateText(id, newValue); 
  };

const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') setEditId(null);
  };

  return (
    <li className={`${styles.todo__item} ${isDone ? styles.todoItemCompleted : ''}`}>
      <input 
        className={styles.todoItem__checkbox}
        id={id} 
        type="checkbox" 
        checked={isDone} 
        onChange={handleToggle}
      />
      
      {isEditing ? (
        <input 
          ref={inputRef}
          autoFocus 
          type="text"
          className={styles.todoItem__edit} 
          defaultValue={text}
          onKeyDown={handleKeyDown} 
          onBlur={handleSave} 
        />
      ) : (
        <label className={styles.todoItem__label} htmlFor={id}>{text}</label>
      )}

      <div className={styles.todoItem__actions}>
        <Button className={styles.buttonIcon} onClick={handleEdit}>
          <EditIcon />
        </Button>
        <Button className={styles.buttonIcon} onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
};

export default memo(TodoItem);
