// app/join/page.js
export default function JoinPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy via-sky-900 to-navy min-h-[80vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/30 to-navy/60" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block text-sky-400 font-semibold text-base sm:text-lg tracking-wider text-white mb-4 sm:mb-6 animate-fadeInUp px-4 sm:px-6 py-2 rounded-full border border-sky-400/30 backdrop-blur-sm">2025년 상반기 모집</span>
          <h1 className="text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 sm:mb-8 animate-fadeInUp delay-100">Join CREAI+IT</h1>
          <p className="text-lg sm:text-2xl text-white/80 leading-relaxed animate-fadeInUp delay-200 font-light">
            AI 기술과 창업 역량을 함께 키우며<br className="hidden sm:block" />
            혁신적인 미래를 만들어갈 <span className="text-sky-400 font-medium">열정적인 동료</span>를 찾습니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-32 space-y-16 sm:space-y-32">
        <section className="animate-fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 mb-8 sm:mb-16 text-center">Qualification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div className="group bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl sm:shadow-2xl border border-white/20 hover:border-sky-500/30 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-6 sm:mb-8 group-hover:text-sky-600 transition-colors">필수 요건</h3>
              <div className="pl-4 sm:pl-8 border-l-4 border-sky-500/50 space-y-4 sm:space-y-6">
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• Python 기초 문법 이해</p>
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• AI/IT 분야에 대한 열정과 학습 의지</p>
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• 매주 월요일 19:00-22:00 정규 세션 필참 가능</p>
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• 매주 목요일 20:00-22:00 정규 세션 필참 가능</p>
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• 전후반기 팀 프로젝트 성실 참여 가능</p>
              </div>
            </div>
            <div className="group bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl sm:shadow-2xl border border-white/20 hover:border-sky-500/30 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-6 sm:mb-8 group-hover:text-sky-600 transition-colors">우대 사항</h3>
              <div className="pl-4 sm:pl-8 border-l-4 border-sky-500/50 space-y-4 sm:space-y-6">
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• LLM Application 실습 경험 (OpenAI API, HuggingFace 등)</p>
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• 창업 대회/해커톤 참가 경험</p>
                <p className="text-base sm:text-xl text-charcoal/80 hover:text-sky-900 transition-colors">• 기업 인턴/프리랜서 프로젝트 경험</p>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 mb-8 sm:mb-16 text-center">Application Process</h2>
          <div className="bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-16 shadow-xl sm:shadow-2xl border border-white/20">
            <div className="space-y-8 sm:space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-6 sm:mb-10">모집 일정</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group hover:bg-sky-50/50 p-4 rounded-xl transition-all">
                      <span className="text-lg sm:text-xl text-charcoal/80">서류 접수</span>
                      <span className="text-lg sm:text-xl text-sky-600 font-semibold mt-2 sm:mt-0">2월 21일 - 3월 3일</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group hover:bg-sky-50/50 p-4 rounded-xl transition-all">
                      <span className="text-lg sm:text-xl text-charcoal/80">서류 결과 발표</span>
                      <span className="text-lg sm:text-xl text-sky-600 font-semibold mt-2 sm:mt-0">3월 5일</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group hover:bg-sky-50/50 p-4 rounded-xl transition-all">
                      <span className="text-lg sm:text-xl text-charcoal/80">인터뷰</span>
                      <span className="text-lg sm:text-xl text-sky-600 font-semibold mt-2 sm:mt-0">3월 6일 - 7일</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group hover:bg-sky-50/50 p-4 rounded-xl transition-all">
                      <span className="text-lg sm:text-xl text-charcoal/80">최종 발표</span>
                      <span className="text-lg sm:text-xl text-sky-600 font-semibold mt-2 sm:mt-0">3월 8일</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group hover:bg-sky-50/50 p-4 rounded-xl transition-all">
                      <span className="text-lg sm:text-xl text-charcoal/80">오리엔테이션</span>
                      <span className="text-lg sm:text-xl text-sky-600 font-semibold mt-2 sm:mt-0">3월 9일</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-6 sm:mb-10">지원 절차</h3>
                  <div className="pl-4 sm:pl-8 border-l-4 border-sky-500/50 space-y-6 sm:space-y-8">
                    <div className="group hover:translate-x-2 transition-transform">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">1. 구글폼 지원서 제출</h4>
                      <p className="text-base sm:text-xl text-charcoal/80">지원 동기, 프로젝트 경험, 기술 스택 등을 지원서 양식에 맞춰 작성</p>
                    </div>
                    <div className="group hover:translate-x-2 transition-transform">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">2. 면접</h4>
                      <p className="text-base sm:text-xl text-charcoal/80">열정, 창업 의지 등을 면접을 통해 평가</p>
                    </div>
                    <div className="group hover:translate-x-2 transition-transform">
                      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">3. CREAI+IT 오리엔테이션</h4>
                      <p className="text-base sm:text-xl text-charcoal/80">오리엔테이션 참석</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 mb-8 sm:mb-16 text-center">Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
            <div className="group bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl sm:shadow-2xl border border-white/20 hover:border-sky-500/30 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">🚀</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-sky-600 transition-colors">실전 역량 개발</h3>
              <p className="text-base sm:text-xl text-gray-600">최신 AI/IT 스택 습득과 창업 실무(BM 설계, 투자유치) 역량 동시 배양</p>
            </div>
            <div className="group bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl sm:shadow-2xl border border-white/20 hover:border-sky-500/30 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">🤝</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-sky-600 transition-colors">전문가 네트워크</h3>
              <p className="text-base sm:text-xl text-gray-600">현업 엔지니어, 스타트업 창업자, VC 등 업계 전문가와의 직접 교류</p>
            </div>
            <div className="group bg-white/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl sm:shadow-2xl border border-white/20 hover:border-sky-500/30 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">🌏</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-sky-600 transition-colors">Alumni Community</h3>
              <p className="text-base sm:text-xl text-gray-600">스타트업, 대기업, 해외 진출 등 다양한 커리어를 가진 동문 네트워크</p>
            </div>
          </div>
        </section>

        <div className="text-center animate-fadeInUp">
          <a
            href="https://forms.gle/example-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-600 to-blue-600 text-charcoal text-xl sm:text-2xl font-semibold px-8 sm:px-16 py-4 sm:py-6 rounded-full shadow-xl sm:shadow-2xl hover:shadow-sky-500/25 hover:scale-105 transition-all duration-300"
          >
            지원하기
          </a>
        </div>
      </div>
    </div>
  );
}
