import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import MenuPreview from './components/MenuPreview'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main className="pt-16">
        <Hero/>
        <MenuPreview/>
         <Features/>
        <About/>
        <Gallery/>
        <Contact/>
        <Reviews/>
      </main>
      <Footer/>
    </div>
  )
}
