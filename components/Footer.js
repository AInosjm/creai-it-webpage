// components/Footer.js
import Image from "next/image";
import logo from "../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-navy mt-16">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image src={logo} alt="CREAI+IT Logo" width={45} height={45} className="object-contain" />
              <span className="text-2xl font-bold text-white">CREAI+IT</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              연세대학교 AI/IT 창업 학회 CREAI+IT은 최신 기술을 이해하고 활용하여 
              혁신적인 가치를 창출하는 것을 목표로 합니다.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:yonsei.creaiit@gmail.com" className="text-gray-400 hover:text-sky-400 transition-colors">
                  yonsei.creaiit@gmail.com
                </a>
              </li>
              <li className="text-gray-400">서울특별시 서대문구 연세로 50</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CREAI+IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
