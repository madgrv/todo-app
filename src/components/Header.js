import React, { useState, useEffect } from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
  // Set state for clock on current time 
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  // Define clock display
  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My To-Do List</h1>
      <div className={styles.date}>{formatTime(currentTime)}</div>
    </header>
  );
};

export default Header;
