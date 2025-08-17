'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import heroBg from '../public/background_V4.jpg';

export default function ModernHeroSection() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 -right-40 w-96 h-96 bg-gradient-to-br from-sky-100 to-blue-50 rounded-full blur-3xl opacity-60"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100 to-gray-50 rounded-full blur-3xl opacity-40"
          animate={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      {/* SVG Organic Shape */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 L1000,400 Q750,350 500,400 T0,400 Z"
          fill="url(#gradient1)"
          initial={{ d: "M0,100 Q250,50 500,100 T1000,100 L1000,400 Q750,350 500,400 T0,400 Z" }}
          animate={{ 
            d: [
              "M0,100 Q250,50 500,100 T1000,100 L1000,400 Q750,350 500,400 T0,400 Z",
              "M0,120 Q250,30 500,120 T1000,120 L1000,380 Q750,370 500,380 T0,380 Z",
              "M0,100 Q250,50 500,100 T1000,100 L1000,400 Q750,350 500,400 T0,400 Z"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block text-sm font-medium text-sky-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              연세대학교 AI/IT 창업 학회
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Learn
                <span className="text-sky-500">.</span>
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Create
                <span className="text-sky-500">.</span>
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Innovate
                <span className="text-sky-500">.</span>
              </motion.span>
            </h1>

            <motion.p
              className="text-lg text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              최신 AI/IT 기술과 당신의 아이디어가 만나는 곳.<br/>
              우리는 기술의 경계를 넘어 새로운 가치를 창출합니다.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="/join"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl overflow-hidden transition-all hover:shadow-xl"
              >
                <span className="relative z-10 font-medium">지원하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-white text-slate-700 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all font-medium"
              >
                더 알아보기
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square">
              {/* Floating Cards Composition */}
              <motion.div
                className="absolute top-10 left-10 w-48 h-32 bg-white rounded-3xl shadow-lg p-6"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="h-2 w-16 bg-slate-200 rounded mb-3" />
                <div className="h-2 w-24 bg-slate-100 rounded mb-2" />
                <div className="h-2 w-20 bg-slate-100 rounded" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-10 w-56 h-36 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl shadow-lg p-6"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-8 h-8 bg-sky-200 rounded-lg" />
                  <div className="w-8 h-8 bg-blue-200 rounded-lg" />
                  <div className="w-8 h-8 bg-sky-100 rounded-lg" />
                </div>
                <div className="h-2 w-32 bg-white/60 rounded" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-2xl"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <div className="absolute inset-4 bg-gradient-to-br from-sky-400 to-blue-500 rounded-[2rem] opacity-10" />
                <div className="absolute inset-8 flex items-center justify-center">
                  <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-600">
                    AI
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="/faq"
            className="text-slate-500 hover:text-slate-700 transition-colors text-sm"
          >
            인공지능을 잘 몰라도 따라갈 수 있을까요?
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-slate-400 rounded-full mt-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}