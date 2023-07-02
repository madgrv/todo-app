import React, { useState, useEffect} from 'react';
import styles from '../styles/todo-item.module.css';

const TodoItem = (props) => {

    const handleDelete = () => {
        props.deleteTask(props.task.id)
    }


    return(
        <div className={styles.card}>

            <input type="checkbox" checked={styles.card} />
            <span className={styles.task}>{props.title}</span>
            <div>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem