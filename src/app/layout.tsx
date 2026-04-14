import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "양세빈의 아카이브",
  description: "소프트웨어 공학도 양세빈의 기술 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-apple-light text-apple-text flex flex-col min-h-screen">
        {/* Apple-style Glassmorphism Navbar */}
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-apple-border/50 transition-all duration-300">
          <div className="flex justify-between items-center px-4 md:px-8 h-14 w-full max-w-6xl mx-auto">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-apple-text text-white rounded-lg flex items-center justify-center group-hover:bg-apple-blue transition-colors">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-apple-text group-hover:text-apple-blue transition-colors">SEBIN</span>
            </Link>
            <nav className="flex gap-5 md:gap-8 items-center text-xs md:text-sm font-medium tracking-wide">
              <Link className="text-apple-text hover:text-apple-blue transition-colors" href="/blog">블로그</Link>
              <Link className="text-apple-text hover:text-apple-blue transition-colors" href="/projects">프로젝트</Link>
              <Link className="text-apple-text hover:text-apple-blue transition-colors" href="/contact">연락처</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-4xl mx-auto pt-24 pb-20 px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-apple-gray border-t border-apple-border/50 py-12 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 w-full max-w-4xl mx-auto gap-4">
            <div className="text-center md:text-left">
              <Link href="/" className="font-semibold text-apple-text group hover:text-apple-blue transition-colors mb-2 inline-flex items-center gap-1">
                SEBIN's Archive
              </Link>
              <p className="text-apple-textMute text-xs mb-1">소프트웨어 공학 전공 대학생의 성장을 기록합니다.</p>
              <p className="text-apple-textMute text-[10px] mt-4">
                Copyright © {new Date().getFullYear()} Yang Se-bin. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-apple-text border border-apple-border/50 hover:border-apple-blue hover:text-apple-blue transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">code</span>
              </a>
              <Link href="/contact" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-apple-text border border-apple-border/50 hover:border-apple-blue hover:text-apple-blue transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">mail</span>
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
