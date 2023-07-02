import React, { useState, useEffect} from 'react';
import styles from '../styles/todo-item.module.css';

const TodoItem = ({ task, deleteTask, markAsCompleted }) => {
    // Function to add delete functionality
    const handleDelete = () => {
        // inherit deleTask function from containter component 
        // use task ID to identify task to be removed
        deleteTask(task.key)
    }

    const handleComplete = () => {
        markAsCompleted(task.id)
    }

    return(
        <div>
            <div className={`${styles.card} ${task.completed ? styles.cardCompleted : ''}`} >

                <input 
                    type="checkbox" 
                    // checked={styles.card} 
                    checked={task.completed}
                    onChange={handleComplete}
                />
                <span className={styles.task}>{task.title}</span>
                <button>Edit</button>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem