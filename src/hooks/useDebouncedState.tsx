import { useState, useEffect } from "react";
import { debounce } from "@/utils/helpers";

export function useDebouncedState<T>(initialValue: T, delay: number = 300) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const clear = debounce(value, delay, setDebouncedValue);
    return clear;
  }, [value, delay]);

  return { value, setValue, debouncedValue };
}
