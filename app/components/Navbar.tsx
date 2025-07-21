"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cours", href: "/cours" },
  { name: "Notre Club", href: "/notre-club" },
  { name: "Gallerie Photos", href: "/gallery" },
  // Remove Contact from here — handled separately
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    setIsOpen(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 text-[#2E2E2E] px-6 py-4 w-full top-0 z-50 shadow-md font-pt ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/ACTS_logo.png"
            alt="ACTS Taekwondo Logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <span className="text-2xl font-bold tracking-wide">ACTS Taekwondo Crissier</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="hover:underline underline-offset-4 transition duration-200">
                {name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={scrollToContact}
              className="hover:underline underline-offset-4 transition duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-[#2E2E2E]"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-[#2E2E2E]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 mt-16 text-[#2E2E2E]">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block text-lg font-medium hover:underline underline-offset-4 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <button
            onClick={scrollToContact}
            className="block w-full text-left text-lg font-medium hover:underline underline-offset-4 transition duration-200 bg-transparent border-none p-0"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
