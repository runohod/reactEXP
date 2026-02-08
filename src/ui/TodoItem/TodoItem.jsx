import Button from '../Button/Button.jsx';
import DeleteIcons from '../Icons/DeleteIcons.jsx'
import EditIcons from '../Icons/EditIcons.jsx'
import './TodoItem.scss';

const EditIcon = () => (<EditIcons />);
const DeleteIcon = () => (<DeleteIcons />);

const TodoItem = ({ text, id, onDelete = () => {}, onEdit = () => {} }) => {
  return (
    <li className="todo__item">
      <input className="todo-item__checkbox" id={id} type="checkbox"/>
      <label className="todo-item__label" htmlFor={id}>{text}</label>
      <div className="todo-item__actions">
        <Button className="button--icon" onClick={() => onEdit(id)}>
          <EditIcon />
        </Button>
        <Button className="button--icon" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;


