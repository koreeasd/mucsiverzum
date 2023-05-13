import React from 'react'

import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar />
      {['about', 'pricing', 'portfolio', 'booking', 'contact'].map(section => (
        <section id={section} className="h-screen">
          <h1 className="text-center">{section}</h1>
          <p className="mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
        </section>
      ))}
    </main>
  )
}
