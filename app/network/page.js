// app/network/page.js
export default function NetworkPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-slideUp">Our Network</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-slideUp delay-100">
            CREAI+IT는 내부 커뮤니티의 긴밀한 협력과<br />
            글로벌 AI·스타트업 생태계와의 연결을 통해<br />
            여러분의 혁신을 현실로 만들어갑니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Internal Networking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">정기 스터디 그룹</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• LLM Prompt Engineering 심화</li>
                <li>• AI 윤리·거버넌스</li>
                <li>• Data-Driven Startup</li>
                <li>• MLOps Best Practices</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 발표회</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 격주 진행 프로젝트 리뷰</li>
                <li>• 팀간 상호 피드백</li>
                <li>• 공동 디버깅 세션</li>
                <li>• 아이디어 발전 워크샵</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center">
                {/* Icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">해커톤 & 아이디어톤</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 24-48시간 집중 개발</li>
                <li>• 창의적 솔루션 도출</li>
                <li>• 팀 빌딩 기회</li>
                <li>• 수시 진행</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">External Networking</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Demo Day & IR</h3>
              <div className="pl-6 border-l-4 border-sky-500 space-y-4">
                <p className="text-lg text-charcoal">
                  • 매 학기 말 투자자·액셀러레이터·스타트업 대표 초청
                </p>
                <p className="text-lg text-charcoal">
                  • 팀별 프로젝트 발표 및 현장 피드백
                </p>
                <p className="text-lg text-charcoal">
                  • 실제 투자 유치 기회 제공
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Expert Sessions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">기술 특강</h4>
                  <ul className="space-y-2 text-charcoal">
                    <li>• AI 대기업 수석 엔지니어</li>
                    <li>• MLOps 전문가</li>
                    <li>• AI 보안 전문가</li>
                  </ul>
                </div>
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">창업 특강</h4>
                  <ul className="space-y-2 text-charcoal">
                    <li>• 시리즈 B+ 스타트업 CEO</li>
                    <li>• VC 파트너</li>
                    <li>• 글로벌 액셀러레이터</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Strategic Partnerships</h3>
              <div className="pl-6 border-l-4 border-sky-500 space-y-4">
                <p className="text-lg text-charcoal">
                  • 국내외 주요 액셀러레이터와 협력 MOU
                </p>
                <p className="text-lg text-charcoal">
                  • AWS Activate, GCP for Startups 등 클라우드 크레딧 지원
                </p>
                <p className="text-lg text-charcoal">
                  • Slush, Web Summit 등 글로벌 컨퍼런스 참가 기회
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
