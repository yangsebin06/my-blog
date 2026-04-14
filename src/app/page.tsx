import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-40 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/50 to-[#131313] z-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant/20 rounded-sm mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="text-[10px] font-mono text-secondary tracking-widest uppercase">System Online // AI Architecture</span>
          </div>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-on-surface">
            FUTURE <span className="text-primary">SOFTWARE</span> ENGINEER<br/>
            <span className="text-secondary opacity-90">// AI &amp; ELECTRONICS</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            차세대 AI 시스템과 임베디드 하드웨어의 융합을 탐구하는 엔지니어링 블로그입니다. 
            코드와 회로 사이의 간극을 좁히는 기술적 통찰을 공유합니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
              View Repository
            </Link>
            <Link href="/blog" className="bg-transparent text-primary px-8 py-4 font-headline font-bold uppercase tracking-widest border border-outline-variant/20 rounded-sm hover:bg-primary/10 transition-all">
              Core Logic Docs
            </Link>
          </div>
        </div>
        {/* Background Visual Elements */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Bento Grid: Project & Research */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Project Card */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-lg p-1 border border-outline-variant/10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-[#1C1B1B]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-secondary font-mono text-[10px] uppercase mb-2 block tracking-widest">Active Project</span>
                <h3 className="font-headline text-3xl font-bold mb-4">Project: AI Hardware Fusion</h3>
                <p className="text-on-surface-variant max-w-lg mb-6">FPGA를 활용한 실시간 신경망 가속기 설계 및 엣지 컴퓨팅을 위한 커스텀 아키텍처 구현 사례.</p>
                <Link href="/projects" className="inline-flex items-center gap-2 text-secondary font-mono text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Documentation <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Latest Research Side Card */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low p-8 rounded-lg flex flex-col h-full border border-outline-variant/10">
              <span className="text-tertiary font-mono text-[10px] uppercase mb-4 tracking-widest">Latest Research</span>
              <h4 className="font-headline text-xl font-bold mb-4">Neural Architecture Search for IoT</h4>
              <p className="text-sm text-on-surface-variant mb-8 flex-grow">IoT 기기의 제한된 리소스 환경에서 최적의 성능을 발휘하는 신경망 구조 자동 탐색 연구.</p>
              <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-[10px] text-on-surface-variant/60 font-mono">2024.05.12</span>
                <span className="material-symbols-outlined text-primary">terminal</span>
              </div>
            </div>
          </div>

          {/* Engineering Insights Grid */}
          <div className="md:col-span-4 bg-[#1C1B1B] p-8 border border-outline-variant/10 rounded-lg">
            <span className="material-symbols-outlined text-secondary mb-4">bolt</span>
            <h4 className="font-headline text-lg font-bold mb-2 uppercase">Real-time RTOS</h4>
            <p className="text-sm text-on-surface-variant">임베디드 시스템에서의 실시간 데이터 처리와 멀티스레딩 최적화 기법.</p>
          </div>
          <div className="md:col-span-4 bg-[#1C1B1B] p-8 border border-outline-variant/10 rounded-lg">
            <span className="material-symbols-outlined text-primary mb-4">hub</span>
            <h4 className="font-headline text-lg font-bold mb-2 uppercase">Distributed AI</h4>
            <p className="text-sm text-on-surface-variant">분산 서버 환경에서의 대규모 언어 모델 서빙 프레임워크 구축 가이드.</p>
          </div>
          <div className="md:col-span-4 bg-[#1C1B1B] p-8 border border-outline-variant/10 rounded-lg">
            <span className="material-symbols-outlined text-tertiary mb-4">security</span>
            <h4 className="font-headline text-lg font-bold mb-2 uppercase">Kernel Security</h4>
            <p className="text-sm text-on-surface-variant">하드웨어 보안 모듈(HSM) 연동을 통한 리눅스 커널 수준의 암호화 처리.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack / Status Banner */}
      <section className="bg-surface-container-lowest py-16 border-y border-outline-variant/5">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex flex-nowrap items-center gap-12 font-mono text-[10px] text-on-surface-variant/40 tracking-[0.3em] uppercase overflow-x-auto scx">
            <span className="flex items-center gap-2 whitespace-nowrap"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> SYSTEM_STABLE</span>
            <span className="whitespace-nowrap">PYTHON // CPP // NEXTJS // TAILWIND</span>
            <span className="flex items-center gap-2 whitespace-nowrap"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> FULLSTACK_ENABLED</span>
            <span className="whitespace-nowrap">REACT // NEXTJS // VERILOG</span>
            <span className="flex items-center gap-2 whitespace-nowrap"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> CORE_TEMP_32C</span>
            <span className="whitespace-nowrap">LATENCY_OPTIMIZED // CLEAN_CODE</span>
          </div>
        </div>
      </section>
    </>
  );
}
