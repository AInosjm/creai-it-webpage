// app/activities/page.js
export default function ActivitiesPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-fadeInUp">What We Do</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp delay-100">
            AI 기술 전문성과 창업 역량을 동시에 개발하는<br />
            체계적인 16주 프로그램을 운영합니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* 전반기 섹션 */}
        <section className="animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">1</div>
            <h2 className="text-4xl font-bold gradient-text">전반기: AI Implementation Project</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Session (Week 1-4)</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Core Technologies</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• LLM 내부 메커니즘 이해 및 파인튜닝 실습</li>
                      <li>• LangChain: 프롬프트 체이닝, 에이전트 설계, DB 연동</li>
                      <li>• Neo4j: 그래프DB 기반 지식 그래프 구축</li>
                      <li>• Langfuse: LLM 모니터링, 로깅, 비용 최적화</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Weekly Team Projects</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• 챗봇 기능 확장 및 고도화</li>
                      <li>• QA 파이프라인 설계 및 구현</li>
                      <li>• 실시간 현업 엔지니어 코드 리뷰</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Project (Week 5-8)</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">PoC Development</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• Neo4j 기반 지능형 FAQ 시스템 구축</li>
                      <li>• LangChain 활용 문서 분석 파이프라인 개발</li>
                      <li>• 실시간 피드백 및 성능 최적화</li>
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">2</div>
            <h2 className="text-4xl font-bold gradient-text">후반기: Zero to One Project</h2>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Startup Session (Week 9-12)</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Startup Fundamentals</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• Pretotyping & 가설 기반 개발 방법론</li>
                      <li>• Lean Startup: Build-Measure-Learn 실습</li>
                      <li>• 시장 검증 및 고객 개발 프로세스</li>
                      <li>• IR 덱 작성 및 Elevator Pitch 기법</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Zero to One Project (Week 13-16)</h3>
                <div className="pl-6 border-l-4 border-sky-500 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">MVP Launch</h4>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li>• AI 기술 기반 실제 서비스 개발</li>
                      <li>• 사용자 테스트 및 핵심 지표 분석</li>
                      <li>• VC/엑셀러레이터 대상 Demo Day</li>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Internal Hackathon</h3>
              <p className="text-gray-600">24-48시간 집중 개발을 통한 빠른 프로토타입 제작</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Sessions</h3>
              <p className="text-gray-600">AI 대기업 엔지니어 및 스타트업 CEO 특강</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mx-auto mb-6 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Study Groups</h3>
              <p className="text-gray-600">LLM 보안, MLOps 등 심화 주제 연구</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
