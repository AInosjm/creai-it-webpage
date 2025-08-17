'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import ParticleBackground from './ParticleBackground';
import heroBg from '../public/background_V4.jpg';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] md:h-[120vh] overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/30 to-black/60" />
        <div className="absolute inset-0 aurora-bg opacity-30" />
      </motion.div>

      {/* Particle Effects */}
      <div className="absolute inset-0 z-20">
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 py-20">
        {/* Subtitle */}
        <motion.span 
          className="text-white/90 font-light tracking-[0.3em] uppercase text-xs md:text-sm mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          연세대학교 AI/IT 창업 학회
        </motion.span>

        {/* Main Title with Staggered Animation */}
        <div className="mb-8">
          {['Learn', 'Create', 'Innovate'].map((text, i) => (
            <motion.h1
              key={text}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
              className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight leading-[0.9]"
            >
              <span className="gradient-text-animated bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {text}
              </span>
              <span className="text-purple-400 animate-pulse">.</span>
            </motion.h1>
          ))}
        </div>

        {/* Description with Floating Animation */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="mt-8 md:mt-12"
        >
          <motion.p 
            className="text-lg md:text-2xl text-white/90 font-light max-w-3xl leading-relaxed tracking-wide px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            최신의 AI/IT 기술과 당신의 아이디어가 만나는 곳
          </motion.p>
          <motion.p 
            className="mt-4 md:mt-6 text-base md:text-xl text-white/80 font-medium max-w-3xl leading-relaxed tracking-wider px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            AI를 이해하고 활용하여 경계를 뛰어넘는 혁신을 추구합니다
          </motion.p>
        </motion.div>

        {/* CTA Buttons with Glassmorphism */}
        <motion.div 
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="/join"
            className="group relative px-8 md:px-12 py-4 md:py-5 glass rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white font-semibold text-lg">
              지원하기
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          <motion.a
            href="/about"
            className="group relative px-8 md:px-12 py-4 md:py-5 glass rounded-full overflow-hidden border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white font-semibold text-lg">
              더 알아보기
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        {/* Bottom Text with Hover Effect */}
        <motion.a
          href="/faq"
          className="mt-8 md:mt-12 text-white/60 hover:text-white text-base md:text-lg transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
        >
          인공지능을 잘 몰라도 따라갈 수 있을까요?
        </motion.a>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}