import { useCallback, useEffect, useRef } from "react";

export const useThrottle = (callback, delay) => {
  const throttledFunction = useRef(callback);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    throttledFunction.current = callback;
  }, [callback]);

  return useCallback(
    (...args) => {
      if (Date.now() - lastRan.current >= delay) {
        throttledFunction.current(...args);
        lastRan.current = Date.now();
      }
    },
    [delay]
  );
};

export const useDebounce = (value, delay) => {
  const timeoutRef = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  return useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        savedCallback.current(...args);
      }, delay);
    },
    [delay]
  );
};
