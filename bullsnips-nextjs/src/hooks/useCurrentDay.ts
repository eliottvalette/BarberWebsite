'use client'

import { useState, useEffect } from 'react'

export const useCurrentDay = () => {
  const [currentDay, setCurrentDay] = useState<number>(-1)

  useEffect(() => {
    const today = new Date().getDay()
    // Convert Sunday (0) to 6, and shift other days back by 1
    const adjustedDay = today === 0 ? 6 : today - 1
    setCurrentDay(adjustedDay)
  }, [])

  return currentDay
}
