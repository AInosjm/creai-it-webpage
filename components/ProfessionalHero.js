'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import backgroundImg from '../public/background_V4.jpg';

export default function ProfessionalHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Only track mouse on non-mobile devices
    const handleMouseMove = (e) => {
      if (!isMobile) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        setMousePosition({ x, y });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Elegant Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image 
            src={backgroundImg}
            alt="NYC Skyline Background"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority
            quality={100}
            placeholder="blur"
          />
        </div>
        {/* Elegant transparent overlay for text readability */}
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
      </div>
      
      {/* Premium Background Effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30" />
      
      {/* Gradient Orbs - Optimized for mobile */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full hidden md:block"
            style={{
              background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full hidden md:block"
            style={{
              background: 'radial-gradient(circle, rgba(15,23,42,0.05) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              x: -mousePosition.x * 2,
              y: -mousePosition.y * 2,
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
          />
        </>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-8"
          >
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-slate-700">연세대학교 AI/IT 창업 학회</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <span className="block">AI 혁신이</span>
            <span className="block text-gradient-brand">현실이 되는 곳</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            최신 AI/IT 기술과 창업 정신이 만나는 곳. 
            우리는 기술의 경계를 넘어 실질적인 가치를 창출합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <a href="/join" className="btn-premium">
              지원하기
              <span className="ml-2">→</span>
            </a>
            <a href="/about" className="btn-glass">
              더 알아보기
            </a>
          </motion.div>

          {/* Core Values - Elegant Presentation */}
          <motion.div
            className="max-w-4xl mx-auto mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
              {[
                {
                  number: '01',
                  title: '학습',
                  subtitle: '배우고',
                  description: '최신 AI 기술 습득과 지속적인 성장'
                },
                {
                  number: '02',
                  title: '창조',
                  subtitle: '만들고',
                  description: '혁신적인 솔루션 개발과 구현'
                },
                {
                  number: '03',
                  title: '혁신',
                  subtitle: '혁신하다',
                  description: '실제 가치 창출과 사회적 임팩트'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                >
                  {/* Number */}
                  <motion.div 
                    className="text-5xl font-extralight text-sky-500/20 mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.number}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-sky-600 mb-3 uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Subtle underline on hover */}
                  <motion.div 
                    className="h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {[
            { value: '50+', label: '활동 멤버' },
            { value: '₩15M+', label: '지원금 확보' },
            { value: '4', label: '창업 중인 팀' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gradient-brand mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-slate-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}