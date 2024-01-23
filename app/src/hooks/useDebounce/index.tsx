import { useRef } from 'react'

export function useInputDebounce(
  callback?: (value: string) => void,
  delay = 500
) {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const callDebounce = (value: string) => {
    if (!callback) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => callback(value), delay)
  }

  return { callDebounce }
}
