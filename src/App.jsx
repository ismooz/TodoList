import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleToggleCompleted(taskId) {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  function handleUpdateTask(taskId, newText) {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, text: newText };
      }
      return task;
    }));
  }  

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <AddTodoForm onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;
