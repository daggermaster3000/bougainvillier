import React from "react";
import localFont from 'next/font/local'
const myFont = localFont({
  src: '../../public/GreatVibes-Wmr4.ttf',
})
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className={myFont.className}>
    <h1 className="text-5xl sm:text-7xl tracking-tight text-white drop-shadow-2xl mb-2">
     Bougainvillier
    </h1>
</div>
              <p className="text-gray-300 mb-4">Des saveurs gourmandes, uniques et inimitables 🇨🇭</p>
              <div className="flex space-x-4">
  {/* Instagram */}
  <a href="https://www.instagram.com/glacesbougainvillier/" className="text-gray-300 hover:text-pink-400 transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.432.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.462.347 1.262.403 2.432.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.432a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.462.163-1.262.347-2.432.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.432-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.462-.347-1.262-.403-2.432-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.432a4.92 4.92 0 0 1 1.153-1.77 4.92 4.92 0 0 1 1.77-1.153c.462-.163 1.262-.347 2.432-.403 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.775.13 4.652.327 3.756.633a6.878 6.878 0 0 0-2.508 1.635A6.878 6.878 0 0 0 .633 4.756C.327 5.652.13 6.775.072 8.052.014 9.332 0 9.756 0 12s.014 2.668.072 3.948c.058 1.277.255 2.4.561 3.296a6.878 6.878 0 0 0 1.635 2.508 6.878 6.878 0 0 0 2.508 1.635c.896.306 2.019.503 3.296.561C9.332 23.986 9.756 24 12 24s2.668-.014 3.948-.072c1.277-.058 2.4-.255 3.296-.561a6.878 6.878 0 0 0 2.508-1.635 6.878 6.878 0 0 0 1.635-2.508c.306-.896.503-2.019.561-3.296.058-1.28.072-1.704.072-3.948s-.014-2.668-.072-3.948c-.058-1.277-.255-2.4-.561-3.296a6.878 6.878 0 0 0-1.635-2.508A6.878 6.878 0 0 0 20.244.633c-.896-.306-2.019-.503-3.296-.561C14.668.014 14.244 0 12 0z"/>
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="#https://www.facebook.com/glacesbougainvillier/?ref=_xav_ig_profile_page_web#" className="text-gray-300 hover:text-pink-400 transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/>
    </svg>
  </a>

  {/* Mail */}
  <a href="mailto:contact@glaces-bougainvillier.ch" className="text-gray-300 hover:text-pink-400 transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zm-16 12V9.489l7.446 4.657a1 1 0 0 0 1.108 0L20 9.489V18H4z"/>
    </svg>
  </a>
</div>

            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-pink-400 transition-colors">Accueil</a></li>
                <li><a href="#parfums" className="hover:text-pink-400 transition-colors">Nos Parfums</a></li>
                <li><a href="#histoire" className="hover:text-pink-400 transition-colors">Histoire</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Grand-Rue 24</li>
                <li>1110 Morges, Suisse</li>
                <li>+41 079 860 27 54</li>
                <li>contact@glaces-bougainvillier.ch</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bougainvillier. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
