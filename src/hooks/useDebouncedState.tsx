import { useState, useRef, useCallback } from "react";

export function useDebouncedState<T>(initialValue: T, delay: number = 300) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateValue = useCallback(
    (newValue: T) => {
      setValue(newValue);

      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        setDebouncedValue(newValue);
      }, delay);
    },
    [delay]
  );

  return { value, setValue: updateValue, debouncedValue };
}
