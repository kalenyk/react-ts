import { useRef } from "react";

export const useDebounce = <F extends (...args: string[]) => void>(
  func: F,
  delay: number
): F => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return ((...args: Parameters<F>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }) as F;
};

export default useDebounce;
