import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "양세빈의 블로그",
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
      <body className="bg-surface-dim text-on-surface flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant clean-shadow">
          <div className="flex justify-between items-center px-6 h-16 w-full max-w-5xl mx-auto">
            <Link href="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-600 outline-none">code</span>
              <span className="text-xl font-bold text-on-surface tracking-tight">SEBIN's LOG</span>
            </Link>
            <nav className="flex gap-6 items-center text-sm font-medium">
              <Link className="text-on-surface-variant hover:text-primary-600 transition-colors" href="/blog">블로그</Link>
              <Link className="text-on-surface-variant hover:text-primary-600 transition-colors" href="/projects">프로젝트</Link>
              <Link className="text-on-surface-variant hover:text-primary-600 transition-colors" href="/contact">연락처</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full max-w-5xl mx-auto pt-10 pb-20 px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-outline-variant py-10 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 w-full max-w-5xl mx-auto gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg text-on-surface mb-1">양세빈의 블로그</h3>
              <p className="text-on-surface-variant text-sm">소프트웨어 공학도 양세빈의 기술 아카이브입니다.</p>
            </div>
            <div className="text-on-surface-variant text-sm">
              © {new Date().getFullYear()} Yang Se-bin. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
