'use client'

import React from 'react'

const Gallery = () => {
  const galleryVideos = [
    { 
      id: 1, 
      src: '/video/instagram_video/barber_work_1.mp4', 
      title: 'Coupe Signature',
      description: 'Précision et créativité'
    },
    { 
      id: 2, 
      src: '/video/instagram_video/video3.mp4', 
      title: 'Design Freestyle',
      description: 'Vision et savoir-faire'
    },
    { 
      id: 3, 
      src: '/video/instagram_video/video1.mp4', 
      title: 'Taper Fade',
      description: 'Lignes nettes et dégradé parfait'
    }
  ]

  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Notre Travail en Action
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez l&apos;art du barbier en vidéo dans nos deux salons de Cairns
          </p>
        </div>

        {/* Video Gallery grid - Optimized for vertical videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryVideos.map((video) => (
            <article
              key={video.id}
              className="group relative isolate overflow-hidden rounded-2xl bg-black hover:scale-105 transition-transform duration-300"
            >
              {/* Container with 9:16 aspect ratio for Instagram videos */}
              <div className="relative aspect-[9/16]">
                {/* Video element */}
                <video
                  className="absolute inset-0 h-full w-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Gradient overlay at bottom only */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Content overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-gray-300 mb-2">
                    Bullsnips Barbershop
                  </div>
                  <h3 className="text-lg font-semibold leading-6 text-white">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {video.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery