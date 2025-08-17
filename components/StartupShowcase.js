'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StartupShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const startups = [
    {
      name: "AINOS",
      url: "https://www.ainos.io/",
      products: [
        { name: "AINOS Decision Engine", url: "https://ainos.vercel.app/" },
        { name: "AINOS RHA", url: "https://ainos-rha.vercel.app/" }
      ],
      description: "차세대 AI 기반 솔루션 플랫폼을 개발하며, 지능형 자동화와 분석 서비스를 구축하고 있습니다",
      industry: "AI/ML Platform",
      initial: "A",
      color: "sky",
      features: ["AI 자동화", "데이터 분석", "플랫폼"]
    },
    {
      name: "RootEdu",
      url: "https://rootedu.vercel.app/",
      description: "교육 혁신을 위한 EdTech 플랫폼을 개발하며, 학습자 중심의 새로운 교육 경험을 만들어가고 있습니다",
      industry: "EdTech",
      initial: "R",
      color: "emerald",
      features: ["교육 혁신", "학습 플랫폼", "기술 융합"]
    },
    {
      name: "Potentivo Lab",
      url: "https://parentlyze.com/",
      description: "데이터 기반 육아 분석 플랫폼을 개발하여, 부모들에게 과학적인 육아 인사이트를 제공하는 서비스를 구축 중입니다",
      industry: "HealthTech/ParentTech",
      initial: "P",
      color: "violet",
      features: ["데이터 분석", "육아 인사이트", "헬스케어"]
    }
  ];

  const stats = [
    { value: '4', label: '창업 중인 팀' },
    { value: '다양한', label: '산업 분야' },
    { value: '실질적', label: '문제 해결' },
    { value: '지속적', label: '성장 중' }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-700">현재 진행 프로젝트</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">아이디어에서 현실로</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            CREAI+IT 멤버들이 현재 개발하고 있는 혁신적인 스타트업 프로젝트들을 소개합니다
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-premium rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-3xl font-bold text-gradient-brand mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Startup Cards - Elegant Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 px-2 sm:px-0">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              className="group"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
            >
              <div className="relative bg-white p-6 sm:p-8 h-full transition-all duration-500 hover:shadow-xl border border-slate-100">
                {/* Elegant Initial Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center">
                  <span className={`text-3xl font-extralight text-${startup.color}-500/20`}>
                    {startup.initial}
                  </span>
                </div>

                {/* Company Header - Minimal */}
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">{startup.name}</h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {startup.industry}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {startup.description}
                </p>

                {/* Features - Refined Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {startup.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-500 font-semibold"
                    >
                      {i > 0 && <span className="mx-2">•</span>}
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Links - Minimal */}
                <div className="space-y-3">
                  <a
                    href={startup.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors group/link"
                  >
                    <span className="border-b border-slate-300 group-hover/link:border-slate-700 transition-colors">
                      웹사이트 방문
                    </span>
                    <svg className="w-3 h-3 ml-1 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* Additional Products - Elegant Dropdown */}
                  {startup.products && startup.products.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs text-slate-500 mb-2">프로덕트</p>
                      <div className="space-y-1">
                        {startup.products.map((product, i) => (
                          <a
                            key={i}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-xs text-slate-600 hover:text-slate-900 transition-colors pl-2"
                          >
                            {product.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center glass-premium rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            다음 프로젝트는 여러분의 것입니다
          </h3>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 px-4">
            혁신적인 아이디어가 있다면, CREAI+IT에서 함께 실현해보세요.
            체계적인 커리큘럼과 멘토링을 통해 여러분의 창업 여정을 지원합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="btn-premium">
              창업 여정 시작하기
              <span className="ml-2">→</span>
            </a>
            <a href="/activities" className="btn-glass">
              커리큘럼 보기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}