import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ModernServices from '@/components/sections/ModernServices'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import BookingCTA from '@/components/sections/BookingCTA'

export default function Home() {
  return (
    <>
      {/* Contenu principal au-dessus du footer */}
      <div className="relative z-10 bg-white min-h-screen shadow-2xl rounded-b-[12px]">
        <Header />
        <main>
          <Hero />
          <Gallery />
          <ModernServices />
          <Testimonials />
          <BookingCTA />
        </main>
      </div>

      {/* Footer collant (révélé en bas, sans espace blanc supplémentaire) */}
      <Footer />
    </>
  );
}
