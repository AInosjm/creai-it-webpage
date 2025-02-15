// app/why/page.js
export default function WhyPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-slideUp">Why CREAI+IT</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-slideUp delay-100">
            AI/IT 분야의 단순한 학습을 넘어,<br />
            실전 경험과 전문가 네트워크를 통해<br />
            여러분의 혁신적인 아이디어를 시장의 가치로 만들어냅니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">기존 학습 모델의 한계</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-red-600">×</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">단편적 이론 학습</h3>
              <p className="text-gray-600">
                이론 자체는 훌륭하지만, 실제 프로젝트로 이어지기 어려운 학습 구조
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-red-600">×</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">최신 트렌드 부재</h3>
              <p className="text-gray-600">
                매일 새로워지는 AI/IT 기술을 혼자서는 따라가기 벅찬 현실
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-red-600">×</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">비즈니스 관점 결여</h3>
              <p className="text-gray-600">
                기술과 시장을 연결해줄 조력자 없이는 사업화 단계에서 난관에 봉착
              </p>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">CREAI+IT의 차별화된 솔루션</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">현업 전문가와의 직결 세션</h3>
              <div className="pl-6 border-l-4 border-sky-500 space-y-4">
                <p className="text-lg text-charcoal">
                  • AI 엔지니어, MLOps 전문가, 스타트업 창업가 등 실무자의 직접 멘토링
                </p>
                <p className="text-lg text-charcoal">
                  • Neo4j, LangChain, Langfuse, OpenAI API 등 최신 AI 스택 실습
                </p>
                <p className="text-lg text-charcoal">
                  • 격주 워크샵을 통한 실시간 기술 트렌드 캐치업
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">AI + 창업 융합 커리큘럼</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">전반기: AI 기술 역량 강화</h4>
                  <ul className="space-y-2 text-charcoal">
                    <li>• LLM 아키텍처 심화 학습</li>
                    <li>• MLOps 파이프라인 구축</li>
                    <li>• Knowledge Graph 실전 적용</li>
                  </ul>
                </div>
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">후반기: 창업 실무 집중</h4>
                  <ul className="space-y-2 text-charcoal">
                    <li>• Lean Startup 방법론</li>
                    <li>• MVP 개발 및 시장 검증</li>
                    <li>• 투자자 피드백 및 피칭</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">강력한 네트워크 & 피드백 루프</h3>
              <div className="pl-6 border-l-4 border-sky-500 space-y-4">
                <p className="text-lg text-charcoal">
                  • 학회원 간 지속적인 프로젝트 협업 및 피드백
                </p>
                <p className="text-lg text-charcoal">
                  • VC, 액셀러레이터와의 정기적인 교류 세션
                </p>
                <p className="text-lg text-charcoal">
                  • 기업·투자·기술 전분야 커버하는 인적 네트워크 구축
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
