import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue = []) => {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) {
      try {
        const parsedValue = JSON.parse(storedValue);
        return Array.isArray(parsedValue) ? parsedValue : initialValue;
      } catch (error) {
        return initialValue;
      }
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
