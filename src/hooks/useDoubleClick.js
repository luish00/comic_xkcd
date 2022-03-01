import { useState, useEffect, useCallback } from 'react';

let resetClick = null;
const useDoubleClick = (callback = () => { }) => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    if (clicks === 0) return;

    if (clicks >= 2) {
      setClicks(0);
      callback();

      return;
    }

    clearTimeout(resetClick);
    resetClick = setTimeout(() => setClicks(0), 1000);
  }, [callback, clicks]);

  const onPress = useCallback(() => setClicks((prev) => prev + 1));

  return [onPress];
};

export { useDoubleClick };
