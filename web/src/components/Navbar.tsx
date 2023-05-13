'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import i18n from '../i18n'
import { NAVIGATION_LINKS } from '@/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = lang => {
    i18n.changeLanguage(lang)
    setCurrentLang(lang)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="w-full lg:w-1/3 flex items-center justify-start text-white">
        <Image src="/brand-icon.svg" alt="Brand Icon" width={48} height={57} />
      </div>
      <div className={`w-full lg:w-1/3 lg:flex lg:justify-center ${isOpen ? '' : 'hidden'}`} style={{ zIndex: 1 }}>
        {Object.keys(NAVIGATION_LINKS).map(key => (
          <a
            key={key}
            href={`#${key}`}
            className={`block mt-4 lg:inline-block lg:mt-0 text-primary-white hover:text-primary-rose mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-20`}
          >
            {NAVIGATION_LINKS[key][currentLang]}
          </a>
        ))}
      </div>
      <div className="w-full lg:w-1/3 flex items-center justify-end lg:justify-end">
        <div className="inline-block text-sm px-4 py-2 leading-none mt-4 lg:mt-0">
          <span
            onClick={() => changeLanguage('hu')}
            className={`cursor-pointer border-b-2 border-transparent hover:border-primary-white px-2 ${
              currentLang === 'hu' ? 'text-primary-rose' : 'text-primary-white'
            }`}
          >
            HU
          </span>
          /
          <span
            onClick={() => changeLanguage('en')}
            className={`cursor-pointer border-b-2 border-transparent hover:border-primary-white px-2 ${
              currentLang === 'en' ? 'text-primary-rose' : 'text-primary-white'
            }`}
          >
            EN
          </span>
        </div>
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
