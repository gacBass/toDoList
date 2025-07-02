import { useState, useEffect, useRef } from 'react';

export function useTimer(start = 0, intervalMs = 1000) {
  const [seconds, setSeconds] = useState(start);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, intervalMs);
    return () => clearInterval(intervalRef.current);
  }, [intervalMs]);

  // Optionally, you can add pause/resume/reset logic here

  return seconds;
}