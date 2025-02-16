// app/activities/page.js
export default function ActivitiesPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-fadeInUp">What We Do</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp delay-100">
            Generative AI와 Agentic System을 깊이 이해하고<br />
            실제 가치 창출로 연결하는 16주 커리큘럼을 제공합니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* 전반기 섹션 */}
        <section className="animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-black font-bold">1</div>
            <h2 className="text-4xl font-bold gradient-text">전반기: Agents & AI Implementation</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Agents: LLM 기반의 자율적 시스템</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Agent 기본 개념 & 사례</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• Workflows vs. Agents: 자율적 시스템 설계 원리</li>
                      <li>• LLM 기반 Tool-using Agent 아키텍처 이해</li>
                      <li>• Prompt Chaining, Routing, Parallelization 패턴</li>
                      <li>• Orchestrator-Workers, Evaluator-Optimizer 구조</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">실무 적용 사례 연구</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• 고객지원 Agent: Knowledge Base + API 연동</li>
                      <li>• 코딩 Agent: 자동 이슈 해결 & 테스트 루프</li>
                      <li>• 검색/크롤링 Agent: 정보 수집 & 가공 자동화</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Implementation Project</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Augmented LLM 실습</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• Model Context Protocol & LangChain 활용</li>
                      <li>• Neo4j 기반 Knowledge Graph 구축</li>
                      <li>• Langfuse로 LLM 모니터링 & 최적화</li>
                      <li>• 현업 AI 엔지니어의 실시간 코드 리뷰</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 후반기 섹션 */}
        <section className="animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-black font-bold">2</div>
            <h2 className="text-4xl font-bold gradient-text">후반기: Lean Startup & Zero to One</h2>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Lean Startup 접근</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">핵심 이론 & 실습</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• Pretotyping & 가설 기반 개발 방법론</li>
                      <li>• Build-Measure-Learn 피드백 루프</li>
                      <li>• 고객 개발론 & 시장 검증 프로세스</li>
                      <li>• Agent 기술의 비즈니스 모델 설계</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Zero to One Project</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">MVP 개발 & 시장 검증</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• Agentic System의 실제 서비스화</li>
                      <li>• 사용자 피드백 기반 반복 개선</li>
                      <li>• VC/액셀러레이터 대상 Demo Day</li>
                      <li>• IR Deck 작성 & 투자 유치 전략</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 추가 활동 섹션 */}
        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Additional Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">정기 특강 & 네트워킹</h3>
              <p className="text-gray-600">AI 대기업 엔지니어, 투자자, 스타트업 CEO와의 실무 교류</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지원금 & 파트너십</h3>
              <p className="text-gray-600">1,500만원 상당 지원금 및 클라우드 크레딧 제공</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alumni 커뮤니티</h3>
              <p className="text-gray-600">수료 후에도 지속되는 네트워크 & 성장 지원</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
