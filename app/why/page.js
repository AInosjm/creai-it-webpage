// app/why/page.js
export default function WhyPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-slideUp">Why CREAI+IT</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-slideUp delay-100">
            LLM 중심의 Generative AI가 만들어내는 격변의 시대,<br />
            기술적 역량과 사업적 역량을 결합하여<br />
            실질적인 가치를 창출하는 실천형 학회입니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">변화의 속도, 변화의 기회</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-sky-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">급격한 기술 발전</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  GPT-4 공개 이후, 불과 몇 개월 만에 산업 현장 곳곳이 변화했습니다.
                </p>
                <p className="text-gray-600">
                  이 변화는 멈추지 않고 있으며, 그 속도는 더욱 가속화되고 있습니다.
                </p>
                <p className="text-gray-600">
                  최근에는 o-series (reasoning model) 또한 공개되며 다시 한번 발전의 속도가 재점화되고 있습니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-sky-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">진지한 접근</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  대부분의 단체 혹은 개인이 LLM에 대한 단편적 관심에 그치는 반면, 우리는 이 변화를 진지하게 받아들입니다.
                </p>
                <p className="text-gray-600">
                  동일한 기술도, 활용 방식에 따라 전혀 다른 성과가 나올 수 있습니다. 또한, 이 변화는 이전의 블록체인 같은 기술처럼 반짝할 기술이 아닌, 세상을 바꾸는 기술 입니다.
                </p>
                <p className="text-gray-600">
                  꼭 창업을 하지 않더라도, LLM Native가 되는 것은 누구에게나 필요하며 중요합니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-sky-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">실질적 접근</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  LLM을 단순히 프롬프팅 하는 것에서 그치지 않습니다.
                </p>
                <p className="text-gray-600">
                  LLM System을 어떻게 구현할지를 고민하고, 실제로 구현하는 경험을 제공합니다. 
                </p>
                <p className="text-gray-600">
                  단순 구현에서 나아가, 실제 시장에서 LLM이 어떤 가치를 창출할 수 있는지 고민하며 실제 BM 설계 및 프로덕트를 개발하는 경험을 제시합니다. 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">핵심 가치의 실천</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Edge Tech</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">최신 기술 실습</h4>
                  <ul className="space-y-3 text-charcoal">
                    <li>• OpenAI API, LangChain, Llamaindex 등 최신 스택 학습</li>
                    <li>• LLMOps 아키텍처 설계 및 구현</li>
                    <li>• Langfuse 기반 모델 모니터링</li>
                  </ul>
                </div>
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">트렌드 추적</h4>
                  <ul className="space-y-3 text-charcoal">
                    <li>• 산업 현장의 최신 도구 실습</li>
                    <li>• 기술 트렌드 상시 모니터링</li>
                    <li>• 새로운 기회 선제적 발굴</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Sensitivity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">시장 가치 발굴</h4>
                  <ul className="space-y-3 text-charcoal">
                    <li>• 고객/사용자 관점의 인사이트 도출</li>
                    <li>• 린스타트업 방법론 실천</li>
                    <li>• MVP 테스트 및 피드백 수렴</li>
                  </ul>
                </div>
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">통합적 사고</h4>
                  <ul className="space-y-3 text-charcoal">
                    <li>• 기술과 비즈니스의 결합</li>
                    <li>• 문제 발견과 해결책 도출</li>
                    <li>• 가치 창출 감각 체화</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Value Creation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">Zero to One</h4>
                  <p className="text-charcoal">
                    아이디어 발굴부터 시장 검증까지, 실제 창업 프로세스를 경험합니다.
                  </p>
                </div>
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">실전 프로젝트</h4>
                  <p className="text-charcoal">
                    팀 프로젝트와 외부 피드백을 통해 아이디어를 현실화합니다.
                  </p>
                </div>
                <div className="pl-6 border-l-4 border-sky-500">
                  <h4 className="text-xl font-semibold mb-4">지속적 성장</h4>
                  <p className="text-charcoal">
                    창업 경진대회, 투자 유치 등 실질적 성과로 이어집니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-slideUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">독보적 성과와 활동</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-sky-600">24-1기</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• 총 1,500만원 상당의 지원금 확보</li>
                <li>• VC, Engineer, CEO 등 5회의 연사 초청</li>
                <li>• 3개 팀 창업 활동 진행 중</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 bg-sky-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl text-sky-600">24-2기</span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• 왕중왕전 창업경진대회 수상</li>
                <li>• 2개 팀 시드 투자 검토 단계</li>
                <li>• Y-Ventures와의 전략적 파트너십 구축</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="animate-slideUp text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Join CREAI+IT</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            혼자서는 얻기 어려운 귀중한 경험,<br />
            함께라면 LLM과 Generative AI의 무한한 가능성을<br />
            실질적 가치로 바꿔낼 수 있습니다.
          </p>
          <a
            href="/join"
            className="inline-block bg-navy hover:bg-sky-900 text-white font-bold py-4 px-8 rounded-xl transition-colors"
          >
            지원하기
          </a>
        </section>
      </div>
    </div>
  );
}
