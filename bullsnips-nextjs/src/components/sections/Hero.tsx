'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { Calendar, Phone, ArrowUpRight } from 'lucide-react'

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/assets/barber.jpg')`,
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-start py-12 lg:pt-38 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-12 lg:items-start">
            {/* Left Column - Main Content (75%) */}
            <div className="lg:col-span-9 text-center lg:text-left">
              <h1 className="mt-8 text-balance text-5xl font-light text-white md:text-6xl lg:mt-16 xl:text-7xl">
                Cairns&apos; Premium Barbershop Since 1995
              </h1>
              <p className="mt-8 text-pretty text-lg text-gray-100 max-w-2xl">
                Where tradition meets modern style. Cuts, shaves, and exceptional men&apos;s grooming.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  onClick={scrollToBooking}
                  variant="default"
                  className="group bg-white text-black hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Walk-ins Welcome</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="group border border-white/70 bg-transparent text-white hover:text-white hover:border-white hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300">
                  <Link href="tel:+61740516344">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Stats (25%) */}
            <div className="lg:col-span-3 relative">
              <div className="mt-8 lg:mt-16 pl-8 space-y-6">
                <div className="group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="text-white text-2xl font-light">29+</div>
                  <div className="text-white/90 font-medium text-sm mt-1">years of excellence</div>
                  <div className="text-white/60 text-xs mt-0.5">Since 1995, Cairns&apos; reference</div>
                </div>
                
                <div className="group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="text-white text-2xl font-light">2</div>
                  <div className="text-white/90 font-medium text-sm mt-1">shops in Cairns</div>
                  <div className="text-white/60 text-xs mt-0.5">Bungalow and Smithfield</div>
                </div>
                
                <div className="group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="text-white text-2xl font-light">100%</div>
                  <div className="text-white/90 font-medium text-sm mt-1">qualified barbers</div>
                  <div className="text-white/60 text-xs mt-0.5">Ongoing training and expertise</div>
                </div>
                
                <div className="group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="text-white text-2xl font-light">★ 4.9</div>
                  <div className="text-white/90 font-medium text-sm mt-1">client reviews</div>
                  <div className="text-white/60 text-xs mt-0.5">Over 1200 satisfied customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo Section - Positioned at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="relative w-full py-8">
          <div className="text-center mb-4">
            <p className="text-white/60 text-sm">Proud partners of our community</p>
          </div>
          <InfiniteSlider
            speedOnHover={20}
            speed={40}
            gap={112}>
            <div className="flex">
              <div className="mx-auto h-8 flex items-center text-white/60 font-medium text-sm">
                Veterans Discount
              </div>
            </div>
            <div className="flex">
              <div className="mx-auto h-8 flex items-center text-white/60 font-medium text-sm">
                Police Support
              </div>
            </div>
            <div className="flex">
              <div className="mx-auto h-8 flex items-center text-white/60 font-medium text-sm">
                Firefighters Welcome
              </div>
            </div>
            <div className="flex">
              <div className="mx-auto h-8 flex items-center text-white/60 font-medium text-sm">
                Paramedics Care
              </div>
            </div>
            <div className="flex">
              <div className="mx-auto h-8 flex items-center text-white/60 font-medium text-sm">
                Army Personnel
              </div>
            </div>
            <div className="flex">
              <div className="mx-auto h-8 flex items-center text-white/60 font-medium text-sm">
                Local Community
              </div>
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </section>
  )
}

export default Hero
