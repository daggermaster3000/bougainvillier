import Image from "next/image";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center text-center">
        <Image
          src="https://acts-crissier.ch/photo_accueil.jpg"
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
              className="bg-[#be4029] hover:bg-red-400 px-6 py-3 rounded-full text-gray-900 font-semibold transition"
            >
              Voir les cours
            </a>
            
          </div>
        </main>
      </div>

      {/* News Section */}
      <section className="bg-white text-gray-900 py-16 px-6" id="news">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Actualités</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Titre de l'actualité {i}
                </h3>
                <p className="text-sm text-gray-700">
                  Résumé de l’article ou annonce importante. Peut contenir des
                  infos sur les événements, compétitions ou stages.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 hover:underline font-medium"
                >
                  Lire plus →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
      
    </div>
  );
}
