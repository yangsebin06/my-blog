import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEURAL_MONOLITH | SE Student",
  description: "A personal blog and portfolio of a Software Engineering Freshman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-surface text-on-surface">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl bg-gradient-to-b from-[#1C1B1B] to-[#131313] shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
          <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">memory</span>
              <Link href="/" className="text-2xl font-bold text-primary tracking-widest font-['Space_Grotesk'] uppercase">NEURAL_MONOLITH</Link>
            </div>
            <nav className="hidden md:flex gap-8 items-center font-['Space_Grotesk'] tracking-tighter uppercase">
              <Link className="text-primary hover:text-secondary transition-colors duration-300" href="/">Terminal</Link>
              <Link className="text-[#E5E2E1]/60 hover:text-secondary transition-colors duration-300" href="/blog">Core_Logic(Blog)</Link>
              <Link className="text-[#E5E2E1]/60 hover:text-secondary transition-colors duration-300" href="/projects">Hardware_Fusion</Link>
              <Link className="text-[#E5E2E1]/60 hover:text-secondary transition-colors duration-300" href="/contact">Status(Contact)</Link>
            </nav>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer active:scale-95 transition-transform">terminal</span>
            </div>
          </div>
        </header>

        {/* NavigationDrawer (Mobile Only) */}
        <aside className="fixed inset-y-0 left-0 z-40 h-full w-64 bg-[#1C1B1B] border-r border-[#434654]/15 hidden md:hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-surface-container-highest rounded-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">person</span>
              </div>
              <div>
                <div className="text-secondary font-mono text-sm uppercase">Lead_Architect</div>
                <div className="text-[#E5E2E1]/40 text-[10px] uppercase tracking-widest">v2.0.4-stable</div>
              </div>
            </div>
            <nav className="space-y-2 font-['Inter'] text-sm uppercase tracking-widest">
              <Link className="flex items-center gap-4 p-3 hover:bg-[#353534]/50 hover:text-primary transition-all duration-200" href="/">
                <span className="material-symbols-outlined">home</span> Terminal
              </Link>
              <Link className="flex items-center gap-4 p-3 text-[#E5E2E1]/40 hover:bg-[#353534]/50 hover:text-primary transition-all duration-200" href="/blog">
                <span className="material-symbols-outlined">article</span> Core_Logic
              </Link>
              <Link className="flex items-center gap-4 p-3 text-[#E5E2E1]/40 hover:bg-[#353534]/50 hover:text-primary transition-all duration-200" href="/projects">
                <span className="material-symbols-outlined">memory</span> Hardware_Fusion
              </Link>
              <Link className="flex items-center gap-4 p-3 text-[#E5E2E1]/40 hover:bg-[#353534]/50 hover:text-primary transition-all duration-200" href="/contact">
                <span className="material-symbols-outlined">error</span> Status
              </Link>
            </nav>
          </div>
        </aside>

        <main className="pt-16 neural-grid min-h-screen">
          {children}
        </main>

        <footer className="bg-[#131313] border-t border-[#434654]/10 py-16 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">memory</span>
                <span className="text-xl font-bold text-primary tracking-widest font-['Space_Grotesk'] uppercase">NEURAL_MONOLITH</span>
              </div>
              <div className="text-secondary font-['Roboto_Mono'] text-[10px] uppercase tracking-tighter opacity-80">
                © {new Date().getFullYear()} NEURAL_MONOLITH // HARDWARE_AI_FUSION
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-8 font-['Roboto_Mono'] text-[10px] uppercase">
                <a className="text-[#E5E2E1]/30 hover:text-primary transition-colors duration-300" href="#">GitHub</a>
                <a className="text-[#E5E2E1]/30 hover:text-primary transition-colors duration-300" href="#">Documentation</a>
                <a className="text-[#E5E2E1]/30 hover:text-primary transition-colors duration-300" href="#">Status</a>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-surface-container-high border border-outline-variant/10 rounded-sm cursor-pointer hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-sm">terminal</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-surface-container-high border border-outline-variant/10 rounded-sm cursor-pointer hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-surface-container-high border border-outline-variant/10 rounded-sm cursor-pointer hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-sm">code</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
