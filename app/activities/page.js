'use client'

export default function ActivitiesPage() {
  // 3 Seasons Overview
  const seasons = [
    {
      season: 1,
      title: 'Season 1: 프로토타이핑',
      period: 'Week 1-5',
      color: 'from-sky-500 to-blue-600',
      description: 'AI 기술의 기초를 다지고 아이디어를 빠르게 구현해보는 단계',
      highlights: [
        'AI 에이전트와 LLM 기초 학습',
        'RAG 시스템 구축 실습',
        '문제 발굴과 아이디어 검증',
        '빠른 프로토타입 개발',
        'MVP 테스트와 피드백'
      ]
    },
    {
      season: 2,
      title: 'Season 2: 프로덕트 제작',
      period: 'Week 6-10',
      color: 'from-violet-500 to-purple-600',
      description: '검증된 아이디어를 실제 사용 가능한 제품으로 발전시키는 단계',
      highlights: [
        '프로덕션 레벨 시스템 구축',
        '사용자 경험(UX) 최적화',
        '성능 튜닝과 최적화',
        '팀 협업과 프로젝트 관리',
        '실제 사용자 테스트'
      ]
    },
    {
      season: 3,
      title: 'Season 3: 수익화',
      period: 'Week 11-15',
      color: 'from-emerald-500 to-green-600',
      description: '제품을 시장에 출시하고 비즈니스 모델을 구축하는 단계',
      highlights: [
        '비즈니스 모델 수립',
        '고객 획득 전략',
        '성장 해킹과 마케팅',
        '투자 유치 준비',
        '데모데이 발표'
      ]
    }
  ];

  const tracks = [
    {
      title: '기술 트랙',
      number: '01',
      focus: 'AI/ML 엔지니어링',
      skills: [
        'LLM 애플리케이션 개발',
        '벡터 데이터베이스 & RAG',
        '에이전트 아키텍처',
        '모델 파인튜닝',
        '프로덕션 배포'
      ]
    },
    {
      title: '프로덕트 트랙',
      number: '02',
      focus: '프로덕트 매니지먼트',
      skills: [
        '문제 발굴',
        '사용자 리서치',
        '프로덕트 전략',
        '그로스 해킹',
        '데이터 분석'
      ]
    },
    {
      title: '비즈니스 트랙',
      number: '03',
      focus: '스타트업 창업',
      skills: [
        '비즈니스 모델 설계',
        '시장 검증',
        '펀드레이징 전략',
        '팀 빌딩',
        '시장 진출 전략'
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
        
        {/* Glass Elements */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-slate-200/20 backdrop-blur-2xl rounded-full border border-slate-200/30 opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-white/25 backdrop-blur-xl rounded-full border border-white/50 opacity-60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/45 backdrop-blur-md border border-white/60 shadow-sm mb-8">
              <div className="w-2 h-2 bg-slate-600 rounded-full" />
              <span className="text-sm font-semibold text-slate-700">Curriculum 2025</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8">
              2025-2 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 font-extrabold">커리큘럼</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              AI Agent 시대를 선도하는 15주 집중 프로그램
              <br className="hidden md:block" />
              체계적인 성장과 실전 경험을 통한 AI 전문가 양성
            </p>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-slate-300/60 flex justify-center pt-2 bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              학습 트랙
            </h2>
            <div className="w-12 h-px bg-slate-300 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <div
                key={track.title}
                className="bg-white p-8 border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <span className="text-6xl font-extralight text-slate-300">{track.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{track.title}</h3>
                <p className="text-sm text-sky-600 font-semibold mb-6">{track.focus}</p>
                <ul className="space-y-2">
                  {track.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start">
                      <span className="text-sky-500 mr-2">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Mid-page CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-700 mb-6">
              체계적인 커리큘럼으로 AI 전문가로 성장하세요
            </p>
            <a 
              href="/join" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              지원하기
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Seasons Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              커리큘럼 구성
            </h2>
            <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
            <p className="text-lg text-slate-600 font-medium mb-8">
              15주 동안 진행되는 3개의 시즌으로 체계적인 성장을 지원합니다
            </p>
            
            {/* Notion Link Button - Fixed Color */}
            <div>
              <a 
                href="https://www.notion.so/2517b287f0368041ab61cf868f49c0d3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                주차별 상세 커리큘럼 보기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-sm text-slate-500 mt-4">
                각 주차별 세부 내용, 과제, 참고 자료를 확인하실 수 있습니다
              </p>
            </div>
          </div>

          {/* Three Seasons */}
          <div className="grid md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <div
                key={season.season}
                className="relative"
              >
                <div className="bg-white border border-slate-200 p-8 h-full hover:shadow-xl transition-all duration-300">
                  {/* Season Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center">
                    <span className="text-6xl font-extralight text-slate-200">
                      {season.season}
                    </span>
                  </div>
                  
                  {/* Season Header */}
                  <div className="mb-6">
                    <div className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-3">
                      {season.period}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {season.title}
                    </h3>
                    <p className="text-slate-600 font-bold leading-relaxed">
                      {season.description}
                    </p>
                  </div>
                  
                  {/* Highlights */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      주요 활동
                    </p>
                    <ul className="space-y-2">
                      {season.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-slate-600 font-semibold flex items-start">
                          <span className="text-sky-500 mr-2 mt-0.5">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Subtle gradient line at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${season.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Benefits */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              지원 및 혜택
            </h2>
            <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
            <p className="text-lg text-slate-600 font-semibold">
              여러분의 성장을 위한 전폭적인 지원
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '멘토링 & 네트워킹',
                number: '01',
                items: [
                  'Google, OpenAI 현직자 멘토링',
                  'Y-Combinator 출신 창업가 세미나',
                  'VC 네트워킹 세션',
                  'Alumni 1:1 커피챗'
                ]
              },
              {
                title: '재정 & 리소스 지원',
                number: '02',
                items: [
                  '프로젝트당 최대 1,500만원',
                  'AWS/GCP 크레딧 $5,000',
                  'OpenAI API 크레딧',
                  '전용 GPU 서버 액세스'
                ]
              },
              {
                title: '성장 & 기회',
                number: '03',
                items: [
                  '인턴십 연계 프로그램',
                  '창업 인큐베이팅 지원',
                  '글로벌 컨퍼런스 참가',
                  'Demo Day 투자 연계'
                ]
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center"
              >
                <div className="mb-6">
                  <span className="text-6xl font-extralight text-slate-300">{benefit.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              AI 혁명에 함께할 준비가 되셨나요?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-semibold px-4">
              CREAI+IT 4기와 함께 AI의 미래를 만들어갈 준비가 되셨나요?
            </p>
            <a href="/join" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-none hover:bg-slate-100 transition-colors">
              지원하기
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}