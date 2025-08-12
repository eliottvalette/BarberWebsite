'use client'

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { Logo } from '@/components/logo'
import { useRef, useEffect } from 'react'

const Footer = () => {
  const videoForwardRef = useRef<HTMLVideoElement>(null)
  const videoReverseRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoForward = videoForwardRef.current
    const videoReverse = videoReverseRef.current
    
    if (!videoForward || !videoReverse) return

    // Preload reverse video
    videoReverse.load()

    const handleForwardEnded = () => {
      videoForward.style.display = 'none'
      videoReverse.style.display = 'block'
      videoReverse.currentTime = 0
      videoReverse.play()
    }

    const handleReverseEnded = () => {
      videoReverse.style.display = 'none'
      videoForward.style.display = 'block'
      videoForward.currentTime = 0
      videoForward.play()
    }

    videoForward.addEventListener('ended', handleForwardEnded)
    videoReverse.addEventListener('ended', handleReverseEnded)

    // Initialize state
    videoReverse.style.display = 'none'
    
    return () => {
      videoForward.removeEventListener('ended', handleForwardEnded)
      videoReverse.removeEventListener('ended', handleReverseEnded)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer id="contact" className="sticky bottom-0 left-0 right-0 h-[340px] text-white z-0 -mt-10">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoForwardRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src="/video/UpdateFade_trimmed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={videoReverseRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          playsInline
        >
          <source src="/video/UpdateFade_trimmed_reverse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto px-8 py-12">
        {/* Centered block: left column with logo + nav; right column with social icons */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-[1fr_auto] items-center w-full">
            <div className="space-y-4">
              <div className="flex items-center">
                <Logo />
              </div>
              <nav className="flex items-center gap-8">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  About
                </button>
                <Link href="tel:+61740516344" className="text-sm hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-end gap-6">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-12 h-px w-full bg-white/30" />

        {/* Bottom section */}
        <div className="flex items-center justify-between text-xs text-gray-300 pt-3">
          <p>Copyright © 2025 Bullsnips Barbershop. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Est. 1995</span>
            <span>•</span>
            <span>Bungalow & Smithfield</span>
            <span>•</span>
            <span>Cairns, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer