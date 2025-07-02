import React from 'react';
import { useTimer } from '../hooks/useTimer';
import './Timer.css';

const Timer = () => {
  const [seconds, reset] = useTimer();
  return (
    <div className="timer-top-right">
      ⏱️ {seconds}s
      <button onClick={reset} style={{ marginLeft: 12, padding: '4px 10px', borderRadius: 6 }}>
        Reset
      </button>
    </div>
  );
};

export default Timer;