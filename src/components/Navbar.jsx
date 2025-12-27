import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export default function Navbar(){
  const { t, i18n } = useTranslation()
  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Sempre Biryani</div>
        <div className="hidden md:flex gap-6 text-white items-center">
          <ScrollLink to="about" smooth offset={-70} className="cursor-pointer">{t('nav_about')}</ScrollLink>
          <ScrollLink to="specials" smooth offset={-70} className="cursor-pointer">{t('nav_specials')}</ScrollLink>
          <ScrollLink to="menu" smooth offset={-70} className="cursor-pointer">{t('nav_menu')}</ScrollLink>
          <ScrollLink to="gallery" smooth offset={-70} className="cursor-pointer">{t('nav_gallery')}</ScrollLink>
          <ScrollLink to="contact" smooth offset={-70} className="cursor-pointer">{t('nav_contact')}</ScrollLink>
          <ScrollLink to="reviews" smooth offset={-70} className="cursor-pointer">{t('nav_reviews')}</ScrollLink>
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={()=> i18n.changeLanguage('it')} className="text-sm text-white">IT</button>
          <button onClick={()=> i18n.changeLanguage('en')} className="text-sm text-white">EN</button>
        </div>
      </div>
    </nav>
  )
}
