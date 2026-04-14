import Link from "next/link";

export const metadata = {
  title: "Projects | 양세빈의 아카이브",
  description: "컴퓨터 소프트웨어 공학부 과제 및 프로젝트",
};

const PROJECTS = [
  {
    id: 1,
    title: "Terminal Configurator",
    description: "C언어 심화 과제로 진행한 커스텀 터미널입니다. 파일 시스템 조작과 프로세스 관리 사이클을 구현했습니다.",
    tags: ["C", "System OS"],
    icon: "terminal",
  },
  {
    id: 2,
    title: "Student Grade Backend",
    description: "Python 딕셔너리와 JSON을 활용하여 대학 성적 데이터를 효율적으로 구조화하고 저장하는 미니 프로그램입니다.",
    tags: ["Python", "Backend"],
    icon: "database",
  },
  {
    id: 3,
    title: "Personal Portfolio System",
    description: "HTML과 순수 Vanilla CSS만을 이용해 기본기 향상에 집중한 반응형 개인 포트폴리오 웹사이트입니다.",
    tags: ["Web", "Vanilla CSS"],
    icon: "web",
  }
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-apple-text mb-4">프로젝트</h1>
        <p className="text-apple-textMute text-lg font-medium max-w-2xl mx-auto">
          소프트웨어 전공 지식을 코드로 증명해나가는 과정을 아카이빙합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project) => (
          <article key={project.id} className="bg-white rounded-[2rem] p-8 border border-apple-border/40 hover:shadow-apple transition-all duration-300 flex flex-col h-full group">
            <div className="mb-8 w-16 h-16 bg-apple-gray flex items-center justify-center rounded-2xl text-apple-text group-hover:bg-apple-blue group-hover:text-white transition-colors duration-300 shadow-sm">
              <span className="material-symbols-outlined text-[32px]">{project.icon}</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-apple-text tracking-tight">
              {project.title}
            </h2>
            
            <p className="text-apple-textMute text-[15px] font-medium flex-grow mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="bg-apple-gray text-apple-textMute text-[11px] px-2.5 py-1 rounded-full font-bold">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link href="#" className="inline-flex items-center gap-1.5 text-apple-blue font-semibold text-sm group-hover:gap-2.5 transition-all mt-auto pt-5 border-t border-apple-border/30">
              코드 살펴보기 <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
