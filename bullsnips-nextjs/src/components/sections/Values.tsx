import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, Clock } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality',
      description: "We're committed to delivering exceptional service and results."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community',
      description: "We're dedicated to giving back to our community, particularly to those who serve and protect us. We offer a discount reward to Veterans, Police Officers, Firefighters, Paramedics, and Army Personnel."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Tradition',
      description: 'We respect the heritage of traditional barbershops while embracing modern style and innovation.'
    }
  ]

  return (
    <section id="values" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-chunkfive text-3xl md:text-4xl text-center bullsnips-primary mb-12">
          Our Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="border-2 border-transparent hover:border-red-800 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="bullsnips-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold bullsnips-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
