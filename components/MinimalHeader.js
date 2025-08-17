'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MinimalHeader() {
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
    { path: "activities", label: "Activities" },
    { path: "vision", label: "Vision" },
    { path: "network", label: "Network" },
    { path: "join", label: "Apply", special: true },
  ];

  return (
    <motion.header 
      className={`w-full fixed top-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-2xl font-light tracking-tight text-slate-900">
              CREAI<span className="font-extralight text-slate-600">+IT</span>
            </div>
          </motion.div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <motion.span 
              className="w-full h-px bg-slate-900"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6.5 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-full h-px bg-slate-900"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="w-full h-px bg-slate-900"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6.5 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ path, label, special }) => (
            <motion.div
              key={path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${path}`}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 ${
                  special 
                    ? 'px-6 py-2.5 bg-slate-900 text-white hover:bg-slate-800' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
                {!special && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-px bg-slate-900 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-white border-t border-slate-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 py-6 space-y-4">
              {navItems.map(({ path, label, special }) => (
                <motion.div
                  key={path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/${path}`}
                    className={`block text-base font-light tracking-wide transition-colors duration-300 ${
                      special 
                        ? 'text-slate-900 font-normal' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}