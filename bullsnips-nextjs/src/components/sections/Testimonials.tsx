'use client'

import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marcus Thompson',
      location: 'Cairns CBD',
      text: 'Le meilleur barbershop de Cairns ! L&apos;attention aux détails est incroyable.',
      service: 'Fade & Barbe',
      rating: 5
    },
    {
      name: 'David Chen', 
      location: 'Smithfield',
      text: 'Service professionnel à chaque fois. Le rasage traditionnel est une expérience unique.',
      service: 'Rasage Classique',
      rating: 5
    },
    {
      name: 'Jake Wilson',
      location: 'Bungalow', 
      text: 'Techniques modernes avec hospitalité old-school. L&apos;équipe connaît vraiment son art.',
      service: 'Coupe Premium',
      rating: 5
    }
  ]

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Ce que disent nos clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-900 mb-6">
                <p className="text-sm leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <span className="text-sm font-semibold text-red-600">
                    {getInitials(testimonial.name)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.location}</div>
                  <div className="text-red-600 text-xs font-medium">{testimonial.service}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials