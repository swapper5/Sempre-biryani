import React from 'react'
import { useTranslation } from 'react-i18next'
export default function About(){
  const { t } = useTranslation()
  return (
    <section id="about" className="section-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">{t('about_title')}</h2>
          <p className="text-gray-700">{t('about_text')}</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1630851840633-f96999247032?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" className="w-full rounded shadow" alt="about"/>
        </div>
      </div>
    </section>
  )
}
