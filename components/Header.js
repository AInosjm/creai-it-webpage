'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "about", label: "Who We Are" },
    { path: "why", label: "Why CREAI+IT" },  
    { path: "activities", label: "What We Do" },
    { path: "vision", label: "Our Vision" },
    { path: "network", label: "Network" },
    { path: "faq", label: "FAQ" },
    { path: "join", label: "Join" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image 
              src={logo} 
              alt="CREAI+IT Logo" 
              width={52} 
              height={52}
              className="object-contain transform group-hover:scale-110 transition-all duration-300" 
            />
          </div>
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-600 transition-all duration-300">
            CREAI+IT
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-charcoal transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-charcoal transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-charcoal transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={`/${path}`}
              className="px-5 py-2.5 mx-1 text-base font-semibold text-charcoal/80 hover:text-sky-600 rounded-full hover:bg-sky-50/80 transition-all duration-300 relative group"
            >
              {label}
              <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-sky-500 group-hover:w-1/2 transition-all duration-300" />
              <span className="absolute bottom-1.5 right-1/2 w-0 h-0.5 bg-sky-500 group-hover:w-1/2 transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      <nav className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            href={`/${path}`}
            className="block px-6 py-3 text-base font-semibold text-charcoal/80 hover:text-sky-600 hover:bg-sky-50/80 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
