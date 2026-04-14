import Link from "next/link";

export const metadata = {
  title: "Projects | 양세빈의 블로그",
  description: "소프트웨어 공학 전공 프로젝트 및 과제 결과물",
};

const PROJECTS = [
  {
    id: 1,
    title: "Terminal Configurator",
    description: "C언어 심화 과제로 진행한 커스텀 터미널 시뮬레이터입니다. 파일 시스템 조작 및 프로세스 관리의 기본적인 흐름을 구현해 보았습니다.",
    tags: ["C", "Linux", "OS"],
    link: "#",
    icon: "terminal",
  },
  {
    id: 2,
    title: "Student Grade Backend",
    description: "Python을 활용하여 대학 성적 데이터를 입력받고 구조화하여 JSON 파일로 관리하는 학사 관리 미니 프로그램입니다.",
    tags: ["Python", "Data Structure"],
    link: "#",
    icon: "database",
  },
  {
    id: 3,
    title: "Personal Portfolio System",
    description: "HTML, CSS 기본기를 탄탄하게 다지기 위해 프레임워크 없이 순수 Vanilla 환경에서 구현한 반응형 포트폴리오 사이트입니다.",
    tags: ["HTML", "Vanilla CSS", "UI/UX"],
    link: "#",
    icon: "web",
  }
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12 border-b border-outline-variant pb-8 text-center md:text-left">
        <div className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4 border border-primary-100">
          💻 포트폴리오
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 tracking-tight">프로젝트 & 과제</h1>
        <p className="text-on-surface-variant text-lg">전공 수업을 들으며 진행한 의미 있는 프로젝트들과 개인 토이 프로젝트들을 아카이빙합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <article key={project.id} className="bg-white rounded-2xl p-6 border border-outline-variant hover:shadow-lg transition-all flex flex-col h-full group">
            <div className="mb-6 w-14 h-14 bg-primary-50 border border-primary-100 flex items-center justify-center rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">{project.icon}</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-on-surface">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="bg-surface-dim text-on-surface-variant text-xs px-2 py-1 rounded border border-outline-variant font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-on-surface-variant text-sm flex-grow mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <Link href={project.link} className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all mt-auto pt-4 border-t border-outline-variant">
              자세히 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
