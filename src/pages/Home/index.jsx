import { useState, useCallback } from 'react';
import { useTheme } from '@/app/context/themeContext';
import { useTodo } from '@/entities/todo';
import { ModalOpen } from '@/features/modalOpen';
import { Select } from '@/shared/ui'
import { SearchField } from '@/shared/ui'
import { Button } from '@/shared/ui'
import { SunIcon } from '@/shared/icons';
import { MoonIcon } from '@/shared/icons';
import { TodoList } from '@/widgets/TodoList'
import styles from './index.module.scss';

const Home = () => { 
  const {
    filter,
    searchQuery,
    editId,
    newTaskText,
    filteredTasks,
    handleEdit,
    addTask,
    setNewTaskText,
    setFilter,
    setSearchQuery,
    setEditId,
    handleDelete,
    handleToggle,
    handleUpdateText,
  } = useTodo();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => {setIsModalOpen(true);}, []);
  const handleCancel = useCallback (() => {setIsModalOpen(false);setNewTaskText('');}, [setNewTaskText]);
  const handleApply = () => {addTask(); setIsModalOpen(false);};
  const theme = useTheme();

    return (
      <div className={styles.todo}>
      <h1 className={styles.todo__title}>TODO LIST</h1>
        <form className={`${styles.todo__field} ${styles.field}`}>
          <SearchField placeholder="Search note..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <Select className={styles.select__all} value={filter} onChange={setFilter}/>        
          <Button type="button" className={styles.button__theme} onClick={theme.toggleTheme}>{theme?.isLightTheme ? (<SunIcon color="#F7F7F7"/>) : (<MoonIcon color="#F7F7F7"/>)}</Button>
        </form>

        <TodoList 
          tasks={filteredTasks}
          onDelete={handleDelete} 
          onEdit={handleEdit} 
          onToggle={handleToggle}
          editId={editId} 
          setEditId={setEditId} 
          onUpdateText={handleUpdateText}
        /> 

        <Button className={styles.button__add} onClick={openModal}>+</Button>
        
        {isModalOpen && (
          <ModalOpen 
            autoFocus={true}
            value={newTaskText} 
            onChange={(e) => setNewTaskText(e.target.value)} 
            onKeyDown={(e) => { if (e.key === 'Enter') handleApply(); }}
            onCancel={handleCancel} 
            onApply={handleApply} 
          />
        )}
      </div>
  );
}

export default Home