import { useEffect} from 'react';

export function useInterval(callback: Function, delay: number) {
  
    // Set up the interval.
    useEffect(() => {
      function tick() {     
        callback();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay,callback]);
  }