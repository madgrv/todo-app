import React, { useState, useEffect} from 'react';
import styles from '../styles/input.module.css';


const Input = () => {
    const [input, setInput] = useState("")

    return(
        <div className={styles.input}>
            <input
                type='text'
                placeholder='Add a new task here'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>Add</button>
        </div>

       
    )
}

export default Input