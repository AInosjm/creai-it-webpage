'use client'

export default function ProfessionalPhilosophy() {

  const philosophies = [
    {
      title: 'Quick Adaptation',
      subtitle: '빠른 적응',
      description: '오늘의 최첨단은 내일의 구식입니다. 하루에도 수백 개의 모델과 논문이 쏟아지는 시대, 우리는 그 빠른 흐름을 지속적으로 학습하고 추적하여 남들보다 한 발 앞서 나갑니다.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      metrics: '24h 트렌드 추적'
    },
    {
      title: 'Sensitivity',
      subtitle: '민감성',
      description: '변화를 읽지 못하면 아무리 좋은 기술도 무용지물입니다. 우리는 최신 AI 지식뿐 아니라 시장 동향과 사용자 니즈를 예민하게 관찰하고 분석합니다.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      metrics: '시장 분석 역량'
    },
    {
      title: 'Value Creation',
      subtitle: '가치 창출',
      description: 'Lean StartUp 방법론을 기반으로 아이디어를 빠르게 검증하고 실패를 통해 배웁니다. 이 과정에서 쌓인 경험은 실질적인 가치 창출로 이어집니다.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      metrics: '실전 창업 경험'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Professional and Minimal */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
              Our Philosophy
            </span>
            <div className="h-px w-12 bg-slate-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            혁신을 만들어가는 <span className="font-extrabold">철학</span>
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            기술과 가치를 연결하는 우리만의 방법론
          </p>
        </div>

        {/* Philosophy Cards - Clean and Professional */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {philosophies.map((philosophy, index) => (
            <div
              key={philosophy.title}
              className="group relative"
            >
              <div className="bg-white border border-slate-200 p-8 h-full transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                  0{index + 1}
                </div>

                {/* Icon - Simplified */}
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded flex items-center justify-center mb-6">
                  {philosophy.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {philosophy.title}
                </h3>
                <p className="text-sky-600 font-semibold text-sm uppercase tracking-wide mb-4">
                  {philosophy.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {philosophy.description}
                </p>

                {/* Metric - Clean Badge */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {philosophy.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Section - Sophisticated Dark Card */}
        <div className="bg-slate-900 p-12 md:p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              기술이 <span className="font-bold">가치</span>가 되는 곳
            </h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              우리는 AI를 이해하고 활용하여 경계를 뛰어넘는 혁신을 추구합니다.
              기술에 대한 깊은 이해를 바탕으로, 빠르게 변화하는 시장에서 새로운 기회를 포착합니다.
            </p>
          </div>

          {/* Key Points - Minimal Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: '기술 이해', 
                desc: 'AI의 가능성과 한계를 정확히 파악',
                number: '01'
              },
              { 
                title: '빠른 실행', 
                desc: '아이디어를 신속하게 구현하고 검증',
                number: '02'
              },
              { 
                title: '가치 창출', 
                desc: '실질적인 비즈니스 가치로 전환',
                number: '03'
              }
            ].map((point) => (
              <div
                key={point.title}
                className="text-center"
              >
                <div className="text-4xl font-extralight text-sky-500/30 mb-4">
                  {point.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{point.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Clean and Simple */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              함께 혁신을 <span className="font-extrabold">현실</span>로 만들어갈
              <br />
              <span className="text-gradient-brand font-extrabold">4기</span>를 기다립니다
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              AI의 미래를 설계하고, 실제 가치를 창출하며, 
              <br className="hidden md:block" />
              세상을 변화시킬 준비가 되셨나요?
            </p>
            <a
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all"
            >
              지원하기
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}