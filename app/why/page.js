'use client'

import { motion } from 'framer-motion';

export default function WhyPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const reasons = [
    {
      number: '1',
      title: 'AI 혁신의 중심에서',
      points: [
        'GPT-4 출시 이후, 세상은 완전히 새로운 방향으로 흘러가고 있어요.',
        '매일같이 쏟아지는 새로운 AI 모델들, 이제는 따라가는 것만으로도 벅차죠.',
        'o-series와 같은 차세대 모델들이 또 다시 게임의 룰을 바꾸고 있습니다.'
      ]
    },
    {
      number: '2',
      title: '함께 성장하는 커뮤니티',
      points: [
        '혼자서는 어려운 AI 학습, 동료들과 함께라면 훨씬 즐겁고 효과적이에요.',
        '같은 기술도 어떻게 활용하느냐에 따라 완전히 다른 결과를 만들어냅니다.',
        '창업이 목표가 아니어도 괜찮아요. AI Native가 되는 것 자체가 강력한 경쟁력이니까요.',
        '창업 활동과 경험은 여러분들이 AI Native가 될 수 있는 가장 확실한 방법이에요.'
      ]
    },
    {
      number: '3',
      title: '직접 만들고 경험하기',
      points: [
        'ChatGPT 쓰는 것만으로 만족하시나요? 우리는 직접 AI 시스템을 만들어요.',
        '아이디어를 실제 서비스로 구현하며 진짜 개발 실력을 키워갑니다.',
        '시장이 원하는 것이 무엇인지 직접 부딪혀보며 배우는 실전 경험을 제공합니다.'
      ]
    }
  ];

  const coreValues = [
    {
      title: 'Edge Tech',
      subtitle: '가장 핫한 기술 스택',
      categories: [
        {
          name: '최신 AI 기술 마스터',
          items: [
            'OpenAI, Claude, Gemini API를 자유자재로 다뤄보세요',
            'LangChain으로 나만의 AI 에이전트 만들기',
            '실리콘밸리 스타트업들이 쓰는 최신 도구들 경험하기'
          ]
        },
        {
          name: '트렌드 선도하기',
          items: [
            '남들보다 한 발 빠른 기술 트렌드 캐치',
            '새로운 AI 모델 출시되면 바로 테스트해보기',
            '다음 유니콘이 될 기회 먼저 발견하기'
          ]
        }
      ]
    },
    {
      title: 'Sensitivity',
      subtitle: '날카로운 시장 감각',
      categories: [
        {
          name: '진짜 문제 찾기',
          items: [
            '사용자가 정말 원하는 것이 무엇인지 발견하기',
            '작게 시작해서 크게 성장하는 린스타트업 방식',
            'MVP로 빠르게 테스트하고 피드백 받기'
          ]
        },
        {
          name: '비즈니스 센스',
          items: [
            '기술만 아는 개발자? NO! 비즈니스도 아는 개발자로',
            '문제를 찾고 해결책을 만드는 능력 기르기',
            '돈이 되는 아이디어 구분하는 안목 키우기'
          ]
        }
      ]
    },
    {
      title: 'Value Creation',
      subtitle: '아이디어를 현실로',
      categories: [
        {
          name: 'Zero to One',
          description: '막연한 아이디어를 실제 서비스로 만들어가는 짜릿한 경험'
        },
        {
          name: '실전 프로젝트',
          description: '팀원들과 함께 만들고, 실제 사용자 피드백 받으며 성장하기'
        },
        {
          name: '스타트업 인큐베이팅',
          description: 'AINOS, RootEdu처럼 여러분의 아이디어도 진짜 스타트업으로 키워보세요'
        }
      ]
    }
  ];

  const achievements = {
    first: [
      '총 1,500만원 상당의 지원금 확보',
      'VC, Engineer, CEO 등 5회의 연사 초청',
      'AINOS, RootEdu, Potentivo Lab 등 다양한 팀 창업 활동 진행 중'
    ],
    second: [
      '왕중왕전 창업경진대회 수상',
      '2개 팀 시드 투자 검토 단계 & 1개 팀 해외 법인 설립',
      'Y-Ventures와의 전략적 파트너십 구축'
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Subtle Glassmorphism */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50/20" />
        
        {/* Metallic Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04]" />
        
        {/* Glass Elements */}
        <div className="absolute top-20 right-20 w-56 h-56 bg-sky-500/5 backdrop-blur-2xl rounded-full border border-sky-100/50 opacity-50" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/30 backdrop-blur-xl rounded-full border border-white/40 opacity-60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-sm mb-8">
              <div className="w-2 h-2 bg-sky-500 rounded-full" />
              <span className="text-sm font-semibold text-slate-700">Why Join Us</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
              Why you should
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-sky-600">Join us</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-medium leading-relaxed px-4">
              LLM 중심의 Generative AI가 만들어내는 격변의 시대,
              <br className="hidden md:block" />
              기술적 역량과 사업적 역량을 결합하여 실질적인 가치를 창출하는 실천형 학회입니다.
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

      {/* AI Native Section - New */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Statement */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 mb-8 leading-tight">
              의지만 있으면 <span className="text-gradient-brand font-semibold">무엇이든</span> 할 수 있는 시대
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              AI가 모든 장벽을 허물고 있습니다. 
              <br />
              이제 중요한 것은 전공이 아니라, <span className="font-semibold">AI를 얼마나 잘 활용하느냐</span>입니다.
            </p>

            {/* Two Columns for 문과/이과 */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="text-left">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    문과생이신가요?
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                  "나는 문과라서 개발은..."
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  이미 개발은 필수 소양입니다. ChatGPT, Claude, Cursor가 있는 지금, 
                  유능한 PM들은 백날 말할 시간에 프로토타이핑을 합니다.
                  여러분의 창의적인 아이디어를 직접 구현할 수 있습니다. 
                  기획부터 개발까지, AI와 함께라면 불가능은 없습니다.
                </p>
              </div>

              <div className="text-left">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    이과생이신가요?
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                  "나는 개발자라서 디자인은..."
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  이제는 핑계가 될 수 없습니다. Midjourney, DALL-E, Figma AI가 있는 세상, 
                  기술력에 감각까지 더할 수 있습니다. 
                  개발부터 디자인, 기획까지 AI가 당신을 풀스택 창업가로 만들어줍니다.
                </p>
              </div>
            </div>

            {/* Central Message */}
            <div className="bg-white border border-slate-200 p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                함께 <span className="text-gradient-brand">AI Native</span>가 됩시다
              </h3>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex items-start">
                  <span className="text-sky-500 mr-3 mt-1">✓</span>
                  <p className="text-slate-600">
                    <span className="font-semibold">Prompt Engineering</span> - AI와 대화하는 방법부터 시작합니다
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-sky-500 mr-3 mt-1">✓</span>
                  <p className="text-slate-600">
                    <span className="font-semibold">AI Tools Mastery</span> - 최신 AI 도구들을 실전에서 활용합니다
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-sky-500 mr-3 mt-1">✓</span>
                  <p className="text-slate-600">
                    <span className="font-semibold">AI-Powered Creation</span> - 아이디어를 실제 서비스로 구현합니다
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-sky-500 mr-3 mt-1">✓</span>
                  <p className="text-slate-600">
                    <span className="font-semibold">Future-Ready Mindset</span> - AI 시대를 선도하는 사고방식을 기릅니다
                  </p>
                </div>
              </div>
              
              <p className="mt-8 text-lg text-slate-700 font-medium">
                시대가 변했습니다. 이제 의지와 AI 활용 능력이 당신의 한계를 결정합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reasons - Elegant Design */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              우리가 존재하는 이유
            </h2>
            <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
            <p className="text-lg text-slate-600 font-medium">
              우리가 존재하는 이유와 추구하는 방향
            </p>
          </motion.div>

          <div className="space-y-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Number - Elegant Side Label */}
                  <div className="flex-shrink-0">
                    <span className="text-6xl font-extralight text-sky-500/20">
                      {reason.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">{reason.title}</h3>
                    <div className="space-y-3">
                      {reason.points.map((point, i) => (
                        <p key={i} className="text-slate-600 font-semibold leading-relaxed pl-4 border-l-2 border-slate-100">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Subtle separator */}
                {index < reasons.length - 1 && (
                  <div className="mt-20 w-24 h-px bg-slate-200 mx-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Elegant Layout */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              핵심 가치
            </h2>
            <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
            <p className="text-lg text-slate-600 font-medium">
              우리가 추구하는 가치와 실천 방법
            </p>
          </motion.div>

          <div className="space-y-32">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Header */}
                <div className="text-center mb-12">
                  <motion.h3 
                    className="text-3xl sm:text-4xl font-normal text-slate-900 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-slate-500 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {value.subtitle}
                  </motion.p>
                </div>
                
                {value.categories.length === 3 ? (
                  // Value Creation - Horizontal Flow
                  <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
                    {value.categories.map((category, i) => (
                      <motion.div 
                        key={i} 
                        className="flex-1 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                      >
                        <div className="mb-4">
                          <span className="text-3xl font-extralight text-sky-500/30">
                            0{i + 1}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">{category.name}</h4>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
                          {category.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Edge Tech and Sensitivity - Clean Lists
                  <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {value.categories.map((category, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h4 className="text-xl font-semibold text-slate-900 mb-6">{category.name}</h4>
                        <div className="space-y-4">
                          {category.items.map((item, j) => (
                            <div key={j} className="flex items-start">
                              <span className="text-sky-500 mr-3 mt-1 text-xs">▸</span>
                              <span className="text-slate-600 font-medium text-sm leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Elegant separator */}
                {index < coreValues.length - 1 && (
                  <div className="mt-24 w-32 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">성과와 활동</h2>
            <p className="text-base sm:text-lg text-slate-600">실천을 통해 이루어낸 구체적 성과</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card-professional p-8 hover-lift"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mb-6">
                1기
              </div>
              <ul className="space-y-3">
                {achievements.first.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-sky-500 mr-2 mt-1">•</span>
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="card-professional p-8 hover-lift"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mb-6">
                2기
              </div>
              <ul className="space-y-3">
                {achievements.second.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-sky-500 mr-2 mt-1">•</span>
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">CREAI+IT에 합류하세요</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 px-4">
              혼자서는 얻기 어려운 귀중한 경험,
              <br className="hidden md:block" />
              함께라면 LLM과 Generative AI의 무한한 가능성을 실질적 가치로 바꿔낼 수 있습니다.
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