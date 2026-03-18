import { memo } from 'react'; 
import { TodoItem } from '@/entities/todo';
import { EmptyIcon } from '@/shared/icons';
import styles from './TodoList.module.scss'

const TodoList = ({ tasks, editId, ...otherProps }) => {
    if (tasks.length === 0) {
      return (
        <div className={styles.noFound}>
          <EmptyIcon />
          <p className={styles.notFound}>Empty...</p>
        </div>
      );
    }
  return (
    <ul className={styles.todo__list}> 
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            id={task.id}
            text={task.text}
            isDone={task.isDone}
            isEditing={task.id === editId}
            {...otherProps}
          />
        ))}
    </ul>
  );
};

export default memo(TodoList);