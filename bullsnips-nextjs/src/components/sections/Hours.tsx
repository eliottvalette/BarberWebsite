'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useCurrentDay } from '@/hooks/useCurrentDay'

const Hours = () => {
  const currentDay = useCurrentDay()

  const hours = [
    { day: 'Monday', time: '8:30AM - 5PM' },
    { day: 'Tuesday', time: '8:30AM - 5PM' },
    { day: 'Wednesday', time: '8:30AM - 5PM' },
    { day: 'Thursday', time: '8:30AM - 5:30PM' },
    { day: 'Friday', time: '8:30AM - 5PM' },
    { day: 'Saturday', time: '8AM - 12:30PM' },
    { day: 'Sunday', time: 'Closed' }
  ]

  return (
    <section id="hours" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-chunkfive text-3xl md:text-4xl text-center bullsnips-primary mb-12">
          Opening Hours
        </h2>
        
        <div className="max-w-md mx-auto">
          <ul className="space-y-2 mb-8">
            {hours.map((schedule, index) => (
              <li 
                key={index}
                className={`flex justify-between p-3 rounded-lg transition-colors ${
                  currentDay === index 
                    ? 'bullsnips-bg-primary text-white font-bold' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <span className="font-medium">{schedule.day}</span>
                <span>{schedule.time}</span>
              </li>
            ))}
          </ul>
          
          <Card className="bullsnips-bg-secondary border-gray-300">
            <CardContent className="p-4">
              <p className="text-center text-gray-700 font-medium italic">
                🍺 Enjoy a complimentary beer or whiskey after 3PM on Thursdays and Fridays! 🥃
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Hours
