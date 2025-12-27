import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Contact(){
  const { t } = useTranslation()
  return (
    <section id="contact" className="section-dark py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#f97316] mb-4">{t('contact_title')}</h2>
          <p className="text-gray-300">{t('contact_addr')}</p>
          <div className="mt-4">
            <iframe title="map" src="https://www.google.com/maps?q=Italy&output=embed" className="w-full h-64 rounded"></iframe>
          </div>
        </div>
        <div className="bg-black/60 p-6 rounded">
          <form action="https://formspree.io/f/xeovjgve" method="POST" className="grid gap-3">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Contact - Sempre Biryani" />
            <input type="text" name="name" required placeholder="Name" className="p-3 rounded bg-black/80 text-white placeholder-gray-400 border border-gray-700" />
            <input type="email" name="email" required placeholder="Email" className="p-3 rounded bg-black/80 text-white placeholder-gray-400 border border-gray-700" />
            <textarea name="message" placeholder="Message" className="p-3 rounded bg-black/80 text-white placeholder-gray-400 border border-gray-700"></textarea>
            <button type="submit" className="mt-2 bg-[#f97316] text-black font-semibold px-6 py-3 rounded">{t('send_message')}</button>
          </form>
          <p className="mt-3 text-sm text-gray-400">*You’ll get a verification email from Formspree on your first form submission.</p>
        </div>
      </div>
    </section>
  )
}
