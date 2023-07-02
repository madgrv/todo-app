import React, { useState, useEffect} from 'react';
import styles from '../styles/todo-item.module.css';

const TodoItem = ({ task, deleteTask }) => {
    // Function to add delete functionality
    const handleDelete = () => {
        // inherit deleTask function from containter component 
        // use task ID to identify task to be removed
        deleteTask(task.key)
    }


    return(
        <div className={styles.card}>

            <input type="checkbox" checked={styles.card} />
            <span className={styles.task}>{task.title}</span>
            <div>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem