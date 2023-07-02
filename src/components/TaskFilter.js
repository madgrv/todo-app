import React from 'react';
import styles from '../styles/taskFilter.module.css';

// A component to show/hide completed or incomplete tasks expandible to include search
const TaskFilter = ({ hideCompleted, hideIncomplete, setHideCompleted, setHideIncomplete }) => {
  const handleHideCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  const handleHideIncomplete = () => {
    setHideIncomplete(!hideIncomplete);
  };

  return (
    <div>
        <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Filter tasks</legend>
            <div className={styles.switchGroup}>
                <label>
                    Hide Completed Tasks:
                    <input type="checkbox" checked={hideCompleted} onChange={handleHideCompleted} />
                </label>
            </div>
            <div className={styles.switchGroup}>
                <label>
                    Hide Incomplete Tasks:
                    <input type="checkbox" checked={hideIncomplete} onChange={handleHideIncomplete} />
                </label>
            </div>
        </fieldset>
    </div>
  );
};

export default TaskFilter;
