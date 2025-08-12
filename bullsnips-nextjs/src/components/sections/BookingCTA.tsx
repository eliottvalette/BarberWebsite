import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowUpRight, Phone } from "lucide-react"

const BookingCTA = () => {
  return (
    <section id="booking" className="relative bg-[#f7f4f1] py-24">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        {/* Conteneur clair inspiré de dealway */}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-[#F3EEE9] via-[#EFEAE6] to-[#E8DFD9] p-6 sm:p-8 lg:p-10">
          <div className="relative grid items-center gap-x-16 gap-y-10 p-8 sm:p-10 lg:grid-cols-12 min-h-[420px]">
            {/* Left: copy */}
            <div className="lg:col-span-7 text-neutral-900">
              <h2 className="text-balance text-4xl font-light sm:text-5xl lg:text-6xl">
                Ready for your <span className="font-normal text-red-600">best look</span>?
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base text-neutral-700">
                Walk in today and discover the Bullsnips experience. 
                Two shops in Cairns serving you with excellence since 1995.
              </p>

              <div className="mt-10 flex flex-col items-center justify-start gap-3 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  variant="default"
                  className="group bg-black text-white hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Walk in Today</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group border border-red-600/50 bg-transparent text-neutral-900 hover:bg-red-600/10 hover:border-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 rounded-sm px-6 py-3 h-auto text-base font-medium transition-all duration-300"
                >
                  <Link href="tel:+61740516344" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                    <ArrowUpRight className="h-4 w-4 text-red-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Quick info cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-black/5 bg-white/60 p-4">
                  <div className="text-sm font-medium text-neutral-900">Bungalow</div>
                  <div className="text-xs text-neutral-600 mt-1">3/156-158 Aumuller St</div>
                  <div className="text-xs text-neutral-500 mt-1">Mon-Fri: 8:30am-5pm • Sat: 8am-12:30pm</div>
                </div>
                <div className="rounded-lg border border-black/5 bg-white/60 p-4">
                  <div className="text-sm font-medium text-neutral-900">Smithfield</div>
                  <div className="text-xs text-neutral-600 mt-1">Campus Shopping Village</div>
                  <div className="text-xs text-neutral-500 mt-1">Mon-Fri: 8:30am-5pm • Sat: 8am-12:30pm</div>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
                <Image
                  src="/assets/barber.jpg"
                  alt="Bullsnips Barbershop"
                  width={800}
                  height={600}
                  className="h-[360px] w-full object-cover"
                  priority
                />
              </div>

              {/* Floating happy hour card */}
              <div className="absolute -bottom-5 left-6 flex items-start gap-3 rounded-lg border border-black/5 bg-white/95 p-3 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-100 text-red-700">
                  🍺
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900">Happy Hour !</div>
                  <div className="text-xs text-neutral-600">Free beer or whiskey after 3pm</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Thursday & Friday</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA