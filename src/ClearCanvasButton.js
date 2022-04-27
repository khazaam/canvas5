import React from 'react'
import { useCanvas } from './CanvasContext.js'

export const ClearButton = () => {
  const { clearCanvas } = useCanvas()

  return <button onClick={clearCanvas}>Delete content</button>
}