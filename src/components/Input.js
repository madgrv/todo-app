import React, { useState, useEffect} from 'react';
import styles from '../styles/input.module.css';


const Input = (props) => {
    // A state variable to hold the value of the input field where the user enters the task name. 
  // Initialised with an empty string
  const [newTask, setNewTask] = useState('');

  // 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(newTask);
    setNewTask(''); // Reset input box
  }

    return(
        <div className={styles.input}>
            <input
                type='text'
                value={newTask}
                placeholder='Add a new task here'
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Input