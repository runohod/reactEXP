import { memo, useRef, useState } from 'react';
import Button from '../../../../shared/ui/Button/Button.jsx';
import DeleteIcons from '../../../../shared/Icons/DeleteIcons.jsx';
import EditIcons from '../../../../shared/Icons/EditIcons.jsx';
import styles from './TodoItem.module.scss';

const EditIcon = () => <EditIcons />;
const DeleteIcon = () => <DeleteIcons />;

const TodoItem = ({ 
  text, 
  id, 
  isDone, 
  onDelete, 
  onToggle, 
  onUpdateText 
}) => {

  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
 
  const handleToggle = () => onToggle(id);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(id)
      }, 500);
  };

  const handleSave = () => {
    const newValue = inputRef.current.value;
      if (newValue.trim() !== text) {
       onUpdateText(id, newValue); 
       }
    setIsEditing(false);
  };

const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') setIsEditing(false);
  };

  return (
    <li className={`${styles.todo__item} ${isDone ? styles.todoItemCompleted : ''} ${isDeleting ? styles.deleting : ''}`}>
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
        <Button className={styles.buttonIcon} onClick={() => setIsEditing(true)}>
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
