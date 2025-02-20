// app/network/page.js
export default function NetworkPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-16 sm:py-32 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-8 animate-fadeInUp">Our Network</h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed animate-fadeInUp delay-100">
            CREAI+IT는 내부 커뮤니티의 긴밀한 협력과<br className="hidden sm:block" />
            글로벌 AI·스타트업 생태계와의 연결을 통해<br className="hidden sm:block" />
            여러분의 혁신을 현실로 만들어갑니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
        <section className="animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6 sm:mb-8 text-center">Internal Networking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg sm:rounded-xl mb-4 flex items-center justify-center">
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">정기 스터디 그룹</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li>• LLM Prompt Engineering 심화</li>
                <li>• AI 윤리·거버넌스</li>
                <li>• Data-Driven Startup</li>
                <li>• MLOps Best Practices</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg sm:rounded-xl mb-4 flex items-center justify-center">
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">프로젝트 발표회</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li>• 격주 진행 프로젝트 리뷰</li>
                <li>• 팀간 상호 피드백</li>
                <li>• 공동 디버깅 세션</li>
                <li>• 아이디어 발전 워크샵</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg sm:rounded-xl mb-4 flex items-center justify-center">
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">해커톤 & 아이디어톤</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                <li>• 24-48시간 집중 개발</li>
                <li>• 창의적 솔루션 도출</li>
                <li>• 팀 빌딩 기회</li>
                <li>• 수시 진행</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8 sm:mb-12 text-center">External Networking</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6">Demo Day & IR</h3>
              <div className="pl-4 sm:pl-6 border-l-4 border-sky-500 space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-charcoal">
                  • 매 학기 말 투자자·액셀러레이터·스타트업 대표 초청과 함께 학회 Demo Day
                </p>
                <p className="text-base sm:text-lg text-charcoal">
                  • 팀별 프로젝트 발표 및 현장 피드백
                </p>
                <p className="text-base sm:text-lg text-charcoal">
                  • 실제 투자 유치 기회 제공
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6">Expert Sessions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="pl-4 sm:pl-6 border-l-4 border-sky-500">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">기술 특강</h4>
                  <ul className="space-y-3 sm:space-y-4 text-charcoal">
                    <li className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base font-medium">• AI 대기업 수석 엔지니어</p>
                      <p className="text-xs sm:text-sm text-gray-600 pl-3 sm:pl-4">AI 프로젝트 사례와 현업 노하우를 통한 실무 중심 기술 트렌드 분석</p>
                    </li>
                    <li className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base font-medium">• MLOps 전문가</p>
                      <p className="text-xs sm:text-sm text-gray-600 pl-3 sm:pl-4">머신러닝 파이프라인의 효율적 구축부터 운영까지, 베스트 프랙티스와 실무 팁 공유 및 학습 활동</p>
                    </li>
                  </ul>
                </div>
                <div className="pl-4 sm:pl-6 border-l-4 border-sky-500">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">창업 특강</h4>
                  <ul className="space-y-3 sm:space-y-4 text-charcoal">
                    <li className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base font-medium">• 시리즈 B+ 스타트업 CEO</p>
                      <p className="text-xs sm:text-sm text-gray-600 pl-3 sm:pl-4">빠른 스케일업과 투자 유치 사례를 중심으로 보는 스타트업 성장 전략</p>
                    </li>
                    <li className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base font-medium">• VC 파트너</p>
                      <p className="text-xs sm:text-sm text-gray-600 pl-3 sm:pl-4">스타트업의 가치 평가와 성공적인 투자 유치 노하우</p>
                    </li>
                    <li className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base font-medium">• 글로벌 액셀러레이터</p>
                      <p className="text-xs sm:text-sm text-gray-600 pl-3 sm:pl-4">해외 시장 진출 기회 발굴</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6">Strategic Partnerships</h3>
              <div className="pl-4 sm:pl-6 border-l-4 border-sky-500 space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-charcoal">
                  • Y-Venture와의 협업
                </p>
                <p className="text-base sm:text-lg text-charcoal">
                  • Disqueit 등의 커뮤니티와 파트너쉽
                </p>
                <p className="text-base sm:text-lg text-charcoal">
                  • AWS Activate, GCP for Startups 등 클라우드 크레딧 지원
                </p>
                <p className="text-base sm:text-lg text-charcoal">
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
