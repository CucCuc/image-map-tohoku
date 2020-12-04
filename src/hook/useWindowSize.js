import { useState, useEffect } from 'react'
import { isBrowser } from 'react-device-detect'

let timeout = null

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    function handleResize() {
      if (timeout != null) {
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }, 200)
    }

    if (isBrowser) {
      window.addEventListener('resize', handleResize)
    }
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
