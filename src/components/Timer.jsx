import { useState, useEffect } from 'react';

const Timer = ({ onTimerStop, resetTiming, running }) => {
  const [seconds, setSeconds] = useState(0);
  let interval;


  useEffect(() => { 
    const startTimer = () => {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(interval);
      onTimerStop(seconds);
    };

    if (running) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, onTimerStop, seconds]);

  useEffect(() => {
    if (resetTiming) {
      setSeconds(0);
    }
  }, [resetTiming]);

  useEffect(() => {
    onTimerStop(seconds);
  }, [seconds, onTimerStop]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export { Timer };
