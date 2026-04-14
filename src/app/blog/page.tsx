import Link from "next/link";
import { BLOG_POSTS } from "./data";

export const metadata = {
  title: "Blog | 양세빈의 블로그",
  description: "소프트웨어 공학 전공 공부 기록과 개인 끄적임들",
};

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 border-b border-outline-variant pb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">블로그 아카이브</h1>
        <p className="text-on-surface-variant text-lg">
          제가 공부하고 배운 것들을 정리하는 기록 공간입니다. 총 {BLOG_POSTS.length}개의 포스트가 있습니다.
        </p>
      </div>

      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="group bg-white rounded-xl border border-outline-variant p-6 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
              <h2 className="text-2xl font-bold text-on-surface group-hover:text-primary-600 transition-colors">
                <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0 relative">
                  {post.title}
                </Link>
              </h2>
              <time className="text-sm text-on-surface-variant font-mono whitespace-nowrap">
                {post.date}
              </time>
            </div>
            
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-surface-dim text-on-surface-variant text-xs px-2 py-1 rounded border border-outline-variant font-mono">
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-on-surface-variant leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
