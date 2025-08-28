import Image from "next/image";
import { useState } from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/GreatVibes-Wmr4.ttf",
});

const flavors = [
  {
    name: "Vanille Madagascar",
    description: "Une vanille authentique aux notes florales subtiles",
    image: "vanilla ice cream",
    color: "from-yellow-200 to-yellow-300",
  },
  {
    name: "Chocolat Noir 70%",
    description: "Intense et gourmand, pour les amateurs de cacao",
    image: "chocolate ice cream",
    color: "from-amber-700 to-amber-800",
  },
  {
    name: "Fraise des Bois",
    description: "Des fraises sauvages cueillies à maturité parfaite",
    image: "strawberry ice cream",
    color: "from-red-300 to-red-400",
  },
  {
    name: "Pistache Sicilienne",
    description: "Onctueux et parfumé, un classique réinventé",
    image: "pistachio ice cream",
    color: "from-green-300 to-green-400",
  },
  {
    name: "Caramel Beurre Salé",
    description: "L'équilibre parfait entre douceur et caractère",
    image: "caramel ice cream",
    color: "from-orange-300 to-orange-400",
  },
  {
    name: "Citron Bergamote",
    description: "Rafraîchissant et acidulé, une explosion de fraîcheur",
    image: "lemon ice cream",
    color: "from-yellow-300 to-yellow-400",
  },
];

export function Saveurs() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="parfums" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className={myFont.className}>
            <h2 className="text-6xl font-bold text-gray-800 mb-4">Nos Parfums</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chaque parfum est une création unique, élaborée avec passion et savoir-faire artisanal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? flavors : flavors.slice(0, 3)).map((flavor, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-20`} />
                <div className="relative aspect-square">
                  <Image
                    src="/ice-cream-cones.jpg"
                    alt={flavor.name}
                    fill
                    priority
                    className="object-cover z-0"
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{flavor.name}</h3>
                <p className="text-gray-600">{flavor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Voir plus button */}
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-500 transition"
            >
              Voir plus...
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
