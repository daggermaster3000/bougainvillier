import Image from "next/image";
import localFont from 'next/font/local'
const myFont = localFont({
  src: '../../public/GreatVibes-Wmr4.ttf',
})


export function Histoire() {
  return (
    <section id="histoire" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={myFont.className}>
          <h2 className="text-6xl font-bold text-gray-800 mb-4">Histoire</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une passion familiale transmise de génération en génération
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">1985</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Les Débuts</h4>
              <p className="text-gray-600">
                Tout a commencé dans une petite .....
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">1995</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Premier Atelier</h4>
              <p className="text-gray-600">
                L'ouverture de notre premier atelier artisanal marque le début de l'aventure commerciale. 
                Nous développons nos premières créations originales avec des ingrédients locaux.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">2010</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Reconnaissance</h4>
              <p className="text-gray-600">
                Nos glaces remportent le prix du "Meilleur Glacier Artisanal" de la région. 
                Cette reconnaissance confirme notre engagement pour la qualité et l'innovation.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">Aujourd'hui</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Tradition & Innovation</h4>
              <p className="text-gray-600">
                Nous continuons à créer des saveurs uniques en respectant nos traditions familiales 
                tout en innovant avec de nouveaux parfums audacieux et raffinés.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={"/ice-cream-cones.jpg"}
                alt="Notre histoire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              40+
              <span className="text-sm ml-1">ans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}