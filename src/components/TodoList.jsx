import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onToggleCompleted, onDeleteTask, onUpdateTask }) {
    return (
        <div>
            <ul>
            {tasks.map((task) => (
                <TodoItem 
                key={task.id}
                task={task}
                onToggleCompleted={onToggleCompleted}
                onDeleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}
                />
            ))}
            </ul>
      </div>
    );
  }
  
  export default TodoList;