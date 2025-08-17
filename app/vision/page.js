'use client'

import { motion } from 'framer-motion';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Powerful Opening */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              AI로 세상을 바꿀
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                혁신가들이 모이는 곳
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-4">
              기술을 도구로, 문제 해결을 목표로
            </p>
            <p className="text-base sm:text-lg text-white/70">
              AI를 활용해 실제 가치를 창출하는 혁신가를 양성합니다
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Statement - Minimal & Powerful */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-12">
              우리의 <span className="font-bold">철학</span>
            </h2>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-800 leading-relaxed">
                AI는 목적이 아닌 수단입니다
                <br />
                <span className="font-semibold text-sky-600">진짜 문제를 해결하는 것이 핵심입니다</span>
              </p>
              
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto" />
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium px-4">
                비즈니스 인사이트, 사용자 경험, AI 기술의 융합
                <br />
                다학제적 접근으로 혁신적인 솔루션을 만들어냅니다
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars - Clean Design */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  number: '01',
                  title: '문제 정의',
                  subtitle: 'Problem First',
                  description: '기술보다 먼저 해결해야 할 문제를 찾고, AI로 어떻게 해결할지 고민합니다'
                },
                {
                  number: '02',
                  title: '실행력',
                  subtitle: 'Execution',
                  description: '아이디어를 실제 서비스로 구현하는 과정에서 진짜 혁신가로 성장합니다'
                },
                {
                  number: '03',
                  title: '임팩트',
                  subtitle: 'Real Impact',
                  description: '실제 사용자의 문제를 해결하고 가치를 창출하는 경험을 쌓습니다'
                }
              ].map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-6">
                    <span className="text-7xl font-extralight text-sky-500/20">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-sky-600 uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Mid-page CTA */}
            <motion.div
              className="text-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className="text-lg text-slate-700 mb-6">
                AI로 세상을 바꿀 아이디어가 있으신가요?
              </p>
              <a 
                href="/join" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all"
              >
                지원하기
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision - Minimalist */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-16">
              우리의 <span className="font-bold">목표</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="text-6xl font-extralight text-sky-500/30">
                    🎯
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  실제 문제를 해결하는 AI 서비스 창출
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  교육, 헬스케어, 금융, 환경 등 다양한 분야에서
                  AI가 만들어낼 수 있는 실질적 변화를 추구합니다.
                </p>
              </motion.div>
              
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">
                  <span className="text-6xl font-extralight text-sky-500/30">
                    💼
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Co-founder를 만나는 곳
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed"> 
                  개발자와 기획자, 디자이너와 마케터가 만나
                  함께 스타트업을 시작하는 진짜 창업 팀이 탄생합니다.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Bold & Simple */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              AI 혁신가가 되고 싶다면
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 font-light px-4">
              개발자, 디자이너, 기획자, 마케터 - 전공과 배경은 중요하지 않습니다.
              <br />
              AI로 문제를 해결하고자 하는 열정과 실행력만 있다면 환영합니다.
            </p>
            <a href="/join" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
              혁신가로 합류하기
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}