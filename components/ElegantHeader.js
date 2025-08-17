'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ElegantHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "about", label: "About" },
    { path: "why", label: "Why" },  
    { path: "activities", label: "Activities" },
    { path: "vision", label: "Vision" },
    { path: "network", label: "Network" },
    { path: "faq", label: "FAQ" },
  ];

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-10 h-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image 
                src={logo} 
                alt="CREAI+IT" 
                fill
                className="object-contain" 
              />
            </motion.div>
            <span className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-slate-900' : 'text-slate-800'
            }`}>
              CREAI+IT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={`/${path}`}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all ${
                  scrolled 
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/join"
              className={`ml-4 px-6 py-2 text-sm font-medium rounded-xl transition-all ${
                scrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white/90 text-slate-900 hover:bg-white'
              }`}
            >
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                className={`w-full h-0.5 ${scrolled ? 'bg-slate-800' : 'bg-slate-700'}`}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 9 : 0
                }}
              />
              <motion.span 
                className={`w-full h-0.5 ${scrolled ? 'bg-slate-800' : 'bg-slate-700'}`}
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <motion.span 
                className={`w-full h-0.5 ${scrolled ? 'bg-slate-800' : 'bg-slate-700'}`}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -9 : 0
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4">
                {navItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    href={`/${path}`}
                    className="block px-6 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/join"
                  className="block mx-6 mt-4 px-6 py-3 bg-slate-900 text-white text-center rounded-xl hover:bg-slate-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}