const { useState, useEffect } = require("react");

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
