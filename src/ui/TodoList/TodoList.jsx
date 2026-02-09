import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss'

const TodoList = ({ tasks, onDelete, onEdit }) => {
    if (tasks.length === 0) {
    return <p>Задачи не найдены...</p>;
    }
  return (
    <ul className="todo__list"> 
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            id={task.id} 
            text={task.text} 
            onDelete={onDelete} 
            onEdit={onEdit} 
          />
        ))}
    </ul>
  );
};

export default TodoList;