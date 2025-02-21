// app/activities/page.js
export default function ActivitiesPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-16 md:py-32 px-4 md:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-8 animate-fadeInUp">What We Do</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fadeInUp delay-100">
            Generative AI와 Agentic System을 깊이 이해하고<br className="hidden md:block" />
            실제 가치 창출로 연결하는 16주 커리큘럼을 제공합니다.
          </p>
          <div className="mt-8">
            <a 
              href="https://creai-it.notion.site"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
            >
              <span>상세 커리큘럼 보기</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24 space-y-12 md:space-y-24">
        {/* 전반기 섹션 */}
        <section className="animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-sky-dark font-bold">1</div>
            <h2 className="text-2xl md:text-4xl font-bold gradient-text">전반기: Agents & Problem Discovery</h2>
          </div>
          
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-12 shadow-xl border border-gray-100">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Agents: LLM 기반의 자율적 시스템</h3>
                <div className="pl-4 md:pl-6 border-l-4 border-sky-500 space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Agent 기본 개념 & 사례</h4>
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-600">
                      <li>• Workflows vs. Agents: 자율적 시스템 설계 원리</li>
                      <li>• LLM 기반 Tool-using Agent 아키텍처 이해</li>
                      <li>• Prompt Chaining, Routing, Parallelization 패턴</li>
                      <li>• Orchestrator-Workers, Evaluator-Optimizer 구조</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">실무 적용 사례 연구</h4>
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-600">
                      <li>• 고객지원 Agent: Knowledge Base + API 연동</li>
                      <li>• 코딩 Agent: 자동 이슈 해결 & 테스트 루프</li>
                      <li>• 검색/크롤링 Agent: 정보 수집 & 가공 자동화</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Problem Discovery & Implementation</h3>
                <div className="pl-4 md:pl-6 border-l-4 border-sky-500 space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">문제 발굴 방법론</h4>
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-600">
                      <li>• 산업별 AI 적용 가능성 분석 프레임워크</li>
                      <li>• 사용자 Pain Point 발굴 & 검증 기법</li>
                      <li>• AI 솔루션 적합성 평가 매트릭스</li>
                      <li>• ROI 기반 우선순위 설정 방법</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Augmented LLM 실습</h4>
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-600">
                      <li>• Model Context Protocol & LangChain 활용</li>
                      <li>• Neo4j 기반 Knowledge Graph 구축</li>
                      <li>• Langfuse로 LLM 모니터링 & 최적화</li>
                      <li>• 배운 개념 기반 Agentic System 구현</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 후반기 섹션 */}
        <section className="animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-black font-bold">2</div>
            <h2 className="text-2xl md:text-4xl font-bold gradient-text">후반기: Advanced AI & Market Validation</h2>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-12 shadow-xl border border-gray-100">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">심화 LLM Application</h3>
                <div className="pl-4 md:pl-6 border-l-4 border-sky-500 space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">최신 기술 트렌드 & 구현</h4>
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-600">
                      <li>• Multi-Modal LLM 활용 & 통합</li>
                      <li>• RAG 고도화 & Embedding 최적화</li>
                      <li>• Fine-tuning & LoRA 적용 실습</li>
                      <li>• AI 시스템 확장성 & 비용 최적화</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">시장 검증 & 성장 전략</h3>
                <div className="pl-4 md:pl-6 border-l-4 border-sky-500 space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">Lean Startup 실전 적용</h4>
                    <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-gray-600">
                      <li>• 가설 검증 기반 MVP 설계 & 개발</li>
                      <li>• 사용자 피드백 수집 & 분석 방법론</li>
                      <li>• Product-Market Fit 달성 전략</li>
                      <li>• AI 서비스의 수익화 모델 설계</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 추가 활동 섹션 */}
        <section className="animate-fadeInUp">
          <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-8 md:mb-12 text-center">Growth Support Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Industry Network</h3>
              <p className="text-sm md:text-base text-gray-600">AI 대기업 엔지니어, VC, 스타트업 CEO들과의 정기적인 교류 및 멘토링 기회 제공</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Startup Support</h3>
              <p className="text-sm md:text-base text-gray-600">프로젝트당 최대 1,500만원 지원금, AWS/GCP 크레딧, 개발 장비 및 공간 제공</p>
            </div>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Alumni Community</h3>
              <p className="text-sm md:text-base text-gray-600">수료 후 Alumni 네트워크 참여, 후속 프로젝트 지원 및 창업 연계 프로그램 제공</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <a 
            href="https://creai-it.notion.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-navy to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>전체 커리큘럼 자세히 보기</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
