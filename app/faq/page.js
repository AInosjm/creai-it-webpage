'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "학회 활동은 어떤 방식으로 진행되나요?",
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Season 1</h4>
            <p className="text-slate-700 mb-3">정기 세션은 월요일(19:00 ~ 22:00)과 목요일(19:00 ~ 22:00)에 진행됩니다.</p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• 월요일: 주요 개념 학습 및 창업 아이디어 발굴</li>
              <li>• 목요일: 기술 학습 및 구현 실습</li>
            </ul>
            <p className="text-slate-600 text-sm mt-2">팀 활동 및 과제가 있는 경우, 세션 시간을 활용하여 함께 진행할 수도 있습니다.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Season 2</h4>
            <p className="text-slate-700 mb-3">정기 세션은 월요일(19:00 ~ 22:00)과 목요일(19:00 ~ 22:00)에 진행됩니다.</p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• 월요일: 린 스타트업 및 가치 창출을 위한 비즈니스 세션 + 외부 연사 초청 세션</li>
              <li>• 목요일: LLM 심화 세션 및 프로덕트 제작을 위한 기술 세션</li>
            </ul>
            <p className="text-slate-600 text-sm mt-2">팀 활동 및 과제가 있는 경우, 세션 시간을 활용하여 함께 진행할 수도 있습니다.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Season 3</h4>
            <p className="text-slate-700 mb-3">정기 세션은 월요일(19:00 ~ 21:00)에 진행됩니다.</p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• 월요일: 최적화된 비즈니스 모델과 수익화 전략을 수립 + 각 팀 아이디어 및 성취 공유, 학회 구성원 및 외부 연사와의 네트워킹</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "한 학기 동안 진행되는 주요 프로젝트나 활동이 궁금해요!",
      answer: (
        <div className="space-y-3">
          <ul className="space-y-2 text-slate-700">
            <li>• <span className="font-medium">Season 1 (중간고사 전):</span> 생성형 AI 및 기타 AI 기술에 대한 이론 학습 + 실습(프로젝트 적용) + 팀을 이루어 아이디어 발굴 및 비즈니스 아이템 기획</li>
            <li>• <span className="font-medium">Season 2 (중간고사 이후):</span> 배운 지식을 바탕으로 비즈니스 아이템 검증 & 개발 + LLM 실무 적용 및 프로젝트 진행</li>
            <li>• <span className="font-medium">Season 3 (기말고사 이후):</span> 프로젝트 고도화 및 이를 이용하여 사업 모델 구축 및 수익화</li>
          </ul>
          <p className="text-slate-600 text-sm mt-4">보다 자세한 내용은 "Activities" 페이지에서 확인하실 수 있습니다!</p>
        </div>
      )
    },
    {
      question: "학회 활동은 어느 정도의 시간 투자가 필요한가요?",
      answer: (
        <div className="space-y-3">
          <ul className="space-y-2 text-slate-700">
            <li>• <span className="font-medium">정기 세션:</span> 주 6시간(MAX)</li>
            <li>• <span className="font-medium">팀 과제 및 프로젝트 수행:</span> 주 8~12시간 이상 권장</li>
          </ul>
          <p className="text-slate-600 text-sm mt-3">
            개인 공부 및 실습 시간을 고려하면 총 14~18시간 이상 투자하는 것이 이상적입니다.
            (개인별 역량과 목표에 따라 차이가 있을 수 있습니다!)
          </p>
        </div>
      )
    },
    {
      question: "AI/ML 배경지식이 없어도 참여할 수 있나요?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-700">
            AI/ML 배경지식이 없다면 오히려 더욱 참여를 권장드립니다. 현재 AI 기술, 특히 LLM의 발전은 전례 없는 속도로 산업 전반에 변화를 가져오고 있습니다. 실제로 미국 기업의 23.5%가 이미 AI로 인한 인력 대체를 경험했으며, 이는 시작에 불과합니다.
          </p>
          <p className="text-slate-700">
            CREAI+IT는 AI에 대한 이해부터 실제 활용까지, 체계적인 커리큘럼을 통해 여러분의 AI 역량을 구축하는 것을 돕습니다. AI 시대에 뒤처지지 않기 위해서는 지금이라도 시작해야 합니다.
          </p>
        </div>
      )
    },
    {
      question: "프로그래밍 실력이 부족한데 참여할 수 있을까요?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-700">
            Python 기초 문법을 이해하고 IDE를 사용해본 경험이 있다면 충분히 참여 가능합니다. CREAI+IT는 다음과 같은 지원 체계를 운영합니다:
          </p>
          <ul className="space-y-1 text-slate-700">
            <li>• 보충 스터디 프로그램 운영</li>
            <li>• 멘토링 시스템</li>
            <li>• 단계별 학습 자료 제공</li>
          </ul>
          <p className="text-slate-600 text-sm mt-3">
            다만, 프로그래밍을 전혀 접해보지 않으신 분들은 기초적인 Python 학습 후 지원을 권장드립니다. 열정과 학습 의지가 있다면, 추가 학습을 감수하고서라도 도전하실 것을 환영합니다.
          </p>
        </div>
      )
    },
    {
      question: "지원 자격과 수료 요건은 어떻게 되나요?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-700">
            지원 자격은 전공, 학년과 무관합니다! AI 및 창업에 관심이 있고, 적극적으로 배우고자 하는 열정이 있다면 누구든 환영합니다.
          </p>
          <p className="text-slate-700">
            수료를 위해서는 출석률과 과제 제출률이 일정 기준을 충족해야 합니다. 단, 지나치게 엄격한 기준은 아니며, 오리엔테이션에서 세부 기준을 안내할 예정입니다.
          </p>
        </div>
      )
    },
    {
      question: "AI 관련 경험이 많으면 어떤 이점이 있나요?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-700">
            CREAI+IT는 AI/IT 창업 학회인 만큼, 기본적인 AI 및 프로그래밍 지식이 있다면 학회 활동을 더욱 빠르게 따라갈 수 있습니다.
            또한, 배운 기술을 실제 비즈니스 모델로 발전시키는 과정에 더욱 능동적으로 참여할 수 있습니다.
          </p>
          <p className="text-slate-700">
            AI 관련하여 이미 너무 많은걸 알아서 배울게 없다는 우려는 안하셔도 될 것이라고 자신 합니다. 활동을 거치며 경험하실 다양한 적용 프로젝트들 및 세션 내용은 알면 알수록 더 많은 도움이 될 것입니다.
          </p>
        </div>
      )
    },
    {
      question: "AI에 관심이 많지만 창업에는 관심이 없어요. (혹은 그 반대) 그래도 지원 가능할까요?",
      answer: (
        <div className="space-y-3">
          <p className="text-slate-700">
            CREAI+IT는 AI/IT 창업 학회입니다.
            따라서 AI 기술 활용 또는 창업 중 한 가지에도 관심이 없다면 학회 활동이 적합하지 않을 수 있습니다.
          </p>
          <p className="text-slate-700">
            하지만 관심이 있다면, 경험이 없어도 배울 수 있도록 체계적인 커리큘럼을 제공합니다!
          </p>
        </div>
      )
    }
  ];

  const categories = [
    { name: "활동 & 시간", indices: [0, 1, 2] },
    { name: "지원 자격", indices: [3, 4, 5] },
    { name: "경험 & 관심사", indices: [6, 7] }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Subtle Glassmorphism */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/10" />
        
        {/* Metallic Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        
        {/* Glass Elements */}
        <div className="absolute top-20 right-20 w-56 h-56 bg-indigo-500/5 backdrop-blur-2xl rounded-full border border-indigo-100/40 opacity-50" />
        <div className="absolute bottom-20 left-20 w-44 h-44 bg-white/25 backdrop-blur-xl rounded-full border border-white/50 opacity-60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/45 backdrop-blur-md border border-white/60 shadow-sm mb-8">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-sm font-semibold text-slate-700">FAQ</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
              자주 묻는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-indigo-600 font-extrabold">질문</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-4xl mx-auto px-4">
              CREAI+IT에 대한 궁금증을 해소해드립니다
              <br className="hidden md:block" />
              여러분의 모든 질문에 성심껏 답변드리겠습니다
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

      {/* Category Tabs */}
      <section className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  const element = document.getElementById(`category-${category.name}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 whitespace-nowrap transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category.name} id={`category-${category.name}`} className="mb-16">
              <motion.h2
                className="text-2xl font-medium text-slate-900 mb-8 pb-4 border-b border-slate-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {category.name}
              </motion.h2>
              
              <div className="space-y-4">
                {category.indices.map((index) => {
                  const faq = faqs[index];
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
                    >
                      <button
                        className="w-full p-6 text-left flex items-center justify-between group"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0 mt-1">
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                            >
                              <span className="text-white text-lg font-medium">+</span>
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 pl-16">
                          <div className="prose prose-sm max-w-none text-slate-600">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Clean and Simple */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 mb-6">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-10 px-4">
              언제든 문의해주세요. 빠른 답변을 드리겠습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://pf.kakao.com/_IEQbn"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FEE500] text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                카카오톡으로 문의하기
              </a>
              
              <a 
                href="/join" 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                지원하기
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}