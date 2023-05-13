'use client'

import React from 'react'

import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="w-full lg:w-1/3 flex items-center justify-start text-white">
        <Image src="/brand-icon.svg" alt="Brand Icon" width={48} height={57} />
      </div>
      <div className={`w-full lg:w-1/3 lg:flex lg:justify-center ${isOpen ? '' : 'hidden'}`} style={{ zIndex: 1 }}>
        {['about', 'pricing', 'portfolio', 'booking', 'contact'].map(item => (
          <a
            key={item}
            href={`#${item}`}
            className={`block mt-4 lg:inline-block lg:mt-0 text-primary-white hover:text-primary-rose mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-20`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="w-full lg:w-1/3 flex items-center justify-end lg:justify-end">
        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-primary-white border-primary-white hover:border-transparent hover:text-primary-background hover:bg-primary-white mt-4 lg:mt-0">
          HU / SRB
        </button>
      </div>
      <div className="block lg:hidden">
        <button onClick={handleToggle}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
