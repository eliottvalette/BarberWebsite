'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, Clock, Scissors } from 'lucide-react'

const ModernAbout = () => {
  return (
    <section id="about" className="relative bg-[#f7f4f1] py-24">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        {/* Conteneur principal avec background épuré */}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#F3EEE9] via-[#EFEAE6] to-[#E8DFD9] p-6 sm:p-8 lg:p-10">
          <div className="relative grid items-center gap-x-16 gap-y-10 p-8 sm:p-10 lg:grid-cols-12 min-h-[420px]">
            
            {/* Left: Story & Content (7 colonnes) */}
            <div className="lg:col-span-7 text-neutral-900">
              <h2 className="text-balance text-4xl font-light sm:text-5xl lg:text-6xl">
                <span className="font-normal text-red-600">Depuis 1995</span>, la référence barbershop à Cairns
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base text-neutral-700">
                Bullsnips Barbershop combine savoir-faire traditionnel et techniques modernes pour offrir 
                une expérience authentique dans une ambiance conviviale et professionnelle.
              </p>

              {/* Stats grid */}
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-light text-neutral-900">29+</div>
                  <div className="text-sm text-neutral-600">années d&apos;excellence</div>
                  <div className="text-xs text-neutral-500 mt-1">Depuis notre ouverture en 1995</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-neutral-900">2</div>
                  <div className="text-sm text-neutral-600">salons à Cairns</div>
                  <div className="text-xs text-neutral-500 mt-1">Bungalow et Smithfield</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-neutral-900">100%</div>
                  <div className="text-sm text-neutral-600">artisans qualifiés</div>
                  <div className="text-xs text-neutral-500 mt-1">Formation continue et expertise</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-neutral-900">★ 4.9</div>
                  <div className="text-sm text-neutral-600">satisfaction client</div>
                  <div className="text-xs text-neutral-500 mt-1">Plus de 1200 avis vérifiés</div>
                </div>
              </div>
            </div>

            {/* Right: Image avec floating card (5 colonnes) */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
                <Image
                  src="/assets/barber.jpg"
                  alt="Intérieur Bullsnips Barbershop"
                  width={800}
                  height={600}
                  className="h-[360px] w-full object-cover"
                  priority
                />
              </div>

              {/* Floating values card */}
              <div className="absolute -bottom-5 left-6 rounded-lg border border-black/5 bg-white/95 p-4 shadow-xl backdrop-blur-md max-w-[280px]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-100 text-red-700">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900">Qualité Premium</div>
                      <div className="text-xs text-neutral-600">Chaque coupe est un art</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-100 text-red-700">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900">Esprit Communauté</div>
                      <div className="text-xs text-neutral-600">Soutien aux forces de l&apos;ordre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section valeurs en bas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border border-black/5 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Award className="h-5 w-5 text-red-600" strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Excellence</h3>
              <p className="text-sm text-neutral-600">Chaque coupe est réalisée avec précision et attention aux détails</p>
            </CardContent>
          </Card>

          <Card className="border border-black/5 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Users className="h-5 w-5 text-red-600" strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Communauté</h3>
              <p className="text-sm text-neutral-600">Soutien actif aux vétérans et forces de l&apos;ordre</p>
            </CardContent>
          </Card>

          <Card className="border border-black/5 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Clock className="h-5 w-5 text-red-600" strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Tradition</h3>
              <p className="text-sm text-neutral-600">Techniques traditionnelles adaptées aux tendances modernes</p>
            </CardContent>
          </Card>

          <Card className="border border-black/5 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Scissors className="h-5 w-5 text-red-600" strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Expertise</h3>
              <p className="text-sm text-neutral-600">Barbiers expérimentés avec formation continue</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ModernAbout