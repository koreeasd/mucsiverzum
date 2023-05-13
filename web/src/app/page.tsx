import React from 'react'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <section
        id="hero"
        className="h-screen bg-cover bg-no-repeat bg-center"
        style={{backgroundImage: `url(/hero-background.png)`}}
      >
        <div
          className="h-2/3 bg-cover bg-no-repeat bg-center"
          style={{
            background: `linear-gradient(180deg, #0B0A0A 0%, rgba(11, 10, 10, 0.877083) 32.08%, rgba(11, 10, 10, 0) 100%)`
          }}
        >
          <Navbar />
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-white">Welcome to Our Website!</h1>
            <button className="mt-8 px-6 py-3 text-2xl text-white bg-blue-500 rounded">Learn More</button>
          </div>
        </div>
        <div
          className="h-1/3 bg-cover bg-no-repeat bg-center"
          style={{
            background: `linear-gradient(180deg, #0C0B0B 0%, rgba(11, 10, 10, 0) 100%)`,
            transform: 'matrix(1, 0, 0, -1, 0, 0)'
          }}
        >
        </div>
      </section>
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
