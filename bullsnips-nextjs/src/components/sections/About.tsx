import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  return (
    <section id="about" className="relative -mt-32 mb-24 bg-transparent px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="absolute left-0 w-full md:w-3/5 bg-white shadow-lg border-0 transform md:translate-y-0 translate-y-8">
          <CardContent className="p-6 md:p-8">
            <h2 className="font-chunkfive text-2xl md:text-3xl bullsnips-primary mb-4">
              About Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Welcome to Bullsnips Barbershop, Cairns&apos; premier destination for men&apos;s grooming. 
              Established in 1995, we have quickly become a cornerstone of the community, offering 
              top-quality haircuts, shaves, and grooming services for men who value craftsmanship 
              and attention to detail. Our mission is simple: to provide our clients with not just 
              a haircut, but an experience that leaves them feeling fresh, confident, and rejuvenated.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About
