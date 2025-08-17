'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: '2,000만원+', label: '총 확보 지원금' },
    { value: '4', label: '창업 중인 팀' },
    { value: '15+', label: '연사 초청' },
    { value: '60+', label: '알럼나이 멤버' }
  ];

  const journey = [
    {
      period: '2024.03',
      semester: '2024-1학기',
      highlight: 'Foundation',
      achievements: [
        '연세대학교 AI/IT 창업 학회 창립',
        '초기 지원금 1000만원 확보',
        'AINOS, RootEdu 팀 인큐베이팅 시작'
      ]
    },
    {
      period: '2024.09',
      semester: '2024-2학기',
      highlight: 'Expansion',
      achievements: [
        '왕중왕전 창업경진대회 수상',
        'Potentivo Lab 팀 합류',
        'Y-Ventures 파트너십 체결'
      ]
    },
    {
      period: '2025.03',
      semester: '2025-1학기',
      highlight: 'Growth',
      achievements: [
        '추가 지원금 500만원 확보',
        '글로벌 시장 진출 프로젝트 런칭',
        '신규 멤버 대규모 리크루팅'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Subtle Glassmorphism */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        
        {/* Metallic Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        
        {/* Subtle Glass Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 opacity-40" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sky-500/10 backdrop-blur-xl rounded-full border border-sky-200/40 opacity-60" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg mb-8">
              <div className="w-2 h-2 bg-sky-500 rounded-full" />
              <span className="text-sm font-semibold text-slate-700">About CREAI+IT</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
              Where Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-sky-600">
                Turns Into Value
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              LLM을 중심으로 한 Generative AI가 세상의 패러다임을 뒤흔들고 있습니다.
              <br className="hidden md:block" />
              우리는 이 전례 없는 기회를 포착하고, 실질적 가치로 전환하고자 합니다.
            </p>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-slate-300/60 flex justify-center pt-2 bg-white/20 backdrop-blur-sm"
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

      {/* Stats Section - Elegant Design */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">
                Our Impact
              </h2>
              <div className="w-12 h-px bg-slate-300 mx-auto" />
            </div>

            {/* Stats in Elegant Layout */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-baseline justify-between border-b border-slate-100 pb-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-2xl font-light text-slate-900">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Subtle description */}
            <motion.p 
              className="text-center text-sm text-slate-500 font-light max-w-2xl mx-auto mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              2024년 창립 이후 지속적인 성장과 혁신을 이어가고 있습니다
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-6">
                <div className="glass-premium rounded-xl p-6">
                  <p className="text-slate-700 leading-relaxed">
                    GPT-4가 세상에 공개된 이후, 기술 발전의 속도는 상상을 초월하고 있습니다.
                    기존의 시스템과 업계 판도가 단 몇 개월 만에 바뀌는 모습이 곳곳에서 포착되고 있습니다.
                  </p>
                </div>
                <div className="glass-premium rounded-xl p-6">
                  <p className="text-slate-700 leading-relaxed">
                    하지만 이런 변화를 진지하게 받아들이고 구체적 행동으로 옮기려는 단체는 많지 않았습니다.
                    우리는 이런 변화를 진지하게 받아들이고 구체적 행동으로 옮기려고 합니다.
                    그렇게 <span className="font-bold text-sky-600">CREAI+IT</span>가 탄생했습니다.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-100">
                <p className="text-lg font-medium text-slate-800 italic">
                  "세상의 변화에 적응하고, 가장 최신의 기술을 이해하며,
                  이를 레버리지해 가치를 만들어내는 인재를 육성하는 것"
                </p>
                <p className="text-sm text-slate-600 mt-3">
                  이것이 우리가 창립 초기부터 한결같이 지켜온 미션입니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/creai_it_activity1.jpeg" 
                  alt="CREAI+IT 활동 사진" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="heading-lg text-center text-slate-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quick Adaptation',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                ),
                content: '오늘의 최첨단은 내일의 구식입니다. 우린 그 빠른 흐름을 지속적으로 학습하고 추적하여 남들보다 한 발 앞서 나갑니다.'
              },
              {
                title: 'Sensitivity',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                ),
                content: '변화를 읽지 못하면 아무리 좋은 기술도 무용지물입니다. 우리는 시장 동향과 사용자 니즈를 예민하게 관찰합니다.'
              },
              {
                title: 'Value Creation',
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                ),
                content: 'Lean StartUp 방법론을 기반으로 아이디어를 빠르게 검증하고 실패를 통해 배우며 실질적인 가치를 창출합니다.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card-professional p-8 hover-lift"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mid-page CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-lg text-slate-700 mb-6">
              이 철학을 함께 실천할 동료를 찾고 있습니다
            </p>
            <a 
              href="/join" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              지원하기
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Journey Section - Elegant Timeline */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">
              우리의 여정
            </h2>
            <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
            <p className="text-lg text-slate-600 font-light">
              창립 이후 지속적인 성장과 혁신의 발자취
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-slate-200 via-sky-200 to-slate-200 hidden md:block" />
            
            <div className="space-y-16 md:space-y-20">
              {journey.map((period, index) => (
                <motion.div
                  key={period.period}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-sky-500 rounded-full z-10 hidden md:block" />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                      {/* Period Header */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:flex md:flex-row-reverse md:justify-start' : ''}`}>
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-900">{period.semester}</h3>
                          <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider mt-1">
                            {period.highlight}
                          </p>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {period.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-600 font-medium leading-relaxed">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Period Label */}
                      <div className={`mt-6 pt-4 border-t border-slate-100 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="text-xs font-light text-slate-400">
                          {period.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Join the Journey</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 px-4">
              삶을 바꿀 기회는 언제나 급격한 변화 속에서 탄생합니다.
              CREAI+IT에서 그 기회를 움켜쥐고 새로운 가치를 만들어나갈 주인공이 되어보세요.
            </p>
            <a href="/join" className="btn-premium">
              지원하기
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}