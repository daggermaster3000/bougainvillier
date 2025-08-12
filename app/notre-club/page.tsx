import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotreClub() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
    <Navbar />
    <section id="about" className="justify-center max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-900">
      
      {/* Club Image */}
      <div className="flex justify-center">
        <Image
          src="/photo_notre_club.jpg"
          alt="Notre Club Photo"
          width={720}
          height={480}
          className="rounded-xl shadow-md"
          priority
        />
      </div>

      {/* Titles */}
      <h1 className="text-4xl font-bold text-center">Notre Club</h1>
      <h2 className="text-4xl font-semibold text-center text-[#be4029] mb-8">ACTS Taekwondo Crissier</h2>

      {/* Club Description */}
      <div className="prose max-w-none dark:prose-invert justify-center text-center">
        <p>
          Depuis 2019, nous nous efforçons d'offrir des cours Taekwondo de qualité pour les enfants et les adultes à Crissier, à la salle de sport du collège de la Carrière.

          Nos Maîtres de Taekwondo sont formés depuis de nombreuses années à l'Académie Choi Taekwondo Suisse (ACTS) par Maître Choi Yong Deok.
        </p>

      </div>

      {/* Additional Section */}
<section
  id="additional-section"
  className="justify-center text-center"
>
  <div className=" mt-20 mx-auto">


    <article className="prose prose-lg dark:prose-invert max-w-none text-gray-800 space-y-6">
      <h3 className="text-2xl font-semibold text-[#be4029] ">L'HISTOIRE DU TAEKWONDO</h3>
      <p>
        Originaire de Corée, le Taekwondo – littéralement <strong>« la Voie des pieds et des poings »</strong> – est un art martial
        permettant d’acquérir une force d’épanouissement et de cultiver un esprit d’ouverture. C’est aussi un sport moderne devenu une discipline olympique depuis <strong>2000</strong> aux Jeux Olympiques d’été de Sydney.
      </p>
      <p>
        L’histoire du Taekwondo est liée à celle de la Corée, remontant au <strong>« Hwarangdo »</strong> du VI<sup>e</sup> siècle. Il repose sur des valeurs telles que le <em>dépassement de soi, la persévérance, et le respect d’autrui</em>.
      </p>
      <p>
        Le Taekwondo est adapté à tous les âges. Il offre les bienfaits d’un art martial, d’une méthode de défense personnelle, et d’une discipline physique complète.
      </p>

      <h3 className="text-2xl font-semibold text-[#be4029]">LA TECHNIQUE TRADITIONNELLE</h3>
      <p>
        Pratique des formes ancestrales : coups de pieds, de poings, formes codifiées et assauts.
      </p>

      <h3 className="text-2xl font-semibold text-[#be4029]">COMBAT (Kyorugi)</h3>
      <p>
        La discipline olympique du Taekwondo. Grâce aux protections, le combat est pratiqué en toute sécurité.
      </p>

      <h3 className="text-2xl font-semibold text-[#be4029]">POOMSAE</h3>
      <p>
        Une forme non-combattive composée de mouvements techniques face à un adversaire imaginaire.
      </p>

      <h3 className="text-2xl font-semibold text-[#be4029]">SELF-DEFENSE (Ho Shin Soul)</h3>
      <p>
        L’auto-défense complète, avec techniques d’esquive, blocages, clés, contrôles au sol, mais aussi une <strong>maîtrise de soi</strong> et une meilleure <em>confiance en soi</em>.
      </p>

      <h3 className="text-2xl font-semibold text-[#be4029]">Progression des grades du Taekwondo</h3>
      <p>
        Le système des ceintures : 10 <strong>Keup</strong>, avec 7 couleurs allant de blanche à noire. L'obtention de la ceinture noire 1<sup>er</sup> Dan est accessible dès l'âge de 16 ans.
      </p>
    </article>

    <div className="flex justify-center mt-12">
      <Image
        src="/photo_tableau_ceinture.jpg"
        alt="Tableau des ceintures"
        width={600}
        height={400}
        className="rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700"
        priority
      />
    </div>
  </div>
</section>

    </section>
    
   
    <Footer></Footer>
    </div>
  );
}
