import Image from "next/image";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center text-center">
        <Image
          src="/photo_accueil.jpg"
          alt="Taekwondo background"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-gray-900/40 z-10" />

        <main className="z-20 relative max-w-3xl px-6">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white drop-shadow-md">
            Bienvenue à ACTS Taekwondo Crissier
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 drop-shadow">
            Discipline, puissance et respect — rejoignez-nous dès aujourd’hui.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cours"
              className="bg-[#be4029] hover:bg-red-400 px-6 py-3 rounded-full text-white/90 font-semibold transition"
            >
              Voir les cours
            </a>
            
          </div>
        </main>
      </div>

      {/* News Section */}
      
      <NewsSection />

      <Footer/>
      
    </div>
  );
}
