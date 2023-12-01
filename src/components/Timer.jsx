// Timer.js
import { useState, useEffect } from 'react';

const Timer = ({ onTimerStop, resetTiming }) => {
  const [seconds, setSeconds] = useState(0);
 let interval;


  useEffect(() => {
   
    setSeconds(0);
  
    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
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

export { Timer};
