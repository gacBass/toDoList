import React from 'react';
import { useTimer } from '../hooks/useTimer';
import './Timer.css';

const Timer = () => {
  const seconds = useTimer();
  return <div className="timer-top-right">⏱️ {seconds}s</div>;
};

export default Timer;