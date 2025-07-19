import { useState, useEffect } from 'react';

const useDateTime = () => {
  const getDateTime = () =>
    new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
    });

  const [time, setTime] = useState(getDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useDateTime;
