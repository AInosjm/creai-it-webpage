'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BentoPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const philosophies = [
    {
      title: 'Quick Adaptation',
      icon: '⚡',
      content: '오늘의 최첨단은 내일의 구식입니다. 우린 그 빠른 흐름을 지속적으로 학습하고 추적하여 남들보다 한 발 앞서 나가는 경험을 만들어 나갑니다.',
      size: 'large',
      gradient: 'from-slate-50 to-gray-50',
      accent: 'from-sky-500 to-blue-600'
    },
    {
      title: 'Sensitivity',
      icon: '🎯',
      content: '변화를 읽지 못하면, 아무리 좋은 기술도 무용지물입니다.',
      size: 'normal',
      gradient: 'from-white to-slate-50',
      accent: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Value Creation',
      icon: '💎',
      content: 'Lean StartUp 방법론을 기반으로 아이디어를 빠르게 검증하고 실패하기를 반복합니다.',
      size: 'wide',
      gradient: 'from-gray-50 to-white',
      accent: 'from-slate-600 to-gray-800'
    },
    {
      title: 'Innovation',
      icon: '🚀',
      content: '경계를 뛰어넘는 혁신',
      size: 'normal',
      gradient: 'from-white to-gray-50',
      accent: 'from-sky-600 to-cyan-600'
    },
    {
      title: 'Growth',
      icon: '🌱',
      content: '지속적인 성장과 학습',
      size: 'normal',
      gradient: 'from-slate-50 to-white',
      accent: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            혁신을 만들어가는 우리만의 철학과 가치관
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={philosophy.title}
              className={`
                relative overflow-hidden rounded-3xl p-8
                ${philosophy.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${philosophy.size === 'wide' ? 'md:col-span-2' : ''}
                ${philosophy.size === 'tall' ? 'md:row-span-2' : ''}
                bg-gradient-to-br ${philosophy.gradient}
                border border-slate-100
                group hover:shadow-xl transition-all duration-500
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute inset-0 bg-gradient-to-br ${philosophy.accent}`} />
              </div>

              {/* Icon */}
              <motion.div
                className={`text-3xl mb-4 ${philosophy.size === 'large' ? 'text-5xl mb-6' : ''}`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {philosophy.icon}
              </motion.div>

              {/* Title */}
              <h3 className={`
                font-bold text-slate-900 mb-3
                ${philosophy.size === 'large' ? 'text-3xl' : 'text-xl'}
              `}>
                {philosophy.title}
              </h3>

              {/* Content */}
              <p className={`
                text-slate-600 leading-relaxed
                ${philosophy.size === 'large' ? 'text-base' : 'text-sm'}
              `}>
                {philosophy.content}
              </p>

              {/* Hover Effect */}
              <div className={`
                absolute bottom-0 left-0 right-0 h-1
                bg-gradient-to-r ${philosophy.accent}
                transform translate-y-full group-hover:translate-y-0
                transition-transform duration-300
              `} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with Asymmetric Layout */}
        <motion.div
          className="mt-20 grid md:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="md:col-span-3">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Where Technology Turns into Value
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              우리는 AI를 이해하고 활용하여 경계를 뛰어넘는 혁신을 추구합니다. 
              기술에 대한 깊은 이해를 바탕으로, 빠르게 변화하는 시장에서 
              새로운 기회를 포착하고 실질적인 가치를 창출합니다.
            </p>
            <div className="flex gap-4">
              <motion.div
                className="flex items-center gap-2 text-slate-600"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-sky-500 to-blue-600" />
                <span>기술 이해</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-slate-600"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-sky-500 to-blue-600" />
                <span>빠른 실행</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-slate-600"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-[2px] bg-gradient-to-r from-sky-500 to-blue-600" />
                <span>가치 창출</span>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-50 rounded-3xl"
              animate={{ 
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative p-8 text-center">
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-600">
                3+
              </p>
              <p className="text-slate-600 mt-2">Years of Innovation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}