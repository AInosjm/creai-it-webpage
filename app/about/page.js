// app/about/page.js
export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-white mb-6 animate-slideUp">Where Technology Turns Into Value</h1>
          <p className="max-w-3xl mx-auto text-xl text-white/90 font-light animate-slideUp delay-100">
            CREAI+IT는 최첨단 AI/IT 기술과 비즈니스 가치를 연결하는<br />
            집단입니다. 우리는 기술이 실제 가치를 창출할 때<br />
            진정한 혁신이 이루어진다고 믿습니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-8">Our Story</h2>
          <div className="text-xl text-gray-700 leading-relaxed space-y-6">
            <p>
              "기술이 실제 가치를 만들어내지 못한다면, 그것은 단지 놀잇감에 불과하다."
            </p>
            <p>
              이 믿음을 바탕으로 2022년, 현업 AI 엔지니어와 창업 전문가들이 한자리에 모였습니다.
              그들은 AI/IT 기술이 폭발적으로 발전하는 반면, 현실 시장에선 기술과 비즈니스가
              매끄럽게 접목되지 못하는 문제가 심각하다고 느꼈습니다.
            </p>
            <p>
              "가장 최신의 기술과 아이디어, 그리고 사업화 역량을 하나로 묶는 단체가 필요하다."<br />
              바로 그 문제 인식에서 CREAI+IT가 탄생하였습니다.
            </p>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-4">Technical Excellence</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                최첨단 AI 기술을 지속적으로 탐구하고 적용하여, 기술이 곧장 비즈니스로 이어질 수 있는 
                실질적인 솔루션을 개발합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-4">Inclusive Collaboration</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                개발, 기획, 디자인 등 다양한 배경의 전문가들이 모여 서로의 역량을 존중하며,
                균형 잡힌 시각으로 혁신을 만들어냅니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition border border-gray-100">
              <h3 className="text-2xl font-semibold text-navy mb-4">Impact-Driven</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                연구에만 그치지 않고, 실제로 사람들의 삶을 개선하고 시장에서 가치를 인정받는
                결과물 창출에 집중합니다.
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
                  <span className="text-2xl font-bold text-sky-600">2022</span>
                </div>
                <div className="md:col-span-3">
                  <p className="text-lg text-charcoal">현업 엔지니어, 스타트업 창업가들이 모여 학회 설립 → 첫 AI 세미나 개최</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center md:text-left">
                  <span className="text-2xl font-bold text-sky-600">2023</span>
                </div>
                <div className="md:col-span-3">
                  <p className="text-lg text-charcoal">첫 번째 내부 프로젝트로 LLM 기반 챗봇 MVP 구현 성공 → VC 데모데이 참가</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center md:text-left">
                  <span className="text-2xl font-bold text-sky-600">2024</span>
                </div>
                <div className="md:col-span-3">
                  <p className="text-lg text-charcoal">창업팀 2개 배출, 그 중 1개 팀 시드 투자 유치 성공</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
