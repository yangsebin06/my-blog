import styles from "./page.module.css";
import Link from "next/link";
import { BLOG_POSTS } from "./data";

export const metadata = {
  title: "Blog | SE Student Blog",
  description: "개발 공부 기록과 일상 이야기",
};

export default function Blog() {
  return (
    <div>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.subtitle}>배우고 느낀 점들을 정리하고 공유합니다.</p>
      
      <div className={styles.postList}>
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className={`glass-panel ${styles.postItem}`}>
            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <div className={styles.postMeta}>
              <time>{post.date}</time>
            </div>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
