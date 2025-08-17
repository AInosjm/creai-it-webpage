'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "about", label: "About" },
    { path: "why", label: "Why CREAI+IT" },  
    { path: "activities", label: "Activities" },
    { path: "vision", label: "Vision" },
    { path: "network", label: "Network" },
    { path: "faq", label: "FAQ" },
  ];

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-dark py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-12 h-12"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" />
              <Image 
                src={logo} 
                alt="CREAI+IT" 
                fill
                className="object-contain p-1" 
              />
            </motion.div>
            <div>
              <span className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-white' : 'text-slate-900'
              }`}>
                CREAI+IT
              </span>
              <span className={`block text-xs transition-colors ${
                scrolled ? 'text-white/60' : 'text-slate-600'
              }`}>
                연세대학교 AI/IT 창업 학회
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={`/${path}`}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  scrolled 
                    ? 'text-white/80 hover:text-white hover:bg-white/10' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="ml-6 pl-6 border-l border-slate-300/20">
              <Link
                href="/join"
                className="btn-premium text-sm"
              >
                지원하기
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                className={`w-full h-0.5 rounded-full transition-colors ${
                  scrolled ? 'bg-white' : 'bg-slate-900'
                }`}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 9 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className={`w-full h-0.5 rounded-full transition-colors ${
                  scrolled ? 'bg-white' : 'bg-slate-900'
                }`}
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className={`w-full h-0.5 rounded-full transition-colors ${
                  scrolled ? 'bg-white' : 'bg-slate-900'
                }`}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -9 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="lg:hidden mt-6 glass-premium rounded-2xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4">
                {navItems.map(({ path, label }, index) => (
                  <motion.div
                    key={path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/${path}`}
                      className="block px-6 py-4 text-slate-700 hover:text-sky-600 hover:bg-sky-50/50 transition-all rounded-lg mx-2 touch-manipulation text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4 px-6 pb-2"
                >
                  <Link
                    href="/join"
                    className="block w-full text-center btn-premium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    지원하기
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}