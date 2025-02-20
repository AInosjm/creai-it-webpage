export default function FAQPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-16 sm:py-32 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 sm:mb-6 animate-slideUp">Frequently Asked Questions</h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 font-light animate-slideUp delay-100">
            CREAI+IT에 대한 궁금증을 해소해드립니다
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
        <div className="space-y-6 sm:space-y-12">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">학회 활동은 어떤 방식으로 진행되나요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>전반기</strong>
                  <br />
                  정기 세션은 월요일(19:00 ~ 22:00)과 목요일(20:00 ~ 22:00)에 진행됩니다.
                  <br /><br />
                  • 월요일: 주요 개념과 기술 학습 및 창업 아이디어 발굴<br />
                  • 목요일: 보충 학습 및 실습 진행<br />
                  <br />
                  팀 활동 및 과제가 있는 경우, 목요일 세션을 활용하여 함께 진행할 예정입니다.
                </p>
                <br />
                <br />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>후반기</strong>
                  <br />
                  정기 세션은 월요일(19:00 ~ 22:00)과 목요일(20:00 ~ 22:00)에 진행됩니다.
                  <br /><br />
                  • 월요일: 린 스타트업 및 가치 창출을 위한 비즈니스 세션 + 외부 연사 초청 세션<br />
                  • 목요일: LLM 심화 세션<br />
                  <br />
                  팀 활동 및 과제가 있는 경우, 목요일 세션을 활용하여 함께 진행할 예정입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">한 학기 동안 진행되는 주요 프로젝트나 활동이 궁금해요!</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  • 전반기(중간고사 전): 생성형 AI 및 기타 AI 기술에 대한 이론 학습 + 실습(프로젝트 적용) + 아이디어 발굴<br />
                  • 후반기(중간고사 이후): 배운 지식을 바탕으로 팀을 이루어 비즈니스 아이템 기획 & 개발 + LLM 실무 적용 및 프로젝트 진행<br />
                  <br />
                  보다 자세한 내용은 "What We Do" 페이지에서 확인하실 수 있습니다!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">학회 활동은 어느 정도의 시간 투자가 필요한가요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  • 정기 세션: 주 6시간(MAX)<br />
                  • 팀 과제 및 프로젝트 수행: 주 8~12시간 이상 권장<br />
                  <br />
                  개인 공부 및 실습 시간을 고려하면 총 14~18시간 이상 투자하는 것이 이상적입니다.
                  (개인별 역량과 목표에 따라 차이가 있을 수 있습니다!)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">AI/ML 배경지식이 없어도 참여할 수 있나요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  AI/ML 배경지식이 없다면 오히려 더욱 참여를 권장드립니다. 현재 AI 기술, 특히 LLM의 발전은 전례 없는 속도로 산업 전반에 변화를 가져오고 있습니다. 실제로 미국 기업의 23.5%가 이미 AI로 인한 인력 대체를 경험했으며, 이는 시작에 불과합니다.
                  <br /><br />
                  CREAI+IT는 AI에 대한 이해부터 실제 활용까지, 체계적인 커리큘럼을 통해 여러분의 AI 역량을 구축하는 것을 돕습니다. AI 시대에 뒤처지지 않기 위해서는 지금이라도 시작해야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">프로그래밍 실력이 부족한데 참여할 수 있을까요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">지원 자격과 수료 요건은 어떻게 되나요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  지원 자격은 전공, 학년과 무관합니다! AI 및 창업에 관심이 있고, 적극적으로 배우고자 하는 열정이 있다면 누구든 환영합니다.
                  <br /><br />
                  수료를 위해서는 출석률과 과제 제출률이 일정 기준을 충족해야 합니다. 단, 지나치게 엄격한 기준은 아니며, 오리엔테이션에서 세부 기준을 안내할 예정입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">AI 관련 경험이 많으면 어떤 이점이 있나요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  CREAI+IT는 AI/IT 창업 학회인 만큼, 기본적인 AI 및 프로그래밍 지식이 있다면 학회 활동을 더욱 빠르게 따라갈 수 있습니다.
                  또한, 배운 기술을 실제 비즈니스 모델로 발전시키는 과정에 더욱 능동적으로 참여할 수 있습니다.
                  <br /><br />
                  AI 관련하여 이미 너무 많은걸 알아서 배울게 없다는 우려는 안하셔도 될 것이라고 자신 합니다. 활동을 거치며 경험하실 다양한 적용 프로젝트들 및 세션 내용은 알면 알수록 더 많은 도움이 될 것입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0">
                <span className="text-xl sm:text-2xl font-bold text-sky-600">Q</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">AI에 관심이 많지만 창업에는 관심이 없어요. (혹은 그 반대) 그래도 지원 가능할까요?</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  CREAI+IT는 AI/IT 창업 학회입니다.
                  따라서 AI 기술 활용 또는 창업 중 한 가지에도 관심이 없다면 학회 활동이 적합하지 않을 수 있습니다.
                  <br /><br />
                  하지만 관심이 있다면, 경험이 없어도 배울 수 있도록 체계적인 커리큘럼을 제공합니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
