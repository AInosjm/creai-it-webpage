export default function FAQPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-white mb-6 animate-slideUp">Frequently Asked Questions</h1>
          <p className="max-w-3xl mx-auto text-xl text-white/90 font-light animate-slideUp delay-100">
            CREAI+IT에 대한 궁금증을 해소해드립니다
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI/ML 배경지식이 없어도 참여할 수 있나요?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  AI/ML 배경지식이 없다면 오히려 더욱 참여를 권장드립니다. 현재 AI 기술, 특히 LLM의 발전은 전례 없는 속도로 산업 전반에 변화를 가져오고 있습니다. 실제로 미국 기업의 23.5%가 이미 AI로 인한 인력 대체를 경험했으며, 이는 시작에 불과합니다.
                  <br /><br />
                  CREAI+IT는 AI에 대한 이해부터 실제 활용까지, 체계적인 커리큘럼을 통해 여러분의 AI 역량을 구축하는 것을 돕습니다. AI 시대에 뒤처지지 않기 위해서는 지금이라도 시작해야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">프로그래밍 실력이 부족한데 참여할 수 있을까요?</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Python 기초 문법을 이해하고 IDE를 사용해본 경험이 있다면 충분히 참여 가능합니다. CREAI+IT는 다음과 같은 지원 체계를 운영합니다:
                  <br /><br />
                  • 보충 스터디 프로그램 운영<br />
                  • 멘토링 시스템<br />
                  • 단계별 학습 자료 제공<br />
                  <br />
                  다만, 프로그래밍을 전혀 접해보지 않으신 분들은 기초적인 Python 학습 후 지원을 권장드립니다. 열정과 학습 의지가 있다면, 추가 학습을 감수하고서라도 도전하실 것을 환영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
