import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Scissors } from 'lucide-react'

const Specialties = () => {
  const specialties = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Traditional Shaving',
      description: 'Experience our signature traditional shaving service.'
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Skin Fades',
      description: 'Perfect skin fades tailored to your style.'
    }
  ]

  return (
    <section id="specialties" className="py-16 md:py-24 bullsnips-bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-chunkfive text-3xl md:text-4xl text-center bullsnips-primary mb-12">
          Our Specialties
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialties.map((specialty, index) => (
            <Card 
              key={index}
              className="border-2 border-transparent hover:border-red-800 transition-all duration-300 hover:transform hover:-translate-y-4 shadow-lg bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="bullsnips-primary mb-6 flex justify-center">
                  {specialty.icon}
                </div>
                <h3 className="text-2xl font-semibold text-red-900 mb-4">
                  {specialty.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {specialty.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialties
