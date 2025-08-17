'use client'

import { motion } from 'framer-motion';

export default function JoinPage() {
  const qualifications = {
    required: [
      'Python 기초 문법 이해',
      'AI/IT 분야에 대한 열정과 학습 의지',
      '매주 월요일 19:00-22:00 정규 세션 필참 가능',
      '매주 목요일 20:00-22:00 정규 세션 필참 가능',
      '전후반기 팀 프로젝트 성실 참여 가능'
    ],
    preferred: [
      'LLM Application 실습 경험 (OpenAI API, HuggingFace 등)',
      '창업 대회/해커톤 참가 경험',
      '기업 인턴/프리랜서 프로젝트 경험'
    ]
  };

  const schedule = [
    { event: '서류 접수 마감', date: '8월 30일 23:00', status: 'upcoming' },
    { event: '1차 합격자 발표', date: '8월 30일 23:59 - 8월 31일 02:00', status: 'upcoming' },
    { event: '면접', date: '8월 31일 - 9월 2일', status: 'upcoming' },
    { event: '최종 합격자 발표', date: '9월 2일', status: 'upcoming' },
    { event: '4기 OT', date: '9월 4일', status: 'upcoming' }
  ];

  const process = [
    {
      step: '01',
      title: '구글폼 지원서 제출',
      description: '지원 동기, 프로젝트 경험, 기술 스택 등을 지원서 양식에 맞춰 작성',
      icon: '📝'
    },
    {
      step: '02', 
      title: '면접',
      description: '열정, 창업 의지 등을 면접을 통해 평가',
      icon: '💬'
    },
    {
      step: '03',
      title: 'CREAI+IT 4기 OT',
      description: '오리엔테이션 참석',
      icon: '🎉'
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: '실전 역량 개발',
      description: '최신 AI/IT 스택 습득과 창업 실무(BM 설계, 투자유치) 역량 동시 배양'
    },
    {
      icon: '🤝',
      title: '전문가 네트워크',
      description: '현업 엔지니어, 스타트업 창업자, VC 등 업계 전문가와의 직접 교류'
    },
    {
      icon: '🌏',
      title: 'Alumni Community',
      description: '스타트업, 대기업, 해외 진출 등 다양한 커리어를 가진 동문 네트워크'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Subtle Glassmorphism */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/15" />
        
        {/* Metallic Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        
        {/* Glass Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/8 backdrop-blur-2xl rounded-full border border-emerald-100/50 opacity-50" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/30 backdrop-blur-xl rounded-full border border-white/40 opacity-60" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-sm mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                2025 Fall Recruitment
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-emerald-600 font-extrabold">CREAI+IT</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto leading-relaxed px-4 mb-12">
              AI 혁명의 선두에서 함께 성장할
              <br className="hidden md:block" />
              <span className="font-semibold">차세대 리더</span>를 초대합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#schedule"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white/60 transition-all shadow-sm"
              >
                모집 일정 확인
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSevPuyjHwEcgY2ttAwaZETcRyEISb9f1ewsfKznMfcRvWxnzg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg"
              >
                지원서 작성하기
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-slate-300/60 flex justify-center pt-2 bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Qualification Section - Professional */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              Qualifications
            </h2>
            <div className="w-16 h-px bg-slate-300 mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              CREAI+IT와 함께 성장할 인재를 찾습니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Required */}
            <div className="bg-slate-50 border border-slate-100 p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white font-bold text-lg mr-4">
                  01
                </div>
                <h3 className="text-2xl font-bold text-slate-900">필수 요건</h3>
              </div>
              <div className="space-y-4">
                {qualifications.required.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-sky-500 mr-3 mt-2">•</span>
                    <span className="text-slate-700 font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferred */}
            <div className="bg-white border border-slate-200 p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  02
                </div>
                <h3 className="text-2xl font-bold text-slate-900">우대 사항</h3>
              </div>
              <div className="space-y-4">
                {qualifications.preferred.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-sky-500 mr-3 mt-2">•</span>
                    <span className="text-slate-700 font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="schedule" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              Application Process
            </h2>
            <div className="w-16 h-px bg-slate-300 mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              체계적인 선발 과정을 통해 함께할 동료를 찾습니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule Timeline */}
            <div className="bg-white p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-10">모집 일정</h3>
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full mr-4" />
                    <div className="flex-grow flex justify-between items-baseline">
                      <span className="text-lg text-slate-700 font-semibold">{item.event}</span>
                      <span className="text-lg text-sky-600 font-bold">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-10">지원 절차</h3>
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-bold text-sky-600 mr-3">{item.step}</span>
                        <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Clean Design */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              Member Benefits
            </h2>
            <div className="w-16 h-px bg-slate-300 mx-auto mb-8" />
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              CREAI+IT 멤버가 누리는 특별한 혜택
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center"
              >
                <div className="mb-6">
                  <span className="text-5xl">{benefit.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Minimal */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8">
              미래를 함께 만들어갈 <span className="font-extrabold">준비</span>가 되셨나요?
            </h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-12 leading-relaxed px-4">
              AI 혁명의 중심에서 함께 성장할 기회를 놓치지 마세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSevPuyjHwEcgY2ttAwaZETcRyEISb9f1ewsfKznMfcRvWxnzg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all"
              >
                지원서 작성하기
                <span className="ml-2">→</span>
              </a>
              
              <a
                href="http://pf.kakao.com/_IEQbn"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}