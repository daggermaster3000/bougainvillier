import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Cours() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />
            <section id="about" className="max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-900">

                


                {/* Titles */}
                <h1 className="text-4xl font-bold text-center">Cours</h1>
                
                            <div className="prose max-w-none ">

                    <h2 className="text-4xl sm:text-3xl font-extrabold text-center text-[#be4029] mb-12">Horaires</h2>
                    <table className="w-full max-w-md mx-auto mt-8 text-left border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-[#be4029] text-white">
                            <tr>
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2">Mardi</th>
                                <th className="px-4 py-2">Mercredi</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 bg-white">
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Enfants</td>
                                <td className="px-4 py-2">18h30-19h30</td>
                                <td className="px-4 py-2">17h30-18h30</td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Ados-Adultes</td>
                                <td className="px-4 py-2">18h30-19h30</td>
                                <td className="px-4 py-2">18h30-19h30</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Club prix */}
                <div className="prose max-w-none ">

                    <h2 className="text-4xl sm:text-3xl font-extrabold text-center text-[#be4029] mb-12">Nos Prix</h2>
                    <table className="w-full max-w-md mx-auto mt-8 text-left border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-[#be4029] text-white">
                            <tr>
                                <th className="px-4 py-2">Durée</th>
                                <th className="px-4 py-2">1 an</th>
                                <th className="px-4 py-2">6 mois</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 bg-white">
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Enfants (jusqu'à 18 ans)</td>
                                <td className="px-4 py-2">CHF 850.-</td>
                                <td className="px-4 py-2">CHF 475.-</td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Adultes</td>
                                <td className="px-4 py-2">CHF 950.-</td>
                                <td className="px-4 py-2">CHF 525.-</td>
                            </tr>
                        </tbody>
                    </table>

                </div>



            </section>
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
