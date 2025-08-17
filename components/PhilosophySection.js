'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCard from './AnimatedCard';

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const philosophies = [
    {
      title: 'Quick Adaptation',
      icon: '⚡',
      content: '오늘의 최첨단은 내일의 구식입니다. 하루에도 수백 개의 모델 논문 프로덕트가 쏟아지고, 기획된 서비스가 하루 아침에 백지화가 되곤 합니다.\n\n우린 그 빠른 흐름을 지속적으로 학습하고 추적하여 남들보다 한 발 앞서 나가는 경험을 만들어 나갑니다.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Sensitivity',
      icon: '🎯',
      content: '변화를 읽지 못하면, 아무리 좋은 기술도 무용지물입니다. 우리는 최신 AI 지식 뿐 아니라, 시장 동향과 사용자 니즈를 관찰·분석하는 감각을 키웁니다.\n\n남들보다 빠르고 예민하게 변화를 읽고 따라가며 다음의 변화를 만들어 나갑니다.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Value Creation',
      icon: '💎',
      content: 'Lean StartUp 방법론을 기반으로 아이디어를 빠르게 검증하고 실패하기를 반복해 나가는 과정을 직접 수행합니다. 이 과정에서 쌓인 경험은 커다란 성장을 가져다줄 자양분이 될 것입니다.\n\n우리는 그 경험을 바탕으로 더 나은 아이디어를 만들어 나가고, 그 아이디어를 실현시키며 가치를 창출합니다.',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 md:py-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white -z-10" />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="gradient-text-animated">Our Philosophy</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            혁신을 만들어가는 우리만의 철학
          </motion.p>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {philosophies.map((philosophy, index) => (
            <AnimatedCard
              key={philosophy.title}
              delay={index * 0.1}
              glassmorphic={true}
              className="group"
            >
              {/* Icon with gradient background */}
              <motion.div
                className="mb-6 inline-flex"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${philosophy.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{philosophy.icon}</span>
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                {philosophy.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {philosophy.content}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(to right, ${philosophy.gradient.replace('from-', '').replace('to-', ',')})`
                }}
              />
            </AnimatedCard>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-20 md:mt-32 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8 md:p-16">
            <div className="text-center">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <span className="gradient-text">Where Technology Turns into Value</span>
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                우리는 AI를 이해하고 활용하여 경계를 뛰어넘는 혁신을 추구합니다.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { 
                    icon: '⚡', 
                    title: '기술 이해의 중요성',
                    description: '기술에 대한 깊은 이해 없이는 혁신을 이루기 어렵습니다.'
                  },
                  { 
                    icon: '🌍', 
                    title: '경계를 뛰어넘는 혁신',
                    description: '기술 변화 속에서 작은 틈을 발견하고 빠르게 실행합니다.'
                  },
                  { 
                    icon: '🎯', 
                    title: '우리의 지향점',
                    description: '작은 혁신으로 새로운 가치를 창출합니다.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}