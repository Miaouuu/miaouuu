export function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number, immediate?: boolean) {
  let timeout: NodeJS.Timeout | null
  return function (this: unknown, ...args: unknown[]) {
    const later = () => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }
    const callNow = immediate && !timeout
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, args)
  } as T
}
