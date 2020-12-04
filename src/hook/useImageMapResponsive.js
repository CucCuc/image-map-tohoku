import { useState, useEffect } from 'react'
import { isBrowser } from 'react-device-detect'

export function useImageMapResponsive(areasRoot, imageWidth) {
  const [areas, setAreas] = useState(areasRoot)

  useEffect(() => {
    function handleResize() {
      setAreas({
        areas: areas.map((item) => ({
          ...item,
          coords: item.coords.map(
            (coord) => (window.innerWidth / imageWidth) * coord
          )
        }))
      })
    }
    if (isBrowser) {
      window.addEventListener('resize', handleResize)
    }
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return areas
}
