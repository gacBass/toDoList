import { useState, useEffect, useRef, useCallback } from 'react';

export function useTimer(start = 0) {
  const [seconds, setSeconds] = useState(start);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const reset = useCallback(() => setSeconds(0), []);

  return [seconds, reset];
}