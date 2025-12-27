import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Gallery(){
  const { t } = useTranslation()
  return (
    <section id="gallery" className="section-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{t('gallery_title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://plus.unsplash.com/premium_photo-1695029502961-f57f307bd0c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" className="w-full h-48 object-cover rounded" alt="gallery1" />
          <img src="https://plus.unsplash.com/premium_photo-1694141252779-7e81df0d7c12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" className="w-full h-48 object-cover rounded" alt="gallery2" />
          <img src="https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?fm=jpg&auto=format&fit=crop&q=60&w=1200" className="w-full h-48 object-cover rounded" alt="gallery3" />
          <img src="https://images.unsplash.com/photo-1701579231349-d7459c40919d?fm=jpg&auto=format&fit=crop&q=60&w=1200" className="w-full h-48 object-cover rounded" alt="gallery4" />
        </div>
      </div>
    </section>
  )
}
