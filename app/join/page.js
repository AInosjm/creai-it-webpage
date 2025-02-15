// app/join/page.js
export default function JoinPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-sky-400 font-semibold mb-4 animate-fadeInUp">2024년 상반기 모집</span>
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-fadeInUp delay-100">Join CREAI+IT</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp delay-200">
            AI 기술과 창업 역량을 함께 키우며<br />
            혁신적인 미래를 만들어갈 동료를 찾습니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Qualification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">필수 요건</h3>
              <div className="pl-6 border-l-4 border-sky-500 space-y-4">
                <p className="text-lg text-charcoal">• Python 기초 문법 이해</p>
                <p className="text-lg text-charcoal">• Git을 활용한 프로젝트 협업 경험</p>
                <p className="text-lg text-charcoal">• AI/IT 분야에 대한 열정과 학습 의지</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">우대 사항</h3>
              <div className="pl-6 border-l-4 border-sky-500 space-y-4">
                <p className="text-lg text-charcoal">• LLM Application 실습 경험 (OpenAI API, HuggingFace 등)</p>
                <p className="text-lg text-charcoal">• 창업 대회/해커톤 참가 경험</p>
                <p className="text-lg text-charcoal">• 기업 인턴/프리랜서 프로젝트 경험</p>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Application Process</h2>
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">모집 일정</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-charcoal">서류 접수</span>
                      <span className="text-sky-600 font-semibold">3월 1일 - 15일</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-charcoal">서류 결과 발표</span>
                      <span className="text-sky-600 font-semibold">3월 20일</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-charcoal">인터뷰</span>
                      <span className="text-sky-600 font-semibold">3월 22일 - 29일</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-charcoal">최종 발표</span>
                      <span className="text-sky-600 font-semibold">3월 31일</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-charcoal">오리엔테이션</span>
                      <span className="text-sky-600 font-semibold">4월 3일</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">지원 절차</h3>
                  <div className="pl-6 border-l-4 border-sky-500 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">1. 온라인 지원서 제출</h4>
                      <p className="text-lg text-charcoal">지원 동기, 프로젝트 경험, 기술 스택 등 자유롭게 서술</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">2. 기술 인터뷰</h4>
                      <p className="text-lg text-charcoal">기술 역량, 협업 능력, 성장 가능성 평가</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">3. 커뮤니티 합류</h4>
                      <p className="text-lg text-charcoal">Slack 초대 및 오리엔테이션 참석</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">실전 역량 개발</h3>
              <p className="text-gray-600">최신 AI/IT 스택 습득과 창업 실무(BM 설계, 투자유치) 역량 동시 배양</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">전문가 네트워크</h3>
              <p className="text-gray-600">현업 엔지니어, 스타트업 창업자, VC 등 업계 전문가와의 직접 교류</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alumni Community</h3>
              <p className="text-gray-600">스타트업, 대기업, 해외 진출 등 다양한 커리어를 가진 동문 네트워크</p>
            </div>
          </div>
        </section>

        <div className="text-center animate-fadeInUp">
          <a
            href="https://forms.gle/example-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 text-black text-xl font-semibold px-12 py-5 rounded-xl shadow-lg hover:from-sky-700 hover:to-blue-800 transition-all duration-300"
          >
            지원하기
          </a>
        </div>
      </div>
    </div>
  );
}
