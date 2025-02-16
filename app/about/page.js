// app/about/page.js
export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-white mb-6 animate-slideUp">Where Technology Turns Into Value</h1>
          <p className="max-w-3xl mx-auto text-xl text-white/90 font-light animate-slideUp delay-100">
            LLM을 중심으로 한 Generative AI가 세상의 패러다임을 뒤흔들고 있습니다.<br />
            우리는 이 전례 없는 기회를 포착하고, 실질적 가치로 전환하고자 합니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-8">Our Story</h2>
          <div className="text-xl text-gray-700 leading-relaxed space-y-6">
            <p>
              GPT-4가 세상에 공개된 이후, 기술 발전의 속도는 상상을 초월하고 있습니다.
              기존의 시스템과 업계 판도가 단 몇 개월 만에 바뀌는 모습이 곳곳에서 포착되고 있습니다.
            </p>
            <p>
              하지만 의외로 이런 변화를 진지하게 받아들이고 구체적 행동으로 옮기려는 단체는 많지 않았습니다.
              CREAI+IT는 바로 이 지점에서 시작되었습니다.
            </p>
            <p>
              "세상의 변화에 적응하고, 가장 최신의 기술을 이해하며,<br />
              이를 레버리지해 가치를 만들어내는 인재를 육성하는 것"<br />
              이것이 우리가 창립 초기부터 한결같이 지켜온 미션입니다.
            </p>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-4">Edge Tech</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                오늘의 최첨단이 내일의 구식이 될 수 있습니다. 우리는 항상 가장 최신의 기술을 학습하고,
                그 흐름을 지속적으로 추적함으로써 남들보다 한 발 앞서나가는 실전 경험을 제공합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-4">Sensitivity</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                변화를 읽지 못하면, 아무리 좋은 기술도 빛을 보지 못합니다.
                우리는 LLM 등 최신 AI 지식뿐 아니라, 시장 동향과 사용자 니즈를 관찰·분석하는 감각을 키웁니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-4">Value Creation</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                린스타트업 방법론을 기반으로 "아이디어 → MVP → 시장 피드백 → 개선"의 과정을 직접 수행합니다.
                이 과정에서 쌓인 경험은 언젠가 커다란 성장을 가져다줄 자양분이 됩니다.
              </p>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-6">기술 + 사업 역량의 균형</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                학생/엔지니어든, 기획/비즈니스 출신이든, 서로의 역량을 나누고 배우며 통합적 시각을 키웁니다.
                AI Implementation부터 Zero to One 프로젝트까지, 기술과 사업이 만나는 전 과정을 체계적으로 경험합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-6">실무로의 연결</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                풍부한 지원금, 외부 스폰서십, 연사 초청, 네트워크 구축을 통해 
                구성원들이 "당장 시도"해볼 수 있는 환경을 제공합니다.
                실패해도 괜찮습니다. 우리는 시도와 학습을 통한 성장을 지원합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-8">Our Journey</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center md:text-left">
                  <span className="text-2xl font-bold text-sky-600">24-1기</span>
                </div>
                <div className="md:col-span-3">
                  <ul className="text-lg text-charcoal space-y-4">
                    <li>• 총 1,500만원 상당의 지원금 확보 → 프로젝트 진행 및 세미나 운영에 직접 활용</li>
                    <li>• VC, Engineer, CEO 등 5회의 연사 초청 → 현장의 생생한 목소리 청취</li>
                    <li>• 3개 팀 창업 활동 진행 → 실제 법인 설립 및 투자 검토 단계 진입</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center md:text-left">
                  <span className="text-2xl font-bold text-sky-600">24-2기</span>
                </div>
                <div className="md:col-span-3">
                  <ul className="text-lg text-charcoal space-y-4">
                    <li>• 왕중왕전 창업경진대회 수상 → Generative AI 솔루션으로 두각</li>
                    <li>• 2개 팀 추가 창업 활동 지속 → 시장 검증 단계 진행 중</li>
                    <li>• Y-Ventures와의 전략적 파트너십 → 투자자 네트워크 확장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-slideUp text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Join the Journey</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            삶을 바꿀 기회는 언제나 급격한 변화 속에서 탄생합니다.<br />
            CREAI+IT에서, 그 기회를 움켜쥐고 새로운 가치를 만들어나갈<br />
            주인공이 되어보세요.
          </p>
          <a
            href="/join"
            className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 text-black text-xl font-semibold px-12 py-5 rounded-xl shadow-lg hover:from-sky-700 hover:to-blue-800 transition-all duration-300"
          >
            지원하기
          </a>
        </section>
      </div>
    </div>
  );
}
