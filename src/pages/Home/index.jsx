import { useState } from 'react';
import ModalOpen from '../../ui/ModalOpen/ModalOpen.jsx'
import TodoList from '../../ui/TodoList/TodoList.jsx'
import SearchField from '../../ui/SearchField/SearchField.jsx'
import MoonIcon from '../../ui/Icons/MoonIcon.jsx'
import Button from '../../ui/Button/Button.jsx'
import './index.scss';

const Home = () => { 

  const [tasks, setTasks ] = useState([
    { id: 'task-1', text: 'NOTE #1', isDone: true},
    { id: 'task-2', text: 'NOTE #2', isDone: false},
    { id: 'task-3', text: 'NOTE #3', isDone: false},
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState('');
  const handleEdit = (id) => {setEditId(id);};
  const [newTaskText, setNewTaskText] = useState('');
  const filteredTasks = tasks.filter((task) =>task.text.toLowerCase().includes(searchQuery.toLowerCase()));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {setIsModalOpen(true);};
  const handleDelete = (id) => {setTasks(prev => prev.filter(task => task.id !== id));};
  const handleToggle = (id) => {setTasks(prev => prev.map(task => task.id === id ? { ...task, isDone: !task.isDone } : task));};
  const handleCancel = () => {setIsModalOpen(false);setNewTaskText('');};

  const handleUpdateText = (id, newText) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const addTask = () => {
    if (!newTaskText.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      text: newTaskText,
      isDone: false
    };

    setTasks(prev => [...prev, newTask]);
    handleCancel(); 
  };

    return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <form className="todo__field field">
        <SearchField placeholder="Search note..." iconColor="#6C63FF" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <Button type="button" className="button__all" onClick={(e) => {e.preventDefault(); console.log("Выбор всех задач");}}>ALL</Button>
        <Button type="button" className="button__theme" onClick={(e) => {e.preventDefault(); console.log("Тема сменилась");}}><MoonIcon color="#F7F7F7"/></Button>
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

      <Button className="button__add" onClick={openModal}>+</Button>
      
      {isModalOpen && (
        <ModalOpen 
          value={newTaskText} 
          onChange={(e) => setNewTaskText(e.target.value)} 
          onKeyDown={(e) => { if (e.key === 'Enter') { addTask(e);}}}
          onCancel={handleCancel} 
          onApply={addTask} 
        />
      )}
    </div>
  )
}

export default Home




