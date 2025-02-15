// components/Header.js
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} alt="CREAI+IT Logo" width={45} height={45} className="object-contain" />
          <span className="text-2xl font-bold text-navy">CREAI+IT</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {["about", "why", "activities", "vision", "join", "network"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="text-lg font-medium text-charcoal hover:text-sky transition-colors"
            >
              {page === "about" ? "Who We Are" :
              page === "why" ? "Why CREAI+IT" :
              page === "activities" ? "What We Do" :
              page === "vision" ? "Our Vision" :
              page === "join" ? "Join" :
              page === "network" ? "Network" : page}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
