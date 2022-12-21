import { useState, useEffect } from "react";

function useDebounced(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Handle
  useEffect(() => {
    const handlerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // clear func
    return () => {
      clearTimeout(handlerId);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounced;
