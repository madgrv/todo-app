import React from 'react';
import styles from '../styles/taskFilter.module.css';

// A component to show/hide completed or incomplete tasks expandible to include search
const TaskFilter = ({ showCompleted, showIncomplete, onShowCompletedChange, onShowIncompleteChange, }) => {

  return (
    <div>
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Filter tasks</legend>
            <div className={styles.switchGroup}>
                <label>
                    <input type="checkbox" checked={showCompleted} onChange={onShowCompletedChange} id="showCompleted" />
                    Show Completed Tasks
                </label>
            </div>
            <div className={styles.switchGroup}>
                <label>
                    <input type="checkbox" checked={showIncomplete} onChange={onShowIncompleteChange} id="showIncomplete" />
                    Show Incomplete Tasks
                </label>
            </div>
        </fieldset>
    </div>
  );
};

export default TaskFilter;
