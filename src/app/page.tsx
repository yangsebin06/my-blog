import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>Hello, I'm a Future Software Engineer</h1>
        <p className={styles.subtitle}>
          공학 3계열 컴퓨터 소프트웨어 전공 신입생.
          배우고 경험한 모든 것을 기록하며 성장해 나가는 공간입니다.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/projects" className={styles.primaryButton}>
            View Projects
          </Link>
          <Link href="/blog" className={styles.secondaryButton}>
            Read Blog
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={`glass-panel ${styles.card}`}>
          <h3 className={styles.cardTitle}>🌱 열정적인 신입생</h3>
          <p>
            올해 컴퓨터 소프트웨어 전공으로 입학하여 프로그래밍의 기초부터 탄탄히 다져가고 있습니다. 
            단순히 코드를 짜는 것을 넘어, 사람들이 편리하게 사용할 수 있는 소프트웨어를 만드는 것이 목표입니다.
          </p>
          <p>
            현재 <strong>C 언어</strong>, <strong>Python</strong> 그리고 <strong>웹 개발 기초(HTML/CSS/JS)</strong>에 관심을 가지고 학습 중입니다.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Categories</h2>
        <div className={styles.grid}>
          <div className={`glass-panel ${styles.card}`}>
            <h3 className={styles.cardTitle}>📚 학습 노트</h3>
            <p>전공 과목을 들으며 배운 내용들과 따로 공부하는 기술들을 정리하는 공간입니다.</p>
            <Link href="/blog">자세히 보기 &rarr;</Link>
          </div>
          
          <div className={`glass-panel ${styles.card}`}>
            <h3 className={styles.cardTitle}>💡 토이 프로젝트</h3>
            <p>1학년의 패기로 도전하는 작고 소중한 프로젝트들의 기록입니다. 실패도 성공도 모두 담습니다.</p>
            <Link href="/projects">자세히 보기 &rarr;</Link>
          </div>
          
          <div className={`glass-panel ${styles.card}`}>
            <h3 className={styles.cardTitle}>Algorithm</h3>
            <p>자료구조와 알고리즘 공부 기록. 백준, 프로그래머스 등의 문제 풀이 과정을 기록합니다.</p>
            <Link href="/blog">자세히 보기 &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
