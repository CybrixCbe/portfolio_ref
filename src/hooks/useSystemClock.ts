import { useState, useEffect } from 'react';

export function useSystemClock() {
  const [localTime, setLocalTime] = useState('');
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toTimeString().split(' ')[0]);
      setUtcTime(now.toUTCString().split(' ')[4] || '');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { localTime, utcTime };
}
