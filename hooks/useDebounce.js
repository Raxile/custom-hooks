import { useEffect, useState } from "react";

const useDebounce = (cb, delay) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    if (debouncedValue) {
      const timer = setTimeout(() => {
        cb(debouncedValue);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [debouncedValue, delay, cb]);

  return [debouncedValue, setDebouncedValue];
};

export default useDebounce;
