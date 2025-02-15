// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky/20 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-xl font-bold text-navy">CREAI+IT</p>
          <p className="text-sm text-charcoal">Where Technology Turns Into Value</p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:info@creaiit.org" className="text-charcoal hover:text-sky transition-colors">문의</a>
          <a href="#" className="text-charcoal hover:text-sky transition-colors">개인정보처리방침</a>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-charcoal/70">
        © {new Date().getFullYear()} CREAI+IT. All rights reserved.
      </div>
    </footer>
  );
}
