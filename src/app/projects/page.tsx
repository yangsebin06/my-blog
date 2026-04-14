import Link from "next/link";

export const metadata = {
  title: "Hardware_Fusion | NEURAL_MONOLITH",
  description: "Showcase of my university projects and personal coding challenges.",
};

const PROJECTS = [
  {
    id: 1,
    title: "Terminal Configurator",
    description: "C언어 기초 과제로 진행한 간단한 터미널 시뮬레이터 애플리케이션입니다. 기본적인 파일 시스템 조작 명령어를 구현해 보았습니다.",
    tags: ["C", "Linux", "OS"],
    link: "#",
    icon: "terminal",
  },
  {
    id: 2,
    title: "Student Grade Backend",
    description: "Python을 활용하여 데이터를 입력받고 구조화하여 파일로 저장하는 미니 성적 관리 프로그램입니다.",
    tags: ["Python", "Data Structure"],
    link: "#",
    icon: "database",
  },
  {
    id: 3,
    title: "First Portfolio System",
    description: "HTML, CSS 파운데이션 수업을 듣고 처음으로 만들어 본 순수 Vanilla 웹사이트입니다.",
    tags: ["HTML", "Vanilla CSS"],
    link: "#",
    icon: "public",
  }
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="flex items-end justify-between mb-16 border-b border-outline-variant/20 pb-8 relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant/20 rounded-sm mb-4">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono text-secondary tracking-widest uppercase">Hardware_Fusion // Projects</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-on-surface">Projects Library</h1>
          <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest mt-2 block">대학 생활 동안 진행한 과제와 개인 프로젝트</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <article key={project.id} className="group relative overflow-hidden bg-surface-container-low rounded-lg p-6 border border-outline-variant/10 hover:border-primary/50 transition-colors flex flex-col h-full">
            <div className="mb-6 w-12 h-12 bg-[#1C1B1B] border border-outline-variant/20 flex items-center justify-center rounded-md text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">{project.icon}</span>
            </div>
            
            <h2 className="font-headline text-2xl font-bold mb-3 text-on-surface">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="bg-secondary-container/10 text-secondary text-[10px] px-2 py-0.5 font-mono uppercase rounded-sm border border-secondary/20">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-on-surface-variant text-sm flex-grow mb-8">
              {project.description}
            </p>
            
            <Link href={project.link} className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest group-hover:gap-4 transition-all mt-auto border-t border-outline-variant/10 pt-4">
              View Repository <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
