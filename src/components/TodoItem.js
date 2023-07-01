import React, { useState, useEffect} from 'react';
import styles from '../styles/todo-item.module.css';

const TodoItem = (props) => {
    return(
        <div className={styles.card}>
            <input type="checkbox" checked={props.completed} />
            <span>{props.title}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default TodoItem