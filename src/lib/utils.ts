export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number,
) => {
  let timeoutId: number | undefined; // Use NodeJS.Timeout for type safety
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args); // Use spread operator for better type safety
    }, delay);
  };
};
