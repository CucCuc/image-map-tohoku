import React, { useState } from 'react'

import ImageMapper from 'react-image-mapper'
import { useWindowSize } from './hook/useWindowSize'
import { useImageMapResponsive } from './hook/useImageMapResponsive'
import styles from './styles.module.css'

const getTipPosition = (area) => {
  return { top: `${area.center[1]}px`, left: `${area.center[0]}px` }
}

export default function ImageMapTohoku(props) {
  const {
    imageWidth,
    imageUrl,
    imageMap,
    renderTooltipContent = ({}) => {}
  } = props
  const { width } = useWindowSize()
  const { areas } = useImageMapResponsive(imageMap.areas, imageWidth)
  const [hoveredArea, setHoveredArea] = useState(null)

  const getToolTip = () => {
    if (hoveredArea.center[0] < 150) {
      return styles.tooltipRight
    } else if (hoveredArea.center[1] < 525) {
      return styles.tooltipBottom
    } else {
      return styles.tooltipDefault
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <ImageMapper
        src={imageUrl}
        fillColor='rgba(0, 0, 0, 0.2)'
        map={{ ...imageMap, areas: areas || imageMap.areas }}
        width={width}
        onClick={(area) => {
          setHoveredArea(area)
        }}
        onImageClick={(event) => {
          setHoveredArea(null)
        }}
      />
      {hoveredArea && (
        <div
          className={styles.tooltip + ' ' + getToolTip()}
          style={{ ...getTipPosition(hoveredArea) }}
        >
          {renderTooltipContent(hoveredArea)}
        </div>
      )}
    </div>
  )
}
