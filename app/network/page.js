'use client'

import { motion } from 'framer-motion';

export default function NetworkPage() {
  const networkValues = [
    {
      title: '함께 성장',
      description: 'AI에 대한 열정을 가진 60명이 넘는 동료들과 함께 배우고 성장합니다',
      number: '01'
    },
    {
      title: '실전 경험',
      description: '4개의 창업 팀이 실제 프로젝트를 진행하며 경험을 쌓고 있습니다',
      number: '02'
    },
    {
      title: '전문가 멘토링',
      description: '15명 이상의 업계 전문가들이 실질적인 조언과 경험을 공유합니다',
      number: '03'
    }
  ];

  const ecosystem = [
    {
      type: '협력 기관',
      items: ['연세대 인공지능융합대학', '연세대 SW 사업부', '창업지원단', 'Disquiet', 'Y-Ventures'],
    },
    {
      type: '진행 팀',
      items: ['AiNOS', 'RootEdu', 'Potentivo Lab', 'reseio'],
    }
  ];

  const activities = [
    {
      name: '정기 세션',
      description: '매주 월/목 AI 기술과 창업 인사이트를 나눕니다',
      frequency: '주 2회'
    },
    {
      name: '프로젝트 데이',
      description: '팀 프로젝트 진행 상황을 공유하고 피드백을 받습니다',
      frequency: '월 1회'
    },
    {
      name: '네트워킹 모임',
      description: '알럼나이와 현재 멤버들이 만나 경험을 나눕니다',
      frequency: '학기별'
    },
    {
      name: '데모데이',
      description: '한 학기 동안의 성과를 발표하고 축하합니다',
      frequency: '학기말'
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
        
        {/* Glass Elements */}
        <div className="absolute top-20 right-20 w-52 h-52 bg-slate-200/20 backdrop-blur-2xl rounded-full border border-slate-200/30 opacity-50" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/25 backdrop-blur-xl rounded-full border border-white/50 opacity-60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/45 backdrop-blur-md border border-white/60 shadow-sm mb-8">
              <div className="w-2 h-2 bg-slate-600 rounded-full" />
              <span className="text-sm font-semibold text-slate-700">Our Network</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
              우리의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 font-extrabold">네트워크</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed px-4">
              혼자서는 불가능한 일도, 함께라면 가능합니다.
              <br className="hidden md:block" />
              CREAI+IT는 서로를 성장시키는 커뮤니티입니다.
            </p>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-slate-300/60 flex justify-center pt-2 bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {networkValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <span className="text-6xl font-extralight text-slate-300">{value.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-medium text-slate-900 mb-4">
              우리가 함께하는 <span className="font-extrabold">생태계</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              다양한 파트너와 협력하며 성장합니다
            </p>
          </motion.div>

          <div className="space-y-8">
            {ecosystem.map((group, index) => (
              <motion.div
                key={group.type}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                  {group.type}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-medium text-slate-900 mb-4">
              함께하는 <span className="font-extrabold">활동</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              정기적인 만남을 통해 지속적으로 교류합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-sky-500 to-blue-600 rounded-full" />
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{activity.name}</h3>
                    <span className="text-sm text-sky-600 font-semibold">{activity.frequency}</span>
                  </div>
                  <p className="text-slate-600 font-medium">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="text-6xl font-extralight text-sky-500/20">"</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed mb-8 px-4">
              CREAI+IT에서 만난 동료들과 함께
              <br />
              불가능해 보였던 아이디어를 현실로 만들고 있습니다.
              <br />
              이곳은 단순한 학회가 아닌, <span className="font-bold">꿈을 실현하는 공간</span>입니다.
            </blockquote>
            <cite className="text-sm text-slate-500 font-semibold">
              - CREAI+IT 1기 멤버
            </cite>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-medium text-white mb-6">
              함께 성장할 <span className="font-extrabold">동료</span>가 되어주세요
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-10 px-4">
              CREAI+IT의 네트워크에 합류하여 더 큰 가능성을 만들어가세요
            </p>
            <a href="/join" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">
              지원하기
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}