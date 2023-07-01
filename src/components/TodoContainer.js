import React, { useState, useEffect } from 'react';
import styles from '../styles/todo-container.module.css';
import Input from './Input'
import TodoItem from './TodoItem'


const TodoContainer = (props) => {

    // A temporary list of tasks
    const tasksData = [
        {
          id: 1,
          title: 'Complete homework',
          completed: false,
        },
        {
          id: 2,
          title: 'Go grocery shopping',
          completed: false,
        },
        {
          id: 3,
          title: 'Walk the dog',
          completed: true,
        },
        {
          id: 4,
          title: 'Read a book',
          completed: false,
        },
      ];
      
      const [tasks, setTasks] = useState(tasksData); 


  return (
    <div className={styles.container}>
        <Input />
        {tasks.map((task) => (
             <TodoItem key={task.id} title={task.title} completed={task.completed}/>
        ))}
    </div>
  );
};

export default TodoContainer;
