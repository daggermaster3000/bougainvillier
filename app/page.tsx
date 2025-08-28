"use client";
import Image from "next/image";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection'
import { ContactSection } from './components/Contact';
import { Saveurs } from './components/Saveurs'
import { Histoire } from './components/Histoire'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../public/GreatVibes-Wmr4.ttf',
})
export default function Home() {
  return (
    <div className="min-h-screen playwrite-ca flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center">
        <Image
          src="/ice-cream-cones.jpg"
          alt="Colorful ice cream cones background"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <main className="z-20  relative max-w-4xl px-6">
          {/* Headline */}
          <div className={myFont.className}>
            <h1 className="text-6xl sm:text-7xl tracking-tight text-white drop-shadow-2xl mb-2">
              Des Saveurs
              Gourmandes
              Inimitables
            </h1>
          </div>
          {/* Decorative accent */}
          <div className="w-28 h-1.5 bg-pink-500 mx-auto mb-8 rounded-full shadow-md" />


          {/* Supporting text */}
          {/* <p className="mt-4 text-2xl font-heading sm:text-xl text-white/90 drop-shadow max-w-2xl mx-auto leading-relaxed">
      Découvrez nos créations artisanales&nbsp;: des glaces uniques qui éveilleront vos papilles.
    </p> */}

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#parfums"
              className="bg-white hover:bg-pink-400 hover:text-white px-8 py-4 rounded-full text-pink-500 font-semibold transition-transform duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Découvrir nos parfums
            </a>
          </div>
        </main>
      </div>
      <NewsSection /> 
      <Saveurs /> 
          
      <Histoire />
      <ContactSection />
      <Footer />
    </div>
  );
}