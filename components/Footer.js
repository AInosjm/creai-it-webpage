// components/Footer.js
import Image from "next/image";
import logo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-navy mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image src={logo} alt="CREAI+IT Logo" width={40} height={40} className="object-contain sm:w-[45px] sm:h-[45px]" />
              <span className="text-xl sm:text-2xl font-bold text-white">CREAI+IT</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              연세대학교 AI/IT 창업 학회 CREAI+IT은 최신 기술을 이해하고 활용하여 
              혁신적인 가치를 창출하는 것을 목표로 합니다.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="mailto:yonsei.creaiit@gmail.com" className="text-gray-400 hover:text-sky-400 transition-colors text-sm sm:text-base break-all">
                  yonsei.creaiit@gmail.com
                </a>
              </li>
              <li>
                <a href="http://pf.kakao.com/_IEQbn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors text-sm sm:text-base">
                  카카오톡 채널
                </a>
              </li>
              <li>
                <a href="https://instagram.com/yonsei_creai_it" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors text-sm sm:text-base">
                  @yonsei_creai_it
                </a>
              </li>
              <li className="text-gray-400 text-sm sm:text-base">서울특별시 서대문구 연세로 50</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} CREAI+IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
