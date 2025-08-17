'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function ElegantHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Subtle Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 50%)',
          filter: 'blur(60px)',
          y
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 50%)',
          filter: 'blur(80px)',
          y
        }}
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* Minimal Geometric Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-slate-200 to-transparent"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.5, height: 160 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-slate-200 to-transparent"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.5, height: 160 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-8 text-center"
        style={{ opacity }}
      >
        {/* Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider text-slate-600 uppercase">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Yonsei University • AI/IT Innovation Hub
          </span>
        </motion.div>

        {/* Elegant Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 mb-6">
            <span className="block">CREAI</span>
            <span className="block font-extralight text-5xl md:text-6xl lg:text-7xl text-slate-600">+IT</span>
          </h1>
        </motion.div>

        {/* Sophisticated Tagline */}
        <motion.p
          className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mb-16 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Where artificial intelligence meets entrepreneurial vision.
          <span className="block mt-2 text-base text-slate-500">
            최첨단 AI 기술과 창업 정신이 만나는 혁신의 중심
          </span>
        </motion.p>

        {/* Refined CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a 
            href="/join" 
            className="group relative px-8 py-4 bg-slate-900 text-white font-light tracking-wide rounded-none overflow-hidden transition-all duration-500 hover:bg-slate-800"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Apply Now</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
          
          <motion.a 
            href="/about" 
            className="group px-8 py-4 text-slate-700 font-light tracking-wide border border-slate-300 rounded-none transition-all duration-300 hover:border-slate-900 hover:text-slate-900"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Discover More
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-slate-400 to-transparent"
          animate={{ 
            scaleY: [1, 0.6, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}