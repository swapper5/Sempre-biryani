import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Reviews(){
  const { t } = useTranslation()
  const reviews = [
    { text: t('review1'), name: t('review1_name'), rating: 5 },
    { text: t('review2'), name: t('review2_name'), rating: 5 },
    { text: t('review3'), name: t('review3_name'), rating: 4 }
  ]
  return (
    <section id="reviews" className="section-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{t('reviews_title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r,idx)=>(
            <motion.div key={idx} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="p-6 border rounded bg-white">
              <div className="text-yellow-500 mb-2">{'★'.repeat(r.rating)}</div>
              <p className="text-gray-800 mb-4">"{r.text}"</p>
              <div className="font-semibold text-gray-700">— {r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
