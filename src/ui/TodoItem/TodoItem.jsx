import Button from '../Button/Button.jsx';
import DeleteIcons from '../Icons/DeleteIcons.jsx';
import EditIcons from '../Icons/EditIcons.jsx';
import './TodoItem.scss';

const EditIcon = () => (<EditIcons />);
const DeleteIcon = () => (<DeleteIcons />);

const TodoItem = ({ 
  text, 
  id, 
  isDone, 
  onDelete, 
  onEdit, 
  onToggle, 
  editId, 
  setEditId, 
  onUpdateText 
}) => {
  const isEditing = id === editId;

  return (
    <li className={`todo__item ${isDone ? 'todo-item--completed' : ''}`}>
      <input 
        className="todo-item__checkbox" 
        id={id} 
        type="checkbox" 
        checked={isDone} 
        onChange={() => onToggle(id)}
      />
      
      {isEditing ? (
        <input 
          autoFocus // Чтобы сразу печатать
          type="text"
          className="todo-item__edit" 
          value={text} 
          onChange={(e) => onUpdateText(id, e.target.value)} 
          onKeyDown={(e) => { 
            if (e.key === 'Enter') setEditId(null);
            if (e.key === 'Escape') setEditId(null); 
          }} 
          onBlur={() => setEditId(null)} 
        />
      ) : (
        <label className="todo-item__label" htmlFor={id}>{text}</label>
      )}

      <div className="todo-item__actions">
        <Button className="button--icon" onClick={() => onEdit(id)}>
          <EditIcon />
        </Button>
        <Button className="button--icon" onClick={() => onDelete(id)} iconColor="#E50000">
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;




