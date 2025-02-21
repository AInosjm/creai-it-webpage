// app/about/page.js
export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-16 sm:py-32 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 animate-slideUp">Where Technology Turns Into Value</h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 font-light animate-slideUp delay-100 px-2">
            LLM을 중심으로 한 Generative AI가 세상의 패러다임을 뒤흔들고 있습니다.<br className="hidden sm:block" />
            우리는 이 전례 없는 기회를 포착하고, 실질적 가치로 전환하고자 합니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 space-y-12 sm:space-y-24">
        <section className="animate-slideUp relative bg-gradient-to-br from-white to-sky-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border border-sky-100/50">
          <div className="absolute inset-0 bg-grid-sky/[0.03] bg-[size:20px_20px] rounded-2xl sm:rounded-3xl" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="sm:w-1/2">
                <h2 className="text-3xl sm:text-5xl font-bold gradient-text mb-8 sm:mb-12 flex items-center">
                  <span className="bg-sky-500/10 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  Our Story
                </h2>
                <div className="text-base sm:text-xl text-gray-700 leading-relaxed space-y-4 sm:space-y-8">
                  <p className="bg-white/50 backdrop-blur rounded-xl p-4 sm:p-6 shadow-sm border border-sky-50 hover:shadow-md transition-shadow">
                    GPT-4가 세상에 공개된 이후, 기술 발전의 속도는 상상을 초월하고 있습니다.
                    기존의 시스템과 업계 판도가 단 몇 개월 만에 바뀌는 모습이 곳곳에서 포착되고 있습니다.
                  </p>
                  <p className="bg-white/50 backdrop-blur rounded-xl p-4 sm:p-6 shadow-sm border border-sky-50 hover:shadow-md transition-shadow">
                    하지만 이런 변화를 진지하게 받아들이고 구체적 행동으로 옮기려는 단체는 많지 않았습니다. 대부분이 가벼운 관심을 가지는 정도에서 그쳤죠. 우리는 이런 변화를 진지하게 받아들이고 구체적 행동으로 옮기려고 합니다. <br />
                    그렇게 <strong>CREAI+IT</strong>가 탄생했습니다.
                  </p>
                </div>
              </div>
              <div className="sm:w-1/2">
                <img 
                  src="/creai_it_activity1.jpeg" 
                  alt="CREAI+IT 활동 사진" 
                  className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-xl p-4 sm:p-8 shadow-sm border border-sky-100 hover:shadow-md transition-shadow mt-8">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 text-center italic">
                "세상의 변화에 적응하고, 가장 최신의 기술을 이해하며,<br />
                이를 레버리지해 가치를 만들어내는 인재를 육성하는 것"<br />
                <span className="text-base sm:text-lg mt-3 sm:mt-4 block text-gray-600">이것이 우리가 창립 초기부터 한결같이 지켜온 미션입니다.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8 sm:mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">Quick Adaptation</h3>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              오늘의 최첨단은 내일의 구식입니다. 하루에도 수백 개의 모델 논문 프로덕트가 쏟아지고, 기획된 서비스가 하루 아침에 백지화가 되곤 합니다. <br/><br/>
              우린 그 빠른 흐름을 지속적으로 학습하고 추적하여 남들보다 한 발 앞서 나가는 경험을 만들어 나갑니다. 
              </p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">Sensitivity</h3>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              변화를 읽지 못하면, 아무리 좋은 기술도 무용지물입니다. 우리는 최신 AI 지식 뿐 아니라, 시장 동향과 사용자 니즈를 관찰·분석하는 감각을 키웁니다. <br/><br/>
              남들보다 빠르고 예민하게 변화를 읽고 따라가며 다음의 변화를 만들어 나갑니다.
              </p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4">Value Creation</h3>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              Lean StartUp 방법론을 기반으로 아이디어를 빠르게 검증하고 실패하기를 반복해 나가는 과정을 직접 수행합니다. 이 과정에서 쌓인 경험은 커다란 성장을 가져다줄 자양분이 될 것입니다. <br/><br/>
              우리는 그 경험을 바탕으로 더 나은 아이디어를 만들어 나가고, 그 아이디어를 실현시키며 가치를 창출합니다. 
              </p>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-8 sm:mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4 sm:mb-6">기술 + 사업 역량의 균형</h3>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed">
                학생/엔지니어든, 기획/비즈니스 출신이든, 서로의 역량을 나누고 배우며 통합적 시각을 키웁니다.
                AI Implementation부터 Zero to One 프로젝트까지, 기술과 사업이 만나는 전 과정을 체계적으로 경험합니다.
              </p>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-4 sm:mb-6">실무로의 연결</h3>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed">
                풍부한 지원금, 외부 스폰서십, 연사 초청, 네트워크 구축을 통해 
                구성원들이 "당장 시도"해볼 수 있는 환경을 제공합니다.
                실패해도 괜찮습니다. 우리는 시도와 학습을 통한 성장을 지원합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6 sm:mb-8">Our Journey</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-bold text-sky-600">24-1기</span>
                </div>
                <div className="sm:col-span-3">
                  <ul className="text-base sm:text-lg text-charcoal space-y-3 sm:space-y-4">
                    <li>• 총 1,500만원 상당의 지원금 확보 → 프로젝트 진행 및 세미나 운영에 직접 활용</li>
                    <li>• VC, Engineer, CEO 등 5회의 연사 초청 → 현장의 생생한 목소리 청취</li>
                    <li>• 3개 팀 창업 활동 진행 → 실제 법인 설립 및 투자 검토 단계 진입</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8">
                <div className="text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-bold text-sky-600">24-2기</span>
                </div>
                <div className="sm:col-span-3">
                  <ul className="text-base sm:text-lg text-charcoal space-y-3 sm:space-y-4">
                    <li>• 왕중왕전 창업경진대회 수상 → Generative AI 솔루션으로 두각</li>
                    <li>• 2개 팀 추가 창업 활동 지속 → 시장 검증 단계 진행 중</li>
                    <li>• Y-Ventures와의 전략적 파트너십 → 투자자 네트워크 확장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="sm:w-1/2 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6 sm:mb-8">Join the Journey</h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 leading-relaxed">
                삶을 바꿀 기회는 언제나 급격한 변화 속에서 탄생합니다.<br />
                CREAI+IT에서, 그 기회를 움켜쥐고 새로운 가치를 만들어나갈<br className="hidden sm:block" />
                주인공이 되어보세요.
              </p>
              <a
                href="/join"
                className="inline-block bg-white text-sky-600 text-lg sm:text-xl font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-lg sm:rounded-xl shadow-lg hover:bg-sky-50 transition-all duration-300"
              >
                지원하기
              </a>
            </div>
            <div className="sm:w-1/2">
              <img 
                src="/creai_it_activity2.jpeg"
                alt="CREAI+IT 활동 사진"
                className="w-full rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
