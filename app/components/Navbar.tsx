"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Nos Parfums", href: "#parfums" },
  { name: "Histoire", href: "#histoire" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Compact Button-style Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/50 rounded-full shadow-lg border border-pink-200/50 transition-all duration-300 hover:shadow-xl">
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
            src="/logo-bougainvillier.webp"
            alt="Logo Glaces Artisanales"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="relative text-gray-700 hover:text-pink-600 transition duration-300 group px-3 py-2 rounded-full hover:bg-pink-50"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-pink-600 transition p-1 rounded-full hover:bg-pink-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md shadow-xl z-40 rounded-2xl border border-pink-200/50 transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Links */}
        <div className="p-6 space-y-4">
          {navLinks.map(({ name, href }, i) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-center py-3 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-200 font-medium animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}