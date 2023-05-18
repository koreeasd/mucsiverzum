import React from 'react'

import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div className="h-full">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold tracking-wide text-3xl md:text-[70px] text-white text-center pt-20 max-w-3xl leading-[77px] md:leading-[77px]">
          {t('hero.title')}
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-x-52 mt-10 text-center md:text-left">
          <p className="text-base text-white uppercase tracking-wider">{t('hero.subtitle.tattoo')}</p>
          <p className="text-base text-white uppercase tracking-wider">{t('hero.subtitle.eyebrowTattoo')}</p>
          <p className="text-base text-white uppercase tracking-wider">{t('hero.subtitle.piercing')}</p>
        </div>
        <div className={`flex justify-center w-full ${lang === 'hu' ? 'pl-5' : ''}`}>
          <button className="bg-primary-rose text-base text-white uppercase rounded px-6 py-3 mt-10">
            {t('buttons.bookAppointment')}
          </button>
        </div>
      </div>
    </div>
  )
}
