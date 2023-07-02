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
    
  // Storing the state into a tasks variable to hold the initial hardcoded tasks
  const [tasks, setTasks] = useState(tasksData); 

  // Function to add new task to session storage from user input
  const addTask = (newTask) => {
    if (newTask.trim() === '') {
      alert('You must enter a title for the new task')
      return; // Don't add empty tasks
    }

    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);

    const updatedTasks = [...tasks, newTaskObj];
    // Set session storage and update with the new task
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }  

  return (
    <div className={styles.container}>
        {/* pass functionality to the Input component  */}
        <Input addTask={addTask} />
        {tasks.map((task) => (
             <TodoItem key={task.id} title={task.title} completed={task.completed}/>
        ))}
    </div>
  );
};

export default TodoContainer;
