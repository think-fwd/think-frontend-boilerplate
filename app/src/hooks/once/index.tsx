import React from 'react'

export function useOnce() {
  const once = React.useRef<boolean>(false)
  React.useEffect(() => {})
  return {
    runOnce: (fn: () => void) => {
      if (once.current === true) return
      once.current = true
      fn()
    },
  }
}
