'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "about", label: "Who We Are" },
    { path: "why", label: "Why CREAI+IT" },  
    { path: "activities", label: "What We Do" },
    { path: "vision", label: "Our Vision" },
    { path: "network", label: "Network" },
    { path: "faq", label: "FAQ" },
    { path: "join", label: "Join", special: true },
  ];

  return (
    <motion.header 
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-card shadow-2xl' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div 
            className="relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={logo} 
              alt="CREAI+IT Logo" 
              width={52} 
              height={52}
              className="object-contain" 
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-0 group-hover:opacity-50"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <span className="text-2xl font-black gradient-text-animated">
            CREAI+IT
          </span>
        </Link>

        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden p-2 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span 
              className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(({ path, label, special }) => (
            <motion.div
              key={path}
              onHoverStart={() => setHoveredItem(path)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${path}`}
                className={`relative px-5 py-2.5 text-base font-semibold rounded-full transition-all duration-300 ${
                  special 
                    ? 'glass text-white btn-glow' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {special && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-80"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
                {hoveredItem === path && !special && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full -z-10"
                    layoutId="navHover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
            className="md:hidden glass-card"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ path, label, special }, index) => (
              <motion.div
                key={path}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/${path}`}
                  className={`block px-6 py-3 text-base font-semibold transition-all duration-300 ${
                    special 
                      ? 'gradient-text-animated' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
