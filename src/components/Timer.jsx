import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { useTranslation } from 'react-i18next';
import './Timer.css';

const Timer = () => {
  const [seconds, reset] = useTimer();
  const { t } = useTranslation();

  return (
    <div className="timer-top-right">
      ⏱️ {seconds}s
      <button onClick={reset} style={{ marginLeft: 12, padding: '4px 10px', borderRadius: 6 }}>
        {t('reset')}
      </button>
    </div>
  );
};

export default Timer;