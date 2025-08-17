// app/layout.js
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import PremiumHeader from "../components/PremiumHeader";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: "CREAI+IT",
  description: "CREAI+IT – 최신 AI/IT 기술과 창업 가치를 연결하는 혁신적 학회",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CREAI+IT"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: "yes",
  themeColor: "#0f172a"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="bg-white min-h-screen flex flex-col">
        <PremiumHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
