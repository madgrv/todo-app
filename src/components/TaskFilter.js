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
                    Show Completed Tasks:
                    <input type="checkbox" checked={showCompleted} onChange={onShowCompletedChange} id="showCompleted" />
                </label>
            </div>
            <div className={styles.switchGroup}>
                <label>
                    Show Incomplete Tasks:
                    <input type="checkbox" checked={showIncomplete} onChange={onShowIncompleteChange} id="showIncomplete" />
                </label>
            </div>
        </fieldset>
    </div>
  );
};

export default TaskFilter;
