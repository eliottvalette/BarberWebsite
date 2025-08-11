'use client'

import React from 'react'

const ModernServices = () => {
  const services = [
    { name: "HAIRCUT", price: "38", popular: true },
    { name: "BUZZ & CREW CUT", price: "27 - 32" },
    { name: "KIDS", price: "25 - 30" },
    { name: "FADE", price: "45 - 60", popular: true },
    { name: "BEARD", price: "22 - 30" },
    { name: "SHAVES", price: "45 - 50" },
    { name: "PENSIONNER", price: "32" }
  ]

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
            Services & Tarifs
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Bungalow</span>
            <span className="text-gray-300">•</span>
            <span>Smithfield</span>
            <span className="text-gray-300">•</span>
            <span>Depuis 1995</span>
          </div>
        </div>

        {/* Modern Price Table */}
        <div className="relative">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white rounded-3xl" />
          
          {/* Services List */}
          <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`
                  group flex items-center justify-between 
                  px-8 md:px-12 py-6 
                  transition-all duration-300 
                  hover:bg-gray-50 hover:px-10 md:hover:px-14
                  ${index !== 0 ? 'border-t border-gray-100' : ''}
                  ${service.popular ? 'bg-gradient-to-r from-red-50/30 to-transparent' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <h3 className={`
                    text-gray-900 transition-all duration-300
                    ${service.popular ? 'font-semibold text-lg' : 'font-medium'}
                  `}>
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                      POPULAIRE
                    </span>
                  )}
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-light text-gray-900 group-hover:text-red-600 transition-colors">
                    {service.price}
                  </span>
                  <span className="text-lg text-gray-400">$</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Consultation incluse</p>
            <p className="text-xs text-gray-500">Personnalisée pour chaque client</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Happy Hour</p>
            <p className="text-xs text-gray-500">Bière offerte • Jeu & Ven après 15h</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Sur rendez-vous</p>
            <p className="text-xs text-gray-500">Walk-ins bienvenus selon dispo</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ModernServices