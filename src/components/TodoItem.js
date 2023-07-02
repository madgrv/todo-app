import React, { useState, useEffect} from 'react';
import styles from '../styles/todo-item.module.css';

const TodoItem = (props) => {

    


    return(
        <div className={styles.card}>

            <input type="checkbox" checked={styles.card} />
            <span className={styles.task}>{props.title}</span>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem