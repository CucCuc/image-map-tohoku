import { useState, useEffect } from 'react'
import { isBrowser } from 'react-device-detect'

let timeout = null

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (timeout != null) {
        clearTimeout(timeout)
        timeout = null
      }
      timeout = setTimeout(() => {
        console.log('handleResize')
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }, 200)
    }

    // Add event listener
    if (isBrowser) {
      window.addEventListener('resize', handleResize)
    }

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
