import React, { useState, useEffect } from 'react';
import styles from '../styles/todo-container.module.css';
import Input from './Input'
import TodoItem from './TodoItem'
import TaskFilter from './TaskFilter';


const TodoContainer = () => {
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
  sessionStorage.setItem('tasks', JSON.stringify(tasksData))
  

  // Storing the state into a tasks variable to hold the initial hardcoded tasks
  const [tasks, setTasks] = useState(tasksData); 
 // Set state to show and hide completed and incomplete tasks
 const [hideCompleted, setHideCompleted] = useState(false);
 const [hideIncomplete, setHideIncomplete] = useState(false);

  // Function to add new task to session storage from user input
  const addTask = (newTask) => {
    if (newTask.trim() === '') {
      alert('You must enter a title for the new task')
      return; // Don't add empty tasks
    }

    const newTaskObj = {
      // use timestamp as unique id
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);

    const updatedTasks = [...tasks, newTaskObj];
    // Update with the new task
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }  

  // A function to mark task as completed
  const markAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    // Remove the task from session storage
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    // Update the state to trigger re-render
  };

  useEffect(() => {
    // Fetch tasks from session storage on component mount
    const storedTasks = JSON.parse(sessionStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Function to count the tasks that are not completed
  const remainingTasks = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <div className={styles.container}>
        {/* pass functionality to the Input component  */}
        <Input addTask={addTask} />
        {remainingTasks() > 1 || remainingTasks() === 0 ? 
           <h2>To be completed: {remainingTasks()} tasks</h2>  : 
           <h2>To be completed: {remainingTasks()} task</h2> 
        }
        <TaskFilter />
        {/* <h2>Remaining tasks to be completed: {remainingTasks()}</h2> */}
        {tasks.map((task) => (
             <TodoItem 
                key={task.id} 
                task={task} 
                markAsCompleted={markAsCompleted}
                deleteTask={() => deleteTask(task.id)}
              />
        ))}
    </div>
  );
};

export default TodoContainer;
