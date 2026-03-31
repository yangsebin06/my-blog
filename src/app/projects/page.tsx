import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Projects | SE Student Blog",
  description: "Showcase of my university projects and personal coding challenges.",
};

const PROJECTS = [
  {
    id: 1,
    title: "🖥️ 나만의 터미널 환경 설정",
    description: "C언어 기초 과제로 진행한 간단한 터미널 시뮬레이터 애플리케이션입니다. 기본적인 파일 시스템 조작 명령어를 구현해 보았습니다.",
    tags: ["C", "Linux", "OS"],
    link: "#",
    icon: "💻",
  },
  {
    id: 2,
    title: "📊 학생 성적 관리 시스템",
    description: "Python을 활용하여 데이터를 입력받고 구조화하여 파일로 저장하는 미니 성적 관리 프로그램입니다.",
    tags: ["Python", "Data Structure"],
    link: "#",
    icon: "📝",
  },
  {
    id: 3,
    title: "🌐 첫 개인 포트폴리오 웹사이트",
    description: "HTML, CSS 파운데이션 수업을 듣고 처음으로 만들어 본 순수 Vanilla 웹사이트입니다.",
    tags: ["HTML", "Vanilla CSS"],
    link: "#",
    icon: "🚀",
  }
];

export default function Projects() {
  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.subtitle}>대학 생활 동안 진행한 과제와 개인 토이 프로젝트들을 아카이빙합니다.</p>
      
      <div className={styles.projectGrid}>
        {PROJECTS.map((project) => (
          <article key={project.id} className={`glass-panel ${styles.projectCard}`}>
            <div className={styles.projectImage}>
              {project.icon}
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <div className={styles.projectTags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <p className={styles.projectDesc}>{project.description}</p>
              <Link href={project.link} className={styles.projectLink}>
                View Details &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
