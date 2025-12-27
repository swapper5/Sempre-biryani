import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Features(){
  const { t } = useTranslation()
  const items = [
    {title: t('feat1_title'), desc: t('feat1_text')},
    {title: t('feat2_title'), desc: t('feat2_text')},
    {title: t('feat3_title'), desc: t('feat3_text')}
  ]
  return (
    <section id="specials" className="section-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">{t('features_title')}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it,idx)=> (
            <div key={idx} className="p-6 border rounded">
              <h4 className="font-semibold text-lg mb-2">{it.title}</h4>
              <p className="text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
