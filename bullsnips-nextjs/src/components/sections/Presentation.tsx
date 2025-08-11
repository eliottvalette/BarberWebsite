import React from 'react'

const Presentation = () => {
  const services = [
    {
      title: 'Haircuts',
      description: 'From modern styles to timeless classics, our barbers will work with you to create a personalized look.'
    },
    {
      title: 'Fades',
      description: 'Seamless blends and crisp lines, tailored to your preference.'
    },
    {
      title: 'Classic Shave',
      description: 'Experience the traditional art of wet shaving, with a hot towel and a smooth finish.'
    },
    {
      title: 'Beard Trim',
      description: 'Keep your beard neat and tidy, with a trim and shape to suit your style.'
    },
    {
      title: 'Line Up',
      description: 'Define your edges and keep your look sharp, with a precise line up.'
    }
  ]

  return (
    <section id="presentation" className="bullsnips-bg-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-chunkfive text-3xl md:text-4xl text-center bullsnips-primary mb-8">
          Presentation
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Welcome to Bullsnips Barber, where tradition meets modern style. Our barbershop is 
            dedicated to providing top-notch grooming services in a welcoming and relaxed atmosphere. 
            With a team of experienced barbers, we offer a range of services including:
          </p>
          
          <ul className="space-y-4 mb-6">
            {services.map((service, index) => (
              <li key={index} className="flex flex-col md:flex-row md:items-start space-y-1 md:space-y-0">
                <strong className="bullsnips-primary text-lg md:w-32 flex-shrink-0">
                  {service.title}:
                </strong>
                <span className="text-gray-700 md:ml-4">{service.description}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg leading-relaxed text-gray-700">
            Whether you&apos;re looking for a quick trim or a complete transformation, we&apos;ve got you covered.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Presentation
