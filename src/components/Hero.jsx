import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  // Array of hero background images
  const images = [
    "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    "https://media.istockphoto.com/id/1058029096/photo/chicken-biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=jjPwycS_qHz52KYp4sNBXRy9gl6k4L8KXsN8b9En9fs=",
    "https://plus.unsplash.com/premium_photo-1694141252883-39e9cfd511b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    "https://images.unsplash.com/photo-1691171047439-4b39b58b4766?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
  ];

  const [index, setIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="biryani hero background"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero text */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold text-[#f97316] leading-tight"
        >
          {t('hero_title')}
        </motion.h1>

        <p className="mt-4 text-gray-100 text-lg max-w-2xl mx-auto">
          {t('hero_sub')}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <ScrollLink
            to="menu"
            smooth
            className="px-6 py-3 bg-[#f97316] text-black rounded font-semibold cursor-pointer"
          >
            {t('view_menu')}
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            className="px-6 py-3 border border-[#f97316] rounded text-[#f97316] cursor-pointer"
          >
            {t('book_table')}
          </ScrollLink>
        </div>
      </div>
    </header>
   );
}
